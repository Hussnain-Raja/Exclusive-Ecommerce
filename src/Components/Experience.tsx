import React from "react";
import "../Styles/Experience.css";
import background from "../Assests/background.webp";

const Experience = () => {
  return (
    <section className="experience main-padding">
      <div className="container">
        <div className="expimage">
          <img src={background} />
          <div className="exptext">
            <h2 className="exphead">Categories</h2>
            <p className="exppara">Enhance Your Music Experience</p>
            <div className="timecirclealign">
              <div className="timemin">
                <h2 className="numberexp">23</h2>
                <h2 className="hoursexp">Hours</h2>
              </div>
              <div className="timemin">
                <h2 className="numberexp">05</h2>
                <h2 className="hoursexp">Days</h2>
              </div>
              <div className="timemin">
                <h2 className="numberexp">59</h2>
                <h2 className="hoursexp">Mintues</h2>
              </div>
              <div className="timemin">
                <h2 className="numberexp">35</h2>
                <h2 className="hoursexp">Seconds</h2>
              </div>
            </div>
            <div className="seagreenbtn">
              <button className="redbutton greenbtn">Buy Now!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
