import React from "react";
import styled from "styled-components";

const MainTextBanner = styled.div`
  padding: 50px 110px;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;
const TextBannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const FirstTextBanner = styled.div`
  background-image: url("images/banner/b7.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 450px;
  height: 20vh;
  h2 {
    color: white;
    padding-bottom: 10px;
    font-weight: 600px;
    font-size: 16px;
  }
  h3 {
    color: #8a1a1a;
  }
  @media screen and (max-width: 768px) {
    min-width: 350px;
    h2 {
      font-size: 16px;
    }
  }
`;
const SecondTextBanner = styled.div`
  background-image: url("images/banner/b4.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 450px;
  height: 20vh;
  margin: 10px 0;
  h2 {
    color: white;
    padding-bottom: 10px;
    font-weight: 600px;
    font-size: 16px;
  }
  h3 {
    color: #8a1a1a;
  }
  @media screen and (max-width: 768px) {
    min-width: 350px;
    h2 {
      font-size: 16px;
    }
  }
`;
const ThirdTextBanner = styled.div`
  background-image: url("images/banner/b18.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 450px;
  height: 20vh;
  h2 {
    color: white;
    padding-bottom: 10px;
    font-weight: 600px;
    font-size: 16px;
  }
  h3 {
    color: #8a1a1a;
  }
  @media screen and (max-width: 768px) {
    min-width: 350px;
    h2 {
      font-size: 16px;
    }
  }
`;

const TextBanner = () => {
  return (
    <MainTextBanner>
      <TextBannerContainer>
        <FirstTextBanner>
          <h2>SEASON SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </FirstTextBanner>
        <SecondTextBanner>
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring/summer-2022</h3>
        </SecondTextBanner>
        <ThirdTextBanner>
          <h2>T-SHIRT</h2>
          <h3>New trendy prints</h3>
        </ThirdTextBanner>
      </TextBannerContainer>
    </MainTextBanner>
  );
};

export default TextBanner;
