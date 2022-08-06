import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNowPlayingStatus,
  setUpcomingPlayingStatus,
} from "Slices/movieSlice";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";
// import required modules
import { Grid, Pagination, Navigation } from "swiper";
// import required UI component
import { Box, Typography, Button, Modal } from "@mui/material";
import btnPlay from "Assets/button-play.png";
import { useNavigate } from "react-router-dom";

const MovieShowing = ({ movieList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nowPlaying, upComingPlaying } = useSelector(
    (state) => state.movieSlice
  );
  const [isOpen, setOpenTrailer] = useState(false);
  let urlTrailer = useRef(""); // for modal Trailer
  let movieTitle = useRef(""); // for modal Trailer

  const handleOpenTrailerModal = (urlTrailerMovie = "", movieName = "") => {
    urlTrailer.current = urlTrailerMovie;
    movieTitle.current = movieName;
    setOpenTrailer(!isOpen);
  };

  const handleNowPlayingList = () => {
    dispatch(setNowPlayingStatus());
  };
  const handleUpcomingPlayingStatus = () => {
    dispatch(setUpcomingPlayingStatus());
  };

  const goToDetailsPage = (idMovie) => {
    navigate("/detail/" + idMovie);
  };

  const renderSlide = () => {
    return movieList.map((movie) => {
      return (
        <SwiperSlide
          tag="div"
          key={movie.maPhim}
          className={`${styles.swiperSlide} md:flex-col`}
        >
          <Box className={`${styles.media} h-full w-2/5 md:w-full relative`}>
            <img src={movie.hinhAnh} alt="" className={styles.imageMovie} />

            <Box className={` ${styles.layoutTrailer} `}>
              <Button
                onClick={() => {
                  handleOpenTrailerModal(movie.trailer, movie.tenPhim);
                }}
                className={`${styles.btnTrailer} w-[5rem]`}
              >
                <img src={btnPlay} alt="play" />
              </Button>
            </Box>
          </Box>
          <Box
            className={`${styles.cardContent} w-3/5 md:w-full flex flex-col justify-between align-baseline p-4 text-left`}
          >
            <div
              className={`${styles.top} md:flex md:flex-col md:align-baseline `}
            >
              <h3 className="font-semibold ">{movie.tenPhim}</h3>
              <Typography
                variant="body1"
                component={`p`}
                className={`${styles.movieDesc}`}
              >
                {movie.moTa}
              </Typography>
            </div>

            <div className={styles.btnTicket}>
              <Button
                variant="contained"
                size="large"
                className=" w-full mt-2 py-4 text-white font-semibold text-20 font-bold bg-orange-500 rounded-[5px]"
                onClick={() => goToDetailsPage(movie.maPhim)}
              >
                MUA VÉ
              </Button>
            </div>
          </Box>
        </SwiperSlide>
      );
    });
  };

  return (
    <div id="movie-showing" className="container mx-auto px-4">
      <Button
        className={nowPlaying ? `${styles.btnFilterActive}` : ""}
        variant="outlined"
        sx={{ marginRight: 2 }}
        onClick={handleNowPlayingList}
      >
        Phim đang chiếu
      </Button>
      <Button
        className={upComingPlaying ? `${styles.btnFilterActive}` : ""}
        variant="outlined"
        onClick={handleUpcomingPlayingStatus}
      >
        Phim sắp chiếu
      </Button>
      <Swiper
        className={`${styles.swiper}`}
        modules={[Grid, Pagination, Navigation]}
        tag="section"
        wrapperTag="div"
        navigation={true}
        slidesPerView={1}
        grid={{
          rows: 4,
          fill: "row",
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 5,
            grid: {
              rows: 4,
              fill: "row",
            },
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
      >
        {renderSlide()}
      </Swiper>

      {/* Modal trailer */}
      <Modal
        open={isOpen}
        onClose={() => {
          setOpenTrailer(!isOpen);
        }}
      >
        <Box className={`${styles.modalBox}`}>
          <iframe
            title={movieTitle.current}
            src={urlTrailer.current
              .replace("watch?v=", "embed/")
              .concat("?autoplay=1")}
            height={"100%"}
            width={"100%"}
            allowFullScreen
            allow="autoplay; encrypted-media"
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
};

export default MovieShowing;
