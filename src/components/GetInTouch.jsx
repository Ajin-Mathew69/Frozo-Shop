import React from "react";
import Container from "./Layouts/Container";

const GetInTouch = () => {
  return (
    <Container id="contact-section">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mb-8 text-lg">Have questions? We're here to help!</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex justify-center items-center mx-auto mb-4">
              <img src="/images/mail.png" alt="mail" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600">support@frozo.com</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex justify-center items-center mx-auto mb-4">
              <img src="/images/phone.png" alt="phone" />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetInTouch;
