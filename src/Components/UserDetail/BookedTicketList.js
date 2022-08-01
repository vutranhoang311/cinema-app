import React from "react";

const BookedTicketList = ({ bookedTicketList }) => {
  console.log(bookedTicketList);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-white w-full md:w-[640px] flex flex-col justify-center items-center p-3  rounded">
        <div className="w-full md:w-[80%]">
          <h1 className="text-black font-extrabold mb-5">Lịch sử đặt vé </h1>
        </div>
      </div>
    </div>
  );
};

export default BookedTicketList;
