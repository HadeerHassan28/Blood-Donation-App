import React from "react";
import styles from "./InfoHome.module.css";
import findblood from '../../assets/findblood.svg'
import getnotified from '../../assets/getnotified.svg'
import foreverfree from '../../assets/foreverfree.svg'
import { useTranslation } from 'react-i18next';

const InfoHome = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="col-md-4">
        <img src={findblood} alt="" />
        <h5 className="mt-2">{t("Find Blood")}</h5>
        <p className="text-black-50">
          {t("Find blood donors near your location and request the needed blood type")}
        </p>
      </div>
      <div className="col-md-4">
        <img src={getnotified} alt="" />
        <h5 className="mt-2">{t("Get Notification")}</h5>
        <p className="text-black-50">
          {t("Get notified about requests instantly, either on our app or by sms")}
        </p>
      </div>
      <div className="col-md-4">
        <img src={foreverfree} alt="" />
        <h5 className="mt-2">{t("Forever Free")}</h5>
        <p className="text-black-50">
          {t("You don't have to pay anything, Blood Donation Connect is forever Free !")}
        </p>
      </div>
    </>
  );
};

export default InfoHome;
