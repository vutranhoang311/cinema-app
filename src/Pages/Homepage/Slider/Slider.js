import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBanner } from "Slices/movieSlice";
import BannerShowing from "Components/BannerShowing/BannerShowing";

const Slider = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => {
    return state.banners;
  });

  useEffect(() => {
    dispatch(getBanner());
  }, []);

  return <BannerShowing banners={banners} />;
};

export default Slider;
