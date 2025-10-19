import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Frozo</h3>
            <p className="text-gray-400">Your trusted source for premium frozen foods.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition">
                  Ready Meals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition">
                  Snacks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates and offers</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
            />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Frozo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
