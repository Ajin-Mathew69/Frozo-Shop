import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCheckout } from "../api/createCheckout";
import { getProductByHandle } from "../api/getProductByHandle";
import Container from "../components/Layouts/Container";
import GridLoader from "../components/SkeletonLoaders/GridLoader";

export default function ProductDetail() {
  const { handle } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getProductByHandle(handle)
      .then((data) => {
        setProduct(data);
        // Set first image as default selected image
        if (data?.images?.edges?.length > 0) {
          setSelectedImage(data.images.edges[0].node.url);
        }
      })
      .catch((err) => console.error(err));
  }, [handle]);

  if (!product) return <GridLoader />;

  const images = product.images?.edges || [];
  const variantId = product.variants?.edges?.[0]?.node?.id;
  const price = product.variants?.edges?.[0]?.node?.price?.amount || "0.00";
  const isAvailable = product.variants?.edges?.[0]?.node?.availableForSale;

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
    <Container>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* ---------- Left Side: Image Gallery ---------- */}
        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden mb-4 h-96 lg:h-[600px]">
            <img
              src={selectedImage || "/placeholder.png"}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden h-24 cursor-pointer border-2 transition-all duration-300 ${
                  selectedImage === img.node.url ? "border-primary" : "border-transparent hover:border-primary"
                }`}
                onClick={() => setSelectedImage(img.node.url)}
              >
                <img src={img.node.url} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right Side: Product Info ---------- */}
        <div className="lg:w-1/2">
          <p
            className={`font-semibold px-3 py-1 rounded-full inline-block mb-3 ${
              isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isAvailable ? "In Stock" : "Out of Stock"}
          </p>

          <h2 className="text-4xl font-bold mb-3 text-gray-800">{product.title}</h2>

          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-5xl font-bold text-primary">${price}</span>
            <span className="text-2xl text-gray-400 line-through">$6.99</span>
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">Save 29%</span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          {isAvailable && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 text-xl font-bold"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="w-20 text-center py-3 border-x-2 border-gray-300 font-semibold text-lg">{quantity}</span>
                  <button
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 text-xl font-bold"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
                {/* <span className="text-gray-600">
                  Available: <span className="font-semibold text-gray-800">50 items</span>
                </span> */}
              </div>
            </div>
          )}

          {/* Add to Cart / Checkout */}
          <div className="flex gap-4">
            <button
              onClick={handleCheckout}
              disabled={!isAvailable}
              className={`flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition
    ${
      isAvailable
        ? "bg-primary text-white hover:bg-primary-dark cursor-pointer"
        : "bg-gray-300 text-gray-600 cursor-not-allowed"
    }
  `}
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart / Checkout
            </button>

            <button className="bg-secondary text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-secondary-dark transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
