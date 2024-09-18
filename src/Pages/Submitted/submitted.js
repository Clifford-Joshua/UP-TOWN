import React, { useEffect } from "react";
import SubmitImg from "../../Image-Assets/submitted/submitted.jpg";
import styled from "styled-components";
import PageLoader from "../../SharedPages/Loader/PageLoader";
import { useGlobalContent } from "../../Components/Hooks/context";

const Submitted = () => {
  const { setPageLoader, pageLoader } = useGlobalContent();

  useEffect(() => {
    const timelimit = setInterval(() => setPageLoader(false), 2000);
    return () => clearInterval(timelimit);
  }, [setPageLoader]);
  if (pageLoader) {
    return <PageLoader />;
  }
  return (
    <Wrapper>
      <h2 className="heading">Submitted</h2>
      <img src={SubmitImg} alt="" />
      <div>
        <h5 className="text-center">Thank You for Reaching Out!</h5>
        <p>
          We’ve received your submission, and our team is already working on it.
          We aim to respond to all inquiries within 24-48 hours. If your matter
          is urgent, please don’t hesitate to contact us directly at [Phone
          Number] or via email at [Email Address].In the meantime, feel free to
          browse our website to learn more about what we do, check out our
          latest blog posts, or connect with us on social media for updates and
          insights.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* Desktop View */
  gap: 60px;
  width: 100%;
  display: flex;
  height: 100vh;
  color: var(--deep-navy);
  padding-top: 50px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  .heading {
    color: white;
    display: flex;
    font-size: 6.5rem;
    align-items: center;
    font-family: var(--font-family-logo);
    text-shadow: 2px 2px 4px var(--black);
  }
  img {
    max-width: 300px;
  }
  p {
    padding: 15px;
    max-width: 900px;
    text-align: center;
  }

  /* ======================================== */
  /* Mobile View */
  @media (width <= 764px) {
    .heading {
      font-size: 2.5rem;
    }
    img {
      max-width: 200px;
    }
  }
  /* ======================================== */
  @media (764px <= width <= 1024px) {
    .heading {
      font-size: 4rem;
    }
  }
  /* ======================================== */
  /* ======================================== */
`;
export default Submitted;
