import React from 'react';
import './Projects.css';

const CLIENT_LOGOS = [
  '/Clients.jpeg',
  '/Clients (2).jpeg',
  '/Clients (3).jpeg',
  '/C4.jpeg',
  '/C5.jpeg',
  '/C6.jpeg',
  '/C7.jpeg',
  '/C8.jpeg',
  '/C9.jpeg',
  '/C10.jpeg',
  '/C11.jpeg',
];

const PARTNER_LOGOS = [
  '/P1.jpeg',
  '/P2.jpeg',
  '/P3.jpeg',
  '/P4.jpeg',
  '/P5.jpeg',
  '/P6.jpeg',
  '/P7.jpeg',
  '/P8.jpeg',
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        {/* Header */}
        <div className="section-header animate-in">
          <div className="badge">Project Portfolio & Clients</div>
          <h2>Our <span className="gradient-text">Success</span> Stories</h2>
          <p>Trusted by industry leaders across South India. 300+ major projects delivered on time, every time.</p>
        </div>

        {/* Stats Bar */}
        <div className="projects__stats animate-in" style={{ animationDelay: '0.1s' }}>
          {[
            { val: '300+', label: 'Major Projects' },
            { val: '10+',  label: 'Cities Covered' },
            { val: '100%', label: 'Client Retention' },
            { val: '0',    label: 'Safety Incidents' },
          ].map(s => (
            <div className="projects__stat-card" key={s.label}>
              <span className="projects__stat-val">{s.val}</span>
              <span className="projects__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="projects__clients-section animate-in" style={{ animationDelay: '0.2s', marginTop: '100px', textAlign: 'center' }}>
          <div className="section-header">
            <div className="badge" style={{ margin: '0 auto 15px auto' }}>Our Clients</div>
            <h2>Our <span className="gradient-text">Esteemed</span> Clients</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              We take pride in our long-standing relationships with some of the most respected organizations and industry leaders. Their continued trust is our greatest achievement.
            </p>
          </div>

          <div className="projects__clients-wrapper">
            <div className="projects__clients-track">
              {CLIENT_LOGOS.map((src, i) => (
                <div className="projects__client-card" key={`first-${i}`}>
                  <img src={src} alt="VL Infra Client" className="projects__client-logo" />
                </div>
              ))}
            </div>
            <div className="projects__clients-track" aria-hidden="true">
              {CLIENT_LOGOS.map((src, i) => (
                <div className="projects__client-card" key={`second-${i}`}>
                  <img src={src} alt="VL Infra Client" className="projects__client-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="projects__clients-section animate-in" style={{ animationDelay: '0.3s', marginTop: '100px', textAlign: 'center' }}>
          <div className="section-header">
            <div className="badge" style={{ margin: '0 auto 15px auto' }}>Our Partners</div>
            <h2>Our <span className="gradient-text">Technology</span> Partners</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              We collaborate with global technology leaders to deliver state-of-the-art fire safety and security solutions tailored for your enterprise.
            </p>
          </div>

          <div className="projects__clients-wrapper">
            {/* The style animationDirection: 'reverse' makes this track scroll to the right for an awesome alternating effect */}
            <div className="projects__clients-track" style={{ animationDirection: 'reverse' }}>
              {PARTNER_LOGOS.map((src, i) => (
                <div className="projects__client-card" key={`first-partner-${i}`}>
                  <img src={src} alt="VL Infra Partner" className="projects__client-logo" />
                </div>
              ))}
            </div>
            <div className="projects__clients-track" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
              {PARTNER_LOGOS.map((src, i) => (
                <div className="projects__client-card" key={`second-partner-${i}`}>
                  <img src={src} alt="VL Infra Partner" className="projects__client-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
