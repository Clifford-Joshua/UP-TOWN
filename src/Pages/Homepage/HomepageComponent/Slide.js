import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SlideData from "../../../Components/FetchData/FetchData";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
const Slide = () => {
  const [index, setIndex] = useState(0);
  const [Data] = useState(SlideData);
  const { Slide } = Data;
  const Images = Slide.map(({ Img }) => {
    return Img;
  });
  const BackgroundImageUrl = Images[index];

  useEffect(() => {
    const LastBackground = Slide.length - 1;
    if (index > LastBackground) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(LastBackground);
    }

    const SlideInterval = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => clearInterval(SlideInterval);
  }, [index, Slide]);

  return (
    <Wrapper>
      <div
        className="mw-100 min-vh-95 position-relative"
        style={{
          background: ` linear-gradient(
      to right,
      rgba(0, 0, 0, 0.779),
      rgba(0, 0, 0, 0.779),
      rgba(0, 0, 0, 0.505),
      rgba(0, 0, 0, 0.271),
      rgba(0, 0, 0, 0.123)
      ), url(${BackgroundImageUrl}) no-repeat center/cover`,
        }}
      >
        <article className="up-town-article">
          <h1 className="heading">UP-TOWN</h1>
          <div className="d-flex slide-container">
            {Slide.map(({ text, name }, CurrentIndex) => {
              let position = "nextSlide";
              if (CurrentIndex === index) {
                position = "activeSlide";
              }
              if (
                CurrentIndex === index - 1 ||
                (index === 0 && CurrentIndex === Slide.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <div
                  key={CurrentIndex}
                  className={`position-absolute slide ${position} p-2`}
                >
                  <h2 className="btn fs-4 text-white text-uppercase bg-black">
                    {name === "Up-town" ? "homepage" : name}
                  </h2>
                  <h4 className="mt-4">{text}</h4>
                  <button className="mt-4 btn ">
                    <Link className="text-white text-capitalize text-decoration-none">
                      {name === "Up-town" ? (
                        <>
                          Visit our dashboard
                          <GoArrowUpRight className="fw-bolder fs-3" />
                        </>
                      ) : (
                        <>
                          Vist Our Site
                          <GoArrowUpRight className="fw-bolder fs-3" />
                        </>
                      )}
                    </Link>
                  </button>
                </div>
              );
            })}
          </div>
        </article>
        <button
          className="btn text-white fs-1 position-absolute top-50 function-btn"
          onClick={() => setIndex(index - 1)}
        >
          <FaLessThan />
        </button>
        <button
          className="btn text-white fs-1 position-absolute top-50 end-0 function-btn"
          onClick={() => setIndex(index + 1)}
        >
          <FaGreaterThan />
        </button>

        <div className="position-absolute bottom-5 start-30 start-45">
          <div
            className={`btn ${index === 0 && `bg-info`}`}
            onClick={() => setIndex(0)}
          ></div>
          <div
            className={`btn ${index === 1 && `bg-info`}`}
            onClick={() => setIndex(1)}
          ></div>
          <div
            className={`btn ${index === 2 && `bg-info`}`}
            onClick={() => setIndex(2)}
          ></div>
          <div
            className={`btn ${index === 3 && `bg-info`}`}
            onClick={() => setIndex(3)}
          ></div>
          <div
            className={`btn ${index === 4 && `bg-info`}`}
            onClick={() => setIndex(4)}
          ></div>
          <div
            className={`btn ${index === 5 && `bg-info`}`}
            onClick={() => setIndex(5)}
          ></div>
          <div
            className={`btn ${index === 6 && `bg-info`}`}
            onClick={() => setIndex(6)}
          ></div>
          <div
            className={`btn ${index === 7 && `bg-info`}`}
            onClick={() => setIndex(7)}
          ></div>
          <div
            className={`btn ${index === 8 && `bg-info`}`}
            onClick={() => setIndex(8)}
          ></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ============================================= */
  /* Desktop View */
  .heading {
    font-weight: 900;
    font-family: var(--font-family-logo);
    font-size: var(--big-text-responsive);
    text-shadow: 2px 2px 4px var(--white), 2px 2px 5px var(--deep-navy);
  }
  .up-town-article {
    top: 25%;
    left: 15%;
    color: white;
    padding: 40px;
    position: absolute;
  }
  .slide-container {
    width: 50vw;
    height: 45vh;
    overflow: hidden;
    position: relative;
  }
  .slide {
    opacity: 0;
    transition: var(--trnasition);
  }
  .activeSlide {
    opacity: 1;
    transform: translate(0);
  }
  .lastSlide {
    transform: translate(-100%);
  }
  .nextSlide {
    transform: translate(100%);
  }
  /* =============================== */

  /* ================================= */
  /* Ipad & Mobile View */
  @media (width <= 1023px) {
    .up-town-article {
      max-width: 100%;
    }
    .slide-container {
      width: 80vw;
    }
  }

  /* ============================== */

  /* =============================== */
  /* Mobile View */
  @media (width <= 764px) {
    --big-text-responsive: 3rem;
    .up-town-article {
      left: 0;
      padding: 0 25px;
    }
    h4 {
      font-size: 1rem;
    }
    .function-btn {
      top: 80% !important;
    }
    .start-30 {
      left: 21%;
    }
  }
  /* =============================== */

  /* =============================== */
  /* Ipad View */
  @media (768px <= width <=1024px) {
    .min-vh-95 {
      min-height: 80vh;
    }
    .up-town-article {
      left: 5%;
    }
  }
  /* ============================== */
`;

export default Slide;
