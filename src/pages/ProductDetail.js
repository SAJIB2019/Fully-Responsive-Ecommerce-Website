import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import FeatureProducts from "../components/FeatureProducts";
const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <FeatureProducts />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductDetail;
