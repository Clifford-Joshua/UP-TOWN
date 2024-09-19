import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <h2 className="heading">404 Error Message</h2>
      <p className="subheading">Page not found</p>
      <Link to={"/"} className="btn">
        back to home
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ===================================== */
  /* Mobile View */
  color: white;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  padding-block: 30px;
  background-color: gray;
  flex-direction: column;
  .heading {
    font-size: 2rem;
    font-family: "DM Sans", system-ui;
  }
  .subheading {
    font-size: 1.4rem;
    font-family: "Poppins", system-ui;
  }
  .btn {
    color: white;
    margin-top: 10px;
    font-size: 1.1rem;
  }
  /* =================================== */

  /* ===================================== */
  /* Ipad View */
  @media (width >= 764px) {
    .heading {
      font-size: 2.5rem;
    }
    .subheading {
      font-size: 1%.6;
    }
    .btn {
      font-size: 1.3rem;
    }
  }

  /* ======================================= */

  /* =================================== */
  /* Desktop View */
  @media (width >= 1024px) {
    .heading {
      font-size: 3.5rem;
    }
    .subheading {
      font-size: 2rem;
    }
    .btn {
      font-size: 1.5rem;
    }
  }
`;
export default Error;
