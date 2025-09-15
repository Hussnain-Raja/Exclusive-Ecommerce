import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const LogoutModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data (token, localStorage, etc.)
    localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/login");
    
  };

  return (
    <>
      {/* Logout Trigger Button */}
      <Button variant="danger" onClick={() => setShow(true)}>
        Logout
      </Button>

      {/* Logout Confirmation Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to log out of your account?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogoutModal;
