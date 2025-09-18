import React, { useState } from "react";
import "../Styles/Herosec.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "../Styles/Model.css";
// avatar
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutModal from "./Model";

interface Props {
  setIslogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Herosec = (props: Props) => {
  // hhhg
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isLogin");
    setShow(false);
    props.setIslogin(false);
    navigate("/sign");
  };

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
                <Link to="/contactpage">Contact</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
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
                      {/* Trigger link */}
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(true); // ✅ opens the modal
                        }}
                      >
                        <i className="ri-logout-box-line"></i> Logout
                      </a>
                        <LogoutModal show={show} setShow={setShow} handleLogout={handleLogout}/>
                      {/* Logout Confirmation Modal */}
                      {/* <Modal show={show} onHide={() => setShow(false)} backdrop="static"
                        keyboard={false}
                        centered>
                        <Modal.Body>
                          <div className="closeicon" onClick={() => setShow(false)}>
                            <i className="ri-close-circle-line"></i>
                          </div>
                          <div className="logout-txt">
                            Are you sure you want to log out of your account?
                          </div>
                          <div className="logout-btn">
                            <Button variant="danger" onClick={handleLogout}>
                              Logout
                            </Button>
                          </div>
                        </Modal.Body>
                      </Modal> */}
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
