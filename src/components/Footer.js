import React from "react";
import styled from "styled-components";

const MainFooter = styled.div`
  padding: 0 110px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #e3e6f3;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;
`;
const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  img {
    padding-bottom: 10px;
  }
  h4 {
    color: black;
    font-size: 20px;
    padding: 7px 0;
  }
  p {
    color: #535252;
    font-size: 15px;
    cursor: pointer;
  }
  h3 {
    padding: 7px 0;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  i {
    padding: 0 6px;
    color: #535252;
    cursor: pointer;
  }
`;
const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h2 {
    color: black;
  }
  p {
    color: #535252;
    cursor: pointer;
    font-size: 20px;
    padding: 6px 0;
  }
`;
const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    color: black;
  }
  p {
    color: #535252;
    cursor: pointer;
    font-size: 20px;
    padding: 6px 0;
  }
`;
const ColumnFour = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h2 {
    color: black;
  }
  p {
    color: #535252;
    cursor: pointer;
    font-size: 20px;
    padding: 6px 0;
  }
  img {
    border: 1px solid #088178;
  }
`;
const ColumnFourImage = styled.div`
  display: flex;
  img {
    margin-left: 5px;
    border: 1px solid #088178;
  }
`;
const PrivacyPolicy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #535252;
  font-size: 20px;
`;
const Footer = () => {
  return (
    <MainFooter>
      <FooterContainer>
        <ColumnOne>
          <img src="images/logo.png" alt="" />
          <h4>Address:</h4>
          <p>562 Wellington Road. Street 32.</p>
          <h4>Phone:</h4>
          <p>+012222 365/(+91) 2345 6789</p>
          <h4>Hours:</h4>
          <p>10:00-18:00. Mon-Sat</p>
          <h3>Follow Us</h3>
          <SocialIcons>
            <i class="fa-brands fa-facebook-f" />
            <i class="fa-brands fa-twitter" />
            <i class="fa-brands fa-square-instagram" />
            <i class="fa-brands fa-pinterest-p" />
            <i class="fa-brands fa-youtube" />
          </SocialIcons>
        </ColumnOne>
        <ColumnTwo>
          <h2>About</h2>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & condition</p>
          <p>Contact Us</p>
        </ColumnTwo>
        <ColumnThree>
          <h2>My Account</h2>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>Track My Order</p>
          <p>My wishlist</p>
          <p>Help</p>
        </ColumnThree>
        <ColumnFour>
          <h2>Install App</h2>
          <p>From App Store or Google Play</p>
          <ColumnFourImage>
            <img src="images/pay/app.jpg" alt="Payment" />
            <img src="images/pay/play.jpg" alt="Payment" />
          </ColumnFourImage>
          <p>Secured Payment Gateways</p>
          <img src="images/pay/pay.png" alt="Payment" />
        </ColumnFour>
      </FooterContainer>
      <PrivacyPolicy>
        <p>2022, Tech2 etc -HTML CSS E-commerce Template</p>
      </PrivacyPolicy>
    </MainFooter>
  );
};

export default Footer;
