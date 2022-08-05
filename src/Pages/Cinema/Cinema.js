import CinemaShowing from "Components/CinemaShowing/CinemaShowing";
import Loader from "Components/Loader/Loader";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaScheduleList } from "Slices/cinemaSlice";

const Cinema = () => {
  const dispatch = useDispatch();
  const { cinemaList ,isLoading} = useSelector((state) => state.cinemaSlice);
  useEffect(() => {
    dispatch(getCinemaScheduleList());
  }, []);

  if (isLoading) return <Loader />;

  if (cinemaList.length) return <CinemaShowing cinemaList={cinemaList} />;
};

export default Cinema;
