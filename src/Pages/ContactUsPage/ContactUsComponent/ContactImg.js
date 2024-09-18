import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageLoader from "../../../SharedPages/Loader/PageLoader";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import DefaultImg from "../../../Image-Assets/ContactUs/Default.jpg";
import ContactBg from "../../../Image-Assets/ContactUs/ContactUs.jpg";
const url = "https://randomuser.me/api/";
const ContactImg = () => {
  const [Loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const HandleValue = (e) => {
    if (e.target.classList.contains("btn")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };
  const FetchPerson = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const personDetails = data.results[0];
      const {
        name: { first, last },
        email,
        location: {
          street: { number, name },
        },
        dob: { age },
        phone,
        picture: { large: image },
        login: { password },
      } = personDetails;

      const newDetails = {
        image,
        name: `${first} ${last}`,
        email,
        street: `${number} ${name}`,
        age,
        phone,
        password,
      };
      setPerson(newDetails);
      setLoading(false);
      setTitle("name");
      setValue(newDetails.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchPerson();
  }, []);
  if (Loading) {
    return <PageLoader />;
  }
  return (
    <Wrapper>
      <div className="img_container">
        <img src={ContactBg} alt="CONTACT US" />
        <h3 className="heading">Contact us</h3>
        <div className="our_staff">
          <div className="bg-secondary-subtle color_div">
            <div className="staff_img_div">
              <img src={(person && person.image) || DefaultImg} alt="" />
            </div>
          </div>
          <article>
            <div className="w-100">
              <h4 className="statement">My {title} Is</h4>
              <h3 className="staff_name text-uppercase">{value}</h3>
              <div className="icons_holder">
                <button
                  onMouseOver={HandleValue}
                  className="btn"
                  data-label="name"
                >
                  <FaUser />
                </button>
                <button
                  onMouseOver={HandleValue}
                  className="btn"
                  data-label="email"
                >
                  <FaEnvelopeOpen />
                </button>
                <button
                  onMouseOver={HandleValue}
                  className="btn"
                  data-label="street"
                >
                  <FaMap />
                </button>
                <button
                  onMouseOver={HandleValue}
                  className="btn"
                  data-label="password"
                >
                  <FaLock />
                </button>
                <button
                  onMouseOver={HandleValue}
                  className="btn"
                  data-label="age"
                >
                  <FaCalendarTimes />
                </button>
                <button
                  onMouseOver={HandleValue}
                  className="btn"
                  data-label="phone"
                >
                  <FaPhone />
                </button>
              </div>
            </div>
          </article>
          <button className="btn text-capitalize" onClick={FetchPerson}>
            {Loading ? "Loading" : "Our customer care"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* =================================== */
  /* Mobile View */
  .img_container {
    height: 40vh;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .heading {
    left: 5%;
    top: 10%;
    color: white;
    font-size: 2.2rem;
    position: absolute;
    text-shadow: 2px 2px 3px black;
    font-family: "DM Sans", system-ui;
  }
  .our_staff {
    top: 50%;
    width: 95%;
    z-index: 22;
    display: flex;
    position: absolute;
    padding-bottom: 20px;
    justify-content: center;
    flex-direction: column;
    background-color: white;
  }
  .color_div {
    height: 20vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-bottom: 1.5px solid gray;
  }
  article {
    display: grid;
    margin-top: 15%;
    align-items: end;
    text-align: center;
    padding-block: 20px;
    justify-content: center;
    grid-template-columns: 1fr;
  }
  .statement {
    color: gray;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .staff_img_div {
    top: 20%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    border: 4px solid white;
    outline: 1.5px solid gray;
  }
  .icons_holder {
    width: 90%;
    margin: auto;
    padding: 10px;
    display: flex;
    font-size: 2rem;
    justify-content: space-evenly;
  }
  /* ================================== */

  /* ================================== */
  /* Ipad View */
  @media (width >= 764px) {
    .color_div {
      height: 15vh;
    }
    article {
      margin-top: 10%;
    }
  }
  /* ================================== */

  /* ================================== */
  /* Desktop View */
  @media (width >= 1024px) {
    .our_staff {
      width: 60%;
    }
    .heading {
      font-size: 4rem;
    }
    .color_div {
      height: 18vh;
    }
  }
  /* ================================== */
`;
export default ContactImg;
