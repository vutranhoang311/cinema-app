import React from "react";
import { Outlet } from "react-router-dom";
import Header from "Components/Header/Header";
import Navbar from "Components/Navbar/Navbar";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeTemplate;
