import React from "react";
import Hero from "./Hero";
import About from "./About";
import Reviews from "./Reviews";
import Carousel from "../Helpers/Carousel";

const HomeMain = () => {
  return (
    <>
      <Hero />
      <Carousel title={"Popular Items"} />
      <About />
      <Reviews />
    </>
  );
};

export default HomeMain;
