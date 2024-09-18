import React, { useState } from "react";
import Data from "../../../Components/FetchData/FetchData";
import styled from "styled-components";
const Testimony = () => {
  const { Testimony } = Data;

  const [viewmore, setviewmore] = useState(false);

  return (
    <Wrapper>
      <div>
        <h2 className="p-2 text-center fw-bolder heading text-capitalize">
          Know What Our Client Say
        </h2>
        <div className="line"></div>
        <p className="pt-2">
          These testimonials reflect the diverse and high-quality experiences
          that people have with Up-Town, helping to build trust and credibility
          with potential clients and customers.
        </p>
        <div>
          <div className="grid-container mt-3">
            {viewmore
              ? Testimony.map(({ name, occupation, img, testify }, index) => {
                  return (
                    <div className="bg-black" key={index}>
                      <article className="bg-sliver p-4">
                        <div className="d-flex column-gap-3 align-items-center">
                          <img src={img} alt="" />
                          <div>
                            <h2 className="fs-5 fw-bolder">{name}</h2>
                            <h4 className="btn btn-outline-dark fs-6">
                              {occupation}
                            </h4>
                          </div>
                        </div>
                        <p>
                          {" "}
                          <q>{testify}</q>
                        </p>
                      </article>
                    </div>
                  );
                })
              : Testimony.slice(0, 4).map(
                  ({ name, occupation, img, testify }, index) => {
                    return (
                      <div className="bg-black" key={index}>
                        <article className="bg-sliver p-4">
                          <div className="d-flex column-gap-3 align-items-center">
                            <img src={img} alt="" />
                            <div>
                              <h2 className="fs-5 fw-bolder">{name}</h2>
                              <h4 className="btn btn-outline-dark fs-6">
                                {occupation}
                              </h4>
                            </div>
                          </div>
                          <p>
                            <q>{testify}</q>
                          </p>
                        </article>
                      </div>
                    );
                  }
                )}
          </div>
        </div>
        <div className="d-flex align-items-center p-2 mt-3 justify-content-center">
          <button
            className="btn text-capitalize"
            onClick={() => setviewmore(!viewmore)}
          >
            view more
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ============================================== */
  /* Desktop View */
  min-height: 80vh;
  padding: 20px 150px;
  background-color: #fffafb;
  .line {
    width: 50%;
    height: 2px;
    margin: auto;
    border-radius: 2px;
    background: linear-gradient(to right, white, var(--orange), white);
  }
  .heading {
    font-family: var(--font-family-logo);
    text-shadow: 2px 2px 4px var(--white), 2px 2px 5px var(--deep-navy);
  }
  .grid-container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  article {
    width: 100%;
    height: 100%;
    border-top-left-radius: 120px;
  }
  .btn:hover {
    background-color: var(--deep-navy);
  }
  img {
    width: 80px;
    border-radius: 40%;
    border: 3px solid var(--light-purple);
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
export default Testimony;
