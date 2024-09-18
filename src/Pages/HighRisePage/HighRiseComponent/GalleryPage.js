import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const GalleryPage = () => {
  return (
    <Wrapper>
      <div>
        <h2 className="heading">
          {" "}
          Up-Town Gallery: A Showcase of Innovation and Creativity
        </h2>
        <p>
          Welcome to the Up-Town Gallery, where technology meets artistry. Our
          gallery is a curated space that celebrates the creative minds within
          our community, showcasing projects, designs, and innovative works
          across multiple industries. Whether it's stunning digital art,
          groundbreaking tech solutions, or immersive visual experiences, our
          gallery reflects the spirit of innovation that drives Up-Town forward.
        </p>
        <p>
          Each piece in the gallery tells a story—stories of collaboration,
          creativity, and pushing the boundaries of what’s possible. From
          interactive tech displays to captivating design pieces, the Up-Town
          Gallery is a place where ideas come to life and inspire others.
        </p>
        <p>
          Explore our ever-evolving collection and experience the vibrant
          creativity that defines Up-Town.
        </p>
        <h5 className="text-white">Ready to be inspired?</h5>
        <p>
          <Link to={"gallery"} className="btn">
            {" "}
            Visit Our Gallery{" "}
          </Link>
        </p>
        <p className="m-3">
          {" "}
          to see the latest innovations and creative works!
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
/* ===================================== */
/* Mobile */
  padding: 20px;
  padding-block: 20px;
  .heading {
    font-size: 1.2rem;
    color: orangered;
    text-align: center;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 2px 4px var(--black);
  }
  p {
    color: white;
    font-size: 0.7rem;
    font-family: "DM Sans", system-ui;
  }
  .btn {
    color: white;
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
  /* ==================================== */
`;
export default GalleryPage;
