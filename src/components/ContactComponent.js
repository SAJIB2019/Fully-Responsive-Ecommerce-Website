import React from "react";
import styled from "styled-components";

const ContactComponentMain = styled.div``;
const ContactHeroSection = styled.div`
  background-image: url("images/banner/b20.jpg");
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
`;
const ContactBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 150px;
  position: relative;
  top: 3rem;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: space-around;
  }
`;
const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  span {
    font-size: 20px;
    padding-bottom: 20px;
    color: grey;
  }
  h2 {
    font-size: 30px;
    padding-bottom: 20px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 30px;
    padding-bottom: 20px;
    color: grey;
  }
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100vw;
    text-align: center;
  }
`;
const DetailIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
  li {
    display: flex;
  }
  i {
    padding-right: 20px;
    font-size: 25px;
    padding-bottom: 15px;
  }
  p {
    font-size: 20px;
    color: grey;
  }
`;
const ContactGoogleMap = styled.div``;
const ContactInputSection = styled.div`
  padding: 0 150px;
  @media screen and (max-width: 600px) {
    padding: 0 0px;
  }
`;
const ContactInputSingle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
  flex-wrap: wrap;
  border: 1px solid grey;
  padding: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100vw;
  }
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    font-size: 20px;
    padding-bottom: 20px;
    color: grey;
  }
  h2 {
    font-size: 30px;
    padding-bottom: 20px;
    text-transform: uppercase;
  }
  input {
    width: 100%;
    padding: 10px 10px;
    margin: 8px 0;
    outline: 0;
    border: 1px solid grey;
    &:hover {
      border: 1px solid #088178;
    }
  }
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    outline: 0;
    border: 1px solid grey;
    &:hover {
      border: 1px solid #088178;
    }
  }
  button {
    background-color: transparent;
    white-space: nowrap;
    width: 40%;
    font-size: 20px;
    padding: 0.55em 0.5em;
    justify-content: center;
    text-align: center;
    border-radius: 3px;
    color: #088178;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: 20px 0;
    text-transform: uppercase;
    border: 1px solid #088178;
    &:hover {
      background-color: #088178;
      color: white;
    }
  }
`;
const MemberSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Member = styled.div`
  margin: 10px 0;
  span {
    color: black;
    font-size: 20px;
    padding-right: 5px;
  }
  p {
    color: grey;
    line-height: 25px;
  }
`;
const ContactComponent = () => {
  return (
    <ContactComponentMain>
      <ContactHeroSection></ContactHeroSection>
      <ContactBox>
        <ContactDetail>
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>

          <DetailIcons>
            <li>
              <i class="fa-sharp fa-solid fa-location-dot" />
              <p>56 Glassford streat glasgow g1 1ul New york</p>
            </li>
            <li>
              <i class="fa-solid fa-envelope" />
              <p>contact@example.com</p>
            </li>
            <li>
              <i class="fa-solid fa-phone" />
              <p>+88888444442222</p>
            </li>
          </DetailIcons>
        </ContactDetail>
        <ContactGoogleMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.9539456743505!2d-1.2543668000000001!3d51.754816399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e1!3m2!1sen!2sbd!4v1662272107269!5m2!1sen!2sbd"
            width="650"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </ContactGoogleMap>
      </ContactBox>
      <ContactInputSection>
        <ContactInputSingle>
          <InputSection>
            <span>Leave a message</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your E-mail" />
            <input type="text" placeholder="Your Subject" />
            <textarea
              name="
        "
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button>Submit</button>
          </InputSection>

          <MemberSection>
            <Member>
              <img src="images/people/1.png" alt="Member" />
              <p>
                <span>John Doe</span>Senior Marketing Manager
                <br /> Phone: +888844442222
                <br /> Email: example@email.com
              </p>
            </Member>
            <Member>
              <img src="images/people/2.png" alt="Member" />
              <p>
                <span>William Smith</span>Senior Marketing Manager
                <br /> Phone: +888844442222
                <br /> Email: example@email.com
              </p>
            </Member>
            <Member>
              <img src="images/people/3.png" alt="Member" />
              <p>
                <span>Emma Stone</span>Senior Marketing Manager
                <br /> Phone: +888844442222
                <br /> Email: example@email.com
              </p>
            </Member>
          </MemberSection>
        </ContactInputSingle>
      </ContactInputSection>
    </ContactComponentMain>
  );
};

export default ContactComponent;
