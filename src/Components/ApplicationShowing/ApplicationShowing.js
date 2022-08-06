import { Button, Container } from "@mui/material";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import bg from "Assets/background.jpg";
import theme from "theme";
import mobile_1 from "Assets/applicationImage/mobile_1.png";
import mobile_2 from "Assets/applicationImage/mobile_2.jpg";
import mobile_3 from "Assets/applicationImage/mobile_3.jpg";
import mobile_4 from "Assets/applicationImage/mobile_4.jpg";
import mobile_5 from "Assets/applicationImage/mobile_5.jpg";
import mobile_6 from "Assets/applicationImage/mobile_6.jpg";
import mobile_7 from "Assets/applicationImage/mobile_7.jpg";
import mobile_8 from "Assets/applicationImage/mobile_8.jpg";
import mobile_9 from "Assets/applicationImage/mobile_9.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

const ApplicationShowing = () => {
  // <Container id="application-showing">ApplicationShowing</Container>;
  return (
    <section style={{ backgroundImage: `url(${bg})` }}>
      <Container id="application-showing">
        <div className="flex flex-col md:flex-row gap-5 text-white py-[4rem]">
          <ScrollAnimation
            className="w-full md:w-[50%] flex flex-col justify-center items-center gap-2 text-center"
            animateIn="animate__fadeInUp"
          >
            <h1 className=" font-bold text-2xl">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </h1>
            <p className="">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <Button
              variant="contained"
              className={`bg-[#f26b38] hover:bg-[#fa7f1aa6]`}
            >
              App miễn phí - Tải về ngay
            </Button>
            <p className="">
              Có 2 phiên bản
              <a className="mx-3 underline hover:text-[#f26b38]" href="#">
                iOS
              </a>
              <a className="mx-3 underline hover:text-[#f26b38]" href="#">
                Android
              </a>
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            className="w-full md:w-[50%] "
            animateIn="animate__fadeInUp"
          >
            <div className="">
              {/* MOBILE CAROUSEL */}

              <Swiper
                style={{
                  backgroundImage: `url(${mobile_1})`,
                  backgroundSize: "cover",
                }}
                className="mySwiper w-[156px] h-[340px] md:w-[303px] md:h-[641px]"
                autoplay={{ delay: 2000 }}
                grabCursor={true}
                allowTouchMove={true}
                effect={"fade"}
                modules={[EffectFade, Autoplay]}
              >
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px]  absolute top-[-5px]"
                      src={mobile_2}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_3}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_4}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_5}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_6}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_7}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_7}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_8}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      className="scale-[94%] rounded-t-[20px] rounded-b-[40px] absolute top-[-5px]"
                      src={mobile_9}
                      alt="hinhanh"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </section>
  );
};

export default ApplicationShowing;
