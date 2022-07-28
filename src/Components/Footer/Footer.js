import { Logo } from "Components/Header/HeaderStyles";
import React from "react";
import styles from "./Footer.module.scss";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
const Footer = () => {
  return (
    <footer className="py-6 bg-[#1a1a1a] text-white text-left">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 text-left md:col-span-3">
            <h3 className={`${styles.title} pb-4 text-sm font-bold`}>
              GIỚI THIỆU
            </h3>

            <ul className="">
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  VỂ CHÚNG TÔI
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  THỎA THUẬN SỬ DỤNG
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  QUY CHẾ HOẠT ĐỘNG
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  CHÍNH SÁCH BẢO MẬT
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 text-left md:col-span-3">
            <h3 className={`${styles.title} pb-4 text-sm font-bold`}>
              GÓC ĐIỆN ẢNH{" "}
            </h3>

            <ul className="">
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  THỂ LOẠI PHIM
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  BÌNH LUẬN PHIM{" "}
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  GÓC ĐIỆN ẢNH{" "}
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  PHIM HAY THÁNG{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 text-left md:col-span-3">
            <h3 className={`${styles.title} pb-4 text-sm font-bold`}>
              HỖ TRỢ{" "}
            </h3>

            <ul className="">
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  GÓP Ý{" "}
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  SALE & SERVICE
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  RẠP / GIÁ VÉ{" "}
                </a>
              </li>
              <li className="mb-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs"
                >
                  {" "}
                  <DoubleArrowIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                  TUYỂN DỤNG{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 text-left md:col-span-3">
            <ul className="">
              <li className="mb-4">
                {" "}
                <h3 className={`${styles.title} pb-4 text-sm font-bold`}>
                  KẾT NỐI GALAXY CINEMA
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs mr-2"
                >
                  <FacebookIcon fontSize="large" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs mr-2"
                >
                  <YouTubeIcon fontSize="large" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs mr-2"
                >
                  <InstagramIcon fontSize="large" />
                </a>
              </li>
              <li className="mb-2">
                <h3 className={`${styles.title} pb-4 text-sm font-bold`}>
                  DOWNLOAD APP
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs mr-2"
                >
                  <AppleIcon fontSize="large" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-[#a0a3a7] hover:text-[#f26b38] text-xs mr-2"
                >
                  <ShopIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="text-[#a0a3a7] flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            {/* <span>©2022 All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a> */}
            <span>
              Công Ty Cổ Phần Phim Thiên Ngân, Tầng 5, Toà Nhà Mặt Trời Sông
              Hồng, 23 Phan Chu Trinh, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà
              Nội Xem thêm tại: https://www.galaxycine.vn/
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
