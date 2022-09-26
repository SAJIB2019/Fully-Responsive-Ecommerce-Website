import React from "react";
import styled from "styled-components";

const NewsLetterMain = styled.div`
  background-image: url("images/banner/b14.jpg");
  background-color: #041e42;
  background-repeat: no-repeat;
  background-position: 20% 30%;
`;
const NewsLetterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 110px;
`;
const NewsLetterHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: white;
  }
  p {
    color: #818ea0;
    font-size: 16px;
    font-weight: 600;
  }
  span {
    color: #ffbd27;
  }
  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;
const NewsLetterInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
    margin: 20px 0;
  }
`;

const NewsLetter = () => {
  return (
    <NewsLetterMain>
      <NewsLetterContainer>
        <NewsLetterHeading>
          <h2>Sign Up For Newsletters</h2>
          <p>
            Get E-mail updates about latest shop and <span>special offers</span>
          </p>
        </NewsLetterHeading>
        <NewsLetterInput>
          <input type="text" placeholder="Your email address" />
          <button>Sign Up</button>
        </NewsLetterInput>
      </NewsLetterContainer>
    </NewsLetterMain>
  );
};

export default NewsLetter;
