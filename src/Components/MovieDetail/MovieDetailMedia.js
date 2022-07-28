import { Box, Modal, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import btnPlay from "Assets/button-play.png";

const MovieDetailMedia = ({ movieImage, movieName, movieTrailer }) => {
  const [isOpen, setOpenTrailer] = useState(false);

  let urlTrailer = useRef(""); // for modal Trailer
  let movieTitle = useRef(""); // for modal Trailer

  const handleOpenTrailerModal = (urlTrailerMovie = "", movieName = "") => {
    urlTrailer.current = urlTrailerMovie;
    movieTitle.current = movieName;
    setOpenTrailer(!isOpen);
  };

  return (
    <Box className="flex justify-center align-middle relative ">
      <img
        src={movieImage}
        alt={movieName}
        className="w-[200px] h-[300px] md:w-[350px] md:h-[500px] object-cover"
      />
      <Box className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Button
          onClick={() => {
            handleOpenTrailerModal(movieTrailer, movieName);
          }}
          className={` w-[5rem]`}
        >
          <img src={btnPlay} alt="play" />
        </Button>
      </Box>

      <Modal
        open={isOpen}
        onClose={() => {
          setOpenTrailer(!isOpen);
        }}
      >
        <Box
          sx={{
            height: "50%",
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
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
    </Box>
  );
};

export default MovieDetailMedia;
