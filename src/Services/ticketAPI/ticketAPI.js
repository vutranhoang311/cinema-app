import axiosClient from "Services/axiosClient";

const ticketAPI = {
  getTicketList: (maLichChieu) => {
    return axiosClient.get(
      `/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`
    );
  },
  purchaseTicket: (ticketData) => {
    return axiosClient.post(`/QuanLyDatVe/DatVe`, ticketData);
  },
};

export default ticketAPI;
