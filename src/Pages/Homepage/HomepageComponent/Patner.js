import React from "react";
import Esty from "../../../Image-Assets/Home/etsy.png";
import Azure from "../../../Image-Assets/Home/azureicon.jpg";
import Coca from "../../../Image-Assets/Home/coca.jpg";
import Epic from "../../../Image-Assets/Home/epicgames.jpg";
import Eventbrite from "../../../Image-Assets/Home/eventbrite.png";
import Hubspot from "../../../Image-Assets/Home/hubspot.png";
import Spotify from "../../../Image-Assets/Home/spotify.jpg";
import Udemy from "../../../Image-Assets/Home/udemy.png";
import Amazon from "../../../Image-Assets/Home/amazon.png";
import Fb from "../../../Image-Assets/Home/fb.jpg";
import Google from "../../../Image-Assets/Home/google.png";
import Instagram from "../../../Image-Assets/Home/instagram.jpg";
import Jumia from "../../../Image-Assets/Home/jumia.png";
import Samsung from "../../../Image-Assets/Home/samsung.png";
import X from "../../../Image-Assets/Home/twier.png";
import Whatapp from "../../../Image-Assets/Home/whatapp.png";
import Youtube from "../../../Image-Assets/Home/youtube.png";
import styled from "styled-components";
const Patner = () => {
  return (
    <Wrapper>
      <div className="text-white p-4">
        <h2 className="heading">Patnership</h2>
        <p>
          "At Up-Town, we believe that great things happen when innovative minds
          come together. Our partnerships are built on a foundation of shared
          goals, mutual respect, and a commitment to excellence. By
          collaborating with industry leaders, we enhance our services and
          deliver even greater value to our community."
        </p>
        <div className="partners">
          <div className="partner-container">
            <div className="item text-black">
              <img src={Epic} alt="" />
              <img src={Esty} alt="" />
              <img src={Eventbrite} alt="" />
              <img src={Azure} alt="" />
              <img src={Spotify} alt="" />
              <img src={Udemy} alt="" />
              <img src={Hubspot} alt="" />
              <img src={Coca} alt="" />
              <img src={Amazon} alt="" />
              <img src={Google} alt="" />
              <img src={X} alt="" />
              <img src={Whatapp} alt="" />
              <img src={Youtube} alt="" />
              <img src={Fb} alt="" />
              <img src={Samsung} alt="" />
              <img src={Jumia} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =========================================== */
  /* Desktop View */
  .partners {
    display: flex;
    min-height: 20vh;
    align-items: center;
  }
  .item {
    gap: 50px;
    width: 100%;
    margin: auto;
    display: flex;
    padding: 10px;
    transform: translate(-200%);
    justify-content: space-evenly;
    animation: imageloader 15s linear infinite;
  }
  .partner-container {
    width: 80%;
    margin: auto;
    overflow: hidden;
  }
  .heading {
    font-family: var(--font-family-logo);
    text-shadow: 2px 2px 4px var(--black);
  }
  img {
    width: 100px;
    border-radius: 10px;
  }
  @keyframes imageloader {
    100% {
      transform: translate(100%);
    }
  }
  /* =============================== */

  /* =============================== */
  @media (width <= 764px) {
    /* Mobile View */
    .item {
      transform: translate(-900%);
    }
    img {
      width: 80px;
    }
    p {
      font-size: 0.8rem;
    }
  }
  /* =============================== */
`;
export default Patner;
