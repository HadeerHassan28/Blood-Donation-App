import React from "react";
import styles from "./About.module.css";
import aboutimg from "../../assets/About-head.svg";
const About = () => {
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row gy-2 mt-4">
          <div className="col-lg-6  col-sm-12 d-flex align-items-center justify-content-center">
            <div className={styles.aboutContent}>
              <h2 className="text-danger mb-3">
                What we do at blood donation foundation
              </h2>
              <p className="fs-4 mb-3">
                We solve the problem of blood emergencies by connecting blood
                donors directly with people in blood need.
              </p>
              <button className="btn btn-danger">Donate Now</button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img className="img-fluid rounded" src={aboutimg} alt="" />
          </div>
        </div>
      </div>
      <div className="container py-5 mt-5">
        <h3 className="text-center text-danger mt-4 mb-4">
          What is this all about ?
        </h3>
        <div className="row gy-2">
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <i class="text-danger mb-2 fa-2x fa-brands fa-nfc-symbol"></i>
            <h5>What we do?</h5>
            <p className="text-muted">
              We connect blood donors with recipients, without any intermediary
              such as blood banks, for an efficient and seamless process.
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <i className="text-danger mb-2 fa-2x fa-regular fa-lightbulb"></i>
            <h5>Innovative</h5>
            <p className="text-muted">
              Blood donation Connect is an innovative approach to address global
              health. We provide immediate access to blood donors.
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <i class="text-danger mb-2 fa-2x fa-solid fa-globe"></i>
            <h5>Network</h5>
            <p className="text-muted">
              Blood donation is one of several community organizations working
              together as a network that responds to emergencies in an efficient
              manner.
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <i class="text-danger mb-2 fa-2x fa-regular fa-bell"></i>
            <h5>Get notified</h5>
            <p className="text-muted">
              Blood donation Connect works with network partners to connect
              blood donors and recipients through an automated SMS service and a
              mobile app.
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <i class="text-danger mb-2 fa-2x fa-solid fa-money-check-dollar"></i>
            <h5>Totally Free</h5>
            <p className="text-muted">
              Blood donation Connect's ultimate goal is to provide an
              easy-to-use, easy-to-access, fast, efficient, and reliable way to
              get life-saving blood, totally Free of cost.
            </p>
          </div>
          <div className={`${styles.card} col-lg-4 text-center py-5 px-2`}>
            <i class="text-danger mb-2 fa-2x  fa-solid fa-kit-medical"></i>
            <h5>Save Life</h5>
            <p className="text-muted">
              We are a non profit foundation and our main objective is to make
              sure that everything is done to protect vulnerable persons. Help
              us by making a gift !
            </p>
          </div>
        </div>
      </div>
      <section className="secondary-color">
        <div className="container py-5 mt-5 ">
          <div className="text-center p-3 mb-3">
            <h3 className="text-danger">Using Our Service</h3>
            <p className="text-muted fs-5">
              Using our service is as simple as saying, Hello!
            </p>
          </div>
          <div className="row gy-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <i class="text-danger fa-2x fa-solid fa-user-plus me-2"></i>
                <span className="fs-4">Register</span>
              </div>
              <p className="mt-2 text-muted text-center">
                Register your account so you can immediately start using Save
                Life Connect
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <i class="text-danger fa-2x me-2 fa-solid fa-droplet"></i>
                <span className="fs-4">Post a Blood request</span>
              </div>
              <p className="mt-2 text-muted text-center">
                Post a blood request using this website or our app and locate
                volunteer blood donors within your area.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <i class="text-danger fa-2x me-2 fa-regular fa-bell"></i>
                <span className="fs-4">Get notified</span>
              </div>
              <p className="mt-2 text-muted text-center">
                Get notified in real time when a donor has been found and when
                the blood is on its way to the patient
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <i class="text-danger fa-2x me-2 fa-solid fa-heart-pulse"></i>
                <span className="fs-4">Save a Life</span>
              </div>
              <p className="mt-2 text-muted text-center">
                Donating or requesting blood share the same noble and final
                purpose Saving a Life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5">
        <div className="text-center p-3 mb-3">
          <h3 className="text-danger">Connect With Us</h3>
          <p className="text-muted ">
            Whether you want some help or just to ask us a question, you are
            welcome to do it using the form below.
          </p>
        </div>
        <div className={styles.customForm}>
          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="form-control mb-2"
          />
          <textarea
            className="form-control mb-3"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-outline-danger ">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
