import React from 'react';
import './About.css';

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'System Integrators',
    desc: 'Full-spectrum system integration from design to commissioning of firefighting systems.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '24/7 Maintenance',
    desc: 'Round-the-clock annual maintenance contracts with skilled technical manpower.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Expert Manpower',
    desc: 'Experienced team of technical experts and skilled workers for all fire safety disciplines.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'One-Stop Solution',
    desc: 'Design, supply, erection and commissioning — everything under one roof.',
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      {/* Background glow */}
      <div className="about__bg-glow" />

      <div className="container">
        <div className="about__layout">
          {/* Left: Visual */}
          <div className="about__visual">
            <div className="about__badge-vertical">
              <div className="about__badge-line" />
              <span>Who We Are</span>
              <div className="about__badge-line" />
            </div>
            <div className="about__brand-box">
              <div className="about__brand-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 4C30 4 12 18 12 34C12 43.9 20.1 52 30 52C39.9 52 48 43.9 48 34C48 18 30 4 30 4Z"
                    fill="url(#aFireGrad)" />
                  <path d="M30 20C30 20 22 28 22 34C22 38.4 25.6 42 30 42C34.4 42 38 38.4 38 34C38 28 30 20 30 20Z"
                    fill="rgba(255,255,255,0.9)" />
                  <defs>
                    <linearGradient id="aFireGrad" x1="30" y1="4" x2="30" y2="52" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ff4d00"/>
                      <stop offset="100%" stopColor="#ffb347"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="about__brand-name">
                <span>VL</span>
                <strong>INFRA</strong>
              </div>
              <p className="about__brand-tagline">Fire &amp; Safety Excellence</p>
              <div className="about__brand-divider" />
              <div className="about__brand-scope">
                <div className="about__scope-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7a1a" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Active Fire Protection
                </div>
                <div className="about__scope-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7a1a" strokeWidth="2"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/></svg>
                  Passive Fire Protection
                </div>
                <div className="about__scope-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7a1a" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  Security &amp; BMS Systems
                </div>
              </div>
            </div>
            <div className="about__floating-stat">
              <span className="gradient-text">27+</span>
              <small>Major Projects</small>
            </div>
          </div>

          {/* Right: Text */}
          <div className="about__text">
            <div className="badge">About VL Infra</div>
            <h2 className="about__title">
              Your Trusted Partner in
              <span className="gradient-text"> Fire Safety</span>
            </h2>
            <p className="about__desc">
              We introduce ourselves as premier system integrators of fire protection and detection systems.
              VL Infra offers a comprehensive, integrated suite of services and solutions — designed and delivered
              under one roof — to fully meet your fire safety requirements.
            </p>
            <p className="about__desc">
              Our main concept of business is to bring tech manpower services and maintenance of fire equipment
              under one shelter, including design, supply, erection and commissioning of firefighting systems.
              We maintain fire stations with manpower, equipment, vehicles and first-aid systems.
            </p>

            {/* Pillars */}
            <div className="about__pillars">
              {PILLARS.map((p) => (
                <div className="about__pillar card" key={p.title}>
                  <div className="about__pillar-icon">{p.icon}</div>
                  <div>
                    <div className="about__pillar-title">{p.title}</div>
                    <div className="about__pillar-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
