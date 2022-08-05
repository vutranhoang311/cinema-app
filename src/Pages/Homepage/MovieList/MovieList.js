// page

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMovieList } from "Slices/movieSlice";

import MovieShowing from "Components/MovieShowing/MovieShowing";
import Loader from "Components/Loader/Loader";

const MovieList = () => {
  const { movieList, isLoading } = useSelector((state) => state.movieSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);
  if (isLoading) return <Loader />;

  return <MovieShowing movieList={movieList} />;
};

export default MovieList;
