import React from "react";
import styles from "./Footer.module.css";
import logoREv from "../../heart-rev.png";
import appStore from "../../assets/appStore.png";
import googlePlay from "../../assets/googlePlay.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* <div className={`${styles.footerItem} text-center position-relative mt-5`} >
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
      </div> */}
      <footer className={`${styles.footerItem} text-white pt-5 pb-4`}>
        <div className="container text-md-left">
          <div className="row ">
            <div className="col-md-4 col-lg-4 col-xl-4" >
              <div className="d-flex align-items-center ">
                <img src={logoREv} style={{ width: "50px" }} alt="" />
                <h5 className="ms-3 text-uppercase fw-bold"><span className="text-danger">Blood</span> Donation</h5>
              </div>
              <p className="mt-2 fs-5 text-white-50"> is a simple act of kindness that can have a profound impact on someone's life.It only takes a few minutes to donate blood,
                but the impact can last a lifetime.</p>
              <div className="icons mt-4">
                <AiFillFacebook className={`${styles.links} me-2`} size={30}></AiFillFacebook>
                <SiGmail className={`${styles.links} me-2`} size={30}></SiGmail>
                <AiFillLinkedin className={`${styles.links} me-2`} size={30}></AiFillLinkedin>
                <AiOutlineTwitter className={`${styles.links} me-2`} size={30}></AiOutlineTwitter>
                <AiFillYoutube className={`${styles.links}`} size={30}></AiFillYoutube>
              </div>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 p-4">
              <h6 className="ms-2">Save Life</h6>
              <div className="links d-flex flex-column mt-3">
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>Register</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>Find Blood</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>Donate</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>Volunteers</Link></div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 p-4">
              <h6 className="ms-2">Links</h6>
              <div className="links d-flex flex-column mt-3">
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>About Us</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>Contact Us</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>Blogs</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>Terms & Conditions</Link></div>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 p-4">
              <h6>Download App</h6>
              <Link> <img className="mt-2 mb-2" src={googlePlay} alt="" /></Link>
              <Link><img src={appStore} alt="" /></Link>
            </div>
          </div>
          <hr className="mt-4" />
          <p className="text-center fs-5"><span className="text-danger">&copy;2023</span> All Rights Reserved For Blood Donation Team</p>
        </div>

      </footer>
    </>
  )
};

export default Footer;
