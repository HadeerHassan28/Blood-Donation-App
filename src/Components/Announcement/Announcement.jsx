import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Announcement.module.css";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
const Announcement = () => {
  const { t } = useTranslation();
  const [isInput, setIsInput] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [ann, setAnn] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const handleChangeMsg = (e) => {
    setIsInput(e.target.value);
  };
  const handleChangeBloodType = (e) => {
    setBloodType(e.target.value);
  };
  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleDisplay = () => {
    const newAnn = {
      id: uuid,
      bloodType: bloodType,
      quantity: quantity,
      msg: isInput,
    };
    axios.post("http://localhost:3005/announcements", newAnn);
    console.log("done");
    setAnn([...ann, newAnn]);
    setBloodType("");
    setQuantity(0);
    setIsInput("");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3005/announcements")
      .then((response) => {
        console.log(response.data);
        setAnn(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="bloodType">{t("BloodType:")}</label>
        <select
          id="bloodType"
          value={t("BloodType")}
          onChange={handleChangeBloodType}
        >
          <option value="">{t("SelectBloodType")}</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div>
        <label htmlFor="quantity">{t("quantity")}</label>
        <input
          id="quantity"
          type="number"
          value={t("quantity")}
          onChange={handleChangeQuantity}
        />
      </div>
      <div>
        <label>{t("TheMassage:")}</label>
        <input
          value={isInput}
          onChange={handleChangeMsg}
          placeholder={t("Enter your announcement")}
          className={styles.inputField}
        />
      </div>
      <button className="btn btn-danger" type="button" onClick={handleDisplay}>
        {t("Post")}
      </button>
      <h3>{t("Announcements:")}</h3>
      {ann &&
        ann.map((ele) => (
          <div>
            <p>
              {" "}
              {t("BloodType")} {ele.bloodType}, {t("quantity")} {ele.quantity}
            </p>
            {ele.msg && (
              <p>
                {t("TheMassage:")} {ele.msg}
              </p>
            )}
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleDisplay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
              </svg>
            </button>
          </div>
        ))}
    </div>
  );
};

export default Announcement;
