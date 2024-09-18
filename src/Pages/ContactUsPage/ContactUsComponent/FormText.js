import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";
const FormText = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text_area_container">
          <div className="first_section_div">
            <h3 className="heading">Contact Us - Up-Town</h3>
            <div className="sub_heading">
              <p>
                We’d love to hear from you! Whether you have questions about our
                services, want to collaborate on a project, or simply need more
                information, our team at Up-Town is ready to help.
              </p>
              <p>
                Feel free to get in touch with us through any of the following
                methods, and we’ll respond as soon as possible.
              </p>
            </div>
          </div>
          <div className="media_container">
            <div className="address_section">
              <h4 className="address_header">Address</h4>
              <address className="address">
                Up-Town Headquarters 123 Innovation Lane, Tech City, TC 54321,
                USA
              </address>
            </div>
            <div className="phone_section">
              <h4 className="phone_header">Phone</h4>
              <p className="phone">+1 (123) 456-7890</p>
              <p className="phone">Available: Monday to Friday, 9 AM - 6 PM</p>
            </div>
            <div className="email_section">
              <h4 className="email_header">Email</h4>
              <p className="email">
                For General Inquiries :<Link> info@uptown.com</Link>
              </p>
              <p className="email">
                For Partnerships :<Link> partners@uptown.com</Link>
              </p>
              <p className="email">
                For Support :<Link> support@uptown.com</Link>
              </p>
            </div>
            <div className="social_section">
              <h4 className="social_header">Social Media</h4>
              <p>
                <Link className="social"> www.facebook.com/uptown</Link>
              </p>
              <p>
                <Link className="social"> www.twitter.com/uptown</Link>
              </p>
              <p>
                <Link className="social">www.instagram.com/uptown </Link>
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ================================== */
  /* Mobile View */
  padding: 20px;
  min-height: 100vh;
  padding-block: 40px;
  background-color: #f0f8ff;
  .container {
    gap: 30px;
    display: flex;
    margin-top: 80%;
    flex-direction: column;
  }
  .text_area_container {
    gap: 30px;
    display: flex;
    flex-direction: column;
  }
  .heading {
    font-size: 1.9rem;
    font-weight: bolder;
    font-family: "DM Sans", system-ui;
  }
  .first_section_div,
  .media_container {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
  .sub_heading,
  .phone,
  .email,
  .social,
  .address {
    font-size: 0.9rem;
    font-family: "Poppins", system-ui;
  }
  .media_container {
    gap: 20px;
  }
  .address_header,
  .social_header,
  .email_header,
  .phone_header {
    font-size: 1.2rem;
    font-weight: bolder;
    font-family: "DM Sans", system-ui;
  }
  /* ==================================== */
  /* Ipad View */
  @media (width >= 764px) {
    .container {
      margin-top: 35%;
    }
  }
  /* ==================================== */
  @media (width >= 1024px) {
    .container {
      display: grid;
      margin-top: 25%;
      justify-content: space-evenly;
      grid-template-columns: 48% 48%;
    }
    .heading {
      font-size: 2.5rem;
    }
    .sub_heading,
    .phone,
    .email,
    .social,
    .address {
      font-size: 1.2rem;
    }
    .address_header,
    .social_header,
    .email_header,
    .phone_header {
      font-size: 1.5rem;
    }
  }
`;
export default FormText;
