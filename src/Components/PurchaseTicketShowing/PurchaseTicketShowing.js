import { Box, Container } from "@mui/material";
import Loader from "Components/Loader/Loader";
import React from "react";
import { useSelector } from "react-redux";
import MovieInformations from "./MovieInformations";
import PurchaseDetail from "./PurchaseDetail";

const PurchaseTicketShowing = ({ ticketListByMovie }) => {
  const { isLoading, choosingSeats, totalPrice } = useSelector(
    (state) => state.bookingTicketSlice
  );
  if (isLoading) return <Loader />;
  return (
    <Container>
      <Box>
        <MovieInformations
          movieInfo={ticketListByMovie?.thongTinPhim}
          choosingSeats={choosingSeats}
          totalPrice={totalPrice}
        />
      </Box>
      <Box>
        <PurchaseDetail seatList={ticketListByMovie?.danhSachGhe} />
      </Box>
      <Box>
        <MovieInformations
          movieInfo={ticketListByMovie?.thongTinPhim}
          choosingSeats={choosingSeats}
          totalPrice={totalPrice}
        />
      </Box>
    </Container>
  );
};

export default PurchaseTicketShowing;
