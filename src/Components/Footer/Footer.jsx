import React from "react";
import styles from "./Footer.module.css";
import logoREv from "../../heart-rev.png";
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div
        className={`${styles.footerItem} text-center position-relative mt-5`}
      >
        <div className={`${styles.main}`}>
          <img
            src={logoREv}
            alt=""
            style={{ width: "50px", paddingBottom: "10px" }}
          />
          <span className={`${styles.header} h2`}>
            {" "}
            <span className="main-color">Blood</span> Donation
          </span>
        </div>
        <p className="text-light fs-7 text-center">
          is a simple act of kindness that can have a profound impact on
          someone's life. <br /> It only takes a few minutes to donate blood,
          but the impact can last a lifetime.
          <p className={`main-color text-center mt-2 fw-bold`}>
            {" "}
            Join us in our efforts to make a difference in the world.
          </p>
        </p>
        <AiFillFacebook
          color="white"
          size={30}
          className="me-5"
        ></AiFillFacebook>
        <SiGmail color="white" size={30} className="me-5"></SiGmail>
        <AiFillLinkedin color="white" size={30}></AiFillLinkedin>
        <p className="text-light position-absolute bottom-0 start-0 end-0 mb-0 p-2">
          Copyright &copy;2023 <span className="main-color fw-bold">Blood</span>{" "}
          Donation Team
        </p>
      </div>
    </>
  );
};

export default Footer;
