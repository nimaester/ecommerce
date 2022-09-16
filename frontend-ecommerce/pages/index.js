import React from "react";
import HomeMain from "../components/Home/index";
import Carousel from "../components/Helpers/Carousel";

const Home = () => {
  return (
    <div>
      <HomeMain />
      <Carousel title={"Popular Items"} />
    </div>
  );
};

export default Home;
