import React from "react";
import "../Styles/Coustomer.css";

interface Props {
  user: any[];
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
