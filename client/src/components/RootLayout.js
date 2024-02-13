import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import NewNav from "./newNavbar/NewNav";

function RootLayout() {
  return (
    <>
      <Navbar />
      <NewNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
