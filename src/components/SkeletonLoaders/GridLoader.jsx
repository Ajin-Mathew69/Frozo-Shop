import React from 'react'

const GridLoader = () => {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-8 animate-pulse">
      {/* Left Side (Image Skeleton) */}
      <div>
        <div className="bg-gray-200 rounded-xl w-full h-[400px]" />
      </div>

      {/* Right Side (Content Skeleton) */}
      <div className="space-y-4">
        <div className="bg-gray-200 h-5 w-24 rounded" /> {/* In Stock */}
        <div className="bg-gray-200 h-8 w-3/4 rounded" /> {/* Title */}
        <div className="bg-gray-200 h-6 w-20 rounded" /> {/* Price */}
        <div className="bg-gray-200 h-20 w-full rounded" /> {/* Description */}
        {/* Quantity Skeleton */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 h-8 w-8 rounded" />
          <div className="bg-gray-200 h-8 w-12 rounded" />
          <div className="bg-gray-200 h-8 w-8 rounded" />
        </div>
        {/* Button Skeleton */}
        <div className="bg-gray-200 h-10 w-48 rounded-lg" />
      </div>
    </div>
  );
}

export default GridLoader