import React, { useEffect } from "react";
import styles from "./CauseHome.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { FaSuperpowers } from "react-icons/fa";
import imgArea from '../../assets/imgArea.svg'
import emergencies from '../../assets/emergencies.svg'
import everyone from '../../assets/everyone.svg'
import hero from '../../assets/hero.svg'
// Start Animation Library
import Aos from "aos";
import 'aos/dist/aos.css'
// End Animation Library
const CauseHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row  align-items-center" data-aos="zoom-in-down">
          <div className="col-md-8 col-sm-12 ">
            <div className="d-flex align-items-center">
              <AiOutlineSearch className="text-danger me-1 fs-4"></AiOutlineSearch>
              <h3 className="text-muted">Find Donors in your Area</h3>
            </div>
            <p className="text-black-50 mt-3 fs-5">
              Get connected in a matter of minutes at zero cost. Our App ships with a smart system that finds the closest blood donors. Our automated blood donation system works efficiently whenever someone needs a blood transfusion.
            </p>
          </div>
          <div className="col-md-4  col-sm-12">
            <img src={imgArea} alt="" className="img-fluid" />
          </div>
        </div>
        <div className={`${styles.customFlex} row  align-items-center mt-4`} data-aos="fade-right">
          <div className="col-md-4 col-sm-12">
            <img src={emergencies} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 col-sm-12 ">
            <div className="d-flex align-items-center">
              <AiOutlineClockCircle className="text-danger me-1 fs-4"></AiOutlineClockCircle>
              <h3 className="text-muted">Answer to Emergencies</h3>
            </div>
            <p className="text-black-50 mt-3 fs-5">
              As soon as a new blood request is raised, it is routed among our local volunteer blood donors. We know time matters! So we keep you updated with real-time notifications sent directly to you via SMS(text message) or the installed mobile app
            </p>
          </div>
        </div>
        <div className="row align-items-center mt-5" data-aos="fade-left">
          <div className="col-md-8  col-sm-12 ">
            <div className="d-flex  align-items-center">
              <TiGroupOutline className="text-danger me-2 fs-1"></TiGroupOutline>
              <h3 className="text-muted">Made for Everyone</h3>
            </div>
            <p className="text-black-50  mt-3 fs-5">
              All you need to do is send a text message to 8655, "blood need (blood-group) in (your-city)", in any language you want. Our system is smart enough to understand anything you write and helps you find a donor within minutes if not seconds
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={everyone} alt="" className="img-fluid" />
          </div>
        </div>
        <div className={`${styles.customFlex} row  align-items-center mt-5`} data-aos="zoom-in-up">
          <div className="col-md-4 col-sm-12">
            <img src={hero} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 col-sm-12 ">
            <div className="d-flex align-items-center">
              <FaSuperpowers className="text-danger me-2 fs-1"></FaSuperpowers>
              <h3 className="text-muted">You are someone's Hero</h3>
            </div>
            <p className="text-black-50 mt-3 fs-5">
              In as little as few minutes, you can become someone's unnamed, unknown, but all-important Hero. Saving a life is a noble work that starts very simply and easily. Donate Blood or donate Money, every form of contribution you make is important, valued and essential in our shared mission to save lives.


            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#ee394a" }} className="py-5  mb-5 text-white text-center rounded">
        <h2 className="mb-3">Start Saving Lives</h2>
        <p className="mb-3 fs-5">Become a donor or request for blood and help save<br /> lives</p>
        <button className="btn btn-light text-danger">Register</button>
      </div>
    </>
  );
};

export default CauseHome;
