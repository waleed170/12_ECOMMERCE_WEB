import React from "react";
import { Link } from "react-router-dom";
import tvImage from "./png-transparent-xiaomi-television-led-backlit-lcd-smart-tv-india-led-tv-television-display-advertising-india-thumbnail.png";

const Electronics = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Electronics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="border p-4 rounded-lg">
          <Link to={`/product/1`}>
            <img src={tvImage} alt="Television" className="mb-2" />
          </Link>
          <h2 className="text-lg font-semibold">Oktra 24″ Android Smart Sense HD LED TV OK 566 Series (K566S)</h2>
          <p>• OKTRA 24" Android Smart Sense HD LED TV
             • Smart TV with Android operating system
             • Crisp HD display for immersive viewing experience
             • Energy-efficient LED technology for vivid colors
             • Compact size perfect for smaller spaces</p>
          <span className="text-primary font-bold">Rs. 19,799</span>
        </div>
        {/* Add more products here */}
      </div>
    </div>
  );
};

export default Electronics;
