import React from 'react';
import './About.css';
import imgAboutTeam from '../assets/about_team.png';

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
    desc: 'Design, supply, erection and commissioning: everything under one roof.',
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Visual side */}
          <div className="about__visual animate-in">
            <div className="about__image-container">
              <img src={imgAboutTeam} alt="VL Infra Professional Team" className="about__image" />
              <div className="about__image-overlay" />
            </div>
            <div className="about__experience-badge">
              <span className="about__exp-val">10+</span>
              <span className="about__exp-label">Years of<br />Excellence</span>
            </div>
          </div>

          {/* Content side */}
          <div className="about__content">
            <div className="badge animate-in">Who We Are</div>
            <h2 className="animate-in" style={{ animationDelay: '0.1s' }}>
              Your <span className="gradient-text">Safety</span> is Our <br />
              Top Commitment
            </h2>
            <p className="about__lead animate-in" style={{ animationDelay: '0.2s' }}>
              VL Infra Fire & Security System Pvt Ltd is a leading provider of advanced fire safety and security solutions, serving residential, commercial, and industrial clients.
            </p>
            <p className="about__text animate-in" style={{ animationDelay: '0.3s' }}>
              We specialize in protecting lives, property, and critical assets with reliable systems built to meet the highest safety standards. Our mission is to bring technical manpower services and comprehensive maintenance under one shelter, including design, supply, erection, and commissioning of firefighting systems.
            </p>


            <div className="about__features animate-in" style={{ animationDelay: '0.4s' }}>
              {[
                { label: 'Active Protection', icon: '🔥' },
                { label: 'Passive Protection', icon: '🛡️' },
                { label: 'BMS Systems', icon: '⚙️' },
              ].map(f => (
                <div className="about__feature" key={f.label}>
                  <span className="about__feature-icon">{f.icon}</span>
                  <span className="about__feature-label">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="about__leadership animate-in" style={{ animationDelay: '0.5s' }}>
              <div className="about__md-info">
                <div className="about__md-avatar">VT</div>
                <div className="about__md-text">
                  <strong>Venkatesh Tadikonda</strong>
                  <span>Managing Director</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__scope card animate-in" style={{ gridColumn: '1 / -1', marginTop: '60px', padding: '40px', animationDelay: '0.6s' }}>
            <div className="badge">Our Scope</div>
            <h3>Bringing Expert Technical Support Under One Shelter</h3>
            <p style={{ color: 'var(--clr-text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>
              Our main concept of business is to bring the technical manpower services and maintenance of fire equipment under one shelter including design, supply, and erection and commissioning of firefighting systems. We provide both technical and non-technical manpower for annual maintenance of various systems or for periodical maintenance as per customer requirements.
            </p>
          </div>

          {/* Pillars Grid side */}
          <div className="about__pillars">
            {PILLARS.map((p, i) => (
              <div className="about__pillar card animate-in" key={p.title} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <div className="about__pillar-icon">{p.icon}</div>
                <div className="about__pillar-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
