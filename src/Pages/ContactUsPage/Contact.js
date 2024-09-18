import React from "react";
import { ContactImg, FormText } from "./ContactUsComponent";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <ContactImg />
      <FormText />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Contact;
