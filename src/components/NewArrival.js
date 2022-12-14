import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewArrivalMainDiv = styled.div`
  padding: 0 110px;
`;
const AllNewArrivalProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const NewArrivalHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  h2 {
    color: #1a1919;
    font-size: 50px;
  }
  p {
    color: #615252;
    font-size: 20px;
  }
`;
const NewArrivalProduct = styled.div`
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
const NewArrivalImage = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
  }
`;
const NewArrivalDescription = styled.div`
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
    font-size: 15px;
    padding: 6px 0;
  }
`;
const NewArrivalFeedBack = styled(Link)`
  padding-left: 18px;
  i {
    color: #ff9900;
  }
`;
const NewArrivalPrice = styled.div`
  width: 100%;
  text-align: start;
  padding: 5px 20px;
  h3 {
    color: #088178;
  }
`;
const NewArrivalAddToCart = styled(Link)`
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
const NewArrival = () => {
  return (
    <NewArrivalMainDiv>
      <NewArrivalHeading>
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
      </NewArrivalHeading>
      <AllNewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n1.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n2.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n3.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n4.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n5.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n6.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n7.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
        <NewArrivalProduct>
          <NewArrivalImage>
            <img src="images/products/n8.jpg" alt="New-Arrival" />
          </NewArrivalImage>
          <NewArrivalDescription>
            <span>adidas</span>
            <h5>Cartoon Astronaut T-shirt</h5>
          </NewArrivalDescription>
          <NewArrivalFeedBack to="/">
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
            <i class="fa-solid fa-star" />
          </NewArrivalFeedBack>
          <NewArrivalPrice>
            <h3>$70</h3>
          </NewArrivalPrice>
          <NewArrivalAddToCart to="/cart">
            <i class="fa-solid fa-cart-shopping" />
          </NewArrivalAddToCart>
        </NewArrivalProduct>
      </AllNewArrivalProduct>
    </NewArrivalMainDiv>
  );
};

export default NewArrival;
