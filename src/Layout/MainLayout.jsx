import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-gelion">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
