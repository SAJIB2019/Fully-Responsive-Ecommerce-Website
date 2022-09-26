import React from "react";
import Navbar from "../components/Navbar";
import Blogging from "../components/Blogging";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const Blog = () => {
  return (
    <div>
      <Navbar />
      <Blogging />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Blog;
