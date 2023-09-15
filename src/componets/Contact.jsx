import React, { useContext, useEffect,useState } from "react";
import host from "../Serverlink";

import userContext from "../context/user/userContext";

import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  const context = useContext(userContext);
  const Navigate = useNavigate();
  const { setUserData, Data } = context;
  const [msg,setMsg]=useState('');


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

    if (!msg.error) {
      setUserData(msg);
    }
  };

  const { name, email } = Data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMsg();
    

  };
  const sendMsg= async ()=>{
    const response = await fetch(`http://localhost:3000/auth/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token') 
      },
      body: JSON.stringify({message:msg})
    });

    const data = await response.json();
    if(response.status===201 || data){
      props.showAlert("message sent successfully","success");
  }
  else if(response.status===500){
    props.showAlert("something went wrong from our side , please report us ","danger")
  }
  else if(response.status===422){
    props.showAlert("plz fill the filed properly ","warning")
  }else{
    props.showAlert("something went wrong please try again later ","danger")
 
  }

      
    

  }

  return (
    <>
      <div className="cointainer-fluid setCointainer">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto  my-auto text-light">
            <div className=" glassmorphism p-3 m-sm-2">
              <form method="POST" onSubmit={handleSubmit}>
                <h4 className="text-center">Message Us</h4>
                <hr />
                <div className="row">
                  <div className="col-12 col-md-6">
                    {" "}
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control text-area"
                        id="floatingInputName"
                        value={name}
                        disabled
                      />
                      <label htmlFor="floatingInputName">Your Name</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {" "}
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control text-area"
                        id="floatingInputEmail"
                        value={email}
                        disabled
                      />
                      <label htmlFor="floatingInputEmail">Your Email</label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="form-floating mb-3">
                    <textarea
                      type="email"
                      className="form-control text-area"
                      id="floatingInputMessage "
                      style={{ height: "10rem" }}
                      value={msg}
                      onChange={e => setMsg(e.target.value)}
                    />
                    <label
                      htmlFor="floatingInputMessage "
                      style={{ marginLeft: "0.8rem" }}
                      
                    >
                      Your Message
                    </label>
                  </div>
                </div>
                <hr />
                <div className="d-grid mb-2 justify-content-center">
                  <button
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase "
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
