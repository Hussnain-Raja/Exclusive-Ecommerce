import React from "react";
import "../Styles/Voucher.css";
import appleimage from "../Assests/appleimage.webp";
import "swiper/css";
import voucherright from "../Assests/voucherright.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

type Props = {
  posts: any[] | undefined;
  loading: boolean;
};

const Voucher = (props: Props) => {
  return (
    <section className="voucher">
      <div className="container">
        <div className="row">
          <div className="voucherparent">
            <div className="col-lg-2">
              <div className="voucherleftmargin">
                <ul className="voucherleft">
                  {props.loading && <p>Loading...</p>}
                  {props.posts &&
                    props.posts.map((item: any) => (
                      <li key={item.id}>
                        {/* <a href="#">{item.id}</a> */}
                        <a href="#">{item.name}</a>
                        {/* <a href="#">{item.slug}</a>
                        <a href="#">{item.image}</a> */}
                      </li>
                    ))}
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
