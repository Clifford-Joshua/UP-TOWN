import React from "react";
import Background from "../../../Image-Assets/Home/Service.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <Wrapper>
      <div className="service">
        <h2 className="text-capitalize fs-2 heading text-center">
          Our Services
        </h2>
        <div className="line"></div>
        <p>
          At Up-Town, we are dedicated to turning your ideas into reality with
          our comprehensive range of services. Whether you're looking to
          innovate in the digital space, enhance your brand, or simply enjoy
          top-notch experiences, we've got you covered. Here's what we offer:
        </p>
        <ul>
          <li>
            {" "}
            <h4 className="mt-3">Custom Software Development : </h4>
          </li>
          <p>
            We create tailored software solutions that drive efficiency and
            growth, helping you stay ahead in the ever-evolving tech landscape.
          </p>
          <li>
            {" "}
            <h4 className="mt-3">Creative Design : </h4>
          </li>
          <p>
            Our design team brings your brand to life with visually stunning
            graphics, websites, and user interfaces that captivate and engage
            your audience.
          </p>
          <li>
            {" "}
            <h4 className="mt-3">Digital Marketing : </h4>
          </li>
          <p>
            From SEO to social media management, our digital marketing services
            are designed to boost your online presence and connect you with your
            target audience effectively
          </p>
          <li>
            {" "}
            <h4 className="mt-3">Consulting & Strategy : </h4>
          </li>
          <p>
            Need expert advice? Our consultants provide strategic insights and
            practical solutions to help you navigate complex business
            challenges.
          </p>
          <li>
            {" "}
            <h4 className="mt-3">Culinary Excellence : </h4>
          </li>
          <p>
            Experience the best in dining with our restaurant services, where
            culinary artistry meets exceptional service, offering you
            unforgettable flavors.
          </p>
        </ul>
        <h5>
          At Up-Town, our goal is to empower your vision with services that are
          not only innovative but also customized to meet your unique needs.
          Let’s work together to achieve something extraordinary.
        </h5>
      </div>
      <Link className="btn text-capitalize mt-4 text-white" to={"./contactus"}>
        call us now
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ======================================== */
  /* Desktop View */
  color: white;
  padding: 20px;
  display: flex;
  min-height: 40vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.503),
      rgba(0, 0, 0, 0.534),
      rgba(0, 0, 0, 0.555)
    ),
    url(${Background}) no-repeat center/ cover;
  background-position: bottom;
  .service {
    width: 60%;
  }
  .line {
    width: 50%;
    height: 2px;
    margin: auto;
    border-radius: 2px;
    background: linear-gradient(to right, white, var(--orange), white);
  }
  .heading {
    font-family: var(--font-family-logo);
    text-shadow: 2px 2px 4px var(--black);
  }
  /* ======================================= */

  /* ======================================= */
  /* mobile view */
  @media (width <= 764px) {
    .service {
      width: 100%;
    }
    p {
      font-size: 0.8rem;
    }
  }
  /* ======================================= */

  /* ======================================= */
  /* Ipad view */
  @media (764px <= width <= 1024px) {
    .service {
      width: 80%;
    }
  }
  /* ======================================= */
`;

export default Service;
