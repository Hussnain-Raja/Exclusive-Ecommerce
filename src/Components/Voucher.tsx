import React from "react";
import "../Styles/Voucher.css";
import appleimage from "../Assests/appleimage.webp";
import "swiper/css";
import voucherright from "../Assests/voucherright.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Voucher = () => {
  return (
    <section className="voucher">
      <div className="container">
        <div className="row">
          <div className="voucherparent">
            <div className="col-lg-2">
              <div className="voucherleftmargin">
                <ul className="voucherleft">
                  <li>
                    <a href="#">Woman’s Fashion<i className="ri-arrow-right-s-line"></i></a>
                  
                  </li>
                  <li>
                    <a href="#">Men’s Fashion <i className="ri-arrow-right-s-line"></i></a>
                    {/* <i className="ri-arrow-right-s-line"></i> */}
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Home & Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Medicine</a>
                  </li>
                  <li>
                    <a href="#">Sports & Outdoor</a>
                  </li>
                  <li>
                    <a href="#">Baby’s & Toys</a>
                  </li>
                  <li>
                    <a href="#">Groceries & Pets</a>
                  </li>
                  <li>
                    <a href="#">Health & Beauty</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* right side */}
            <div className="col-lg-10">
              <div className="voucherrightmargin">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {/* 1st slide */}

                  <SwiperSlide>
                    <div className="voucherimage">
                      <img src={voucherright} />
                      <div className="textonimage">
                        <div className="aligntextapple">
                          <img src={appleimage} width={43} />
                          <h2 className="appletext">iPhone 14 Series</h2>.
                        </div>
                        <div className="applepara">
                          <h2 className="offpara">Up to 10% off Voucher</h2>
                          <a href="#" className="shopnow main-heading">
                            Shop Now <i className="ri-arrow-right-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* 1st slide end */}

                  {/* 2nd slide start */}
                  <SwiperSlide>
                    <div className="voucherimage">
                      <img src={voucherright} />
                      <div className="textonimage">
                        <div className="aligntextapple">
                          <img src={appleimage} width={43} />
                          <h2 className="appletext">iPhone 14 Series</h2>.
                        </div>
                        <div className="applepara">
                          <h2 className="offpara">Up to 10% off Voucher</h2>
                          <a href="#" className="shopnow main-heading">
                            Shop Now <i className="ri-arrow-right-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* 2nd slide end */}
                  {/* 3rd slide */}
                  <SwiperSlide>
                    <div className="voucherimage">
                      <img src={voucherright} />
                      <div className="textonimage">
                        <div className="aligntextapple">
                          <img src={appleimage} width={43} />
                          <h2 className="appletext">iPhone 14 Series</h2>.
                        </div>
                        <div className="applepara">
                          <h2 className="offpara">Up to 10% off Voucher</h2>
                          <a href="#" className="shopnow main-heading">
                            Shop Now <i className="ri-arrow-right-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="voucherimage">
                      <img src={voucherright} />
                      <div className="textonimage">
                        <div className="aligntextapple">
                          <img src={appleimage} width={43} />
                          <h2 className="appletext">iPhone 14 Series</h2>.
                        </div>
                        <div className="applepara">
                          <h2 className="offpara">Up to 10% off Voucher</h2>
                          <a href="#" className="shopnow main-heading">
                            Shop Now <i className="ri-arrow-right-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="voucherimage">
                      <img src={voucherright} />
                      <div className="textonimage">
                        <div className="aligntextapple">
                          <img src={appleimage} width={57} />
                          <h2 className="appletext">iPhone 14 Series</h2>.
                        </div>
                        <div className="applepara">
                          <h2 className="offpara">Up to 10% off Voucher</h2>
                          <a href="#" className="shopnow main-heading">
                            Shop Now <i className="ri-arrow-right-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voucher;
