import dayjs from "dayjs";
import React from "react";
import "./BookedTicketList.scss";
const BookedTicketList = ({ bookedTicketList }) => {
  const renderTicket = () => {
    if (bookedTicketList.length < 1)
      return (
        <h1 className="text-[#fb4226] font-extrabold mb-5">
          Không có thông tin{" "}
        </h1>
      );

    return bookedTicketList.map((ticket, index) => {
      return (
        <div key={index} className="cardWrap">
          <div className="card cardLeft">
            <h1>{ticket.tenPhim}</h1>
            <div className="title ">
              <h2>{ticket.danhSachGhe[0].tenHeThongRap}</h2>
              <span className="font-bold text-[1rem]">
                Mã vé: {ticket.maVe}
              </span>{" "}
              <span>Giá vé: {ticket.giaVe}</span>
              <h2>Thời lượng: {ticket.thoiLuongPhim} phút</h2>
              <span>
                Ngày chiếu:{dayjs(ticket.ngayDat).format("DD/MM/YYYY - HH:mm")}
              </span>
            </div>
            <div className="seat">
              {ticket.danhSachGhe.map((seat, index) => {
                return (
                  <span key={index} className="mr-[5px]">
                    {seat.tenCumRap} - Ghế {seat.tenGhe}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="card cardRight">
            <div className="number">
              <div className="eye"></div>

              <h3 className="text-sm">{ticket.maVe}</h3>
              <span>mã vé</span>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-white text-black w-full lg:w-[90%] flex flex-col justify-center items-center p-3  rounded">
        <div className="w-full md:w-[80%]">
          <h1 className="text-black font-extrabold mb-5">Lịch sử đặt vé </h1>
          <div className="flex flex-wrap lg:flex-col h-[480px] overflow-x-hidden">
            {renderTicket()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTicketList;
