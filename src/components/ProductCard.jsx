import { Link } from "react-router-dom";


export default function ProductCard({ product }) {
  console.log(product);

  const image = product.images?.edges?.[0]?.node?.url || "/placeholder.png";
  const price = product.variants?.edges?.[0]?.node?.price?.amount || "0.00";

  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-48">
        <img src={image} alt={product.title} className="h-full w-full object-cover rounded-t-md" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
        <p className="text-gray-400 text-sm font-bold mb-3">
          {product.variants?.edges?.[0]?.node?.unitPriceMeasurement?.quantityValue || ""}
          {(product.variants?.edges?.[0]?.node?.unitPriceMeasurement?.quantityUnit || "").toLowerCase()}
        </p>

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
