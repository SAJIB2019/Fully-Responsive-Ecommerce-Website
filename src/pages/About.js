import React from "react";
import Navbar from "../components/Navbar";
import Aboutcomponent from "../components/Aboutcomponent";
import Feature from "../components/Feature";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Aboutcomponent />
      <Feature />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default About;
