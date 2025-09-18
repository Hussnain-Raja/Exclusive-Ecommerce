import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
}

const LogoutModal = (props: Props) => {
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
      <Modal show={props.show} onHide={() => props.setShow(false)}
        centered>
        <Modal.Body>
          <div className="closeicon" >
            <i className="ri-close-circle-line" style={{
              color: "red",
              fontSize:"60px",
              height:"65px"
            }}></i>
          </div>
          <div className="logout-txt" style={{fontSize : "16px", margin:"10px 0px" }} >
            Are you sure you want to log out of your account?
          </div>
          <div className="logout-btn">
            <Button variant="secondary" onClick={() => props.setShow(false)} style={{
              marginRight: "10px",
              padding: "8px 20px",
              fontSize: "14px",
              borderRadius: "4px"
            }}>
              Cancel
            </Button>
            <Button variant="danger" onClick={props.handleLogout} style={{
              marginRight: "10px",
              padding: "8px 20px",
              fontSize: "14px",
              borderRadius: "4px"
            }}>
              Logout
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LogoutModal;
