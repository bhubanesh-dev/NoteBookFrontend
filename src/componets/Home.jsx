import React, { useContext, useEffect } from "react";
import host from "../Serverlink";

import { useNavigate, Link } from "react-router-dom";

import userContext from "../context/user/userContext";

const Home = () => {
  const Navigate = useNavigate();


  const handleLogout=()=>{
    localStorage.removeItem('token');
    Navigate("/")
  }

  const context = useContext(userContext);
  const { setUserData, Data } = context;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
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

    if (!msg.error) {
      setUserData(msg);
    }
  };
  const { name } = Data;

  return (
    <>
      <div className="cointainer setCointainer" >
        <div className="row">
          <div
            className="col-12 col-md-4 mx-auto text"
            style={{ opacity: "0.9" }}
          >
            <div className="mt-4">Welcome to NoteCraft</div>
            {!localStorage.getItem("token") ? (
              <div> Crafting Your Notes, Your Way</div>
            ) : (
              <div className="" style={{ textTransform: "capitalize" }}>
                {name}
              </div>
            )}

            <div className="row mt-4 mx-md-auto">
              <div className="col-6   ">
                <Link
                  className="btn btn-lg  border-3 border-light  text-light text-decoration-none fw-medium onhover "
                  to={"note"}
                >
                  notes &#8594;
                </Link>
              </div>
              <div
                className="col-6   
          "
              >
                
                {!localStorage.getItem("token") ? (
                <Link
                className="btn btn-lg text-center  border-3 border-light  text-light text-decoration-none fw-medium onhover "
                to={"signin"}
                
              >
                login &#8594;
              </Link>
              ) : (
                <Link
                className="btn btn-lg text-center  border-3 border-light  text-light text-decoration-none fw-medium onhover "
                onClick={handleLogout}
                
              >
                Logout &#8594;
              </Link>
                
               
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
