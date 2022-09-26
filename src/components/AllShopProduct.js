import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FeatureMainDiv = styled.div`
  padding: 0 110px;
`;
const AllFeatureProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  position: relative;
  top: 10rem;
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
/* New Arrival part */

const NewArrivalMainDiv = styled.div`
  padding: 0 110px;
`;
const AllNewArrivalProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  top: 10rem;
  padding-bottom: 13rem;
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
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  a {
    text-decoration: none;
    color: white;
    background-color: #088178;
    padding: 14px 20px;
    border-radius: 4px;
    font-weight: 600;
    margin: 2px;
    font-size: 15px;
  }
`;
const AllShopProduct = () => {
  return (
    <>
      <FeatureMainDiv>
        <AllFeatureProduct>
          <FeatureProduct>
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
      {/*  New Arrival Part */}
      <NewArrivalMainDiv>
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

        <Pagination>
          <a href="">1</a>
          <a href="">1</a>
          <a href="">
            <i class="fa-solid fa-arrow-right" />
          </a>
        </Pagination>
      </NewArrivalMainDiv>
    </>
  );
};

export default AllShopProduct;
