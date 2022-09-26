import React from "react";
import styled from "styled-components";

const CartProductMain = styled.div``;
const CartProductHero = styled.div`
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
const CardDetails = styled.div`
  padding: 150px;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    white-space: nowrap;
  }
  img {
    width: 70px;
  }
  td {
    width: 100px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    padding: 18px 0;
    font-weight: 700;
  }
  input {
    width: 70px;
    padding: 10px 5px 15px 10px;
  }
  thead {
    border: 1px solid #e2e9e1;
    border-left: none;
    border-right: none;
  }
  tr {
    padding-bottom: 15px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const CartCouponTotals = styled.div`
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: space-around;
  }
`;
const CartCoupon = styled.div`
  h3 {
    font-size: 25px;
    font-weight: 700;
  }
`;
const CouponInput = styled.div`
  display: flex;
  input {
    padding: 0.5em 1.5em;
    font-size: 20px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    margin: 20px 0;
    border: 1px solid grey;
  }

  button {
    background-color: #088178;
    white-space: nowrap;
    width: 40%;
    font-size: 20px;
    padding: 0.55em 0.5em;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: 20px 10px;
  }
`;
const CartTotal = styled.div`
  border: 1px solid #e2e9e1;
  padding: 30px;
  width: 50%;

  h3 {
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }

  td {
    width: 50%;
    border: 1px solid #e2e9e1;
    padding: 10px 10px;
  }
  button {
    background-color: #088178;
    white-space: nowrap;
    width: 40%;
    font-size: 20px;
    padding: 0.55em 0.5em;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: 20px 10px;
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
    padding: 0 0;
  }
`;

const CartProduct = () => {
  return (
    <CartProductMain>
      <CartProductHero>
        <h2>Cart</h2>
        <p>
          Add your coupon code & Save upto <span>70%</span>
        </p>
      </CartProductHero>
      <CardDetails>
        <table>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quality</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">
                  <i class="fa-regular fa-circle-xmark" />
                </a>
              </td>
              <td>
                <img src="images/products/f1.jpg" alt="Product" />
              </td>
              <td>Cartoon Astronaut T-shirt</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td>
                <a href="#">
                  <i class="fa-regular fa-circle-xmark" />
                </a>
              </td>
              <td>
                <img src="images/products/f2.jpg" alt="Product" />
              </td>
              <td>Cartoon Astronaut T-shirt</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
            <tr>
              <td>
                <a href="#">
                  <i class="fa-regular fa-circle-xmark" />
                </a>
              </td>
              <td>
                <img src="images/products/f3.jpg" alt="Product" />
              </td>
              <td>Cartoon Astronaut T-shirt</td>
              <td>$118.19</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118.19</td>
            </tr>
          </tbody>
        </table>
      </CardDetails>
      <CartCouponTotals>
        <CartCoupon>
          <h3>Apply Coupon</h3>
          <CouponInput>
            <input type="text" name="" id="" placeholder="Enter  your coupon" />
            <button>Apply</button>
          </CouponInput>
        </CartCoupon>
        <CartTotal>
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$335</td>
            </tr>

            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$335</strong>
              </td>
            </tr>
          </table>
          <button>Procceed to checkout</button>
        </CartTotal>
      </CartCouponTotals>
    </CartProductMain>
  );
};

export default CartProduct;
