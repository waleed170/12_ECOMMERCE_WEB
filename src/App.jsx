import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Electronics from "./components/Electronics";
import MensWear from "./components/MensWear";
import KidsWear from "./components/KidsWear";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login/Login"; // Import Login component
import SignUp from "./components/SignUp/SignUp"; // Import SignUp component
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <Element name="topProducts">
                  <TopProducts handleOrderPopup={handleOrderPopup} />
                </Element>
                <Banner />
                <Subscribe />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/menswear" element={<MensWear />} />
          <Route path="/kidswear" element={<KidsWear />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} /> {/* Add route for Login */}
          <Route path="/signup" element={<SignUp />} /> {/* Add route for SignUp */}
        </Routes>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
