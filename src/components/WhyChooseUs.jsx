import React from 'react';
import './WhyChooseUs.css';
import imgSuccess from '../assets/success_abstract.png';

const REASONS = [
  {
    title: 'Experience & Certified Professionals',
    desc: 'Our team consists of highly trained engineers certified in international safety standards.',
    icon: '👨‍🔧'
  },
  {
    title: 'Comprehensive Solutions',
    desc: 'From detection to suppression, we provide end-to-end integration for all safety needs.',
    icon: '🛠️'
  },
  {
    title: '24/7 Monitoring & Support',
    desc: 'Continuous surveillance and rapid response systems to ensure round-the-clock protection.',
    icon: '🕙'
  },
  {
    title: 'Global Compliance',
    desc: 'Strict adherence to BIS, NFPA, and ISO standards for guaranteed safety and legality.',
    icon: '🌐'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="choose section" id="choose">
      <div className="container">
        <div className="section-header animate-in">
          <h2>Why <span className="gradient-text">VL Infra</span></h2>
        </div>
        
        <div className="choose__grid card">
          <div className="choose__content">
            <div className="badge">Why VL Infra</div>
            <h2>Unmatched <span className="gradient-text">Excellence</span> in Safety</h2>
            <p className="choose__lead">We combine 15+ years of expertise with cutting-edge technology to deliver the most reliable fire safety systems in the region.</p>
            
            <div className="choose__list">
              {REASONS.map((r, i) => (
                <div className="choose__item animate-in" key={r.title} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="choose__item-icon">{r.icon}</div>
                  <div className="choose__item-text">
                    <strong>{r.title}</strong>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="choose__visual">
            <div className="choose__image-box">
              <img src={imgSuccess} alt="Safety Excellence" className="choose__img" />
              <div className="choose__img-overlay" />
              <div className="choose__stat-overlay">
                <div className="choose__stat">
                  <span>100%</span>
                  <small>Compliance Rate</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
