import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "./SkeletonLoaders/ProductCardSkeleton";


export default function ProductListingCard({ product, loading }) {
  if (loading || !product) return <ProductCardSkeleton />;
  // console.log("product:", product);

  const image = product.images?.edges?.[0]?.node?.url || "/placeholder.png";
  const price = product.variants?.edges?.[0]?.node?.price?.amount || "0.00";
  const category = product.category?.name || "";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-56">
        <img src={image} alt={product.title} className="h-full w-full object-cover rounded-t-md" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-1">Category: {category}</p>
        <p className="text-gray-400 text-sm font-bold mb-3">
          {product.variants?.edges?.[0]?.node?.unitPriceMeasurement?.quantityValue || ""}
          {(product.variants?.edges?.[0]?.node?.unitPriceMeasurement?.quantityUnit || "").toLowerCase()}
        </p>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            <Star className="w-6 h-6" stroke="white" fill="#facc15" />
            <Star className="w-6 h-6" stroke="white" fill="#facc15" />
            <Star className="w-6 h-6" stroke="white" fill="#facc15" />
            <Star className="w-6 h-6" stroke="white" fill="#facc15" />
            <Star className="w-6 h-6" stroke="white" fill="#facc15" />
          </div>
          <span className="text-sm text-gray-600 ml-2">(48)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <Link
            to={`/product/${product.handle}`}
            className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
