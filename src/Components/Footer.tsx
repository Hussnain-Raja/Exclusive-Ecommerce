import React from "react";
import "../Styles/Footer.css";
import code from "../Assests/code.webp";
import footerc from "../Assests/footerc.webp";
import footer2 from "../Assests/footer2.webp";
const Footer = () => {
  return (
    <section className="footer main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footfirst">
              {/* <ul className="footlistsec"> */}
              <h2 className="footheadlist">Exclusive</h2>
              <button className="subsbtn">Subscribe</button>
              <h2 className="firstsecget main-heading">
                Get 10% off your first order
              </h2>
              <div className="input-with-icon">
                <input type="email" placeholder="Enter your email" />
                <i className="ri-send-plane-2-line"></i>
              </div>

              {/* </ul> */}
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footlistsecond">
              <ul className="secondlist">
                <h2 className=" footheadlist">Support</h2>
                <li>
                  <a href="#">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
                </li>
                <li>
                  <a href="#">exclusive@gmail.com</a>
                </li>
                <li>
                  <a href="#">+88015-88888-9999</a>
                </li>
              </ul>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-2">
            <div className="footlistsecond">
              <ul className="secondlist">
                <h2 className=" footheadlist">Account</h2>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Login / Register</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>

            {/* 3 */}
          </div>
          {/* 3 */}
          <div className="col-lg-2">
            <div className="footlistsecond">
              <ul className="secondlist">
                <h2 className=" footheadlist">Quick Link</h2>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* 4th */}
          <div className="col-lg-3">
            <div className="footlistsecond">
              <ul className="socialicons">
                <h2 className=" footheadlist">Download App</h2>
                <h2 className="dowmnloadapp">Save $3 with App New User Only</h2>
                <div className="scancode">
                  <img src={code} width={102} height={104} />
                  <div className="parentbtns">
                    <div className="name">
                      <img src={footerc} width={141} />
                    </div>

                    {/* apple */}

                    <img src={footer2} width={141} />
                  </div>
                </div>
                <div className="socialiconspic">
                  <li>
                    <a href="#">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-twitter-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
