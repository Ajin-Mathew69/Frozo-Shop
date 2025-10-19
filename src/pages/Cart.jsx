import { CircleCheck, RefreshCcw, RefreshCw, Truck } from "lucide-react";
import Container from "../components/Layouts/Container";

export default function Cart() {
  return (
    <>
      <section class="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
          <p class="text-xl text-gray-100">Review your items</p>
        </div>
      </section>

      <Container>
        <div class="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div class="lg:w-2/3">
            <div class="bg-white rounded-xl shadow-md p-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Cart Items</h2>

              {/* Sample Cart Items */}
              <div class="space-y-4">
                {/* Item 1 */}
                <div class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <div class="bg-gradient-to-br from-primary to-orange-300 w-24 h-24 rounded-lg"></div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg text-gray-800">Mixed Vegetables</h3>
                    <p class="text-gray-600 text-sm">1kg Pack</p>
                    <p class="text-primary font-bold text-xl mt-1">$4.99</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <button class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-bold">
                      -
                    </button>
                    <span class="w-12 text-center font-semibold text-lg">2</span>
                    <button class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-bold">
                      +
                    </button>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-xl text-gray-800">$9.98</p>
                    <button class="text-red-500 hover:text-red-700 text-sm font-semibold mt-2">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

              <div class="space-y-4 mb-6">
                <div class="flex justify-between text-gray-600">
                  <span>Subtotal (6 items)</span>
                  <span class="font-semibold">$43.94</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span class="font-semibold text-secondary">FREE</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span class="font-semibold">$4.39</span>
                </div>
                <div class="border-t pt-4 flex justify-between text-gray-800">
                  <span class="text-xl font-bold">Total</span>
                  <span class="text-2xl font-bold text-primary">$48.33</span>
                </div>
              </div>

              {/* Contact Button */}
              <a
                href="index.html#contact"
                class="block w-full bg-primary text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition mb-4"
              >
                Checkout
              </a>

              {/* Features */}
              <div class="mt-8 space-y-3">
                <div class="flex items-center text-sm text-gray-600">
                  <CircleCheck className="w-6 h-6 mr-3 mt-1" stroke="white" fill="#2D7D2E" />
                  Secure Checkout
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <Truck className="w-6 h-6 mr-3 mt-1" stroke="white" fill="#2D7D2E" />
                  Free shipping on orders over $50
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <RefreshCcw className="w-6 h-6 mr-3 mt-1" />
                  Easy returns within 30 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
