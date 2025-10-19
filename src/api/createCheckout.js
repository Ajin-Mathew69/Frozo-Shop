import { shopifyFetch } from "../lib/shopify";

/**
 * Add product to Shopify cart.
 * Stores cartId in localStorage for persistence.
 *
 * @param {string} variantId - The ProductVariant ID (gid://shopify/ProductVariant/...)
 * @param {number} quantity - Quantity to add
 * @returns {object} cart
 */
export async function addToCart(variantId, quantity) {
  let cartId = localStorage.getItem("cartId");

  if (!cartId) {
    // Create new cart
    const mutation = `
      mutation cartCreate($lines: [CartLineInput!]!) {
        cartCreate(input: { lines: $lines }) {
          cart {
            id
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      priceV2 { amount, currencyCode }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const res = await shopifyFetch(mutation, {
      lines: [{ merchandiseId: variantId, quantity }],
    });

    if (res.data.cartCreate.userErrors.length > 0) {
      console.error("Shopify cartCreate userErrors:", res.data.cartCreate.userErrors);
      throw new Error(res.data.cartCreate.userErrors[0].message);
    }

    const cart = res.data.cartCreate.cart;
    localStorage.setItem("cartId", cart.id);
    return cart;
  } else {
    // Add items to existing cart
    const mutation = `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      priceV2 { amount, currencyCode }
                    }
                  }
                }
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const res = await shopifyFetch(mutation, {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    });

    if (res.data.cartLinesAdd.userErrors.length > 0) {
      console.error("Shopify cartLinesAdd userErrors:", res.data.cartLinesAdd.userErrors);
      throw new Error(res.data.cartLinesAdd.userErrors[0].message);
    }

    return res.data.cartLinesAdd.cart;
  }
}
