import { CircleCheck, Star } from "lucide-react";
import React from "react";
import Container from "./Layouts/Container";

const WhyChoose = () => {
  return (
    <Container id="about-section">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose Frozo?</h2>
          <p className="text-gray-600 mb-4 text-lg">
            We provide the highest quality frozen foods, carefully selected and preserved to maintain maximum freshness and
            nutritional value.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CircleCheck className="w-6 h-6 mr-3 mt-1" stroke="white" fill="#2D7D2E" />

              <span className="text-gray-700">Premium quality products from trusted suppliers</span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="w-6 h-6 mr-3 mt-1" stroke="white" fill="#2D7D2E" />
              <span className="text-gray-700">Fast and reliable delivery to your doorstep</span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="w-6 h-6 mr-3 mt-1" stroke="white" fill="#2D7D2E" />
              <span className="text-gray-700">Competitive prices and regular discounts</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-white text-center">
            <h3 className="text-5xl font-bold mb-4">1000+</h3>
            <p className="text-xl mb-6">Happy Customers</p>
            <div className="flex justify-center space-x-2">
              <Star className="w-6 h-6" stroke="white" fill="#ffffff" />
              <Star className="w-6 h-6" stroke="white" fill="#ffffff" />
              <Star className="w-6 h-6" stroke="white" fill="#ffffff" />
              <Star className="w-6 h-6" stroke="white" fill="#ffffff" />
              <Star className="w-6 h-6" stroke="white" fill="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
