import React from "react";
import styled from "styled-components";

const MainCallToAction = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
const CallToActionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
  }
`;
const CallToActionFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  min-width: 650px;
  height: 35vh;
  background-image: url("/images/banner/b17.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 15px 0;
  h5 {
    color: white;
    font-size: 20px;
    font-weight: 300;
  }

  h2 {
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
  p {
    color: white;
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 15px;
  }

  button {
    background-color: transparent;
    padding: 10px 30px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 2px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid white;
    outline: none;
    transition: 0.2s;
    &:hover {
      background-color: #088178;
      color: white;
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

const CallToActionTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  min-width: 650px;
  height: 35vh;
  background-image: url("/images/banner/b10.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 15px 0;
  h5 {
    color: white;
    font-size: 20px;
    font-weight: 300;
  }

  h2 {
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
  p {
    color: white;
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 15px;
  }
  button {
    background-color: transparent;
    padding: 10px 30px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 2px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid white;
    outline: none;
    transition: 0.2s;
    &:hover {
      background-color: #088178;
      color: white;
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

const CallToAction = () => {
  return (
    <MainCallToAction>
      <CallToActionContainer>
        <CallToActionFirst>
          <h5>crozay deals</h5>
          <h2>buy 1 get 1 free</h2>
          <p>The best classic dress is on sale at cara</p>
          <button>Learn More</button>
        </CallToActionFirst>
        <CallToActionTwo>
          <h5>spring/summer</h5>
          <h2>buy 1 get 1 free</h2>
          <p>The best classic dress is on sale at cara</p>
          <button>Collection</button>
        </CallToActionTwo>
      </CallToActionContainer>
    </MainCallToAction>
  );
};

export default CallToAction;
