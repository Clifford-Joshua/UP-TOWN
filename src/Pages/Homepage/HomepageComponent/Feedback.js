import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Navigate } from "react-router-dom";
const Feedback = () => {
  // const navigate = Navigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [feedback, setFeedBack] = useState("");
  const [emailat, setEmailAt] = useState(false);
  const [namevalue, setNameValue] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [namelength, setNameLength] = useState(false);
  const [emailvalue, setemailValue] = useState(false);
  const [feedbackvalue, setfeedbackValue] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameValue(true);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
    if (name.length < 4) {
      setNameLength(true);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
    if (email === "") {
      setemailValue(true);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
    if (!email.includes("@")) {
      setEmailAt(true);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
    if (feedback.length < 5) {
      setfeedbackValue(true);
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    const timeinterval = setInterval(() => {
      setNameValue(false);
      setNameLength(false);
      setemailValue(false);
      setEmailAt(false);
      setfeedbackValue(false);
    }, 8000);
    if (submitted) {
      window.location.pathname = "/submitted";
      // navigate("./submitted");
    }
    return () => clearInterval(timeinterval);
  });
  return (
    <Wrapper>
      <div>
        <h1 className="">Feedback</h1>
        <p>
          "We value your feedback! At Up-Town, we are committed to continuously
          improving our services and your experience. Please take a moment to
          share your thoughts with us."
        </p>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-container">
            <h1 className="text-black fw-bolder heading">FeedBack Form</h1>
            {/* ======= Name ============= */}
            <div className="name">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              {namevalue && (
                <h5 className="text-danger fw-bold">please fill this field</h5>
              )}
              {namelength && (
                <h5 className="text-danger fw-bold">Tell us your full name</h5>
              )}
            </div>
            {/* ======= Email ============ */}
            <div className="email">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="@gmail.com"
              />
              {emailvalue && (
                <h5 className="text-danger fw-bold">please fill this field</h5>
              )}
              {emailat && (
                <h5 className="text-danger fw-bold">
                  gmail must contain @gmail.com
                </h5>
              )}
            </div>
            {/* =======dropdown========= */}
            <div className="mb-3 select">
              <label htmlFor="" className="form-label">
                Type of feedback <span className="required">*</span>
              </label>
              <select
                className="form-select form-select-lg"
                name=""
                id=""
                required
              >
                <option defaultValue={"Sevice"}>Service</option>
                <option value="Website">Website</option>
                <option value="Support">Support</option>
                <option value="Issues">Issues</option>
                <option value="General">General</option>
              </select>
            </div>
            {/* textarae */}
            <div className="feedbackbox">
              <label htmlFor="feedbackbox">
                Feedback Box <span className="required">*</span>
              </label>
              <textarea
                name="feedbackbox"
                id="feedbackbox"
                placeholder="Write your feedback here............"
                value={feedback}
                onChange={(e) => setFeedBack(e.target.value)}
              ></textarea>
              {feedbackvalue && (
                <h5 className="text-danger fw-bold">
                  your feedback is highly recommended
                </h5>
              )}
            </div>
            {/* textarea */}
            <div className="suggestions">
              <label htmlFor="suggestions">suggestions</label>
              <textarea
                name="suggestions"
                id="suggestions"
                placeholder="Support us by giving us interesting ideas you wish we could implement"
              ></textarea>
            </div>
            {/* choose file */}
            <div>
              <div className="mb-3">
                <label htmlFor="" className="form-label text-black">
                  Upload a screenshot
                </label>
                <input
                  type="file"
                  className="form-control"
                  name=""
                  id=""
                  placeholder=""
                  aria-describedby="fileHelpId"
                />
                <div id="fileHelpId" className="form-text">
                  Send us a Screenshot If Issue isn't resolved in the next 1
                  hour.
                </div>
              </div>
            </div>
            <button className="btn submit-btn m-4" type="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ======================================== */
  /* Desktop View */
  padding: 20px;
  color: white;
  .form {
    width: 60%;
    margin: auto;
    display: flex;
    margin-top: 50px;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 1px 2px 2px 6px lightgray;
  }
  .heading {
    height: 100px;
    display: flex;
    letter-spacing: 3px;
    align-items: center;
    justify-content: center;
  }
  .form-container {
    gap: 20px;
    width: 70%;
    display: grid;
    grid-template-columns: auto;
  }
  :is(.name, .email, .select, .feedbackbox, .suggestions) {
    gap: 20px;
    color: black;
    display: flex;
    font-size: 1.3rem;
    font-weight: bold;
    flex-direction: column;
    text-transform: capitalize;
  }

  :is(.email, .name) input {
    border: none;
    font-size: 1.3rem;
    padding: 8px 40px;
    border-radius: 20px;
    background-color: rgb(233, 236, 236);
  }
  :is(.suggestions, .feedbackbox) textarea {
    border: none;
    min-height: 140px;
    padding: 8px 40px;
    border-radius: 10px;
    background-color: rgb(233, 236, 236);
  }
  input:focus,
  textarea:focus {
    border: none;
    font-weight: bold;
    background-color: white;
  }
  .required {
    color: red;
  }
  .submit-btn {
    width: 100%;
    margin-left: 0 !important;
  }
  /* ============================= */
  /* Mobile View */
  @media (width <= 764px) {
    padding: 0;
    .form-container,
    .form {
      width: 100%;
      box-shadow: none;
      background-color: transparent;
    }
    .heading {
      color: white !important;
    }
    .form {
      padding: 10px;
    }
    input {
      font-size: 0.9rem !important;
    }
    :is(.name, .email, .select, .feedbackbox, .suggestions) {
      color: white !important;
    }
    .btn {
      width: 80%;
      margin: auto !important;
    }
    p {
      font-size: 0.8rem;
    }
  }
  /* =============================== */

  /* =============================== */
  /* Ipad View */
  @media (764px <= width <= 1024px) {
    .form-container,
    .form {
      width: 100%;
    }
    .form {
      padding: 15px;
    }
    .btn {
      width: 90%;
    }
  }
  /* =============================== */
`;

export default Feedback;
