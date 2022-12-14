import React from "react";
import styled from "styled-components";

const MainFeature = styled.div`
  display: flex;
  width: 100vw;
  padding: 0 110px;
  padding-top: 160px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const FeatureBox = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin: 0 16px;
  box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
  border: 1px solid #cce7d0;
  &:hover {
    box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
  }
  @media screen and (max-width: 768px) {
    margin: 8px 0;
  }
`;
const H4 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  color: #088178;
  border-radius: 5px;
  background-color: ${({ bg }) => bg};
`;
const Feature = () => {
  return (
    <MainFeature>
      <FeatureBox>
        <img src="images/features/f1.png" alt="Feature Image" />
        <H4 bg="#fddde4 ">Free Shopping</H4>
      </FeatureBox>
      <FeatureBox>
        <img src="images/features/f2.png" alt="Feature Image" />
        <H4 bg="#cdebbc">Online Order</H4>
      </FeatureBox>
      <FeatureBox>
        <img src="images/features/f3.png" alt="Feature Image" />
        <H4 bg="#d1e8f2">Save Money</H4>
      </FeatureBox>
      <FeatureBox>
        <img src="images/features/f4.png" alt="Feature Image" />
        <H4 bg="#cdd4f8">Promotions</H4>
      </FeatureBox>
      <FeatureBox>
        <img src="images/features/f5.png" alt="Feature Image" />
        <H4 bg="#f6dbf6">Happy Sell</H4>
      </FeatureBox>
      <FeatureBox>
        <img src="images/features/f6.png" alt="Feature Image" />
        <H4 bg="#fff2e5">F24/7 Support</H4>
      </FeatureBox>
    </MainFeature>
  );
};

export default Feature;
