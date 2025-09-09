import React from "react";
import "../Styles/Herosec.css";
// avatar
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Herosec = () => {
  // ccc
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("user-dropdown");
      const avatar = document.querySelector(".usercircle");

      if (
        dropdown &&
        !dropdown.contains(event.target as Node) &&
        !avatar?.contains(event.target as Node)
      ) {
        dropdown.classList.remove("show-dropdown");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    const dropdown = document.getElementById("user-dropdown");
    if (dropdown) {
      dropdown.classList.toggle("show-dropdown");
    }
  };

  // ccc
  return (
    <section className="herosec">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="secondsechead">
              <h2 className="heroexclusive">Exclusive</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <ul className="sectwolist">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="lasticonsec">
              <div className="input-wrapper">
                <input placeholder="What are you looking for?"></input>
                <i className="ri-search-line search-icon"></i>
              </div>

              <div className="iconsatlast">
                <i className="ri-heart-line"></i>
                <Link to="/">
                  <i className="ri-shopping-cart-2-line"></i>
                </Link>
              </div>

              {/* Avatar and Dropdown */}
              <div className="usercircle-wrapper">
                <div className="usercircle" onClick={toggleDropdown}>
                  <i className="ri-user-line"></i>
                </div>

                <div id="user-dropdown" className="user-dropdown">
                  <ul>
                    <li>
                      <a href="/account">
                        <i className="ri-user-3-line"></i> Manage My Account
                      </a>
                    </li>
                    <li>
                      <a href="/orders">
                        <i className="ri-shopping-bag-4-line"></i> My Orders
                      </a>
                    </li>
                    <li>
                      <a href="/cancel">
                        <i className="ri-close-circle-line"></i>Cancelation
                      </a>
                    </li>
                    <li>
                      <a href="/reviews">
                        <i className="ri-star-line"></i> My Reviews
                      </a>
                    </li>
                    <li>
                      <a href="/logout">
                        <i className="ri-logout-box-line"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosec;
