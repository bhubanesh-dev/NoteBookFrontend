import host from "../Serverlink";
import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { useForm } from "react-hook-form";


import HashLoader from "react-spinners/HashLoader"; 


const Signup = (props) => {
  const Navigate = useNavigate();
  let [loading, setLoading] = useState(false);

  const { register, handleSubmit, control, formState, getValues } = useForm();
  const { errors } = formState;

  const override = {

    display: "block",
    margin: "0 auto",

  };

  const onSubmit = (data) => {
    
    //console.log(JSON.stringify({...data}));
    userRegister(data);
  };
  const userRegister = async (data) => {
    const { name, email, phone, password, cpassword } = data;
    // API Call
    setLoading(true);
    const response = await fetch(`${host}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, password, cpassword }),
    });
    const msg = await response.json();
    setLoading(false);

    if (response.status === 403 || !msg) {
      props.showAlert("invalid credentials ", "danger");
    } else if (response.status === 422) {
      props.showAlert("email already exist ", "warning");
    } else if (response.status === 201 || msg) {
      props.showAlert("you are registered successfully", "success");

      Navigate("/signin");
    } else if (response.status === 500) {
      props.showAlert(
        "something went wrong from our side , please report us ",
        "danger"
      );
    }
  };
  return (
    <>
      {loading ? (
        // If loading is true, render the loading spinner
        <div className="setCointainer">
          <HashLoader
            color={"#101f4e"}
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        // If loading is false, render the login form
        <>
          <div className="cointainer-fluid setCointainer">
            <div className="row">
              <div className="col-12 col-md-4 mx-auto">
                <div className="card flex-row my-3 glassmorphism">
                  <div className="card-body p-3 p-sm-5">
                    <h5 className="card-title text-center mb-5 text-dark  fw-medium fs-5">
                      Register
                    </h5>
                    <form
                      method="POST"
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                    >
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control text-area"
                          id="floatingInputUsername"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name required ",
                            },
                            minLength: {
                              value: 5,
                              message: "Username must be atleast 5 charecter",
                            },
                          })}
                        />
                        <label for="floatingInputUsername">Username</label>
                        <p className="errors">{errors.name?.message}</p>
                      </div>

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
                        <label for="floatingInputEmail">Email address</label>
                        <p className="errors">{errors.email?.message}</p>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          className="form-control text-area"
                          id="floatingInputPhone"
                          {...register("phone", {
                            required: {
                              value: true,
                              message: "Phone number required ",
                            },
                            minLength: {
                              value: 10,
                              message: "Invalid number",
                            },
                            maxLength: {
                              value: 10,
                              message: "Invalid number",
                            },
                          })}
                        />
                        <label for="floatingInputPhone">Phone</label>
                        <p className="errors">{errors.phone?.message}</p>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control text-area"
                          id="floatingPassword"
                          {...register("password", { required: true })}
                        />
                        <label for="floatingPassword">Password</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control text-area"
                          id="floatingPasswordConfirm"
                          {...register("cpassword", { required: true })}
                        />
                        <label for="floatingPasswordConfirm">
                          Confirm Password
                        </label>
                        <p className="errors">
                          {getValues("cpassword") !== getValues("password")
                            ? "Password don't match"
                            : true}
                        </p>
                      </div>

                      <div className="d-grid mb-2 justify-content-center">
                        <button
                          className="btn btn-lg btn-primary btn-login fw-bold text-uppercase "
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <Link
                        className="d-block text-center mt-2  text-dark text-decoration-none fw-medium"
                        to="/signin"
                      >
                        Have an account?
                        <span className="fw-bold"> Sign In</span>{" "}
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <DevTool control={control} /> */}
        </>
      )}
    </>
  );
};

export default Signup;
