import React from "react";
import HighRise from "../../../Image-Assets/highRise/High-rise.jpg";
import styled from "styled-components";
const HighRiseImg = () => {
  return (
    <Wrapper>
      <div>
        <img src={HighRise} alt="" />
        <h2 className="text">Elevating Innovation and Excellence</h2>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ================================== */
  /* Mobile View */
  font-family: "DM Sans", system-ui;
  div {
    height: 50vh;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 30%;
  }
  .text {
    top: 35%;
    left: 8%;
    color: white;
    font-size: 1.5rem;
    position: absolute;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px var(--black);
  }
  /* ======================================= */
  /* Ipad View */
  @media (width >= 764px) {
    .text {
      font-size: 2.5rem;
    }
  }
  /* ======================================= */
`;
export default HighRiseImg;
