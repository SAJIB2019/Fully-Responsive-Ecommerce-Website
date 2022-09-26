import React from "react";
import styled from "styled-components";

const MainHeroSection = styled.div`
  background-image: url(./images/hero4.png);
  height: 90vh;
  width: 100%;
  background-position: top 25% right 0;
  background-size: cover;
  position: relative;
  top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 7rem;
`;

const H4 = styled.h4`
  padding: 10px 0;
  font-size: 20px;
`;
const H2 = styled.h2`
  padding: 10px 0;
  font-size: 40px;
`;
const H1 = styled.h1`
  color: #088178;
  font-size: 50px;
`;
const HeroButton = styled.button`
  background-image: url(./images/button.png);
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  color: #088178;
  padding: 14px 80px 14px 65px;
  font-size: 25px;
  font-weight: 700;
`;
const P = styled.p`
  padding: 10px 0;
  font-size: 20px;
  color: #c49d9d;
`;
const HeroSection = () => {
  return (
    <MainHeroSection>
      <H4>Trada-in-offer</H4>
      <H2>Super value deals</H2>
      <H1>On all products</H1>
      <P>Save more with coupons & up to 70% off!</P>
      <HeroButton>Shop Now</HeroButton>
    </MainHeroSection>
  );
};

export default HeroSection;
