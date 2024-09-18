import React from "react";
import {
  Blog,
  Slide,
  Patner,
  Service,
  Feedback,
  Testimony,
  Whychooseus,
} from "./HomepageComponent";
import PageLoader from "../../SharedPages/Loader/PageLoader";
import { useGlobalContent } from "../../Components/Hooks/context";
const Home = () => {
  const { pageLoader } = useGlobalContent();
  if (pageLoader) {
    return <PageLoader />;
  }
  return (
    <section>
      <Slide />
      <Blog />
      <Service />
      <Whychooseus />
      <Testimony />
      <Feedback />
      <Patner />
    </section>
  );
};

export default Home;
