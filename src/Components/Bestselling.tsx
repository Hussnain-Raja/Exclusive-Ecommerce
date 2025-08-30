import React from "react";
import "../Styles/Bestselling.css";
import best1 from "../Assests/best1.webp";
import best2 from "../Assests/best2.webp";
import best3 from "../Assests/best3.webp";
import best4 from "../Assests/best4.webp";
const Bestselling = () => {
  return (
    <section className="bestselling main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="redparent">
              <div className="redhead"> </div>
              <h2 className="redcolor">This Month</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="sellingheadparent">
            <h2 className="flashhead main-paragraph categoryh">
              Best Selling Products
            </h2>
          
          
            <div className="bestbutton">
              <button className="redbutton">View All </button>
            </div>
            </div>
          </div>

          <div className="col-lg-3">
             <div className="allslidesparent">
            <div className="backflash">
              <img src={best1} />

              <div className="circleheart">
                <i className="ri-heart-line"></i>
              </div>
              <div className="circleheart eyeicon">
                <i className="ri-eye-line"></i>
              </div>
            </div>
            <div className="flashgame">
              <h2 className="flashheadgame">The north coat</h2>
              <div className="dollargame">
                <p className="dollarh">$260</p>
                <p className="price">$360</p>
              </div>
              <div className="favstars">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <p className="ratestar">(65)</p>
              </div>
            </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-3">
             <div className="allslidesparent">
            <div className="backflash">
              <img src={best2} />

              <div className="circleheart">
                <i className="ri-heart-line"></i>
              </div>
              <div className="circleheart eyeicon">
                <i className="ri-eye-line"></i>
              </div>
            </div>
            <div className="flashgame">
              <h2 className="flashheadgame">Gucci duffle bag</h2>
              <div className="dollargame">
                <p className="dollarh">$960</p>
                <p className="price">$65</p>
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
          {/* 3 */}
          <div className="col-lg-3">
             <div className="allslidesparent">
            <div className="backflash">
              <img src={best3} />

              <div className="circleheart">
                <i className="ri-heart-line"></i>
              </div>
              <div className="circleheart eyeicon">
                <i className="ri-eye-line"></i>
              </div>
            </div>
            <div className="flashgame">
              <h2 className="flashheadgame">RGB liquid CPU Cooler</h2>
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
          </div>
          {/* 3 */}
          {/* 4 */}
          <div className="col-lg-3">
             <div className="allslidesparent">
            <div className="backflash">
              <img src={best4} />

              <div className="circleheart">
                <i className="ri-heart-line"></i>
              </div>
              <div className="circleheart eyeicon">
                <i className="ri-eye-line"></i>
              </div>
            </div>
            <div className="flashgame">
              <h2 className="flashheadgame">Small BookSelf</h2>
              <div className="dollargame">
                <p className="dollarh">$360</p>
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
        </div>
      </div>
    </section>
  );
};

export default Bestselling;
