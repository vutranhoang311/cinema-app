import { Box } from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";

const MovieInformations = ({ movieInfo, choosingSeats, totalPrice }) => {
  if (!movieInfo) return;
  return (
    <Box className="w-full bg-[#f1f1f1] p-[10px] my-[15px]">
      <Box className="flex">
        <Box className="w-[30%]">
          <img src={movieInfo.hinhAnh} alt={movieInfo.tenPhim} />
        </Box>
        <Box className="ml-2 divide-y divide-slate-300 divide-dotted">
          <h1 className="text-[1.5em]">{movieInfo.tenPhim}</h1>
          <p className="text-[13px] my-3">
            <strong>Rạp: </strong>
            {movieInfo.tenCumRap} - {movieInfo.tenRap}
          </p>
          <p className="text-[13px] my-3">
            <strong>Suất chiếu: </strong>
            {movieInfo.gioChieu} {movieInfo.ngayChieu}
          </p>
          <p className="text-[13px] my-3 w-[200px] break-words	">
            <strong>Ghế: </strong>
            {choosingSeats.map((seat, index) => (
              <span key={index} className="ml-1">
                {seat.tenGhe}
                {index === choosingSeats.length - 1 ? "" : ","}
              </span>
            ))}
          </p>

          <p className="text-[13px] my-3">
            <strong>Tổng: </strong>
            <NumberFormat
              className="text-[#f26b38] sm:text-[2rem] font-bold text-[1.5rem]"
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
            />

            <span className="text-[#f26b38] sm:text-[2rem] text-[1.5rem]">
              VNĐ
            </span>
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieInformations;
