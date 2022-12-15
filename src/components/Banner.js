import React from "react";
import styled from "styled-components";

const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-image: url("images/banner/b2.jpg");
  background-size: cover;
  background-position: center;
  h4 {
    color: white;
    font-size: 25px;
  }
  h2 {
    color: white;
    font-size: 40px;
    padding: 10px 0;
  }
  span {
    color: red;
  }
  button {
    padding: 10px 30px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
    &:hover {
      background-color: #088178;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      color: white;
      font-size: 20px;
      padding: 10px 0;
    }
  }
`;
const Banner = () => {
  return (
    <MainBanner>
      <h4>Repair Services</h4>
      <h2>
        Up to <span>70% off</span>-All t-shirt & accessories
      </h2>

      <button>Explore More</button>
    </MainBanner>
  );
};

export default Banner;
