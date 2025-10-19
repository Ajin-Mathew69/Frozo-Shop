import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductListing from "./pages/ProductListing";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:handle" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
    </Router>
  );
}
