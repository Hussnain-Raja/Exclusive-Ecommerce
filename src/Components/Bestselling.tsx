import React from "react";
import "../Styles/Bestselling.css";
import useLoadMore from "../hooks/Loadmore";
interface Props {
  datas: any[];
  loading: boolean;
}
const Bestselling = (props: Props) => {
  const { itemsToShow, handleLoadMore } = useLoadMore();
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
                {itemsToShow < props.datas.length && (
                  <button className="redbutton" onClick={handleLoadMore}>View All </button>
                )}
              </div>
            </div>
          </div>
          {props.loading && <p>Loading.....</p>}
          {props.datas.slice(0, itemsToShow).map((item: any, index: number) => (
            <div className="col-lg-3" key={item.id + index}>
              <div className="allslidesparent">
                <div className="backflash">
                  <img src={item.images} />

                  <div className="circleheart">
                    <i className="ri-heart-line"></i>
                  </div>
                  <div className="circleheart eyeicon">
                    <i className="ri-eye-line"></i>
                  </div>
                </div>
                <div className="flashgame">
                  <h2 className="flashheadgame">{item.title}</h2>
                  <div className="dollargame">
                    <p className="dollarh">{item.price}</p>
                    <p className="price">{item.price}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestselling;
