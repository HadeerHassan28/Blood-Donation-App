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
import { Trans, useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={`${styles.footerItem} text-white pt-5 pb-4`}>
        <div className="container text-md-left">
          <div className="row ">
            <div className="col-md-4 col-lg-4 col-xl-4" >
              <div className="d-flex align-items-center ">
                <img src={logoREv} style={{ width: "50px" }} alt="" />
                <h5 className="ms-3 text-uppercase fw-bold"><Trans i18nKey="Blood-Donation-footer"><span className="text-danger"></span></Trans></h5>
              </div>
              <p className="mt-2 fs-5 text-white-50">{t("blood-donation-definition")}</p>
              <div className="icons mt-4">
                <AiFillFacebook className={`${styles.links} me-2`} size={30}></AiFillFacebook>
                <SiGmail className={`${styles.links} me-2`} size={30}></SiGmail>
                <AiFillLinkedin className={`${styles.links} me-2`} size={30}></AiFillLinkedin>
                <AiOutlineTwitter className={`${styles.links} me-2`} size={30}></AiOutlineTwitter>
                <AiFillYoutube className={`${styles.links}`} size={30}></AiFillYoutube>
              </div>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 p-4">
              <div className="links d-flex flex-column mt-3">
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link to={"/"} className={`${styles.links}`}>{t("Register")}</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link to={"/volunteers"} className={`${styles.links}`}>{t("Find Blood")}</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link className={`${styles.links}`}>{t("Donate")}</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link to={"/volunteers"} className={`${styles.links}`}>{t("Volunteers")}</Link></div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 p-4">
              {/* <h6 className="ms-2">Links</h6> */}
              <div className="links d-flex flex-column mt-3">
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link to={'/about'} className={`${styles.links}`}>{t("About Us")}</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link to={'/contactus'} className={`${styles.links}`}>{t("Contact Us")}</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link to={'/blogs'} className={`${styles.links}`}>{t("Blogs")}</Link></div>
                <div><AiOutlineArrowRight className="text-danger me-2"></AiOutlineArrowRight><Link to={'/terms'} className={`${styles.links}`}>{t("Terms & Conditions")}</Link></div>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 p-4">
              <h6>{t("Download App")}</h6>
              <Link> <img className="mt-2 mb-2" src={googlePlay} alt="" /></Link>
              <Link><img src={appStore} alt="" /></Link>
            </div>
          </div>
          <hr className="mt-4" />
          <p className="text-center fs-5"><span className="text-danger">&copy;2023</span> {t("All Rights Reserved For Blood Donation Team")}</p>
        </div>

      </footer>
    </>
  )
};

export default Footer;
