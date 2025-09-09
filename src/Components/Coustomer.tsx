import React from "react";
import "../Styles/Coustomer.css";
import delievery1 from "../Assests/delievery1.webp";
import delivery2 from "../Assests/delivery2.webp";
import delivery3 from "../Assests/delivery3.webp";

interface Props {
  user: [];
  isLoading: boolean;
}
const Coustomer = (props: Props) => {
  return (
    <section className="coustomer main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="customer_heading">
              Our Customers
            </div>
          </div>
          {props.isLoading && <p>Loading....</p>}
          {props.user.slice(0, 3).map((item: any) => (
            <div className="col-lg-4" key={item.id}>
              <div className="Allparent">
                <div className="deliveryparent">
                  <img src={item.avatar} />
                </div>
                <div className="deliverytext">
                  <h2 className="fastdelievery">{item.name}</h2>
                  <p className="fastpara">{item.email}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12">
            {/* onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} it will moves page up */}
            <div
              className="circlealign topupbtn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
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
