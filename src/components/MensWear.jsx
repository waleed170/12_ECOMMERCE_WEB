import React from "react";
import { Link } from "react-router-dom";
import jacketImage from "./81aGYAHLOvL._AC_SL1500_.jpg";

const MensWear = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Mens Wear</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Product Card */}
        <div className="border p-4 rounded-lg">
          <Link to="/product/2">
            <img src={jacketImage} alt="Product 1" className="mb-2" />
          </Link>
          <h2 className="text-lg font-semibold">Stylish Jacket</h2>
          <p>High-quality material, Stylish design, Available in multiple sizes</p>
          <span className="text-primary font-bold">Rs. 999</span>
        </div>
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
};

export default MensWear;
