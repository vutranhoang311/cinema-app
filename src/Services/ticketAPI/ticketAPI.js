import axiosClient from "Services/axiosClient";

const ticketAPI = {
  getTicketList: (maLichChieu) => {
    return axiosClient.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`
    );
  },
};

export default ticketAPI;
