import React from 'react'

const CartSkeleton = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="h-10 w-64 bg-white/30 rounded mb-4"></div>
          <div className="h-6 w-48 bg-white/20 rounded"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8 animate-pulse">
        {/* LEFT — CART ITEMS */}
        <div className="lg:w-2/3 bg-white rounded-xl shadow-md p-6">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>

          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg mb-4">
              {/* Image Placeholder */}
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>

              {/* Product Info */}
              <div className="flex-1 space-y-2">
                <div className="h-5 w-40 bg-gray-200 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-5 w-20 bg-gray-300 rounded mt-1"></div>
              </div>

              {/* Quantity Buttons */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <div className="w-12 h-5 bg-gray-200 rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
              </div>

              {/* Price */}
              <div className="text-right">
                <div className="h-5 w-20 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="lg:w-1/3 bg-white rounded-xl shadow-md p-6 sticky top-24">
          <div className="h-8 w-40 bg-gray-200 rounded mb-6"></div>

          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex justify-between items-center mb-4 last:border-t last:pt-4 border-gray-200">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}

          <div className="h-12 bg-gray-300 rounded-xl mt-6"></div>
        </div>
      </div>
    </>
  );
}

export default CartSkeleton