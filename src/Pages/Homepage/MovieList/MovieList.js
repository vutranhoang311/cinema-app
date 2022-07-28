// page

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMovieList } from "Slices/movieSlice";

import MovieShowing from "Components/MovieShowing/MovieShowing";

const MovieList = () => {
  const { movieList } = useSelector((state) => state.movieSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  return <MovieShowing movieList={movieList} />;
};

export default MovieList;
