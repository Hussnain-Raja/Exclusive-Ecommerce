import React from 'react'
import "../Styles/Contactpage.css";


interface Props {
  values: any;
  errors: any;
  touched: any;
  handleBlur: (e: React.FocusEvent<any>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Contactpage = (props: Props) => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={props.handleSubmit} className='contact-form'>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-control" placeholder="Your name" value={props.values.name}
                onChange={props.handleChange} onBlur={props.handleBlur}
                name='name'
              />
              {props.errors.name && props.touched.name && (
                <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>{props.errors.name}</p>
              )}
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Your email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                name='email'
              />
              {props.errors.email && props.touched.email && (
                <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>{props.errors.email}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" className="form-control" placeholder="Subject"
                value={props.values.subject}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                name='subject'
              />
              {props.errors.subject && props.touched.subject && (
                <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>{props.errors.subject}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control" placeholder="Write your message..."
                value={props.values.message}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                name='message'
              ></textarea>
              {props.errors.message && props.touched.message && (
                <p className="error" style={{ color: "red", fontSize: 14, marginTop: "3px" }}>{props.errors.message}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button type="submit" className="redbutton" >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contactpage
