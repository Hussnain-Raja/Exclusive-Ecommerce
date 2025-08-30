import React from "react";
import "../Styles/Newarrival.css";
import playstation from "../Assests/playstation.webp";
import women from "../Assests/women.webp";
import speaker from "../Assests/speaker.webp";
import pp from "../Assests/pp.webp";
const Newarrival = () => {
  return (
    <section className="newarrival main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="redparent">
              <div className="redhead"> </div>
              <h2 className="redcolor">Featured</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <h2 className="arrivalhead main-paragraph">New Arrival</h2>
          </div>
          <div className="col-lg-6">
            <div className="playstationalign">
              <img src={playstation} />
              {/* tt */}
              <div className="playtext">
                <h2 className="playhead">PlayStation 5</h2>
                <p className="playpara">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <a href="#" className="shopnow main-heading">
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <div className="playstationalign">
                <img src={women} />
                {/* ttt */}
                <div className="playtext">
                  <h2 className="playhead">Women’s Collections</h2>
                  <p className="playpara">
                    Featured woman collections that give you another vibe.
                  </p>
                  <a href="#" className="shopnow main-heading">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="parentdownimg">
                <div className="downimageparent">
                  <div className="playstationalign">
                    <img src={speaker} />
                    {/* tt */}
                    <div className="playtext">
                      <h2 className="playhead">Speakers</h2>
                      <p className="playpara gucciw">
                        Amazon wireless speakers
                      </p>
                      <a href="#" className="shopnow main-heading">
                        Shop Now{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="perfumelast">
                  <div className="playstationalign">
                    <img src={pp} />
                    {/* tt */}
                    <div className="playtext">
                      <h2 className="playhead">Perfume</h2>
                      <p className="playpara gucciw">GUCCI INTENSE OUD EDP</p>
                      <a href="#" className="shopnow main-heading">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newarrival;
