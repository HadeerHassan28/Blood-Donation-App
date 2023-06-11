import React from "react";
import styles from "./Organization.module.css";
import { Link } from "react-router-dom";

const Organization = () => {
  return (
    <div className="">
      <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="text-center text-danger my-5">Sign Up Your Organization To Save a Life</h2>
        <form className="row g-3">
            <div className="col-lg-12">
            <label htmlFor="oName" className="form-label">Organization Name</label>
            <input type="email" className="form-control" name='oName' id="oName" aria-describedby="emailHelp" />
            </div>
            <div className="col-lg-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="email" className="form-control" name='password' id="password" aria-describedby="password" />
            </div>
            <div className="col-lg-6">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="email" className="form-control" id="confirmPassword" name='confirmPassword' aria-describedby="confirmPassword" />
            </div>
            <div className="col-lg-6">
            <label for="oCode" className="form-label">Organization Code</label>
            <input type="number" className="form-control" id="oCode" name='oCode' aria-describedby="oCode" />
            </div>
            <div className="col-lg-6">
            <label for="Address" className="form-label">Address</label>
            <input type="text" className="form-control" id="Address" name='Address' aria-describedby="Address" />
            </div>
            <div className="col-lg-12">
            <label for="pNumber" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="pNumber" name='pNumber' aria-describedby="pNumber" />
            </div>
            <div className="col-lg-4">
            <select className="form-select" name='gender' >
                    <option selected hidden>Sector</option>
                    <option value="governmental">governmental</option>
                    <option value="Private">Private</option>
            </select>
            </div> 
            <p>Have an Account? <Link to="signin-org" className="text-decoration-none text-danger fw-bold"><span>Sign in Here</span></Link></p>
            <button className='btn btn-danger py-3'>Sign Up</button>           
            </form>
        </div>
        <div className="col-lg-6 mt-5 d-flex align-items-center">
        <img src={process.env.PUBLIC_URL + '/assets/images/hospital.jpg'} className='img-fluid mt-5' alt="" /> 
        </div>
      </div>
      </div>
      
      
    </div>
  );
};

export default Organization;
