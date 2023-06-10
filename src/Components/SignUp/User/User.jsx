import React, { useState } from 'react';
import styles from './User.module.css'
import { Link } from 'react-router-dom';

const User = () => {
  const [data, SetData] = useState({
    firstName : "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:"",
    Address: "",
    city:"",
    pNumber:"",
    bloodType:"",
    gender:""
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    SetData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

  };
    return (
        <div>
            <div className="container">
        <div className="row ">
          <div className="col-lg-6 d-flex justify-content-center">
          <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} className='img-fluid mt-5' /> 
          </div>
          <div className="col-lg-6">
            <h2 className="text-center my-5 text-danger">Sign Up To Save A Life!</h2>
            <form className="row g-3">
             <div className="col-lg-6">
             <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" name='firstName' id="firstName" aria-describedby="First Name" value={data.firstName} onChange={handleChange}/>
            </div> 
            <div className="col-lg-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name='lastName' aria-describedby="Last Name" value={data.lastName} onChange={handleChange}/>
            </div> 
            <div className="col-lg-12">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={data.email} onChange={handleChange}/>
            </div>
            <div className="col-lg-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="email" className="form-control" name='password' id="password" aria-describedby="password" value={data.password} onChange={handleChange}/>
            </div>
            <div className="col-lg-6">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="email" className="form-control" id="confirmPassword" name='confirmPassword' aria-describedby="confirmPassword" value={data.confirmPassword} onChange={handleChange}/>
            </div>
            <div className="col-lg-6">
            <label for="address" className="form-label">Address</label>
            <input type="email" className="form-control" id="address" name='Address' aria-describedby="address" value={data.Address} onChange={handleChange}/>
            </div>
            <div className="col-lg-6">
            <label for="city" className="form-label">City</label>
            <input type="email" className="form-control" id="city" name='city' aria-describedby="city" value={data.city} onChange={handleChange}/>
            </div>
            <div className="col-lg-12">
            <label for="pNumber" className="form-label">Phone Number</label>
            <input type="email" className="form-control" id="pNumber" name='pNumber' aria-describedby="pNumber" value={data.pNumber} onChange={handleChange}/>
            </div>
            <div className="col-lg-4">
            <select className="form-select" name='bloodType' option={data.bloodType} onChange={handleChange}>
                    <option selected hidden>Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                    <option value="O+">O+</option>
            </select>
            </div>
            <div className="col-lg-4">
            <select className="form-select" name='gender' option={data.gender} onChange={handleChange}>
                    <option selected hidden>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
            </select>
            </div> 
            <p>Have an Account? <Link to="signin-user" className='text-decoration-none text-danger fw-bold'><span>Sign in Here</span></Link></p>
            <button className='btn btn-danger py-3'>Sign Up</button>           
            </form>
          </div>
        </div>
      </div>
        </div>
    );
}

export default User;
