import React from "react";
import styles from "./userProfile.module.css";
import { Link } from "react-router-dom";
import user from "../../../assets/user.jpg";
const UserProfile = ({ TokenData }) => {
  console.log(TokenData);
  return (
    <>
      <section style={{ backgroundColor: "#fbf1f0" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{TokenData.firstName}</h5>
                  <p className="text-muted mb-1">
                    Blood Type: {TokenData.bloodType}
                  </p>
                  <p className="text-muted mb-4">City: {TokenData.city}</p>
                  <div className="d-flex justify-content-center mb-2">
                  <Link style={{color:"white"}} to="edit">
                    <button type="button" className="btn btn-danger  px-5">
                   Edit   
                    </button>
                    </Link>  
                    <button type="button" className="btn btn-outline-danger ms-2 px-5">
                   Message   
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {" "}
                        {TokenData.firstName} {TokenData.lastName}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.pNumber}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.Address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Availabel to Donate</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${
                        TokenData.isVolunteer ? "Avialbel" : "Not Availabel"
                      }`}</p>
                    </div>
                    
                  </div>

                </div>
                
              </div>
              <div>
                    <button className="d-block mx-auto btn btn-danger">Be Available for Volunteering</button>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;

/* 
   firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            Address: data.Address,
            city: data.city,
            pNumber: data.pNumber,
            bloodType: data.bloodType,
            gender: data.gender,
            isVolunteer: false,
            role: "user",
          };


*/
