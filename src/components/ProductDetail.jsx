import React from "react";
import { useParams } from "react-router-dom";

// Import product images
import tvImage from "./png-transparent-xiaomi-television-led-backlit-lcd-smart-tv-india-led-tv-television-display-advertising-india-thumbnail.png";
import jacketImage from "./81aGYAHLOvL._AC_SL1500_.jpg";
import kjacketWear from "./png-transparent-columbia-sportswear-down-feather-jacket-columbia-kids-boy-jacket-blue-boy-hoodie.png";

// Import other product images as needed

const products = {
  // Electronics products
  "1": {
    name: "Oktra 24″ Android Smart Sense HD LED TV OK 566 Series (K566S)",
    description: `• OKTRA 24" Android Smart Sense HD LED TV
                  • Smart TV with Android operating system
                  • Crisp HD display for immersive viewing experience
                  • Energy-efficient LED technology for vivid colors
                  • Compact size perfect for smaller spaces`,
    price: "Rs. 19,799",
    image: tvImage,
  },
  // MensWear products
  "2": {
    name: "Stylish Jacket",
    description: `• High-quality material
                  • Stylish design
                  • Available in multiple sizes`,
    price: "Rs. 999",
    image: jacketImage,
  },
  // KidsWear products
  "3": {
    name: "Kids Winter Jacket",
    description: `• Warm and cozy
                  • Durable material
                  • Available in various colors`,
    price: "Rs. 799",
    image: kjacketWear, // Replace with actual image
  },
  // Add more products as needed
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products[productId];

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleBuyNow = () => {
    alert(`Thank you for your purchase of ${product.name}!`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mb-4" />
      <p className="mb-4">{product.description}</p>
      <span className="text-primary font-bold text-xl mb-4 block">{product.price}</span>
      <button
        onClick={handleBuyNow}
        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetail;
