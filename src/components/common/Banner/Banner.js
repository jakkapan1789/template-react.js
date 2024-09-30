// Banner.js
import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

    h1 {
      font-size: 24px;

      @media (min-width: 768px) {
        font-size: 32px;
      }
    }

    p {
      font-size: 14px;

      @media (min-width: 768px) {
        font-size: 18px;
      }
    }

    .cta-button {
      background-color: #007bff;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <img src="your-image-url.jpg" alt="Banner" />
      <div className="content">
        <h1>Your Banner Title</h1>
        <p>Your descriptive text goes here.</p>
        <a href="#" className="cta-button">
          Learn More
        </a>
      </div>
    </BannerContainer>
  );
};

export default Banner;
