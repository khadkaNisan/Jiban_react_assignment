import React, { useState } from "react";
import "../ContactUs.css";
const ContactSection = () => {
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ loading: false, success: true });

      // Hide success message after 3s
      setTimeout(() => {
        setFormStatus({ loading: false, success: false });
      }, 3000);

      e.target.reset();
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info fade-in">
          <div className="info-header">
            <h2>Get in Touch</h2>
            <p>We're here to assist you with any inquiries</p>
          </div>

          <div className="info-item">
            <div className="icon-wrapper">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h3>Address</h3>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-wrapper">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+977-1-1234567</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-wrapper">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@professionalservices.com</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form fade-in">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly</p>
          </div>

          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="input-highlight"></div>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={formStatus.loading}
            >
              {!formStatus.loading && !formStatus.success && (
                <span className="btn-text">Submit</span>
              )}
              {formStatus.loading && (
                <div className="btn-loader">
                  <div className="loader"></div>
                </div>
              )}
              {formStatus.success && (
                <i className="fas fa-check check-icon"></i>
              )}
            </button>
          </form>

          {formStatus.success && (
            <div id="formMessage" className="form-message">
              <i className="fas fa-check-circle"></i>
              <p>Message sent successfully! We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="map-section fade-in">
        <h2>Our Location in Kathmandu</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.127!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18c816!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1693160000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            title="Kathmandu Map"
          ></iframe>
          <div className="map-overlay">
            <div className="pulse-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
