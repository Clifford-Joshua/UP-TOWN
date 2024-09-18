import React from "react";
import styled from "styled-components";
const Form = () => {
  const FormSubmit = (e) => {
    e.preventDefault();

    window.location.pathname = `submitted`;
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={FormSubmit}>
        <div className="form_row">
          <label htmlFor="" className="form_label">
            Name
          </label>
          <input type="text" className="form_text_input" required />
        </div>
        <div className="form_row">
          <label htmlFor="" className="form_label">
            Email
          </label>
          <input type="text" className="form_text_input" required />
        </div>
        <div className="form_row">
          <label htmlFor="" className="form_label">
            What Service are you interested in ?
          </label>
          <input type="text" className="form_text_input" />
        </div>
        <div className="form_row">
          <label htmlFor="" className="form_label">
            Message
          </label>
          <textarea
            name=""
            id=""
            className="form_text_input"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ==================================== */
  /* Mobile View */
  padding-block: 10px;
  .form {
    gap: 35px;
    display: flex;
    flex-direction: column;
  }
  .form_row {
    gap: 15px;
    display: flex;
    flex-direction: column;
    font-family: "Poppins", system-ui;
  }
  .form_label {
    font-weight: bold;
    font-size: 0.8rem;
  }
  .form_text_input {
    height: 35px;
    border: none;
    outline: none;
    padding: 20px;
    font-size: 0.7rem;
    border-radius: 8px;
  }
  .form_text_input:focus {
    border: 1px solid lightgray;
  }
  textarea.form_text_input {
    height: 100px;
  }
  .btn:hover {
    color: white !important;
    background-color: blue;
  }
  /* =================================== */
  /* Ipad View */
  @media (width>= 764px) {
    .form_label {
      font-size: 1rem;
    }
  }
  @media (width >= 1024px) {
    .form_label {
      font-size: 1.2rem;
    }
    .form_text_input {
      height: 60px;
      font-size: 1rem;
    }
    textarea.form_text_input {
      height: 200px;
    }
  }
`;
export default Form;
