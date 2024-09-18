import React from "react";
import styled from "styled-components";
import { AboutImg, History } from "./AboutComponent";
const About = () => {
  return (
    <Wrapper>
      <AboutImg />
      <History />
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default About;
