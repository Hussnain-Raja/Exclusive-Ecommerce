import React from "react";
import signuppic from "../Assests/signuppic.webp";
import code from "../Assests/code.webp";
import "../Styles/Signup.css";
import Hero from "./Hero";
import { Link } from "react-router-dom";

import googlebtnsignup from "../Assests/googlebtnsignup.webp";

export const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="signup_picleft">
                <img src={signuppic} className="phoneimage" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="signupform">
                <div className="formrightparent">
                  <h2 className="signuphead main-paragraph">
                    Create an account
                  </h2>
                  <h2 className="signuppara">Enter your details below</h2>
                  <div className="inputform">
                    <input
                      type="email"
                      id="email"
                      className="email-input"
                      placeholder="Enter your email"
                    />
                    <input
                      type="email"
                      id="email"
                      className="email-input"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="buttonform">
                    <button className="redbutton">Create Account </button>
                    <div className="googlebtn">
                      <img src={googlebtnsignup} width={500} />
                    </div>
                  </div>
                  <div className="login">
                    <h2 className="verification main-heading">
                      Already have account?
                    </h2>
                    <Link to="/login" className="main-heading verification">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* signup picture */}
    </>
  );
};
