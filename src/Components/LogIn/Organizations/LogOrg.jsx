import React, { useState } from "react";
import styles from "./LogOrg.module.css";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
const LogOrg = ({ saveTokenData }) => {
  const [orgCode, setOrgCode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOrgCode = (e) => {
    let code = e.target.value;

    setOrgCode(code);
  };

  const handlePassword = (e) => {
    let pass = e.target.value;

    setPassword(pass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (orgCode.trim().length !== 0 && password.trim().length !== 0) {
      axios.get(" http://localhost:3002/org").then((res) => {
        const orgLogin = res.data.filter((elem) => {
          return (
            elem.OrganizationCode === orgCode && elem.password === password
          );
        });
        console.log(orgLogin[0].token);

        if (orgLogin) {
          localStorage.setItem("token", orgLogin[0].token);
          saveTokenData();
          navigate("/orgprofile");
        }
      });
    }
  };

  return (
    <div className={styles.login_org}>
      <div className={styles.login_org_content}>
        <h2 className="text-center text-danger">Log In - Organizations </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="oCode" className="form-label">
              Organization Code
            </label>
            <input
              type="text"
              className="form-control"
              id="oCode"
              onChange={handleOrgCode}
              value={orgCode}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handlePassword}
              value={password}
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default LogOrg;
