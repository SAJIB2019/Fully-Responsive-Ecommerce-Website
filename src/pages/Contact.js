import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import ContactComponent from "../components/ContactComponent";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactComponent />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Contact;
