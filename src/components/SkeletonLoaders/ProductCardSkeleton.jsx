import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200 rounded-t-md"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 w-16 bg-gray-200 rounded"></div>
          <div className="h-8 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
