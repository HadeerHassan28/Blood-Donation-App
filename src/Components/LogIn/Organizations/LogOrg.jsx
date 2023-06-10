import React from 'react';
import styles from './LogOrg.module.css'

const LogOrg = () => {
    return (
        <div className={styles.login_org}>
        <div className={styles.login_org_content}>
          <h2 className="text-center text-danger">Log In - Organizations </h2>
          <form>
            <div className="mb-3">
              <label for="oCode" className="form-label">
                Organization Code
              </label>
              <input
                type="text"
                className="form-control"
                id="oCode"
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
}

export default LogOrg;
