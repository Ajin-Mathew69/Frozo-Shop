import React from "react";

const ProductListing = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
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
              <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div class="bg-gradient-to-br from-primary to-orange-300 h-56"></div>
                <div class="p-5">
                  <h3 class="font-bold text-xl mb-2 text-gray-800">Mixed Vegetables</h3>
                  <p class="text-gray-600 text-sm mb-1">Category: Vegetables</p>
                  <p class="text-gray-500 text-sm mb-4">1kg Pack</p>
                  <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span class="text-sm text-gray-600 ml-2">(48)</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-3xl font-bold text-primary">$4.99</span>
                    <a
                      href="product-detail.html"
                      class="bg-secondary text-white px-5 py-2 rounded-lg hover:bg-secondary-dark transition"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
