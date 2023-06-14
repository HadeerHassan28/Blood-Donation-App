import React from "react";
import styles from "./userProfile.module.css";
import { Link } from "react-router-dom";
const UserProfile = ({ userTokenData }) => {
  console.log(userTokenData);
  return (
    <div className="text-center my-5 py-5">
      <div>{userTokenData.firstName}</div>
      <div>{userTokenData.email}</div>
      <div>{userTokenData.role}</div>
    </div>
  );
};

export default UserProfile;
