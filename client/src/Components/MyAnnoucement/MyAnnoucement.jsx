import React, { useEffect, useState } from 'react';
import styles from './MyAnnouncement.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const MyAnnoucement = ({ TokenData, saveTokenData }) => {
  const [MyAnnouncements, setMyAnnouncements] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    saveTokenData();
  }, []);

  useEffect(() => {
    setisLoading(true);

    axios
      .get("http://localhost:3005/announcements")
      .then((response) => {
        const myOwnData = response.data.filter((elem) => {
          return elem.orgData.orgName === TokenData.orgName;
        });
        setMyAnnouncements(myOwnData);
        setisLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3005/announcements/${id}`)
      .then(() => {
        toast.success("Announcement Deleted Successfully", {
          position: 'bottom-right',
        });
        setMyAnnouncements((prevAnnouncements) => prevAnnouncements.filter((a) => a.id !== id));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <div className='container py-5'>
        <h2 className='text-center mb-3'> {TokenData.orgName} Announcements </h2>
        <div className='row gy-3'>
          {isLoading ? (
            <div>Loading.....</div>
          ) : MyAnnouncements.length > 0 ? (
            MyAnnouncements.map((a) => (
              <div className={`${styles.annoCard} col-lg-6 py-4 px-3 text-center `} key={a.id}>
                <h4 className='text-muted'>
                  Hospital Name : <span className='h4 text-danger'>{a.orgData.orgName}</span>
                </h4>
                <h4 className='text-muted'>
                  Blood Type : <span className='h4 text-danger'>{a.bloodType}</span>
                </h4>
                <h4 className='text-muted'>
                  Quantity : <span className='h4 text-danger'>{a.quantity}</span>
                </h4>
                <p className='fs-5'>{a.message}</p>
                <div className='row'>
                  <div className='col-lg-6'>
                    <Link to={`/edit/${a.id}`}>
                      <button className='btn btn-success px-5'>Edit</button>
                    </Link>
                  </div>
                  <div className='col-lg-6'>
                    <button className='btn btn-danger px-5' onClick={() => handleDelete(a.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h6 className='text-danger text-center'>You Don't Have Any Annoucements</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAnnoucement;