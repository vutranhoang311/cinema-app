// page

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useWindowSize from "hooks/useWindowSize";

import { getMovieList } from "Slices/movieSlice";

import MovieGridCarouselShowing from "Components/MovieList/MovieGridCarouselShowing";

const MovieList = () => {
  const { movieList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { windowSize } = useWindowSize();
  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  return <MovieGridCarouselShowing movieList={movieList} />;
};

export default MovieList;
