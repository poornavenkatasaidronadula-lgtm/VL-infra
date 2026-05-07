import React from 'react';
import './Contact.css';
import imgSupport from '../assets/support_icon.png';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        
        <div className="section-header">
          <div className="badge">Get In Touch</div>
          <h2>Contact <span className="gradient-text">Us</span></h2>
          <div className="divider" />
        </div>

        {/* Top Half: Title & Details */}
        <div className="contact__top">
          
          <div className="contact__info-row">
            {/* Left: Support Graphic */}
            <div className="contact__graphic">
              <img src={imgSupport} alt="Customer Support" />
            </div>

            {/* Right: Contact Details */}
            <div className="contact__details">
              
              <div className="contact__detail-item">
                <div className="contact__icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>+91 - 93465 13232</span>
              </div>

              <div className="contact__detail-item">
                <div className="contact__icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>sales@vlinfra.in</span>
              </div>

              <div className="contact__detail-item">
                <div className="contact__icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <span>vlinfra.in</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Half: Logo & Address */}
        <div className="contact__bottom">
          <img src="/Logo.jpeg" alt="VL Infra Logo" className="contact__bottom-logo" />
          <p className="contact__address">
            H. No.: 60 – 09/8/3, Patwari Enclave,<br />
            Near Gowthami College, Chintal,<br />
            Hyderabad - 500054
          </p>
        </div>

      </div>
    </section>
  );
}
