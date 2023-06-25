import React, { useEffect, useState, useContext } from "react";
import styles from "./Volunteers.module.css";
import { useRef } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { conTheme } from "../../Context/Context";
const Volunteers = () => {
  const { isTheme } = useContext(conTheme);
  const searchResStep = 9;
  const [volunteers, setVolunteers] = useState(null);
  const [searchRes, setSearchRes] = useState(volunteers);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(searchResStep);
  const bloodGroup = useRef();
  const location = useRef();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const governates = [
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Cairo",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Giza",
    "Ismailia",
    "Kafr El Sheikh",
    "Luxor",
    "Matruh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez",
  ];

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      const volunteers = res.data.filter((user) => user.isVolunteer === true);
      setVolunteers(volunteers);
      setSearchRes(volunteers);
    });
  }, []);
  function navigateTOVolunteer(id) {
    navigate("/volunteerprofile/" + id);
  }
  const searchBloodGroupLocation = () => {
    if (volunteers !== null) {
      if (
        bloodGroup.current.value !== "All" &&
        bloodGroup.current.value !== "" &&
        location.current.value !== ""
      ) {
        setSearchRes(
          volunteers.filter(
            (vol) =>
              vol.bloodType === bloodGroup.current.value &&
              vol.city
                .toLowerCase()
                .includes(location.current.value.toLowerCase())
          )
        );
      } else if (
        bloodGroup.current.value !== "All" &&
        bloodGroup.current.value !== ""
      ) {
        setSearchRes(
          volunteers.filter((vol) => vol.bloodType === bloodGroup.current.value)
        );
      } else if (location.current.value !== "") {
        setSearchRes(
          volunteers.filter((vol) =>
            vol.city
              .toLowerCase()
              .includes(location.current.value.toLowerCase())
          )
        );
      } else {
        setSearchRes(volunteers);
      }
    } else {
      location.current.value = "";
      bloodGroup.current.value = "";
    }

    setStartIndex(0);
    setEndIndex(searchResStep);
  };

  const resetSearch = () => {
    setSearchRes(volunteers);
    setStartIndex(0);
    setEndIndex(searchResStep);
    location.current.value = "";
    bloodGroup.current.value = "";
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((oldStart) => oldStart - searchResStep);
      setEndIndex((oldEnd) => oldEnd - searchResStep);
    }
  };
  const handleNext = () => {
    if (endIndex < searchRes.length) {
      setStartIndex((oldStart) => oldStart + searchResStep);
      setEndIndex((oldEnd) => oldEnd + searchResStep);
    }
  };

  return (
    <>
      <div className="text-center p-5">
        <h2 style={{ color: "#ee394a" }}>{t("Volunteers")}</h2>
        <p>{t("Search our Super Hero Volunteers")}</p>
      </div>
      <div className={`${styles.searchBox} py-4`}>
        <span className={`${styles.filterWith} text-danger`}>
          {t("Filter with:")}
        </span>
        <select
          className={`${styles.select}`}
          ref={bloodGroup}
          onChange={searchBloodGroupLocation}
        >
          <option label={`${t("Blood Type")}`} hidden></option>
          <option name="All" value="All">
            {t("All")}
          </option>
          <option name="A+" value="A+">
            A+
          </option>
          <option name="A-" value="A-">
            A-
          </option>
          <option name="B+" value="B+">
            B+
          </option>
          <option name="B-" value="B-">
            B-
          </option>
          <option name="AB+" value="AB+">
            AB+
          </option>
          <option name="AB-" value="AB-">
            AB-
          </option>
          <option name="O+" value="O+">
            O+
          </option>
          <option name="O-" value="O-">
            O-
          </option>
        </select>
        <input
          className={styles.customInput}
          type="text"
          list="locations"
          name="location"
          id="location"
          placeholder={`${t("Location")}`}
          ref={location}
          onChange={searchBloodGroupLocation}
        />
        <datalist id="locations">
          {governates.map((gov) => (
            <option key={uuid()} value={gov}>
              {t(gov)}
            </option>
          ))}
        </datalist>
        <button className="btn btn-outline-danger" onClick={resetSearch}>
          {t("Reset")}
        </button>
      </div>
      <div
        className={
          searchRes
            ? "d-none text-center text-danger fs-3"
            : "d-block text-center text-danger fs-4"
        }
      >
        {t("Please wait data loading")}
      </div>
      <div
        className={
          searchRes
            ? "d-none text-center text-danger fs-3"
            : "d-block text-center text-danger fs-4"
        }
      >
        Please wait data loading
      </div>
      <table className={`${styles.tableW} table w-75 mt-5 mx-auto`}>
        <thead>
          <tr>
            <th className="text-start text-danger p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-award text-danger"
                viewBox="0 0 20 20"
              >
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              {t("VOLUNTEER")}
            </th>
            <th className="text-center text-danger p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-geo-alt text-danger"
                viewBox="0 0 20 20"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              {t("LOCATION")}
            </th>
            <th className="text-center text-danger p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-droplet text-danger"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
                />
              </svg>
              {t("BLOOD GROUP")}
            </th>
          </tr>
        </thead>
        <tbody>
          {searchRes !== null && searchRes.length === 0 ? (
            <tr>
              <td colSpan={3} className="fs-4">
                {t("Sorry, no results found")}
              </td>
            </tr>
          ) : searchRes ? (
            searchRes.slice(startIndex, endIndex).map((vol) => (
              <tr
                onClick={() => {
                  navigateTOVolunteer(vol.id);
                }}
                key={uuid()}
                style={{
                  cursor: "pointer",
                }}
              >
                <td
                  className={`${styles.volName} text-start ps-3`}
                  style={{
                    backgroundColor: isTheme === true ? "black" : "#fbf1f0",
                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  <img
                    src={vol.image}
                    alt="profile"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <span>
                    {vol.firstName} {vol.lastName}
                  </span>
                </td>
                <td className="text-center">
                  {vol.Address}, {vol.city}
                </td>
                <td className="text-center">{vol.bloodType}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="fs-4">
                {t("Loading...")}
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          {searchRes && searchRes.length > searchResStep && (
            <tr>
              <td colSpan={3} className="text-center">
                <span>
                  {endIndex <= searchRes.length ? endIndex : searchRes.length}{" "}
                  <span className="text-danger">/</span> {searchRes.length}
                </span>
                <button
                  onClick={handlePrev}
                  className={`${styles.navigateRes} text-center m-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className={`${styles.navigateRes} text-center m-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          )}
        </tfoot>
      </table>
      <button className="btn btn-outline-danger d-block mx-auto fw-bold my-2 mb-5">
        {t("Start saving lives")}
      </button>
    </>
  );
};

export default Volunteers;
