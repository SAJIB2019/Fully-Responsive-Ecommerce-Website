import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Feature";
import FeatureProducts from "../components/FeatureProducts";
import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import CallToAction from "../components/CallToAction";
import TextBanner from "../components/TextBanner";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature />
      <FeatureProducts />
      <Banner />
      <NewArrival />
      <CallToAction />
      <TextBanner />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
