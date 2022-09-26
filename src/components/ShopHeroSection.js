import React from "react";
import styled from "styled-components";

const ShopHeroMainSection = styled.div`
  background-image: url("images/banner/b1.jpg");
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
  span {
    color: red;
  }
`;

const ShopHeroSection = () => {
  return (
    <ShopHeroMainSection>
      <h2>Stay Home</h2>
      <p>
        Save more with coupons & up to <span>70%</span> OFF!!!
      </p>
    </ShopHeroMainSection>
  );
};

export default ShopHeroSection;
