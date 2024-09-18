import React from "react";
import styled from "styled-components";
import Data from "../../../Components/FetchData/FetchData";
const whychooseus = () => {
  const { ChooseUs } = Data;
  return (
    <Wrapper>
      <div>
        <h2 className="text-capitalize fs-2 heading text-center">
          Why choose us
        </h2>
        <div className="line"></div>
        <div className="grid-container ">
          {ChooseUs.map(({ heading, icon, info }, index) => {
            return (
              <div className="d-flex gap-3" key={index}>
                <div className="d-flex align-middle">
                  <img src={icon} alt="" />
                </div>
                <div>
                  <h3 className="fs-5 text-capitalize fw-bolder">{heading}</h3>
                  <p className="fs-7 text-body-tertiary">{info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =========================================== */
  /* Desktop View */
  min-height: 70vh;
  padding: 20px 150px;
  background-color: var(--soft-beige);
  .heading {
    font-family: var(--font-family-logo);
    text-shadow: 2px 2px 4px var(--white), 2px 2px 5px var(--deep-navy);
  }
  .line {
    width: 50%;
    height: 2px;
    margin: auto;
    border-radius: 2px;
    background: linear-gradient(
      to right,
      black,
      black,
      var(--orange),
      var(--orange),
      var(--orange),
      black,
      black
    );
  }
  .grid-container {
    gap: 20px;
    display: grid;
    margin-top: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  img {
    width: 120px;
    border-radius: 10px;
  }
  /* =================================== */

  /* ===================================== */
  /* mobile and ipad view */
  @media (width<= 1023px) {
    padding: 20px;
    p {
      font-size: 0.8rem;
    }
  }
  /* ===================================== */
`;

export default whychooseus;
