import React from 'react';
import './Contact.css';
import imgContactBg from '../assets/contact_bg.png';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      {/* Background with abstract map */}
      <div className="contact__bg">
        <img src={imgContactBg} alt="" className="contact__bg-img" />
        <div className="contact__bg-overlay" />
      </div>

      <div className="container">
        <div className="contact__grid">
          {/* Left: Contact Info */}
          <div className="contact__content animate-in">
            <div className="badge">Get In Touch</div>
            <h2>Let's Discuss Your <span className="gradient-text">Safety Needs</span></h2>
            <p className="contact__lead">Our experts are ready to provide a comprehensive security audit and customized fire protection plan for your facility.</p>
            
            <div className="contact__info-list">
              <div className="contact__info-item card">
                <div className="contact__info-icon">📞</div>
                <div className="contact__info-text">
                  <span>Call Us</span>
                  <strong>+91 - 93456 13232</strong>
                </div>
              </div>

              <div className="contact__info-item card">
                <div className="contact__info-icon">📧</div>
                <div className="contact__info-text">
                  <span>Email Us</span>
                  <strong>venkatesh@vlinfra.in</strong>
                  <strong>sales@vlinfra.in</strong>
                </div>
              </div>

              <div className="contact__info-item card">
                <div className="contact__info-icon">📍</div>
                <div className="contact__info-text">
                  <span>Head Office (Hyderabad)</span>
                  <strong>Chintal, Hyderabad - 500054</strong>
                </div>
              </div>

              <div className="contact__info-item card">
                <div className="contact__info-icon">📍</div>
                <div className="contact__info-text">
                  <span>Branch Office (Nellore)</span>
                  <strong>Gomathi Nager, Nellore - 524001</strong>
                </div>
              </div>
            </div>

            <div className="contact__address-grid">
              <div className="contact__address-box">
                <strong>Hyderabad Office</strong>
                <p>H.No. 60-09/8/3, Patwari Enclave, Near Gowthami College, Chintal, Hyderabad - 500054</p>
              </div>
              <div className="contact__address-box">
                <strong>Nellore Office</strong>
                <p>26-16-380, Gomathi Nager, Near Mini By-Pass, Nellore - 524001</p>
              </div>
            </div>
          </div>

          {/* Right: Quick Enquiry Form */}
          <div className="contact__form-container animate-in" style={{ animationDelay: '0.2s' }}>
            <form className="contact__form card" onSubmit={(e) => e.preventDefault()}>
              <h3>Quick Enquiry</h3>
              <p>Send us a message and we'll get back to you within 24 hours.</p>
              
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Service</option>
                  <option value="fire-protection">Fire Protection</option>
                  <option value="fire-detection">Fire Detection</option>
                  <option value="security">Security Systems</option>
                  <option value="maintenance">Maintenance (AMC)</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project..." rows="4"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
