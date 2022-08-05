import React from "react";
import MovieList from "Pages/Homepage/MovieList/MovieList";
import Slider from "./Slider/Slider";
import Cinema from "Pages/Cinema/Cinema";
import Loader from "Components/Loader/Loader";
import { useSelector } from "react-redux";

const Homepage = () => {
  // const { isLoading } = useSelector((state) => state.cinemaSlice);
  // if (isLoading) return <Loader />;
  return (
    <div>
      <Slider />
      <MovieList />
      <Cinema />
    </div>
  );
};

export default Homepage;
