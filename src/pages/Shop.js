import React from "react";
import Navbar from "../components/Navbar";
import ShopHeroSection from "../components/ShopHeroSection";
import AllShopProduct from "../components/AllShopProduct";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const Shop = () => {
  return (
    <div>
      <Navbar />
      <ShopHeroSection />
      <AllShopProduct />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Shop;
