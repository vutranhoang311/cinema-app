import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBanner } from "Slices/movieSlice";
import BannerShowing from "Pages/BannerShowing/BannerShowing";
import Loader from "Components/Loader/Loader";

const Slider = () => {
  const dispatch = useDispatch();
  const { banners, isLoading } = useSelector((state) => {
    return state.movieSlice;
  });

  useEffect(() => {
    dispatch(getBanner());
  }, []);
  if (isLoading) return <Loader />;

  return <BannerShowing banners={banners} />;
};

export default Slider;
