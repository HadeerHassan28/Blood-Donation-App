import React from "react";
import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="pt-5">
      <Navbar></Navbar>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
