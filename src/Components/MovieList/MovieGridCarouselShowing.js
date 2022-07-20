import React, {  useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import styles from "./styles.module.css";

// import required modules
import { Grid, Pagination } from "swiper";

// import required UI component
import {
  Box,
  Typography,
  Button,
  Modal,
} from "@mui/material";

import btnPlay from "Assets/button-play.png";
import { useNavigate } from "react-router-dom";

const MovieGridCarouselShowing = ({ movieList }) => {
  const navigate = useNavigate();
  const [isOpen, setOpenTrailer] = useState(false);

  let urlTrailer = useRef(""); // for modal Trailer
  let movieTitle = useRef(""); // for modal Trailer

  const handleOpenTrailerModal = (urlTrailerMovie = "", movieName = "") => {
    urlTrailer.current = urlTrailerMovie;
    movieTitle.current = movieName;
    setOpenTrailer(!isOpen);
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
                <img src={btnPlay} alt="play"/>
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
    <div className="container mx-auto px-4">
      <Swiper
        className={`${styles.swiper}`}
        tag="section"
        wrapperTag="div"
        modules={[Grid, Pagination]}
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
              rows: 2,
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

export default MovieGridCarouselShowing;
