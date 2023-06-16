import React, { useState } from 'react';
import styles from './UserEdit.module.css'
import axios from 'axios';

const UserEdit = ({TokenData}) => {



    const [selectedFile, setSelectedFile] = useState(null);

    const [newData, setNewData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        Address: "",
        city: "",
        pNumber: "",
      });

      
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);

  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [isCityValid, setIsCityValid] = useState(false);
  const [isCityFocused, setIsCityFocused] = useState(false);

  const [isPnumberValid, setIsPnumberValid] = useState(false);
  const [isPnumberFocused, setIsPnumberFocused] = useState(false);

      const handleChange = (event) => {

        const { name, value } = event.target;

        const lettersRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
        const addressRegex = /^[a-zA-Z0-9,\s]+$/;
        const phoneNumberRegex = /^(010|011|012)\d{8}$/;
    
        const isValid = lettersRegex.test(value);
        const isMailValid = emailRegex.test(value);
        const isEnteredAddressValid = addressRegex.test(value);
        const isEnteredPhoneNumberValid = phoneNumberRegex.test(value);
    
 
    
        setNewData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        if (name === "firstName") {
            setIsFirstNameValid(isValid);
          } else if (name === "lastName") {
            setIsLastNameValid(isValid);
          } else if (name === "email") {
            setIsEmailValid(isMailValid);
            console.log(true);
          }  else if (name === "Address") {
            setIsAdressValid(isEnteredAddressValid);
          } else if (name === "city") {
            setIsCityValid(isValid);
          } else if (name === "pNumber") {
            setIsPnumberValid(isEnteredPhoneNumberValid);
          }

        console.log(newData)

      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if(isFirstNameValid&&isLastNameValid&&isAddressValid&&isCityValid&&isEmailValid&&isPnumberValid){
        axios.get("http://localhost:3000/users").then((res) => {
          const users = res.data;
          const editableUser = users.find((user) => {
            return user.email === TokenData.email;
          });
          if (editableUser) {      
            axios
              .patch(`http://localhost:3000/users/${editableUser.id}`, newData)
              .then((response) => {
                console.log("Update successful:", response.data);
              })
              .catch((error) => {
                console.error("Update failed:", error);
              });
          }
        });}
        else {
                console.log("Check Your Fields")
        }
      };

    return (
        <div>
            <div className="container">
                    <h2 className='text-center'>Edit Account</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-lg-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100`}
                  name="firstName"
                  id="firstName"
                  aria-describedby="First Name"
                  value={newData.firstName}
                  onChange={handleChange}
                  style={
                    !isFirstNameFocused
                      ? {}
                      : isFirstNameValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                  }
                  onFocus={() => {
                    setIsFirstNameFocused(true);
                  }}
                  onBlur={() => {
                    setIsFirstNameFocused(false);
                  }}  

                />

              </div>
              <div className="col-lg-6">
                <label htmlFor="lastName" className="form-label ">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100`}
                  id="lastName"
                  name="lastName"
                  aria-describedby="Last Name"
                  value={newData.lastName} 
                  onChange={handleChange}
                  style={
                    !isLastNameFocused
                      ? {}
                      : isLastNameValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                  }
                  onFocus={() => {
                    setIsLastNameFocused(true);
                  }}
                  onBlur={() => {
                    setIsLastNameFocused(false);
                  }}  
 


                />

              </div>
              <div className="col-lg-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`${styles.formControl} form-control`}
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={newData.email} 
                  onChange={handleChange}
                  style={
                    !isEmailFocused
                      ? {}
                      : isEmailValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                  }
                  onFocus={() => {
                    setIsEmailFocused(true);
                  }}
                  onBlur={() => {
                    setIsEmailFocused(false);
                  }}   
                />
 
              </div>
              {/*
              <div className="col-lg-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control w-100`}
                  name="password"
                  id="password"
                  aria-describedby="password"

                />

              </div>
              <div className="col-lg-6">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={` form-control w-100`}
                  id="confirmPassword"
                  name="confirmPassword"
                  aria-describedby="confirmPassword"
                />
             
              </div>
            */}
              <div className="col-lg-6">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100`}
                  id="address"
                  name="Address"
                  aria-describedby="address"
                  value={newData.Address} 
                  onChange={handleChange}
                  style={
                    !isAddressFocused
                      ? {}
                      : isAddressValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                  }
                  onFocus={() => {
                    setIsAddressFocused(true);
                  }}
                  onBlur={() => {
                    setIsAddressFocused(false);
                  }}   
 

                 
                />
              
              </div>
              <div className="col-lg-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className={`${styles.formControl} form-control w-100 `}
                  id="city"
                  name="city"
                  aria-describedby="city"
                  value={newData.city}  
                  onChange={handleChange}
                  style={
                    !isCityFocused
                      ? {}
                      : isCityValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                  }
                  onFocus={() => {
                    setIsCityFocused(true);
                  }}
                  onBlur={() => {
                    setIsCityFocused(false);
                  }}   


                />
                
              </div>
              <div className="col-lg-12">
                <label htmlFor="pNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className={`${styles.formControl} form-control`}
                  id="pNumber"
                  name="pNumber"
                  aria-describedby="pNumber"
                  value={newData.pNumber}  
                  onChange={handleChange}
                  style={
                    !isPnumberFocused
                      ? {}
                      : isPnumberValid
                      ? { border: "2px solid green" }
                      : { border: "2px solid red" }
                  }
                  onFocus={() => {
                    setIsPnumberFocused(true);
                  }}
                  onBlur={() => {
                    setIsPnumberFocused(false);
                  }}  
                    
                  
                />
              </div>
              <input type='file' />
              <button className="btn btn-danger w-25 mx-auto mb-3">Edit Data</button>
            </form>
            </div>
        </div>
    );
}

export default UserEdit;
