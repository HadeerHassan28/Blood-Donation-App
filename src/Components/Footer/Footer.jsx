import React from "react";
import styles from "./Footer.module.css";
import logoREv from "../../heart-rev.png";
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className={`${styles.footerItem} text-center position-relative mt-5`} >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
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
            </div>
            <div className="col-lg-4 mt-4">
              <ul style={{ listStyle: "none", paddingTop: "10px" }}>
                <li style={{ margin: "20px 0" }}><Link style={{ color: "white" }}>Services</Link></li>
                <li style={{ margin: "20px 0" }}><Link style={{ color: "white" }}>Contact Us</Link></li>
                <li style={{ margin: "20px 0" }}><Link style={{ color: "white" }}>Term & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-light position-absolute bottom-0 start-0 end-0 mb-0 p-2">
          Copyright &copy;2023 <span className="main-color fw-bold">Blood</span>{" "}
          Donation Team
        </p>
        <Link to="terms" className="text-decoration-none">
          <p className=" text-light my-2 pt-2">Terms & Conditions</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
