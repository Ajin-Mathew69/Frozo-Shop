import React, { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";
import Container from "../components/Layouts/Container";

import ProductListingCard from "../components/ProductListingCard";
import ProductCardSkeleton from "../components/SkeletonLoaders/ProductCardSkeleton";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-700">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" checked />
                  <span className="ml-2 text-gray-600">All Products</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" />
                  <span className="ml-2 text-gray-600">Vegetables</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" />
                  <span className="ml-2 text-gray-600">Fruits</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" />
                  <span className="ml-2 text-gray-600">Ready Meals</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-primary rounded focus:ring-primary" />
                  <span className="ml-2 text-gray-600">Snacks</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary" checked />
                  <span className="ml-2 text-gray-600">All Prices</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-600">Under $5</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-600">$5 - $10</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="price" className="w-4 h-4 text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-600">Over $10</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-700">Sort By</h3>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>
          </div>
        </aside>
        <main className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
              : products.map((product) => <ProductListingCard product={product} key={product.id} />)}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default ProductListing;
