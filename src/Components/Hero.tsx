import React from "react";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="tophead">
                <h2 className="summer main-heading">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </h2>

                <Link to="/signup" className="shopnow main-heading">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="langbtn">
                <p className="lang main-heading">English</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
