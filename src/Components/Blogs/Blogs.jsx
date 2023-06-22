import React from "react";
import styles from "./Blogs.module.css";
import { useTranslation } from 'react-i18next';

const Blogs = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container py-5 ">
        <div className="text-center mt-4 mb-4">
          <h2 className="text-danger fw-bold">{t("Saving Lives Through Donation")}</h2>
        </div>
        <div className="row gy-2 mt-3">
          <div className="col-lg-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4">
                <img className="img-fluid rounded mb-3" src="/assets/blogs/11-1.png" alt="" />
              </div>
              <div className="col-lg-8 text-center">
                <p className="text-muted fs-3">{t("Blood donation is a regulated and safe process with thorough screening to assess donor eligibility and testing to prevent risks to recipients.")}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-lg-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4">
                <img className="img-fluid rounded mb-3" src="/assets/blogs/222.png" alt="" />
              </div>
              <div className="col-lg-8 text-center">
                <p className="text-muted fs-3">{t("A single blood donation can save up to three lives by providing essential components like red blood cells, platelets, and plasma for various medical treatments, such as surgery or blood loss replacement.")}</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="col-lg-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4">
                <img className="img-fluid rounded mb-3" src="/assets/blogs/3-3.png" alt="" />
              </div>
              <div className="col-lg-8 text-center">
                <p className="text-muted fs-3">{t("Blood donation relies on volunteers' generosity, and regular donors are crucial to meet the constant need for blood. Your donation can bring hope to those in need, contributing to a compassionate community dedicated to saving lives and improving well-being.")}</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="col-lg-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4">
                <img className="img-fluid rounded mb-3" src="/assets/blogs/4-4-4.png" alt="" />
              </div>
              <div className="col-lg-8 text-center">
                <p className="text-muted fs-3">{t("Blood types are categorized into four main groups: A, B, AB, and O. Type O negative is a universal donor, compatible with all blood types, while individuals with AB positive are universal recipients, able to receive blood from any type. Ensuring the compatibility of blood types is vital during transfusions to minimize risks and optimize effectiveness.")}</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="col-lg-12">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4">
                <img className="img-fluid rounded mb-3" src="/assets/blogs/5-5-55.png" alt="" />
              </div>
              <div className="col-lg-8 text-center">
                <p className="text-muted fs-3">{t("Individuals typically need to be at least 17 or 18 years old, in good health, meet weight requirements, and have an adequate hemoglobin level. Certain factors like recent travel or medical treatments may result in temporary deferral. It's important to consult the local blood donation center or blood bank for specific eligibility criteria as guidelines can vary by region.")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
