import React from "react";
//import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import ContextTheme from "../../Context/Context";
const Layout = () => {
  return (
    <ContextTheme>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </ContextTheme>
  );
};

export default Layout;
