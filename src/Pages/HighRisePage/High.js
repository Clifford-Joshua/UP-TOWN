import React from "react";
import { HighRiseImg, Introduction, GalleryPage } from "./HighRiseComponent";
import styled from "styled-components";
const High = () => {
  return (
    <Wraper>
      <HighRiseImg />
      <Introduction />
      <GalleryPage />
    </Wraper>
  );
};
const Wraper = styled.div``;
export default High;
