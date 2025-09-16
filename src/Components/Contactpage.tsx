import React from 'react'
import "../Styles/Contactpage.css";
const Contactpage = () => {
  return (
   <div className="container">
  <div className="form-container">
    <h2>Contact Us</h2>
    <div className="contact-form">

      {/* Name + Email in one row */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 mb-3">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" className="form-control" placeholder="Your name" required />
        </div>
        <div className="col-lg-6 col-md-6 col-12 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Your email" required />
        </div>
      </div>

      {/* Subject full width */}
      <div className="row">
        <div className="col-lg-12 mb-3">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" className="form-control" placeholder="Subject" required />
        </div>
      </div>

      {/* Message full width */}
      <div className="row">
        <div className="col-lg-12 mb-3">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-control"  placeholder="Write your message..." required></textarea>
        </div>
      </div>

      {/* Button full width */}
      <div className="row">
        <div className="col-lg-12">
          <button type="button" className="redbutton">
            Send Message
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

  )
}

export default Contactpage
