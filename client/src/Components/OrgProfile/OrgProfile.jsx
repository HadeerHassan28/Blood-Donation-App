import { React, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
export const OrgProfile = ({ TokenData, saveTokenData }) => {
  const { t } = useTranslation();
  const { isTheme } = useContext(conTheme);
  //console.log(isTheme);
  useEffect(() => {
    saveTokenData();
    // }
  }, []);

  return (
    <>
      <section
        className="py-4 "
        style={{
          backgroundColor: isTheme === true ? "black" : "#fbf1f0",
        }}
      >
        <div className="container py-5 ">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div
                  className="card-body  text-center"
                  style={{
                    backgroundColor: isTheme === true ? "black" : "white",

                    color: isTheme === true ? "white" : "black",
                  }}
                >
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
                    <Link to="payment">
                      <button
                        type="button"
                        className="btn btn-outline-danger ms-2 px-5"
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div
                  className="card-body"
                  style={{
                    backgroundColor: isTheme === true ? "black" : "white",
                    color: isTheme === true ? "white" : "black",
                  }}
                >
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Hospital Name")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{TokenData.orgName}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">{t("Code")}</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {TokenData.OrganizationCode}
                      </p>
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
          <div className="announcementbtn w-100 mt-5">
            <Link style={{ color: "white" }} to={"/announcForm"}>
              <button type="button" className="btn btn-danger w-100">
                {t("Make an Announcement")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrgProfile;

{
  /* 



*/
}
