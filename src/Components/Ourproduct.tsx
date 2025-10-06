import React from "react";
import "../Styles/Ourproduct.css";
import useLoadMore from "../hooks/Loadmore";

interface Props {
  expProd: any;
  setExploreProd: React.Dispatch<React.SetStateAction<any[]>>;
}
const Ourproduct = (props: Props) => {
  const { itemsToShow, handleLoadMore } = useLoadMore();
  return (
    <section className="ourproduct main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="redparent">
              <div className="redhead"> </div>

              <h2 className="redcolor">Our Products</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="exploreheadp">
              <h2 className="explore main-paragraph ">Explore Our Products</h2>
            </div>
          </div>
          {props.expProd
            .slice(0, itemsToShow)
            .map((item: any) =>
              <div className="col-lg-3" key={item.id}>
                <div className="allslidesparent">
                  <div className="backflash">
                    <img src={item.images} />

                    <div className="circleheart">
                      <i className="ri-heart-line"></i>
                    </div>
                    <div className="circleheart eyeicon">
                      <i className="ri-eye-line"></i>
                    </div>
                    <div className="add-to-cart-label">Add to Cart</div>
                  </div>
                  <div className="flashgame">
                    <h2 className="flashheadgame">{item.title}</h2>
                  </div>
                  <div className="favstars">
                    <p className="dollarh">$100</p>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <p className="ratestar">(35)</p>
                  </div>
                </div>
              </div>
            )}
          <div className="col-lg-12">
            <div className="flashbutton">
              {itemsToShow < props.expProd.length && (
                <button className="redbutton viewbtn"
                  onClick={handleLoadMore}
                >View More</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourproduct;
