import LoginModal from "Components/LoginModal/LoginModal";
import PurchaseTicket from "Pages/PurchaseTicket/PurchaseTicket";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  // const { currentUser } = useSelector((state) => state.autheticationSlice);
  // console.log(currentUser);
  const [open, setOpenModal] = useState(true);
  const handleOpen = () => {
    setOpenModal(!open);
  };
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return (
      <>
        <Navigate to="member"></Navigate>{" "}
        <LoginModal open={open} handleOpen={handleOpen} />
      </>
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
