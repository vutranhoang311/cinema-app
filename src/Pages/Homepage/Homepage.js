import React from "react";
import MovieList from "Pages/Homepage/MovieList/MovieList";
import Slider from "./Slider/Slider";
import Cinema from "Pages/Cinema/Cinema";
import Loader from "Components/Loader/Loader";
import { useSelector } from "react-redux";
import NewsShowing from "Components/NewsShowing";
import ApplicationShowing from "Components/ApplicationShowing/ApplicationShowing";

import ScrollAnimation from "react-animate-on-scroll";
const Homepage = () => {
  // const { isLoading } = useSelector((state) => state.cinemaSlice);
  // if (isLoading) return <Loader />;
  return (
    <div>
      <Slider />

      <ScrollAnimation animateIn="animate__fadeIn">
        <MovieList />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeIn">
        <Cinema />
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeIn">
        <NewsShowing />
      </ScrollAnimation>
      <ApplicationShowing />
    </div>
  );
};

export default Homepage;
