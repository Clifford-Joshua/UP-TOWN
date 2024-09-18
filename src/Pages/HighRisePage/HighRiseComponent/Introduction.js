import React from "react";
import styled from "styled-components";
const Introduction = () => {
  return (
    <Wraper>
      <div>
        <h2 className="heading">Up-Town High-Rise</h2>
        <p>
          Welcome to Up-Town High-Rise, where the sky's the limit for innovation
          and growth. This exclusive space is dedicated to high-level projects,
          advanced solutions, and partnerships that push the boundaries of
          technology, creativity, and business. High-Rise is more than just a
          name—it’s a symbol of our commitment to taking your vision to new
          heights, whether through cutting-edge software, groundbreaking
          designs, or future-focused strategies.
        </p>
      </div>
      <div>
        <h4 className="heading">What We Offer at Up-Town High-Rise</h4>
        <ul>
          <li>Advanced Technology Solutions</li>
          <p>
            At Up-Town High-Rise, we specialize in developing next-gen
            technologies that solve complex challenges. From artificial
            intelligence and machine learning to advanced cloud infrastructure
            and custom software development, our tech experts are equipped to
            deliver solutions that scale with your ambitions.
          </p>
          <li>High-End Design and Creative Services</li>
          <p>
            Creativity is at the core of what we do. Whether you're looking for
            innovative branding, digital experiences, or immersive design
            solutions, our creative team brings bold ideas to life. Our work not
            only elevates your brand but also engages audiences in unique,
            meaningful ways.
          </p>
          <li>Strategic Business Consulting</li>
          <p>
            Our high-rise division offers expert business consulting services
            tailored to companies seeking to innovate and scale. Whether you're
            launching a startup, expanding into new markets, or optimizing
            operations, our consultants provide strategic insights that drive
            success.
          </p>
          <li>Exclusive Partnerships and Collaborations</li>
          <p>
            We believe in the power of collaboration. Up-Town High-Rise offers a
            unique platform for high-level partnerships that create
            opportunities for shared growth. Our network of industry leaders,
            creatives, and tech pioneers enables groundbreaking collaborations
            that bring new ideas and solutions to the forefront.
          </p>
        </ul>{" "}
      </div>
      <div>
        <h5 className="heading">Projects in the Up-Town High-Rise</h5>
        <p>
          Explore some of our latest high-rise projects, where technology,
          creativity, and strategy come together to deliver exceptional results.
          From digital transformations to creative campaigns, our work reflects
          our passion for elevating ideas and making an impact.
        </p>
      </div>
    </Wraper>
  );
};
const Wraper = styled.div`
  /* =============================== */
  /* Mobile View */
  gap: 20px;
  padding: 20px;
  display: flex;
  padding-block: 30px;
  flex-direction: column;
  background-color: var(--lightgray);
  .heading {
    color: brown;
    text-align: center;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px var(--black);
  }
  p {
    font-size: 0.7rem;
    color: var(--deep-navy);
    font-family: "DM Sans", system-ui;
  }
  li {
    font-size: 0.9rem;
    font-weight: bolder;
    font-family: "Poppins", sans-serif;
  }
  /* ==================================== */
  /* Ipad View */
  @media (width >= 764px) {
    .heading {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  /* ==================================== */
`;
export default Introduction;
