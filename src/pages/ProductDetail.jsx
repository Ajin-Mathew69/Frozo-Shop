
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByHandle } from "../api/getProductByHandle";
import { createCheckout } from "../api/createCheckout";
import GridLoader from "../components/SkeletonLoaders/GridLoader";

export default function ProductDetail() {
  const { handle } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProductByHandle(handle).then(setProduct).catch(err => console.error(err));
  }, [handle]);

  if (!product) return <GridLoader />;

  const mainImage = product.images?.edges?.[0]?.node?.url || "/placeholder.png";
  const variantId = product.variants?.edges?.[0]?.node?.id;
  const price = product.variants?.edges?.[0]?.node?.price?.amount;

  const handleCheckout = async () => {
    try {
      const checkout = await createCheckout(variantId, quantity);
      window.location.href = checkout.webUrl;
    } catch (err) {
      console.error(err);
      alert("Checkout failed. See console for details.");
    }
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      {/* Left Side */}
      <div>
        <img src={mainImage} alt={product.title} className="rounded-xl w-full" />
      </div>

      {/* Right Side */}
      <div>
        <p className="text-green-600 font-semibold">In Stock</p>
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-lg text-gray-700 mb-3">${price}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Quantity */}
        <div className="flex items-center mb-4">
          <button
            className="border px-3 py-1 rounded-l"
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
          >-</button>
          <span className="border-t border-b px-4 py-1">{quantity}</span>
          <button
            className="border px-3 py-1 rounded-r"
            onClick={() => setQuantity(q => q + 1)}
          >+</button>
        </div>

        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
          Add to Cart / Checkout
        </button>
      </div>
    </div>
  );
}
