import React from "react";
import "../Styles/AddToCart.css";

const AddToCart = () => {
  return (
    <>
      <div className="cart_section">
        <div className="container">
          <div className="row">
            <div className="cart-container">
              <h1 className="cart-title">🛒 Your Cart</h1>
              <ul className="cart-list">
                <li className="cart-item">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Product 1"
                    className="cart-img"
                  />
                  <div className="cart-details">
                    <h2>Wireless Headphones</h2>
                    <p>$120</p>
                    <div className="cart-actions">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                    <button className="remove-btn">Remove</button>
                  </div>
                </li>
                <li className="cart-item">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Product 2"
                    className="cart-img"
                  />
                  <div className="cart-details">
                    <h2>Smart Watch</h2>
                    <p>$90</p>
                    <div className="cart-actions">
                      <button>-</button>
                      <span>2</span>
                      <button>+</button>
                    </div>
                    <button className="remove-btn">Remove</button>
                  </div>
                </li>
              </ul>
              <div className="cart-footer">
                <h3>Total: $300</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddToCart;