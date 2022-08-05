import { Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MovieDetailMedia from "./MovieDetailMedia";
import backgroundCinema from "Assets/background.jpg";
import MovieDetailContent from "./MovieDetailContent";
import MoviePlaySchedule from "./MoviePlaySchedule";

const MovieDetailShowing = ({ movie, moviePlaySchedule }) => {

  return (
    <Box sx={{ backgroundImage: `url(${backgroundCinema})` }} className="py-2">
      <Container>
        <Box className="md:flex md:gap-5 md:justify-center">
          <MovieDetailMedia
            movieImage={movie.hinhAnh}
            movieName={movie.biDanh}
            movieTrailer={movie.trailer}
          />
          <MovieDetailContent
            title={movie.tenPhim}
            rating={movie.danhGia}
            desc={movie.moTa}
            openingDay={movie.ngayKhoiChieu}
          />
        </Box>
        <Box className="flex flex-col gap-5 justify-center align-middle">
          <MoviePlaySchedule moviePlaySchedule={moviePlaySchedule} />
        </Box>
      </Container>
    </Box>
  );
};

export default MovieDetailShowing;
