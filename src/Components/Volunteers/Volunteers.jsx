import React, { useEffect, useState } from "react";
import styles from "./Volunteers.module.css";
import { useRef } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState(null);
  const [searchRes, setSearchRes] = useState(volunteers);
  const bloodGroup = useRef();
  const location = useRef();
  useEffect(()=>{
    axios.get("http://localhost:3000/users").then(res => {
      setVolunteers(res.data)
      setSearchRes(res.data)
    })
  },[])

  const searchBloodGroupLocation = () => {
    if(volunteers !== null){
      if (bloodGroup.current.value !== 'All' && bloodGroup.current.value !== '' && location.current.value !== '') {
        setSearchRes(volunteers.filter(vol => vol.bloodType === bloodGroup.current.value && vol.city.toLowerCase().includes(location.current.value.toLowerCase())))
      }
      else if (bloodGroup.current.value !== 'All' && bloodGroup.current.value !== '') {
        setSearchRes(volunteers.filter(vol => vol.bloodType === bloodGroup.current.value))
      }
      else if (location.current.value !== '') {
        setSearchRes(volunteers.filter(vol => vol.city.toLowerCase().includes(location.current.value.toLowerCase())))
      }
      else {
        setSearchRes(volunteers)
      }
    }
    else{
      location.current.value = '';
      bloodGroup.current.value = '';
    }
  }

  const resetSearch = () => {
    setSearchRes(volunteers);
    location.current.value = '';
    bloodGroup.current.value = '';
  }

  return (
    <>
      <div className="text-center p-5">
        <h2 style={{ color: "#ee394a" }}>Volunteers</h2>
        <p>Search our Super Hero Volunteers</p>
      </div>
      <div className={`${styles.searchBox} py-4`}>
        <span className={styles.filterWith}>Filter with:</span>
        <select className={`${styles.select}`} ref={bloodGroup} onChange={searchBloodGroupLocation}>
          <option label="Blood Type" hidden></option>
          <option>All</option>
          <option name="A+" value="A+">A+</option>
          <option name="A-" value="A-">A-</option>
          <option name="B+" value="B+">B+</option>
          <option name="B-" value="B-">B-</option>
          <option name="AB+" value="AB+">AB+</option>
          <option name="AB-" value="AB-">AB-</option>
          <option name="O+" value="O+">O+</option>
          <option name="O-" value="O-">O-</option>
        </select>
        <input className={styles.customInput} type="text" list="locations" name="location" id="location" placeholder="Location" ref={location} onChange={searchBloodGroupLocation} />
        <datalist id="locations">
          <option value="Alexandria">Alexandria</option>
          <option value="Aswan">Aswan</option>
          <option value="Asyut">Asyut</option>
          <option value="Beheira">Beheira</option>
          <option value="Beni Suef">Beni Suef</option>
          <option value="Cairo">Cairo</option>
          <option value="Dakahlia">Dakahlia</option>
          <option value="Damietta">Damietta</option>
          <option value="Faiyum">Faiyum</option>
          <option value="Gharbia">Gharbia</option>
          <option value="Giza">Giza</option>
          <option value="Ismailia">Ismailia</option>
          <option value="Kafr El Sheikh">Kafr El Sheikh</option>
          <option value="Luxor">Luxor</option>
          <option value="Matruh">Matruh</option>
          <option value="Minya">Minya</option>
          <option value="Monufia">Monufia</option>
          <option value="New Valley">New Valley</option>
          <option value="North Sinai">North Sinai</option>
          <option value="Port Said">Port Said</option>
          <option value="Qalyubia">Qalyubia</option>
          <option value="Qena">Qena</option>
          <option value="Red Sea">Red Sea</option>
          <option value="Sharqia">Sharqia</option>
          <option value="Sohag">Sohag</option>
          <option value="South Sinai">South Sinai</option>
          <option value="Suez">Suez</option>
        </datalist>
        <button className="btn btn-outline-danger" onClick={resetSearch}>Reset</button>
      </div>
      <div className={searchRes? "d-none text-center text-danger fs-3": "d-block text-center text-danger fs-4"}>Please wait data loading</div>
      <table className={`${styles.tableW} table w-75 mt-5 mx-auto`}>
        <thead>
          <tr>
            <th className="text-start text-danger p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-award text-danger" viewBox="0 0 20 20">
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              VOLUTEER</th>
            <th className="text-center text-danger p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt text-danger" viewBox="0 0 20 20">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              LOCATION</th>
            <th className="text-center text-danger p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-droplet text-danger" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
              </svg>
              BLOOD GROUP</th>
          </tr>
        </thead>
        <tbody>
          {searchRes!==null && searchRes.length === 0 ? <tr><td colSpan={3} className="fs-4">Sorry, no results</td></tr>: searchRes?searchRes.map(vol => <tr key={uuid()}>
            <td className={`${styles.volName} text-start ps-3`}>
              <img src="assets/images/user.jpeg" alt="profile" style={{ width: "8vw", height: "8vw", borderRadius: "4vw" }} />
              <span>{vol.firstName} {vol.lastName}</span></td>
            <td className="text-center">{vol.address}, {vol.city}</td>
            <td className="text-center">{vol.bloodType}</td>
          </tr>):<tr><td colSpan={3} className="fs-4">Loading...</td></tr>}
        </tbody>
      </table>
      <button className="btn btn-outline-danger d-block mx-auto fw-bold">Start saving lifes</button>
    </>
  );
};

export default Volunteers;

