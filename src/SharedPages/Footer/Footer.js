import React from "react";
import styled from "styled-components";
import FooterImg from "../../Image-Assets/Home/Footer-img.png";
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={FooterImg} alt="" />
          <h2 className="heading">UP-TOWN</h2>
          <h3 className="fw-bold text-white">{`©copyright ${new Date().getFullYear()}`}</h3>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    width: 200px;
  }
  .heading {
    font-family: var(--font-family-logo);
    text-shadow: 2px 2px 2px var(--black);
  }
`;

export default Footer;
