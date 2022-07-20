import axiosClient from "Services/axiosClient";

const movieAPI = {
  getBanner: () => {
    return axiosClient.get(`/QuanLyPhim/LayDanhSachBanner`);
  },
  getMovieList: () => {
    return axiosClient.get(`/QuanLyPhim/LayDanhSachPhim`);
  },
};

export default movieAPI;
