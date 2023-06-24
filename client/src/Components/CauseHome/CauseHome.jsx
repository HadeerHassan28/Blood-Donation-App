import React, { useEffect } from "react";
import styles from "./CauseHome.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { FaSuperpowers } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";
import imgArea from '../../assets/imgArea.svg'
import emergencies from '../../assets/emergencies.svg'
import everyone from '../../assets/everyone.svg'
import hero from '../../assets/hero.svg'
import Slider from "react-slick";
import { Trans, useTranslation } from 'react-i18next';

const CauseHome = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ],
  };
  const { t } = useTranslation();
  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row  align-items-center" data-aos="zoom-in-down">
          <div className="col-md-8 col-sm-12 ">
            <div className="d-flex ">
              <AiOutlineSearch className="text-danger me-1 fs-2"></AiOutlineSearch>
              <h3 className="text-muted">{t("Find Donors in your Area")}</h3>
            </div>
            <p className="text-black-50 mt-3 fs-5">
              {t("Get connected in a matter of minutes at zero cost")}
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
            <div className="d-flex ">
              <AiOutlineClockCircle className="text-danger me-1 fs-2"></AiOutlineClockCircle>
              <h3 className="text-muted">{t("Answer to Emergencies")}</h3>
            </div>
            <p className="text-black-50 mt-3 fs-5">
              {t("Answer to Emergencies Paragraph")}
            </p>
          </div>
        </div>
        <div className="row align-items-center mt-5" data-aos="fade-left">
          <div className="col-md-8  col-sm-12 ">
            <div className="d-flex">
              <TiGroupOutline className="text-danger me-2 fs-2"></TiGroupOutline>
              <h3 className="text-muted">{t("Made for Everyone")}</h3>
            </div>
            <p className="text-black-50  mt-3 fs-5">
              {t("Made for Everyone Paragraph")}
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
              <FaSuperpowers className="text-danger me-2 fs-2"></FaSuperpowers>
              <h3 className="text-muted">{t("You are someone's Hero")}</h3>
            </div>
            <p className="text-black-50 mt-3 fs-5">
              {t("You are someone's Hero Paragraph")}
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#344258" }} className="py-5  mb-5 text-white text-center rounded">
        <h2 className="mb-3">{t("Start Saving Lives")}</h2>
        <p className="mb-3 fs-5"><Trans>Start Saving Lives Paragraph</Trans></p>
        <button className="btn btn-danger">{t("Register")}</button>
      </div>
      <div className="container testimonials py-5 mb-5">
        <div className="text-center">
          <h2 className="text-danger">{t("Lives Saved")}</h2>
          <p className="fs-5 text-muted"><Trans i18nKey="Lives Saved Paragraph"><span className="fw-bold "></span></Trans></p>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div className="col-lg-3 p-2 mb-3">
              <div className="card border-danger">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src="assets/images/user.jpeg" alt="" className={`${styles.customimg} mr-4`} />
                  <div className="name-review">
                    <p className="fw-bold mb-0">Person One</p>
                    <ul className="list-inline text-center m-0">
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <blockquote>
                    <p className="mb-0"><BsQuote className={`${styles.qout} text-danger`}></BsQuote> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eum minima in cumque cum assumenda accusamus. Qui autem non ipsum!</p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2 mb-3">
              <div className="card border-danger">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src="assets/images/user.jpeg" alt="" className={`${styles.customimg} mr-4`} />
                  <div className="name-review">
                    <p className="fw-bold mb-0">Person Two</p>
                    <ul className="list-inline text-center m-0">
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <blockquote>
                    <p className="mb-0"><BsQuote className={`${styles.qout} text-danger`}></BsQuote> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eum minima in cumque cum assumenda accusamus. Qui autem non ipsum!</p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2 mb-3">
              <div className="card border-danger">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src="assets/images/user.jpeg" alt="" className={`${styles.customimg} mr-4`} />
                  <div className="name-review">
                    <p className="fw-bold mb-0">Person Three</p>
                    <ul className="list-inline text-center m-0">
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <blockquote>
                    <p className="mb-0"><BsQuote className={`${styles.qout} text-danger`}></BsQuote> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eum minima in cumque cum assumenda accusamus. Qui autem non ipsum!</p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2 mb-3">
              <div className="card border-danger">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src="assets/images/user.jpeg" alt="" className={`${styles.customimg} mr-4`} />
                  <div className="name-review">
                    <p className="fw-bold mb-0">Person Four</p>
                    <ul className="list-inline text-center m-0">
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <blockquote>
                    <p className="mb-0"><BsQuote className={`${styles.qout} text-danger`}></BsQuote> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eum minima in cumque cum assumenda accusamus. Qui autem non ipsum!</p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2 mb-3">
              <div className="card border-danger">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src="assets/images/user.jpeg" alt="" className={`${styles.customimg} mr-4`} />
                  <div className="name-review">
                    <p className="fw-bold mb-0">Person Five</p>
                    <ul className="list-inline text-center m-0">
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <blockquote>
                    <p className="mb-0"><BsQuote className={`${styles.qout} text-danger`}></BsQuote> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eum minima in cumque cum assumenda accusamus. Qui autem non ipsum!</p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2 mb-3">
              <div className="card border-danger">
                <div className="d-flex p-3 justify-content-start align-items-center">
                  <img src="assets/images/user.jpeg" alt="" className={`${styles.customimg} mr-4`} />
                  <div className="name-review">
                    <p className="fw-bold mb-0">Person Six</p>
                    <ul className="list-inline text-center m-0">
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                      <li className="list-inline-item"><AiFillStar className={`${styles.ratingColor}`}></AiFillStar></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <blockquote>
                    <p className="mb-0"><BsQuote className={`${styles.qout} text-danger`}></BsQuote> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eum minima in cumque cum assumenda accusamus. Qui autem non ipsum!</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </Slider>




        </div>
      </div>
    </>
  );
};

export default CauseHome;
