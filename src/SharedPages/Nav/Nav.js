import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../Image-Assets/Home/Logo.png";
import { FaBars, FaHome } from "react-icons/fa";
import { FaPhone, FaBookBookmark } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const refNavHeight = useRef(null);
  const [navToggle, setNavToggle] = useState(false);

  const [windowscrollHeight, setwindowscrollHeight] = useState(0);

  useEffect(() => {
    const navHeight = refNavHeight.current.getBoundingClientRect().height;
    window.addEventListener("scroll", () => {
      setwindowscrollHeight(window.scrollY);
      if (windowscrollHeight > navHeight) {
        refNavHeight.current.style.position = `fixed`;
      } else {
        refNavHeight.current.style.position = `static`;
      }
    });
  }, [windowscrollHeight]);

  return (
    <nav className="d-flex nav " ref={refNavHeight}>
      <div className="logo-conatiner">
        <div className="logo d-flex justify-content-center position-relative">
          <img src={Logo} alt="" className="logo-img" />
          <h2 className="logo-text position-absolute fw-bolder">UP-TOWN</h2>
        </div>
      </div>
      <div className="link-container d-flex flex-column fw-bold">
        <div className="dark-nav text-light bg-dark d-flex align-items-center">
          <p className="w-50  p-2">Save up to 40% Hurry limited offer!</p>
          <p className="w-50 p-2"> Mon-Fri : 09AM to 6PM</p>
        </div>
        <div
          className={`white-nav d-flex align-items-center ${
            navToggle && `nav-toggle`
          }`}
        >
          <div className="col-8 d-flex justify-content-center link-holder">
            <div className="d-flex justify-content-evenly w-75 nav-link-container">
              <NavLink
                to={"UP-TOWN/"}
                className="text-decoration-none link"
                onClick={() => setNavToggle(!navToggle)}
              >
                <FaHome className="me-2 mb-1" />
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className="text-decoration-none link"
                onClick={() => setNavToggle(!navToggle)}
              >
                <FaBookBookmark className="me-2 mb-1" />
                About Us
              </NavLink>
              <NavLink
                to={"/contactus"}
                className="text-decoration-none link"
                onClick={() => setNavToggle(!navToggle)}
              >
                <FaPhone className="me-2 mb-1" />
                Contact Us
              </NavLink>
              <NavLink
                to={"/highrise"}
                className="text-decoration-none link"
                onClick={() => setNavToggle(!navToggle)}
              >
                <BsGlobeEuropeAfrica className="me-2 mb-1" />
                High-Rise
              </NavLink>
              <NavLink
                to={"/login"}
                className="text-decoration-none link"
                onClick={() => setNavToggle(!navToggle)}
              >
                <IoMdPersonAdd className="me-2 mb-1" />
                Login
              </NavLink>
            </div>
          </div>
          <div className="d-flex justify-content-center col tour-btn-container">
            <Link to={""} className="text-capitalize text-decoration-none btn">
              Go to dashboard
            </Link>
          </div>
        </div>
        <button
          className="btn toggle-btn"
          onClick={() => setNavToggle(!navToggle)}
        >
          {navToggle ? <IoClose className="fs-3" /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
