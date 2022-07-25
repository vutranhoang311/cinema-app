import React from "react";
// import Swiper Component
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Box } from "@mui/material";
import styled from "styled-components";
import { Navigation, Pagination, Autoplay } from "swiper";

const StyledBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30rem;
  @media (max-width: 768px) {
    height: 15rem;
  }
`;
const StyledSwiper = styled(Swiper)`
  margin: 1rem 0;
`;

const BannerShowing = ({ banners }) => {
  const slides = banners.map((banner) => (
    <SwiperSlide tag="li" key={banner.maPhim}>
      <StyledBox>
        <StyledBanner src={banner.hinhAnh} alt={banner.hinhAnh} />
      </StyledBox>
    </SwiperSlide>
  ));

  
  return (
    <React.Fragment>
      <StyledSwiper
        wrapperTag="div"
        tag="ul"
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides}
      </StyledSwiper>
    </React.Fragment>
  );};

export default BannerShowing;
