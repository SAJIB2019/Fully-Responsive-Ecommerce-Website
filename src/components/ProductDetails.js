import React from "react";
import styled from "styled-components";

const ProductDetailMain = styled.div`
  display: flex;
  position: relative;
  top: 7rem;
  padding-bottom: 200px;
`;
const ProductView = styled.div`
  padding: 20px;
`;
const SingleImage = styled.div`
  img {
    width: 625px;
  }
`;
const MultipleImage = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FirstSmallImage = styled.div`
  img {
    width: 150px;
  }
`;
const SecondSmallImage = styled.div`
  img {
    width: 150px;
  }
`;
const ThirdSmallImage = styled.div`
  img {
    width: 150px;
  }
`;
const FourthSmallImage = styled.div`
  img {
    width: 150px;
  }
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 30px;
  width: 600px;
  h6 {
    color: black;
    padding: 30px 0;
    font-size: 20px;
  }
  h4 {
    color: black;
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  h2 {
    color: black;
    font-size: 30px;
    padding-bottom: 20px;
    font-weight: bold;
  }

  select {
    width: 120px;
    padding: 10px;
    margin: 15px 0;
  }
  span {
    text-align: justify;
    line-height: 30px;
    color: grey;
    font-size: 20px;
  }
`;
const InputSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  input {
    width: 40px;
    padding: 6px;
    font-size: 20px;
    margin: 15px 0;
  }
  button {
    padding: 0 20px;
    font-size: 20px;
    height: 40px;
    margin: 5px;
    background-color: #088178;
    border: none;
    color: white;
    border-radius: 4px;
  }
`;
const ProductDetails = () => {
  return (
    <ProductDetailMain>
      <ProductView>
        <SingleImage>
          <img src="images/products/f1.jpg" alt="Product" />
        </SingleImage>
        <MultipleImage>
          <FirstSmallImage>
            <img src="images/products/f1.jpg" alt="Product" />
          </FirstSmallImage>
          <SecondSmallImage>
            <img src="images/products/f2.jpg" alt="Product" />
          </SecondSmallImage>
          <ThirdSmallImage>
            <img src="images/products/f3.jpg" alt="Product" />
          </ThirdSmallImage>
          <FourthSmallImage>
            <img src="images/products/f4.jpg" alt="Product" />
          </FourthSmallImage>
        </MultipleImage>
      </ProductView>
      <ProductDetail>
        <h6>Home / T-shirt </h6>
        <h4>Men's Fashion T-shirt</h4>
        <h2>$139.00</h2>

        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XLL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <InputSection>
          <input type="number" value="1" />
          <button>Add To Cart</button>
        </InputSection>

        <h4>Product Details</h4>
        <span>
          The Gildan Ultra Cotton T-shirt is made from substantial 6.0 oz. Per
          sq. yd. fabric constructed from 100% cotton, this classic fit
          preshrunk jersey knit provides umatched comfort with each wear.
          Featuring a taped neck and shoulder, and seamless double -needle
          collar, and available in a range of colors it offers it all in the
          ultimate head turning package
        </span>
      </ProductDetail>
    </ProductDetailMain>
  );
};

export default ProductDetails;
