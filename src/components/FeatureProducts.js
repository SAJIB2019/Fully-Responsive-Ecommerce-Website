import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const FeatureMainDiv = styled.div`
  padding: 0 110px;
`;
const AllFeatureProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FeatureHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  h2 {
    color: #1a1919;
    font-size: 50px;
  }
  p {
    color: #615252;
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 0;
    text-align: center;
  }
`;

const FeatureProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 23%;
  min-width: 250px;
  padding: 10px 12px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 25px 0;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.06);
  }
`;
const FeatureImage = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
  }
`;
const FeatureDescription = styled.div`
  width: 100%;
  text-align: start;
  padding: 5px 20px;

  span {
    color: #606063;
    font-size: 14px;
    text-transform: uppercase;
  }
  h5 {
    color: #1a1a1a;
    font-size: 14px;
  }
`;
const FeatureFeedBack = styled(Link)`
  padding-left: 18px;
  i {
    color: #ff9900;
  }
`;
const FeaturePrice = styled.div`
  width: 100%;
  text-align: start;
  padding: 5px 20px;
  h3 {
    color: #088178;
  }
`;
const FeatureAddToCart = styled(Link)`
  position: relative;
  left: 80%;
  top: -25px;
  i {
    background-color: transparent;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 40px;
    color: #088178;
  }
`;

const FeatureProducts = () => {
  let history = useNavigate();
  const hangleClick = () => {
    history("/productdetail");
  };
  return (
    <FeatureMainDiv>
      <FeatureHeading>
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
      </FeatureHeading>
      <AllFeatureProduct>
        <FeatureProduct onClick={hangleClick}>
          <FeatureImage>
            <img src="images/products/f1.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>
        <FeatureProduct>
          <FeatureImage>
            <img src="images/products/f2.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>
        <FeatureProduct>
          <FeatureImage>
            <img src="images/products/f3.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>
        <FeatureProduct>
          <FeatureImage>
            <img src="images/products/f4.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>
        <FeatureProduct>
          <FeatureImage>
            <img src="images/products/f5.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>
        <FeatureProduct>
          <FeatureImage>
            <img src="images/products/f6.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>
        <FeatureProduct>
          <FeatureImage>
            <img src="images/products/f7.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>

        <FeatureProduct>
          <FeatureImage>
            <img src="images/products/f8.jpg" alt="Feature" />
          </FeatureImage>
          <FeatureDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </FeatureDescription>
          <FeatureFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </FeatureFeedBack>
          <FeaturePrice>
            <h3>$78</h3>
          </FeaturePrice>
          <FeatureAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </FeatureAddToCart>
        </FeatureProduct>
      </AllFeatureProduct>
    </FeatureMainDiv>
  );
};

export default FeatureProducts;
