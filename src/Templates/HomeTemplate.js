import React from "react";
import { Outlet } from "react-router-dom";
import Header from "Components/Header/Header";
import Navbar from "Components/Navbar/Navbar";
import Footer from "Components/Footer/Footer";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
};

export default HomeTemplate;
