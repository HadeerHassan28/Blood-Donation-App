import React, { useState, useEffect, useRef } from "react";
import styles from "./OrgEdit.module.css";
import axios from "axios";
import jwtEncode from "jwt-encode";
import jwtDecode from "jwt-decode";

import { useNavigate } from "react-router-dom";
const OrgEdit = ({ TokenData, setTokenData }) => {
  const navigate = useNavigate();
  let decodedToken;
  function saveTokenData() {
    if (localStorage.getItem("token") === null) {
    } else {
      let encodedToken = localStorage.getItem("token");
      decodedToken = jwtDecode(encodedToken);
      setTokenData(decodedToken);
    }
  }
  let [newData, setNewData] = useState(TokenData);
  useEffect(() => {
    saveTokenData();
    setNewData(decodedToken);
  }, []);
  const secretKey =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  let lastData = null;
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    var fReader = new FileReader();
    fReader.readAsDataURL(file);

    fReader.onloadend = () => {
      setNewData((prevFormData) => ({
        ...prevFormData,
        image: fReader.result,
      }));
    };
  };
  const [isOrgNameValid, setIsOrgNameValid] = useState(false);
  const [isOrgNameFocused, setIsOrgNameFocused] = useState(false);

  const [isOrgCodeValid, setIsOrgCodeValid] = useState(false);
  const [isOrgCodeFocused, setIsOrgCodeFocused] = useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const lettersRegex = /^[A-Za-z]+$/;
    const orgCodeRegex = /^\d{6}$/;
    const addressRegex = /^[a-zA-Z0-9,\s]+$/;

    const isValid = lettersRegex.test(value);
    const isEnteredCodeValid = orgCodeRegex.test(value);
    const isEnteredAddressValid = addressRegex.test(value);

    setNewData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "orgName") {
      setIsOrgNameValid(isValid);
    } else if (name === "OrganizationCode") {
      setIsOrgCodeValid(isEnteredCodeValid);
    } else if (name === "Address") {
      setIsAdressValid(isEnteredAddressValid);
    }
    console.log(newData.OrganizationCode);
    console.log(newData.sector);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      // isorgNamrValid &&
      // isLastNameValid &&
      // isAddressValid &&
      // issectorValid &&
      // isOrgCodeValid &&
      // isPnumberValid
      true
    ) {
      console.log(newData);
      const payload = {
        id: newData.id,
        orgName: newData.orgName,
        OrganizationCode: newData.OrganizationCode,
        Address: newData.Address,
        sector: newData.sector,
        image: newData.image,
        role: "org",
      };
      const token = jwtEncode(payload, secretKey);
      localStorage.setItem("token", token);
      saveTokenData();
      lastData = { ...newData, token: token };

      navigate("/OrgProfile");
      axios
        .patch(`http://localhost:3002/org/${lastData.id}`, lastData)
        .then((response) => {
          // Set the secret key for the token
          // Generate the token
          console.log("Update successful:", response.data);
        })
        .catch((error) => {
          console.error("Update failed:", error);
        });
    } else {
      console.log("Check Your Fields");
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center">Edit Account</h2>
        <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
          <div className="col-lg-6">
            <label htmlFor="orgName" className="form-label">
              Hospital Name
            </label>
            <input
              type="text"
              className={`${styles.formControl} form-control w-100`}
              name="orgName"
              id="orgName"
              aria-describedby="Org Name"
              value={newData?.orgName}
              onChange={handleChange}
              style={
                !isOrgNameFocused
                  ? {}
                  : isOrgNameValid
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsOrgNameFocused(true);
              }}
              onBlur={() => {
                setIsOrgNameFocused(false);
              }}
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="OrganizationCode" className="form-label">
              Organization Code
            </label>
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              name="OrganizationCode"
              id="OrganizationCode"
              aria-describedby="org  code"
              value={newData?.OrganizationCode}
              onChange={handleChange}
              style={
                !isOrgCodeFocused
                  ? {}
                  : isOrgCodeValid
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsOrgCodeFocused(true);
              }}
              onBlur={() => {
                setIsOrgCodeFocused(false);
              }}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className={`${styles.formControl} form-control w-100`}
              id="address"
              name="Address"
              aria-describedby="address"
              value={newData?.Address}
              onChange={handleChange}
              style={
                !isAddressFocused
                  ? {}
                  : isAddressValid
                  ? { border: "2px solid green" }
                  : { border: "2px solid red" }
              }
              onFocus={() => {
                setIsAddressFocused(true);
              }}
              onBlur={() => {
                setIsAddressFocused(false);
              }}
            />
          </div>
          <div className="col-lg-4 mt-5">
            <select
              defaultValue={newData?.sector}
              className="form-select"
              name="sector"
              onChange={handleChange}
              required
            >
              <option value="sector" hidden>
                Sector
              </option>
              <option value="governmental">governmental</option>
              <option value="Private">Private</option>
            </select>
          </div>

          <div className="mb-2 text-center d-flex justify-content-center align-items-center">
            <img
              className="me-2 rounded-2"
              src={newData?.image}
              alt=""
              width="150"
              height={150}
            />
            <input
              type="file"
              onChange={(e) => handleImageUpload(e)}
              className="col-4"
            />
          </div>

          <button className="btn btn-danger w-25 mx-auto mb-3">
            Edit Data
          </button>
        </form>
      </div>
    </div>
  );
};
export default OrgEdit;