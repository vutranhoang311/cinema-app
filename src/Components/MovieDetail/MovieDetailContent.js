import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import React from "react";
import theme from "theme";
import styles from './movieDetailContent.module.scss'
const MovieDetailContent = ({ title, rating, desc, openingDay }) => {
  return (
    <Box className="text-white mt-2 p-2 flex flex-col gap-3 md:w-[40%]">
      <h1 className="text-xl md:text-2xl font-bold">{title}</h1>

      <h1>
        <span className="text-[#fafafa]"> Đánh giá: </span>{" "}
        <span className={`text-[#f44336]`}>{rating} </span>/ 10
      </h1>

      <h3>Ngày khởi chiếu: {dayjs(openingDay).format("MM-DD-YYYY")}</h3>

      <h2 className={`${styles["title"]} my-4`}>NỘI DUNG PHIM</h2>
      <p>{desc}</p>
    </Box>
  );
};

export default MovieDetailContent;
