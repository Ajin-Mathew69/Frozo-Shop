import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-primary hover:text-primary-dark">
            Frozo
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
            <Link to="/products" className="hover:text-green-600">
              Products
            </Link>
            <Link to="/" className="hover:text-green-600">
              About
            </Link>
            <Link to="/" className="hover:text-green-600">
              Contact
            </Link>
          </div>

          {/* Desktop Cart */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/cart"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition flex items-center gap-2"
            >
              <ShoppingBag size={22} />
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          <Link to="/" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/" className="hover:text-green-600" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <div className="flex">
            <Link
              to="/cart"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag size={22} />
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
