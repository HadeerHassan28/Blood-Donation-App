import React from "react";
import styles from "./OrgProfile.module.css";

const OrgProfile = ({ TokenData }) => {
  console.log(TokenData);
  return (
    <div className="h1 text-center  my-5 py-5">
      <div>{TokenData.orgName}</div>
      <div>{TokenData.address}</div>
      <div>{TokenData.role}</div>
    </div>
  );
};

export default OrgProfile;
