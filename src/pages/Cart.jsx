import { CircleCheck, RefreshCcw, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../components/Layouts/Container";
import CartSkeleton from "../components/SkeletonLoaders/CartSkeleton";
import { shopifyFetch } from "../lib/shopify";

export default function Cart() {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) return;

    const query = `
      query($cartId: ID!) {
        cart(id: $cartId) {
          id
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                     product {
                        id
                        title 
                      }
                    image { url }
                    priceV2 { amount currencyCode }
                  }
                }
              }
            }
          }
          estimatedCost {
            subtotalAmount { amount currencyCode }
            totalAmount { amount currencyCode }
          }
        }
      }
    `;
    const res = await shopifyFetch(query, { cartId });
    setCart(res.data.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (lineId, quantity) => {
    if (quantity < 1) return;

    const mutation = `
      mutation($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      product {
                        id
                        title 
                      }
                      image { url }
                      priceV2 { amount }
                    }
                  }
                }
              }
            }
            estimatedCost {
              subtotalAmount { amount }
              totalAmount { amount }
            }
          }
        }
      }
    `;

    await shopifyFetch(mutation, {
      cartId: cart.id,
      lines: [{ id: lineId, quantity }],
    });

    fetchCart();
  };

  const removeItem = async (lineId) => {
    const mutation = `
      mutation($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
            id
            checkoutUrl
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      image { url }
                      priceV2 { amount }
                    }
                  }
                }
              }
            }
            estimatedCost {
              subtotalAmount { amount }
              totalAmount { amount }
            }
          }
        }
      }
    `;

    await shopifyFetch(mutation, {
      cartId: cart.id,
      lineIds: [lineId],
    });

    fetchCart();
  };

  if (!cart) return <CartSkeleton />;

  const lineItems = cart.lines.edges.map((edge) => edge.node);

  // --- DYNAMIC CALCULATIONS ---
  const subtotal = parseFloat(cart.estimatedCost.subtotalAmount.amount);
  const itemCount = lineItems.reduce((acc, item) => acc + item.quantity, 0);
  const tax = subtotal * 0.1; // 10% example
  const shipping = 0; // Assuming free shipping
  const total = subtotal + tax + shipping;

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-xl text-gray-100">Review your items</p>
        </div>
      </section>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDE — CART ITEMS */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart Items</h2>
              <div className="space-y-4">
                {lineItems.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">Your cart is empty.</p>
                ) : (
                  lineItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-gray-200 rounded-lg"
                    >
                      {console.log("Cart item:", item)}
                      {/* IMAGE */}
                      <div className="w-full sm:w-24 h-40 sm:h-24 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-orange-300 flex-shrink-0">
                        <img
                          src={item.merchandise.image?.url || "/placeholder.png"}
                          alt={item.merchandise.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* DETAILS */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-gray-800 break-words">{item.merchandise.product.title}</h3>
                        <p className="text-gray-600 text-sm">1kg Pack</p>
                        <p className="text-primary font-bold text-xl mt-1">${item.merchandise.priceV2.amount}</p>
                      </div>
                      {/* QUANTITY CONTROLS */}
                      <div className="flex items-center justify-between sm:justify-center gap-3 w-full sm:w-auto">
                        <button
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-bold"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-semibold text-lg">{item.quantity}</span>
                        <button
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-bold"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      {/* PRICE & REMOVE */}
                      <div className="text-right w-full sm:w-auto">
                        <p className="font-bold text-xl text-gray-800">
                          ${(item.merchandise.priceV2.amount * item.quantity).toFixed(2)}
                        </p>
                        <button
                          className="text-red-500 hover:text-red-700 text-sm font-semibold mt-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — ORDER SUMMARY */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({itemCount} items)</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-secondary">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-gray-800">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <a
                href={cart.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition mb-4"
              >
                Proceed to Checkout
              </a>
              <div className="mt-8 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <CircleCheck className="w-6 h-6 mr-3 mt-1" stroke="white" fill="#2D7D2E" />
                  Secure Checkout
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-6 h-6 mr-3 mt-1" stroke="white" fill="#2D7D2E" />
                  Free shipping on orders over $50
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <RefreshCcw className="w-4 h-4 mr-3 mt-1 text-[#2D7D2E]" strokeWidth={2} />
                  Easy returns within 30 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
