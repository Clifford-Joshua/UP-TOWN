import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
const Sharedpages = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Sharedpages;
