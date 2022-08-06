import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modifyChoosingSeats, purchaseTicket } from "Slices/bookingTicketSlice";
import styled from "styled-components";
import Swal from "sweetalert2";

const Seat = styled.button`
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.inputColor || "#dbdee1"};
  border-radius: 5px;
  margin: 0 8px 8px 0;
`;

const PurchaseDetail = ({ seatList, playingDateId }) => {
  const navigate = useNavigate();
  const { choosingSeats } = useSelector((state) => state.bookingTicketSlice);
  const dispatch = useDispatch();
  if (!seatList) return;
  const renderSeats = () => {
    return seatList.map((seat, index) => {
      let classChoosingSeat = "";
      const indexSeat = choosingSeats.findIndex(
        (choosingSeat) => choosingSeat.maGhe === seat.maGhe
      );
      indexSeat === -1
        ? (classChoosingSeat = "")
        : (classChoosingSeat = "bg-[#7dc71d]");

      return (
        <Fragment key={index}>
          <Seat
            inputColor={seat.loaiGhe === "Vip" ? "#FB923C" : ""}
            onClick={() => {
              dispatch(modifyChoosingSeats(seat));
            }}
            disabled={seat.daDat}
            className={`${classChoosingSeat} 
             ${seat.daDat ? "bg-[#0cbfca] cursor-not-allowed" : ""}
             `}
          >
            {seat.daDat ? "X" : seat.tenGhe}
          </Seat>
          {(index + 1) % 16 == 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  const handlePurchaseTicket = () => {
    const ticket = {
      maLichChieu: playingDateId,
      danhSachVe: choosingSeats,
    };
    dispatch(purchaseTicket(ticket))
      .unwrap()
      .then((originalPromiseResult) => {
        Swal.fire({
          title: originalPromiseResult.content,
          icon: "success",
          timer: 2000,
        });
        navigate("/member");
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
        console.log(rejectedValueOrSerializedError);
      });
  };
  return (
    <Container>
      <Box className=" w-full p-5 bg-[#e11c01] flex flex-col justify-center items-center">
        <h1 className=" w-full  p-1 bg-[#e11c01] text-left text-[18px] md:text-3xl text-white break-words">
          CHỌN GHẾ:
          {choosingSeats.map((seat, index) => (
            <span key={index} className="ml-1">
              {seat.tenGhe}
              {index === choosingSeats.length - 1 ? "" : ","}
            </span>
          ))}
        </h1>
        <Box className="flex flex-col justify-center items-center bg-white overflow-x-scroll p-5">
          <Box className=" m-auto p-5 w-[700px]">{renderSeats()}</Box>
          <Box className="w-[600px] flex flex-col justify-center items-center m-auto">
            <p className="w-[80%] my-3 text-center border-b-4 border-indigo-500">
              Màn hình
            </p>
            <Box className="w-full flex  justify-between items-center gap-2">
              <Box className="flex">
                <span className="w-[20px] h-[20px] bg-[#7dc71d] mr-2"></span>
                <p>Ghế đang chọn</p>
              </Box>
              <Box className="flex">
                <span className="w-[20px] h-[20px] bg-[#dbdee1] mr-2"></span>
                <p> Ghế có thể chọn</p>
              </Box>
              <Box className="flex">
                <span className="w-[20px] h-[20px] bg-orange-400 mr-2"></span>
                <p>Ghế Vip</p>
              </Box>
              <Box className="flex">
                <span className="w-[20px] h-[20px] bg-[#0cbfca] mr-2"></span>
                <p>Không thể chọn</p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Button
          onClick={handlePurchaseTicket}
          variant="contained"
          className="w-full p-1 m-2 bg-[#689f39] hover:bg-[#689f99] max-w-[500px]
        text-left text-[18px] md:text-3xl text-white break-words"
        >
          ĐẶT VÉ
        </Button>
      </Box>
    </Container>
  );
};

export default PurchaseDetail;
