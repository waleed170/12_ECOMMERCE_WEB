import React from "react";
import { Link } from "react-router-dom";
import kjacketWear from "./png-transparent-columbia-sportswear-down-feather-jacket-columbia-kids-boy-jacket-blue-boy-hoodie.png";

const KidsWear = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Kids Wear</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Product Card */}
        <div className="border p-4 rounded-lg">
          <Link to="/product/3">
            <img src={kjacketWear} alt="Kids Winter Jacket" className="mb-2" />
          </Link>
          <h2 className="text-lg font-semibold">Kids Winter Jacket</h2>
          <p>Warm and cozy, Durable material, Available in various colors</p>
          <span className="text-primary font-bold">Rs. 799</span>
        </div>
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
};

export default KidsWear;
