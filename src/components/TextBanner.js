import React from "react";
import styled from "styled-components";

const MainTextBanner = styled.div`
  padding: 0 110px;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 600px) {
    padding: 0 0px;
    width: 100vw;
  }
`;
const TextBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FirstTextBanner = styled.div`
  background-image: url("images/banner/b7.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  min-width: 450px;
  height: 25vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 15px 0;
  h2 {
    color: white;
    padding-bottom: 10px;
    font-weight: 600px;
  }
  h3 {
    color: #8a1a1a;
  }
`;
const SecondTextBanner = styled.div`
  background-image: url("images/banner/b4.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  min-width: 450px;
  height: 25vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 15px 0;
  h2 {
    color: white;
    padding-bottom: 10px;
    font-weight: 600px;
  }
  h3 {
    color: #8a1a1a;
  }
`;
const ThirdTextBanner = styled.div`
  background-image: url("images/banner/b18.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  min-width: 450px;
  height: 25vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 15px 0;
  h2 {
    color: white;
    padding-bottom: 10px;
    font-weight: 600px;
  }
  h3 {
    color: #8a1a1a;
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
