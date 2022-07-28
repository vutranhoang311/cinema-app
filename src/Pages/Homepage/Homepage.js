import React from "react";
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
