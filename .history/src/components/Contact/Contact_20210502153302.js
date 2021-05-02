import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
    return (
      <div>
        <Container id="contact">
          <h3 style={{ color: "#ffc20d" }} className="text-center mb-5">
            Get in Touch
          </h3>
          <div className="col-md-9 mx-auto">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject *"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message *"
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button type="button" className="contact-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    );
};

export default Contact;