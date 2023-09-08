import React from "react";

const Signin = () => {
  return (
    <>
      <div className="cointainer-fluid">
        <div className="row">
          <div className="col-12 col-md-4 mx-auto  ">
            <div className="card flex-row my-5 glassmorphism">
              <div className="card-body p-3 p-sm-5">
                <h5 className="card-title text-center mb-5 text-dark  fw-medium fs-5">
                  Login
                </h5>
                <form>
                  

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control text-area"
                      id="floatingInputEmail"
                      required
                    />
                    <label for="floatingInputEmail">Email address</label>
                  </div>

                  

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control text-area"
                      id="floatingPassword"
                      required
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                 

                  <div className="d-grid mb-2 justify-content-center">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase "
                      type="submit"
                    >
                    Login
                    </button>
                  </div>

                  <a
                    className="d-block text-center mt-2  text-dark text-decoration-none fw-medium"
                    href="/signup"
                  >
                    Don't have an account ?<span className="fw-bold"> Sign Up</span>{" "}
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
