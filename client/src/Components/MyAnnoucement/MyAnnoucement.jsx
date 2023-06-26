import React, { useEffect, useState } from 'react';
import styles from './MyAnnouncement.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MyAnnoucement = ({ TokenData, saveTokenData }) => {
  const [MyAnnouncements, setMyAnnouncements] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    saveTokenData();
    // }
  }, []);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("http://localhost:3005/announcements")
      .then((response) => {
        const myOwnData = response.data.filter(elem => {
          return elem.orgData.orgName === TokenData.orgName
        })
        setMyAnnouncements(myOwnData)
        setisLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  console.log(MyAnnouncements)
  return (
    <div className='py-4'>
      <div className='container py-5'>
        <h2 className='text-center mb-5 text-danger'>  {TokenData.orgName} Hospital Announcements </h2>
        <div className="row gy-3">
          {isLoading ? <div className='text-center mt-5'><h2 className='text-danger fs-2'>Loading.....</h2></div> :
            MyAnnouncements.map((a) => <div className={`${styles.annoCard} col-lg-5 mb-3 offset-1 py-4  d-flex flex-column justify-content-between`}>
              <div className='mb-4'>
                <h4 className="">Hospital Name : <span className="h4 text-danger">{a.orgData.orgName}</span></h4>
                <h4 className="">Blood Type : <span className="h4 text-danger">{a.bloodType}</span></h4>
                <h4 >Quantity : <span className="h4 text-danger">{a.quantity}</span></h4>
                <p className="">{a.message}</p>
              </div>
              <div className='buttons'>
                <Link to="edit">
                  <button className='btn btn-success px-5 me-2'>Edit</button>
                </Link>
                <button className='btn btn-danger px-5'>Delete</button>
              </div>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default MyAnnoucement;
