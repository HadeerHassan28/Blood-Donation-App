import React from "react";
import styles from "./userProfile.module.css";
import { Link } from "react-router-dom";
const UserProfile = ({ TokenData }) => {
  console.log(TokenData);
  return (
    <div className="text-center my-5 py-5">
      <div>{TokenData.firstName}</div>
      <div>{TokenData.email}</div>
      <div>{TokenData.role}</div>
    </div>
  );
};

export default UserProfile;
