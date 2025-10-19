import { MoveRight } from "lucide-react";
import React from "react";
import Container from "./Layouts/Container";

const ShopByCategorySection = () => {
  const categories = [
    {
      name: "Frozen Vegetables",
      description: "Fresh frozen vegetables packed with nutrients",
      image: "/images/frozen-veg.jpg",
      link: "/products",
    },
    {
      name: "Frozen Fruits",
      description: "Delicious frozen fruits for smoothies and desserts",
      image: "/images/frozen-fruit.jpg",
      link: "/products",
    },
    {
      name: "Ready Meals",
      description: "Quick and easy frozen meals for busy days",
      image: "/images/food.jpg",
      link: "/products",
    },
  ];
  return (
    <Container bgColor="bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="bg-gradient-to-br from-primary to-orange-400 h-48 flex items-center justify-center">
              <img src={category.image} alt={category.name} className="h-full object-cover w-full" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <a
                href={category.link}
                className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark group"
              >
                Explore
                <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ShopByCategorySection;
