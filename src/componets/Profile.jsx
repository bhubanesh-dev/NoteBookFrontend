import React, { useContext, useEffect } from "react";
import host from "../Serverlink";

import { blankprofile } from "../assets/assests";
import userContext from "../context/user/userContext";

import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const context = useContext(userContext);
  const Navigate = useNavigate();
  const { setUserData, Data } = context;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.showAlert("please login first","warning");
      Navigate("/signin");
    } else {
      userInfo();
    }
  }, []);
  const userInfo = async () => {
    // API Call
    const response = await fetch(`${host}/auth/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const msg = await response.json();

    if(response.status===500){
      props.showAlert("something went wrong from our side , please report us ","danger")
    }else{
      setUserData(msg);}
    
  };

  const { name, _id, email, phone, date } = Data;

  return (
    <>
      <div>
        <div
          className="cointainer-fluid"
         
        >
          <div className="row">
            <div className="col-12 col-md-8 mx-auto  my-auto text-light">
              <div className=" glassmorphism p-3 m-sm-2">
                <h3 className="card-title m-3 text-light text-center fw-medium">
                  Profile
                </h3>
                <div className="row mb-3">
                  <div className="col-12 col-md-4  ">
                    <img
                      src={blankprofile}
                      className="rounded float-start "
                      style={{ height: "16rem", width: "12rem" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-12 col-md-8 fs-4 mt-2">
                    <div className="row mb-md-3">
                      <div className="col-12 col-lg-6 text-capitalize">ID :</div>
                      <div className="col-12 col-lg-6 text-capitalize">{_id}</div>
                    </div>
                    <div className="row mb-md-3">
                      <div className="col-12 col-lg-6 text-capitalize">Name :</div>
                      <div className="col-12 col-lg-6 text-capitalize">{name}</div>
                    </div>
                    <div className="row mb-md-3">
                      <div className="col-12 col-lg-6 text-capitalize">Email :</div>
                      <div className="col-12 col-lg-6 text-capitalize">{email}</div>
                    </div>
                    <div className="row mb-md-3">
                      <div className="col-12 col-lg-6 text-capitalize">Phone :</div>
                      <div className="col-12 col-lg-6 text-capitalize">{phone}</div>
                    </div>
                    <div className="row mb-md-3">
                      <div className="col-12 col-lg-6 text-capitalize">
                        registration Date :
                      </div>
                      <div className="col-12 col-lg-6 text-capitalize">{date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
