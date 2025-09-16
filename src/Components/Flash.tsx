import React, { useState, useEffect } from "react";
import "../Styles/Flash.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router";

interface Props {
  data: any[];
  loading: boolean;
}

const Flash = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = (item: any) => {
    navigate("/cart", { state: { Iproducts: item } });
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  // keep target constant (outside useEffect and NOT in dependency array)
  const target = new Date("2025-09-20T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []); // 🔑 empty array so effect runs only once
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
              {props.loading && <p>Loading...</p>}
              {props.data.map((item) => (
                <li key={item.id}>
                  <SwiperSlide>
                    <div className="allslidesparent" onClick={() => handleClick(item)}>
                      <div className="backflash">
                        <img src={item.images} />
                        <div className="redlabel">
                          {item.price ? `-20%` : "-40%"}
                        </div>
                        <div className="circleheart">
                          <i className="ri-heart-line"></i>
                        </div>
                        <div className="circleheart eyeicon">
                          <i className="ri-eye-line"></i>
                        </div>
                        <div className="add-to-cart-label">Add to Cart</div>
                      </div>
                      <div className="flashgame">
                        <h2 className="flashheadgame">

                          {item.title}
                        </h2>
                        <div className="dollargame">
                          <p className="dollarh">${item.price}</p>
                          <p className="price">
                            {/* ${item.oldPrice || item.price + 40} */}
                          </p>
                        </div>
                        <div className="favstars">
                          {[...Array(item.rating || 4)].map((_, i) => (
                            <i key={i} className="ri-star-fill"></i>
                          ))}
                          <p className="ratestar">{item.slug}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </li>
              ))}
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
