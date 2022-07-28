import axiosClient from "Services/axiosClient";

const movieAPI = {
  getBanner: () => {
    return axiosClient.get(`/QuanLyPhim/LayDanhSachBanner`);
  },
  getMovieList: () => {
    return axiosClient.get(`/QuanLyPhim/LayDanhSachPhim`);
  },
  getMovieInfo: (movieId) => {
    return axiosClient.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`);
  },
  getMoviePlaySchedule: (movieId) => {
    return axiosClient.get(
      `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`
    );
  },
};

export default movieAPI;
