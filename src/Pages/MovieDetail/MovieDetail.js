import MovieDetailShowing from "Components/MovieDetail/MovieDetailShowing";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieInfo, getMoviePlaySchedule } from "Slices/movieSlice";

const MovieDetail = () => {
  const { movieId } = useParams("movieId");
  const { movie, moviePlaySchedule } = useSelector((state) => state.movieSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieInfo(movieId));
    dispatch(getMoviePlaySchedule(movieId));
  }, []);

  return (
    <MovieDetailShowing movie={movie} moviePlaySchedule={moviePlaySchedule} />
  );
};

export default MovieDetail;
