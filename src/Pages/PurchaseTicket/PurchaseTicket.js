import PurchaseTicketShowing from "Components/PurchaseTicketShowing/PurchaseTicketShowing";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicketList } from "Slices/bookingTicketSlice";

const PurchaseTicket = () => {
  const { playingDateId } = useParams();
  const { ticketListByMovie } = useSelector(
    (state) => state.bookingTicketSlice
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // call API maLichChieu
    dispatch(getTicketList(playingDateId));
  }, []);
  return <PurchaseTicketShowing ticketListByMovie={ticketListByMovie} />;
};

export default PurchaseTicket;
