import React from "react";
import signuppic from "../Assests/signuppic.webp";
import code from "../Assests/code.webp";
import "../Styles/Signup.css";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import googlebtnsignup from "../Assests/googlebtnsignup.webp";
import { FormikTouched } from "formik";
interface Props {
  values: {
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: {
    email?: string;
    password?: string;
  };
  touched: FormikTouched<{
    email: string;
    password: string;
  }>
}
export const Signup = (props: Props) => {
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
                      autoComplete="off"
                      className="email-input"
                      placeholder="Enter your email"
                      name="email"
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.error.email && props.touched.email ? (<p className="form-error" style={{ color: "red", fontSize: 12, marginTop: 10 }}>{props.error.email}</p>) : null}
                  </div>
                  <div className="inputform">
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      className="email-input"
                      id="password"
                      placeholder="Enter your password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    {props.error.password && props.touched.password ? (<p className="form-error" style={{ color: "red", fontSize: 12, marginTop: 10 }}>{props.error.password}</p>) : null}
                  </div>
                  <form className="buttonform" onSubmit={props.handleSubmit}>
                    <button className="redbutton" type="submit">Login</button>
                    <div className="googlebtn">
                      <img src={googlebtnsignup} width={500} />
                    </div>
                  </form>
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
