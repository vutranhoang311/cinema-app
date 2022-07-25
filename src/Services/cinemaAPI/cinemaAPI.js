import axiosClient from "Services/axiosClient";

const cinemaAPI = {
  getCinemaList: () => {
    return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
};

export default cinemaAPI;
