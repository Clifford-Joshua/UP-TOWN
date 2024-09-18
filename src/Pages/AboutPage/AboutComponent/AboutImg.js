import React from "react";
import styled from "styled-components";
import Img from "../../../Image-Assets/Aboutus/AboutUs.jpg";
const AboutImg = () => {
  return (
    <Wrapper>
      <div>
        <img src={Img} alt="About us" />
        <h3 className="text">who we are</h3>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  div {
    height: 60vh;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 30%;
  }
  .text {
    top: 43%;
    left: 8%;
    color: white;
    font-size: 3.5rem;
    position: absolute;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px var(--black);
  }
  /* =================================== */
  /* Mobile View */
  @media (width <= 764px) {
    .text {
      left: 3%;
      font-size: 2rem;
    }
  }
  /* =================================== */
  /* Ipad View */
  @media (764px <= width <= 1024px) {
    div {
      height: 40vh;
    }
    .text {
      top: 30%;
    }
  }
  /* =================================== */
`;
export default AboutImg;
