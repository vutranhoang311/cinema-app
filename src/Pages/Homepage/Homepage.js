import React from "react";
import Demo1 from "_playGround/demo1";
import Demo from "_playGround/demoSwiper";
import MovieList from "Pages/Homepage/MovieList/MovieList";
import Slider from "./Slider/Slider";
import Cinema from "Pages/Cinema/Cinema";

const Homepage = () => {
  return (
    <div>
      <Slider />
      <MovieList />
      <Cinema />
    </div>
  );
};

export default Homepage;
