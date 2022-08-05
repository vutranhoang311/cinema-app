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
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      email: user.email,
      soDt: user.soDt,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: user.hoTen,
    });
  },
};
export default userAPI;
