import React from "react";

const Container = ({ children, bgColor = "bg-gray-100", className = "", ...rest }) => {
  return (
    <section className={`${bgColor} py-12 ${className}`} {...rest}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default Container;
