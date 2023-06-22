import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from 'axios'
export const OrgProfile = ({ TokenData }) => {
  const {t} = useTranslation();


  const handleDonation = () => {
    const requestBody = {
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    };
  
    const requestHeaders = {
      'Content-Type': 'application/json',
    };
  
    axios
      .post('http://localhost:3000/create-checkout-session', requestBody, { headers: requestHeaders })
      .then(({ data }) => {
        window.location = data.url;
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                    src={TokenData.image}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{TokenData.orgName}</h5>
                  <div className="d-flex justify-content-center mb-2">
                    <Link style={{ color: "white" }} to="edit">
                      <button type="button" className="btn btn-danger  px-5">
                        {t("Edit")}
                      </button>
                    </Link>
                    <button type="button" className="btn btn-outline-danger ms-2 px-5">
                      {t("Message")}
                    </button>
                    <button type="button" className="btn btn-outline-danger ms-2 px-5" onClick={handleDonation}>
                      Checkout
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
                      <p className="mb-0">{t("Hospital Name")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {TokenData.orgName}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Code")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.OrganizationCode}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Address")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.Address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Sector")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.sector}</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrgProfile;
