import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductListing from "../pages/ProductListing";
import Container from "./Layouts/Container";

const HeroSection = () => {
  return (
    <Container bgColor="bg-gradient-to-r from-primary to-secondary text-white" id="hero-section">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fresh Frozen Foods Delivered to Your Door</h1>
          <p className="text-xl mb-8 text-gray-100">
            Quality frozen products that preserve freshness and flavor. Shop our wide selection today!
          </p>
          <Link
            to="/products"
            className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition inline-block"
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center">
            <img src="/images/banner-image.jpg" alt="frozen food" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
