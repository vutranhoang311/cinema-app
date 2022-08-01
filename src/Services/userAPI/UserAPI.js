import axiosClient from "Services/axiosClient";

const userAPI = {
  registerNewUser: (user) => {
    return axiosClient.post(`/QuanLyNguoiDung/DangKy`, user);
  },
  signIn: (user) => {
    return axiosClient.post(`/QuanLyNguoiDung/DangNhap`, user);
  },
  getUserInformation: () => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  updateUser: (user) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user);
  },
};
export default userAPI;
