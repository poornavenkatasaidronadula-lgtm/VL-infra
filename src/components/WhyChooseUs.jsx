import React from 'react';
import './WhyChooseUs.css';
import imgTeam from '../assets/engineers_team.png';

const REASONS = [
  {
    title: 'Experience & Certified Professionals',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    )
  },
  {
    title: 'Comprehensive Fire & Security Solutions',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2c0 0-5 5-5 10a5 5 0 0010 0c0-5-5-10-5-10z"/>
        <path d="M12 10a2 2 0 012 2"/>
      </svg>
    )
  },
  {
    title: '24/7 Monitoring and Support',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    title: 'Compliance with National & International Standards',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
        <polyline points="9 14 11 16 15 12"/>
      </svg>
    )
  },
  {
    title: 'Tailored Solutions for Residential, Commercial and Industrial Clients',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M16 10h.01M8 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
      </svg>
    )
  },
  {
    title: 'Strong Focus on Reliability, Safety and Customer Satisfaction',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="choose section" id="choose">
      <div className="container">
        <div className="section-header">
          <div className="badge">Our Advantages</div>
          <h2>Why Choose <span className="gradient-text">Us</span></h2>
          <div className="divider" />
        </div>

        <div className="choose__layout">
          {/* Left Side - Image with floating points */}
          <div className="choose__visual">
            {/* We place Item 0 and Item 5 floating on the left side to match the reference image */}
            <div className="choose__floating-item choose__floating-item--top">
              <div className="choose__icon">{REASONS[0].icon}</div>
              <p>{REASONS[0].title}</p>
            </div>

            <div className="choose__image-wrapper">
              <img src={imgTeam} alt="VL Infra Team" className="choose__image" />
              <div className="choose__image-glow"></div>
            </div>

            <div className="choose__floating-item choose__floating-item--bottom">
              <div className="choose__icon">{REASONS[5].icon}</div>
              <p>{REASONS[5].title}</p>
            </div>
          </div>

          {/* Right Side - Staggered List for items 1-4 */}
          <div className="choose__list">
            {REASONS.slice(1, 5).map((reason, index) => (
              <div key={index} className="choose__list-item" style={{ marginLeft: `${index * 20}px` }}>
                <div className="choose__icon">{reason.icon}</div>
                <p>{reason.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
