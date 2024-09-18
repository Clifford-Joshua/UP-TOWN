import React from "react";
import "./PageLoader.css";
import DesktopLoader from "../../Image-Assets/Loader/Load-Logo.png";
import MobileLoader from "../../Image-Assets/Loader/Logo.png";
const PageLoader = () => {
  return (
    <section className="site-loader">
      <div className="large-screen-loader loader-img">
        <img src={DesktopLoader} alt="Logo" />
        <h1 className="loader-text large-screen-text">u</h1>
        <h2 className="styled-text">UP-TOWN</h2>
        <div className="line-loader-container">
          <div className="line-loader"></div>
        </div>
      </div>
      <div className="small-screen-loader loader-img">
        <img src={MobileLoader} alt="Logo" />
        <h1 className="loader-text small-screen-text">UP-TOWN</h1>
        <div className="line-loader-container">
          <div className="line-loader"></div>
        </div>
      </div>
    </section>
  );
};

export default PageLoader;
