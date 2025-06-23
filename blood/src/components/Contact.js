// src/components/Contact.js
import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-5 fw-bold">Contact Us</h2>

      <div className="row g-4">
        {/* Left Side – Contact Info */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-semibold">Reach Out to Us</h5>

              <div className="d-flex align-items-start mb-3">
                <FiMapPin size={20} className="me-3 mt-1 text-primary" />
                <div>
                  <strong>Address:</strong>
                  <p className="mb-0">Balkot-02, Bhaktapur, Nepal</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <FiMail size={20} className="me-3 mt-1 text-danger" />
                <div>
                  <strong>Email:</strong>
                  <p className="mb-0">support@bloodcare.org</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <FiPhone size={20} className="me-3 mt-1 text-success" />
                <div>
                  <strong>Phone:</strong>
                  <p className="mb-0">+977-98000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side – Contact Form */}
        <div className="col-md-7">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-semibold">Send Us a Message</h5>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary px-4">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
