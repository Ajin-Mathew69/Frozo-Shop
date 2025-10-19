import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold text-primary mb-4">Frozo</h3>
            <p class="text-gray-400">Your trusted source for premium frozen foods.</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <a href="index.html" class="text-gray-400 hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="products.html" class="text-gray-400 hover:text-primary transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" class="text-gray-400 hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" class="text-gray-400 hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Categories</h4>
            <ul class="space-y-2">
              <li>
                <a href="products.html" class="text-gray-400 hover:text-primary transition">
                  Vegetables
                </a>
              </li>
              <li>
                <a href="products.html" class="text-gray-400 hover:text-primary transition">
                  Fruits
                </a>
              </li>
              <li>
                <a href="products.html" class="text-gray-400 hover:text-primary transition">
                  Ready Meals
                </a>
              </li>
              <li>
                <a href="products.html" class="text-gray-400 hover:text-primary transition">
                  Snacks
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Newsletter</h4>
            <p class="text-gray-400 mb-4">Subscribe for updates and offers</p>
            <input
              type="email"
              placeholder="Your email"
              class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Frozo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
