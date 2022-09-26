import React from "react";
import styled from "styled-components";

const BloggingMain = styled.div``;
const BloggingHeroSection = styled.div`
  background-image: url("images/banner/b19.jpg");
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
`;

const SingleBlogMain = styled.div`
  padding: 200px 150px 0 150px;
`;
const BlogBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  position: relative;
  h1 {
    position: absolute;
    top: -50px;
    font-weight: 700;
    font-size: 70px;
    color: #c9cbce;
    z-index: -1;
  }
`;
const ImageSection = styled.div`
  width: 50%;
  margin-right: 40px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
`;
const WriteSection = styled.div`
  width: 40%;
  padding: 15px;
  h4 {
    color: black;
    font-size: 30px;
    padding-bottom: 15px;
  }
  p {
    color: grey;
    font-size: 20px;
    padding: 20px 0;
    text-align: justify;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 15px;
    font-weight: 700;
    transition: 0.3s;
    position: relative;
    &:after {
      position: absolute;
      content: ".......";
      color: black;
      top: 2px;
      margin-left: 5px;
    }
    &:hover {
      color: #088178;
      cursor: pointer;
    }
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
const Blogging = () => {
  return (
    <BloggingMain>
      <BloggingHeroSection>
        <h2>Read more</h2>
        <p>Read all case studies about our products</p>
      </BloggingHeroSection>
      <SingleBlogMain>
        <BlogBox>
          <ImageSection>
            <img src="images/blog/b1.jpg" alt="Blog" />
          </ImageSection>
          <WriteSection>
            <h4>The cotton jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies your wolf chartreuse hexagon irony, godard...
            </p>
            <button>CONTINUE READING</button>
          </WriteSection>
          <h1>13/01</h1>
        </BlogBox>

        <BlogBox>
          <ImageSection>
            <img src="images/blog/b2.jpg" alt="Blog" />
          </ImageSection>
          <WriteSection>
            <h4>How to Style a Quiff</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies your wolf chartreuse hexagon irony, godard...
            </p>
            <button>CONTINUE READING</button>
          </WriteSection>
          <h1>13/01</h1>
        </BlogBox>
        <BlogBox>
          <ImageSection>
            <img src="images/blog/b3.jpg" alt="Blog" />
          </ImageSection>
          <WriteSection>
            <h4>Must Have Skater Girl Items</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies your wolf chartreuse hexagon irony, godard...
            </p>
            <button>CONTINUE READING</button>
          </WriteSection>
          <h1>13/01</h1>
        </BlogBox>
        <BlogBox>
          <ImageSection>
            <img src="images/blog/b4.jpg" alt="Blog" />
          </ImageSection>
          <WriteSection>
            <h4>Runway Inspired Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies your wolf chartreuse hexagon irony, godard...
            </p>
            <button>CONTINUE READING</button>
          </WriteSection>
          <h1>13/01</h1>
        </BlogBox>
        <BlogBox>
          <ImageSection>
            <img src="images/blog/b5.jpg" alt="Blog" />
          </ImageSection>
          <WriteSection>
            <h4>AW20 Menswear Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies your wolf chartreuse hexagon irony, godard...
            </p>
            <button>CONTINUE READING</button>
          </WriteSection>
          <h1>13/01</h1>
        </BlogBox>
      </SingleBlogMain>
      <Pagination>
        <a href="">1</a>
        <a href="">1</a>
        <a href="">
          <i class="fa-solid fa-arrow-right" />
        </a>
      </Pagination>
    </BloggingMain>
  );
};
export default Blogging;
