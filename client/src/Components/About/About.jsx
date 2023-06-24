import React from "react";
import styles from "./About.module.css";
import aboutimg from "../../assets/About-head.svg";
import { SiQuantconnect } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineNotification } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BsHeartPulse } from "react-icons/bs";
import { AiOutlineUserAdd, AiOutlineHeart } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row gy-2 mt-4">
          <div className="col-lg-6  col-sm-12 d-flex align-items-center justify-content-center">
            <div className={styles.aboutContent}>
              <h2 className="text-danger mb-3">
                {t("What we do at blood donation foundation")}
              </h2>
              <p className="fs-4 mb-3">
                {t("We solve the problem of blood emergencies by connecting blood donors directly with people in blood need.")}
              </p>
              <button className="btn btn-danger">{t("Donate Now")}</button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img className="img-fluid rounded" src={aboutimg} alt="" />
          </div>
        </div>
      </div>
      <div className="container py-5 mt-5">
        <h3 className="text-center text-danger mt-4 mb-4">
          {t("What is this all about ?")}
        </h3>
        <div className="row gy-2">
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <SiQuantconnect color="#ee394a" size={25}></SiQuantconnect>
            <h5>{t("What we do?")}</h5>
            <p className="text-muted">
              {t("We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.")}
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <FaRegLightbulb color="#ee394a" size={25}></FaRegLightbulb>
            <h5>{t("Innovative")}</h5>
            <p className="text-muted">
              {t("Blood donation Connect is an innovative approach to address global health. We provide immediate access to blood donors.")}
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <BsGlobe2 color="#ee394a" size={25}></BsGlobe2>

            <h5>{t("Network")}</h5>
            <p className="text-muted">
              {t("Blood donation is one of several community organizations working together as a network that responds to emergencies in an efficient manner.")}
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <AiOutlineNotification
              color="#ee394a"
              size={25}
            ></AiOutlineNotification>

            <h5>{t("Get notified")}</h5>
            <p className="text-muted">
              {t("Blood donation Connect works with network partners to connect blood donors and recipients through an automated SMS service and a mobile app.")}
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <FaMoneyCheckAlt color="#ee394a" size={25}></FaMoneyCheckAlt>

            <h5>{t("Totally Free")}</h5>
            <p className="text-muted">
            {t("Totally Free paragraph")}
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <AiOutlineHeart color="#ee394a" size={25}></AiOutlineHeart>
            <h5>{t("Save Life")}</h5>
            <p className="text-muted">
              {t("Save Life paragraph")}
            </p>
          </div>
        </div>
      </div>
      <section className="secondary-color">
        <div className="container py-5 mt-5 ">
          <div className="text-center p-3 mb-3">
            <h3 className="text-danger">{t("Using Our Service")}</h3>
            <p className="text-muted fs-5">
              {t("Using our service is as simple as saying, Hello!")}
            </p>
          </div>
          <div className="row gy-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <AiOutlineUserAdd
                  color="#ee394a"
                  size={25}
                  className="me-2"
                ></AiOutlineUserAdd>
                <span className="fs-4">{t("Register")}</span>
              </div>
              <p className="mt-2 text-muted text-center">
                {t("Register your account so you can immediately start using Blood Donation Connect")}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <BsDroplet
                  color="#ee394a"
                  size={25}
                  className="me-2"
                ></BsDroplet>
                <span className="fs-4">{t("Post a Blood request")}</span>
              </div>
              <p className="mt-2 text-muted text-center">
                {t("Post a blood request using this website or our app and locate  blood volunteers within your area.")}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <AiOutlineNotification
                  color="#ee394a"
                  size={25}
                  className="me-2"
                ></AiOutlineNotification>
                <span className="fs-4">{t("Get notified")}</span>
              </div>
              <p className="mt-2 text-muted text-center">
                {t("Get notified in real time when a donor has been found and when the blood is on its way to the patient")}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <BsHeartPulse
                  color="#ee394a"
                  size={25}
                  className="me-2"
                ></BsHeartPulse>

                <span className="fs-4">{t("Save a Life")}</span>
              </div>
              <p className="mt-2 text-muted text-center">
                {t("Donating or requesting blood share the same noble and final purpose Saving a Life.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
