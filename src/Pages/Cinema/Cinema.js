import CinemaShowing from "Components/CinemaShowing/CinemaShowing";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaScheduleList } from "Slices/cinemaSlice";

const Cinema = () => {
  const dispatch = useDispatch();
  const { cinemaList } = useSelector((state) => state.cinemaSlice);
  useEffect(() => {
    dispatch(getCinemaScheduleList());
  }, []);
  if (cinemaList.length) return <CinemaShowing cinemaList={cinemaList} />;
};

export default Cinema;
