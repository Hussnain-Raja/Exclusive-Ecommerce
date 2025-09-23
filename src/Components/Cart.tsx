import React from "react";
import { useRef, useState } from "react";
import "../Styles/Cart.css";
import flashpic1 from "../Assests/flashpic1.webp";
import flashpic2 from "../Assests/flashpic2.webp";
import flashpic3 from "../Assests/flashpic3.webp";
import flashpic4 from "../Assests/flashpic4.webp";
import nail1 from "../Assests/nail1.webp";
import nailpic2 from "../Assests/nailpic2.webp";
import nailpic3 from "../Assests/nailpic3.webp";
import nailpic4 from "../Assests/nailpic4.webp";
import last1 from "../Assests/last1.webp";
import last2 from "../Assests/last2.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { useLocation } from "react-router";

const Cart = () => {
  const location = useLocation();
  const { Iproducts } = location.state || {};
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [count, setCount] = useState(0);
  const [activeDiv, setActiveDiv] = useState(null);
  const [linkActive, setLinkActive] = useState("");


  // Handle click for active
  const onHandleClick = (e: any) => {
    setActiveDiv(e.currentTarget);
  }


  const handleColorChange = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.classList.toggle("icon-active");
  };
  if (!Iproducts) {
    return <p>No product selected.</p>;
  }
  return (
    <>
      {/* section cart */}
      <section className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="carddesc">
                <p className="cardh">
                  Account / Gaming /{" "}
                  <span className="blackcolorh">{Iproducts.title}</span>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="parentswiper">
                {/* leftsidesmall image */}
                <div className="swiper__thumb">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    direction="vertical"
                  >
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="main__swiper">
                  <Swiper
                    spaceBetween={10}
                    // navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Iproducts.images} />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cartright">
                <h2 className="haedrightcart">{Iproducts.title}</h2>
                <div className="favstars starsdiff">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>

                  <p className="ratestar  stockgap">
                    (150 Reviews)<span className="lined">|</span>
                    <span className="instock">In Stock</span>
                  </p>
                </div>
                <div className="middleparent">
                  <p className="pricedoll">{`$${Iproducts.price}`}</p>
                  <p className="rightcartpara">{Iproducts.description}</p>
                  <div className="parabottom"></div>
                </div>

                <div className="colorballs">
                  <p className="colorhead">Colour:</p>

                  <div className="pointsparent">
                    <div className="borderpoints dust"></div>
                    <div className="borderpoints  noborder"></div>
                  </div>
                </div>
                <div className="sizeparent">
                  <p className="colorhead">Size:</p>
                  <div className={`sizeno ${linkActive === "XS" ? "active" : ""}`}
                    onClick={() => setLinkActive("XS")} >XS </div>
                  <div className={`sizeno ${linkActive === "S" ? "active" : ""}`}
                    onClick={() => setLinkActive("S")}>S </div>
                  <div className={`sizeno ${linkActive === "M" ? "active" : ""}`}
                    onClick={() => setLinkActive("M")}> M </div>
                  <div className={`sizeno ${linkActive === "L" ? "active" : ""}`}
                    onClick={() => setLinkActive("L")} >L </div>
                  <div className={`sizeno ${linkActive === "XL" ? "active" : ""}`}
                    onClick={() => setLinkActive("XL")}>XL </div>
                </div>
                <div className="countsec">
                  <div className="counter">
                    <div className="button-block">
                      <button onClick={() => count > 0 && setCount(count - 1)}>
                        -
                      </button>
                      <span className="count-display">{count}</span>
                      <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    {/* <div className="cartbtn"></div> */}
                  </div>
                  <div className="parentcoentbtn">
                    <button className="redbutton buy-btn">Add to Cart</button>
                  </div>
                  <div className="pokerheartb">
                    <i
                      className="ri-poker-hearts-line"
                      onClick={handleColorChange}
                    ></i>
                  </div>
                </div>

                <div className="rightlastblock">
                  <div className="lastsec">
                    <img src={last1} width={40} height={40} />
                    <div className="freedeliverey">
                      <p className="lasth">Free Delivery</p>
                      <p className="lastpara">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                  <div className="lastsec">
                    <img src={last2} width={40} height={40} />
                    <div className="freedeliverey">
                      <p className="lasth">Return Delivery</p>
                      <p className="lastpara  noline">
                        Free 30 Days Delivery Returns.{" "}
                        <span className="detail">Details</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section product */}
      <section className="related main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="redparent">
                <div className="redhead"> </div>
                <h2 className="redcolor">Related Item</h2>
              </div>
            </div>
            <div className="col-lg-3">
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
            </div>
            {/* 2 */}
            <div className="col-lg-3">
              <div className="allslidesparent">
                <div className="backflash">
                  <img src={flashpic2} />
                  <div className="redlabel">-40%</div>
                  <div className="circleheart">
                    <i className="ri-heart-line"></i>
                  </div>
                  <div className="circleheart eyeicon">
                    <i className="ri-eye-line"></i>
                  </div>
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
            </div>
            {/* 3 */}
            <div className="col-lg-3">
              <div className="allslidesparent">
                <div className="backflash">
                  <img src={flashpic3} />
                  <div className="redlabel">-40%</div>
                  <div className="circleheart">
                    <i className="ri-heart-line"></i>
                  </div>
                  <div className="circleheart eyeicon">
                    <i className="ri-eye-line"></i>
                  </div>
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
            </div>
            {/* 4 */}
            <div className="col-lg-3">
              <div className="allslidesparent">
                <div className="backflash">
                  <img src={flashpic4} />
                  <div className="redlabel">-40%</div>
                  <div className="circleheart">
                    <i className="ri-heart-line"></i>
                  </div>
                  <div className="circleheart eyeicon">
                    <i className="ri-eye-line"></i>
                  </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
