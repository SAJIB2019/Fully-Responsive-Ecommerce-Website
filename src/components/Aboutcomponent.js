import React from "react";
import styled from "styled-components";

const AboutcomponentMain = styled.div`
  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const AboutHeroSection = styled.div`
  background-image: url("images/about/banner.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  position: relative;
  top: 6.8rem;
  h2 {
    color: white;
    font-size: 50px;
  }
  p {
    color: white;
    font-size: 25px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    h2 {
      color: white;
      font-size: 35px;
    }
    p {
      color: white;
      font-size: 15px;
    }
  }
`;
const AboutSingleSection = styled.div`
  display: flex;
  position: relative;
  top: 3rem;
  padding: 200px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0px;
  }
`;
const ImageSection = styled.div`
  width: 50%;
  margin-right: 40px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
    margin-right: 0px;
    img {
      position: relative;
      width: 100%;
      object-fit: center;
    }
  }
`;
const WriteSection = styled.div`
  width: 40%;
  padding-top: 15px;
  h4 {
    color: black;
    font-size: 30px;
    padding-bottom: 15px;
  }
  p {
    color: grey;
    font-size: 20px;
    padding: 20px 0;
    text-align: justify;
  }
  abbr {
    padding-bottom: 10px;
  }
`;
const AboutVideoSection = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    padding-bottom: 20px;
  }
  video {
    width: 70%;
    height: 100%;
    margin-top: 30px;
    border-radius: 20px;
    margin: 0 auto;
  }
`;

const Aboutcomponent = () => {
  return (
    <AboutcomponentMain>
      <AboutHeroSection>
        <h2>Know more</h2>
        <p>Know more about us and give us a feed back for our improve</p>
      </AboutHeroSection>
      <AboutSingleSection>
        <ImageSection>
          <img src="images/about/a6.jpg" alt="About" />
        </ImageSection>
        <WriteSection>
          <h4>Who we are</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            molestiae, officiis nihil, corporis ullam repellendus est dolorum
            eius similique, expedita placeat quas praesentium. Natus in
            consectetur necessitatibus. Quam, fugiat ipsam?
          </p>
          <abbr title="">
            Create stunning images with as much or as little control as you like
            thanks to a choice of basic and creative modes
          </abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Create stunning images with as much or as little control as you like
            thanks to a choice of basic and creative modes
          </marquee>
        </WriteSection>
      </AboutSingleSection>
      <AboutVideoSection>
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <video autoPlay muted loop src="images/about/1.mp4"></video>
      </AboutVideoSection>
    </AboutcomponentMain>
  );
};

export default Aboutcomponent;
