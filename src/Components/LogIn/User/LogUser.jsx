import React from "react";
import styles from "./LogUser.module.css";

const LogUser = () => {
  return (
    <div className={styles.login_user}>
      <div className={styles.login_user_content}>
        <h2 className="text-center text-danger">Log In - Users </h2>
        <form>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
            />

          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
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

export default LogUser;
