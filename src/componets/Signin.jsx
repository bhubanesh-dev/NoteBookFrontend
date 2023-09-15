import React, { useContext, useState } from "react";
import host from "../Serverlink";

import { useNavigate ,Link } from "react-router-dom";
import userContext from "../context/user/userContext";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Signin = (props) => {
  const Navigate = useNavigate();

  const context = useContext(userContext);
  const { setUserData } = context;

  //from initialization
  const { register, handleSubmit, control, formState, getValues } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    // alert(JSON.stringify({...data}));
    userLogin(data);
  };

  const userLogin = async (data) => {
    const { email, password } = data;
    // API Call
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const msg = await response.json();

      const { message, token } = msg;
      // Save the auth token & user info and redirect
     


      if(response.status === 403 || !msg){
        props.showAlert(
          "invalid credentials ",
          "danger"
        );
      }

     else if (response.status === 200 || msg) {
        props.showAlert("Login successfully", "success");
        localStorage.setItem("token", token);
        Navigate("/");
      } else if (response.status === 500) {
        props.showAlert(
          "something went wrong from our side , please report us ",
          "danger"
        );
      } else if (response.status === 422) {
        props.showAlert("plz fill the filed properly ", "warning");
      }
     
    
  };

  return (
    <>
      <div className="cointainer-fluid setCointainer">
        <div className="row">
          <div className="col-12 col-md-4 mx-auto  m-2 ">
            <div className="card flex-row my-5 glassmorphism">
              <div className="card-body p-3 p-sm-5">
                <h5 className="card-title text-center mb-5 text-dark  fw-medium fs-5">
                  Login
                </h5>
                <form
                  method="POST"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control text-area"
                      id="floatingInputEmail"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is  required ",
                        },
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    <label htmlFor="floatingInputEmail">Email address</label>
                    <p className="errors">{errors.email?.message}</p>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control text-area"
                      id="floatingPassword"
                      {...register("password", { required: true })}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <p className="errors">{errors.password?.message}</p>
                  </div>

                  <div className="d-grid mb-2 justify-content-center">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase "
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                  <Link
                    className="d-block text-center mt-2  text-dark text-decoration-none fw-medium"
                    to="/signup"
                  >
                    Don't have an account ?
                    <span className="fw-bold"> Sign Up</span>{" "}
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default Signin;
