import React, { useState } from "react";
import Resturant from "../../../Image-Assets/Home/Resturant.jpg";
import Gamer from "../../../Image-Assets/Home/Gaming.jpg";
import Technology from "../../../Image-Assets/Home/Tech.jpg";
import Musics from "../../../Image-Assets/Home/Music.jpg";
import UpTown from "../../../Image-Assets/Home/Up-town.jpg";
import styled from "styled-components";
import Info from "../../../Components/FetchData/FetchData";
const Blog = () => {
  const [readmore, setReadMore] = useState(false);
  const { Blog } = Info;
  const info = Blog.map(({ info }) => {
    return info;
  });

  return (
    <Wrapper>
      <div className="blog" id="blog">
        <div className="img">
          <img src={Gamer} alt="" />
        </div>
        <article>
          <h3 className="heading text-capitalize">
            Our Top Gamers: Where Skill Meets Passion
          </h3>
          <p>
            {readmore ? info[0] : `${info[0].substring(0, 40)}....`}
            <button
              type="button"
              className="btn btn-outline-primary m-4"
              onClick={() => setReadMore(!readmore)}
            >
              {readmore ? "show less" : "read more"}
            </button>
          </p>
        </article>
      </div>
      <div className="blog">
        <article>
          <h3 className="heading text-capitalize">
            Our Music: A Symphony of Sounds
          </h3>
          <p>
            {readmore ? info[1] : `${info[1].substring(0, 40)}....`}
            <button
              type="button"
              className="btn btn-outline-primary m-4"
              onClick={() => setReadMore(!readmore)}
            >
              {readmore ? "show less" : "read more"}
            </button>
          </p>
        </article>
        <div className="img">
          <img src={Musics} alt="" />
        </div>
      </div>
      <div className="blog ">
        <div className="img">
          <img src={Technology} alt="" />
        </div>
        <article>
          <h3 className="heading text-capitalize">
            Our Technology: Innovating the Future
          </h3>
          <p>
            {readmore ? info[2] : `${info[2].substring(0, 40)}....`}
            <button
              type="button"
              className="btn btn-outline-primary m-4"
              onClick={() => setReadMore(!readmore)}
            >
              {readmore ? "show less" : "read more"}
            </button>
          </p>
        </article>
      </div>
      <div className="blog">
        <article>
          <h3 className="heading text-capitalize">
            Our Restaurant: A Culinary Journey
          </h3>
          <p>
            {readmore ? info[3] : `${info[3].substring(0, 40)}....`}
            <button
              type="button"
              className="btn btn-outline-primary m-4"
              onClick={() => setReadMore(!readmore)}
            >
              {readmore ? "show less" : "read more"}
            </button>
          </p>
        </article>
        <div className="img">
          <img src={Resturant} alt="" />
        </div>
      </div>
      <div className="blog">
        <div className="img">
          <img src={UpTown} alt="" />
        </div>
        <article>
          <h3 className="heading text-capitalize">up-town</h3>
          <p>
            {readmore ? info[4] : `${info[4].substring(0, 40)}....`}
            <button
              type="button"
              className="btn btn-outline-primary m-4"
              onClick={() => setReadMore(!readmore)}
            >
              {readmore ? "show less" : "read more"}
            </button>
          </p>
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ===================================== */
  /* Desktop View */
  padding: 10px 0;
  min-height: 70vh;
  display: grid;
  row-gap: 10px;
  .blog {
    display: flex;
    padding: 20px 0;
    align-items: center;
    background-color: white;
    justify-content: space-evenly;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
  }
  .heading {
    font-family: var(--font-family-logo);
  }
  img {
    object-fit: cover;
  }
  .img {
    width: 40%;
    height: 400px;
    overflow: hidden;
    border-top-right-radius: 200px;
    border-bottom-left-radius: 200px;
  }
  article {
    width: 40%;
  }
  /* ========================================= */

  /* ========================================== */
  /* Ipad View */
  @media (width <= 768px) {
    .blog {
      border-top-right-radius: 60px;
      border-bottom-left-radius: 60px;
    }
    .heading {
      font-size: 1.1rem;
    }
    .img {
      height: 200px;
      border-radius: 10px;
    }
    p {
      font-size: 0.8rem;
    }
  }
  /* ============================================= */
`;

export default Blog;
