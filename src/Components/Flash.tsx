import React, { useState, useEffect } from "react";
import "../Styles/Flash.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import flashpic1 from "../Assests/flashpic1.webp";
import flashpic2 from "../Assests/flashpic2.webp";
import flashpic3 from "../Assests/flashpic3.webp";
import flashpic4 from "../Assests/flashpic4.webp";

const Flash = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Set your sale end time here
  const target = new Date("2025-09-05T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / 1000 / 60) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0"
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flash main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="redparent">
              <div className="redhead"> </div>
              <h2 className="redcolor">Today</h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="flashsecondhead">
              {/* <div className="clockhead">
                <h2 className="flashhead main-paragraph">Flash Sales</h2>

                <div className="parentdots">
                  <div className="no-column">
                    <div className="placedays">
                      <div className="dayhead">Days</div>
                      <div className="dayno">03</div>
                    </div>
                    <div className="day-column">
                      <div className="dotsspace"></div>
                      <div className="dotsspace"></div>
                    </div>
                 
                    <div className="no-column">
                      <div className="placedays">
                        <div className="dayhead">Hours</div>
                        <div className="dayno">23</div>
                      </div>
                      <div className="day-column">
                        <div className="dotsspace"></div>
                        <div className="dotsspace"></div>
                      </div>
                    </div>
                   
                    <div className="no-column">
                      <div className="placedays">
                        <div className="dayhead">Minutes</div>
                        <div className="dayno">19</div>
                      </div>
                      <div className="day-column">
                        <div className="dotsspace"></div>
                        <div className="dotsspace"></div>
                      </div>
                    </div>
                

                    <div className="no-column">
                      <div className="placedays">
                        <div className="dayhead">Seconds</div>
                        <div className="dayno">56</div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div> */}
              <div className="clockhead">
                <h2 className="flashhead main-paragraph">Flash Sales</h2>
                <div className="parentdots">
                  {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
                    <div key={label} className="no-column">
                      <div className="placedays">
                        <div className="dayhead">{label}</div>
                        <div className="dayno">
                          {Object.values(timeLeft)[idx]}
                        </div>
                      </div>
                      {label !== "Seconds" && (
                        <div className="day-column">
                          <div className="dotsspace"></div>
                          <div className="dotsspace"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="circlealign">
                <div className="circleiconbtn custom-next">
                  <i className="ri-arrow-left-line"></i>
                </div>
                <div className="circleiconbtn custom-prev">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              className="mySwiper"
            >
              {/* 1st slide */}

              <SwiperSlide>
                <div className="allslidesparent">
                  <div className="backflash">
                    <img src={flashpic1} />
                    <div className="redlabel">-40%</div>
                    <div className="circleheart">
                      <i className="ri-heart-line"></i>
                    </div>
                    <div className="circleheart eyeicon">
                      <i className="ri-eye-line"></i>
                    </div>
                    {/* New Add to Cart label */}
                    <div className="add-to-cart-label">Add to Cart</div>
                  </div>
                  <div className="flashgame">
                    <h2 className="flashheadgame">HAVIT HV-G92 Gamepad</h2>
                    <div className="dollargame">
                      <p className="dollarh">$120</p>
                      <p className="price">$160</p>
                    </div>
                    <div className="favstars">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <p className="ratestar">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* 1 */}
              {/* 2 */}
              <SwiperSlide>
                <div className="allslidesparent">
                  <div className="backflash">
                    <img src={flashpic2} />
                    <div className="redlabel">-35%</div>
                    <div className="circleheart">
                      <i className="ri-heart-line"></i>
                    </div>
                    <div className="circleheart eyeicon">
                      <i className="ri-eye-line"></i>
                    </div>
                    <div className="add-to-cart-label">Add to Cart</div>
                  </div>
                  <div className="flashgame">
                    <h2 className="flashheadgame">AK-900 Wired Keyboard</h2>
                    <div className="dollargame">
                      <p className="dollarh">$960</p>
                      <p className="price">$160</p>
                    </div>
                    <div className="favstars">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <p className="ratestar">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* 2 */}
              {/* 3 */}
              <SwiperSlide>
                <div className="allslidesparent">
                  <div className="backflash">
                    <img src={flashpic3} />
                    <div className="redlabel">-25%</div>
                    <div className="circleheart">
                      <i className="ri-heart-line"></i>
                    </div>
                    <div className="circleheart eyeicon">
                      <i className="ri-eye-line"></i>
                    </div>
                    <div className="add-to-cart-label">Add to Cart</div>
                  </div>
                  <div className="flashgame">
                    <h2 className="flashheadgame">IPS LCD Gaming Monitor</h2>
                    <div className="dollargame">
                      <p className="dollarh">$120</p>
                      <p className="price">$160</p>
                    </div>
                    <div className="favstars">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <p className="ratestar">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 3 */}
              {/* 4 */}
              <SwiperSlide>
                <div className="allslidesparent">
                  <div className="backflash">
                    <img src={flashpic4} />
                    <div className="redlabel">-20%</div>
                    <div className="circleheart">
                      <i className="ri-heart-line"></i>
                    </div>
                    <div className="circleheart eyeicon">
                      <i className="ri-eye-line"></i>
                    </div>
                    <div className="add-to-cart-label">Add to Cart</div>
                  </div>
                  <div className="flashgame">
                    <h2 className="flashheadgame">S-Series Comfort Chair </h2>
                    <div className="dollargame">
                      <p className="dollarh">$120</p>
                      <p className="price">$160</p>
                    </div>
                    <div className="favstars">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <p className="ratestar">(88)</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* 4 */}
            </Swiper>
            <div className="col-lg-12">
              <div className="flashbutton">
                <button className="redbutton">View All Products </button>
              </div>
              <div className="flashborderend"></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Flash;
