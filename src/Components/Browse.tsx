import React from "react";
import "../Styles/Browse.css";
import category1 from "../Assests/category1.webp";
import category2 from "../Assests/category2.webp";
import category3 from "../Assests/category3.webp";
import category4 from "../Assests/category4.webp";
import category5 from "../Assests/category5.webp";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
const Browse = () => {
  return (
    <section className="browse main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="redparent">
              <div className="redhead"> </div>
              <h2 className="redcolor">Categories</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="clockhead categoryalign">
              <h2 className="flashhead main-paragraph categoryh">
                Browse By Category
              </h2>

              <div className="circlealign">
                <div className="circleiconbtn categorycustom-prev">
                  <i className="ri-arrow-left-line"></i>
                </div>
                <div className="circleiconbtn  categorycustom-next">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              freeMode={true}               
              autoplay={{
                delay: 0,                   
                disableOnInteraction: false,
              }}
              speed={1000}
              navigation={{
                nextEl: ".categorycustom-next",
                prevEl: ".categorycustom-prev ",
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="browsercategoryback">
                  <img src={category1} />
                  <h2 className="categoryhead">Phones</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="browsercategoryback">
                  <img src={category2} />
                  <h2 className="categoryhead">Computers</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="browsercategoryback">
                  <img src={category3} />
                  <h2 className="categoryhead">SmartWatch</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="browsercategoryback">
                  <img src={category4} />
                  <h2 className="categoryhead">Camera</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="browsercategoryback">
                  <img src={category5} />
                  <h2 className="categoryhead">HeadPhones</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="browsercategoryback">
                  <img src={category1} />
                  <h2 className="categoryhead">Phones</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-lg-12">
            <div className="borderdowncategory"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
