import React from "react";
import Demo1 from "_playGround/demo1";
import Demo from "_playGround/demoSwiper";
import MovieList from "Pages/Homepage/MovieList/MovieList";
import Slider from "./Slider/Slider";

const Homepage = () => {
  return (
    <div>
      <Slider />
      <MovieList />
    </div>
  );
};

export default Homepage;
