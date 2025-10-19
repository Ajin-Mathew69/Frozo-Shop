import React from "react";

const GridLoader = () => {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-8 animate-pulse">
      {/* Left Side: Image Gallery */}
      <div>
        <div className="rounded-2xl bg-gray-200 h-96 lg:h-[600px] mb-4"></div>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-lg bg-gray-200 h-24"></div>
          ))}
        </div>
      </div>

      {/* Right Side: Product Info */}
      <div className="space-y-4">
        <div className="w-32 h-6 bg-gray-200 rounded-full"></div>
        <div className="w-3/4 h-10 bg-gray-200 rounded"></div>
        <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-300 rounded-lg">
            <div className="px-4 py-3 bg-gray-200 rounded-l"></div>
            <div className="w-20 py-3 bg-gray-200"></div>
            <div className="px-4 py-3 bg-gray-200 rounded-r"></div>
          </div>
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
        </div>
        {/* Add to Cart / Buttons */}
        <div className="flex gap-4">
          <div className="flex-1 h-12 bg-gray-200 rounded-xl"></div>
          <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default GridLoader;
