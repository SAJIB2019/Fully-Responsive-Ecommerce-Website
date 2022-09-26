import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartProduct />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Cart;
