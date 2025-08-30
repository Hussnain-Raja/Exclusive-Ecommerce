import React from "react";
import "../Styles/Coustomer.css";
import delievery1 from "../Assests/delievery1.webp";
import delivery2 from "../Assests/delivery2.webp";
import delivery3 from "../Assests/delivery3.webp";
const Coustomer = () => {
  return (
    <section className="coustomer main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="Allparent">
              <div className="deliveryparent">
                <img src={delievery1} />
              </div>
              <div className="deliverytext">
                <h2 className="fastdelievery">FREE AND FAST DELIVERY</h2>
                <p className="fastpara">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4">
            <div className="Allparent">
              <div className="deliveryparent">
                <img src={delivery2} />
              </div>
              <div className="deliverytext">
                <h2 className="fastdelievery">24/7 CUSTOMER SERVICE</h2>
                <p className="fastpara">Friendly 24/7 customer support</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4">
            <div className="Allparent">
              <div className="deliveryparent">
                <img src={delivery3} />
              </div>
              <div className="deliverytext">
                <h2 className="fastdelievery">MONEY BACK GUARANTEE</h2>
                <p className="fastpara">We reurn money within 30 days</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            {/* onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} it will moves page up */}
            <div className="circlealign topupbtn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="circleiconbtn">
                <i className="ri-arrow-up-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coustomer;
