import React from 'react';
import './Systems.css';
import imgServicesBg from '../assets/systems_bg_light.png';

const SYSTEMS = [
  {
    category: 'Fire Protection (Active)',
    color: '#0d6efd',
    icon: '🔥',
    items: [
      {
        name: 'Fire Hydrant Systems',
        desc: 'High-pressure water supply with pumps, pipes, valves, and hoses built to latest safety standards.',
      },
      {
        name: 'Automatic Sprinkler Systems',
        desc: 'Automated systems that activate instantly to control fire at the source with efficient water discharge.',
      },
      {
        name: 'Foam & Spray Systems',
        desc: 'Deluge, water spray and foam systems for specialized fire risks and industrial applications.',
      },
      {
        name: 'Fire Extinguishers',
        desc: 'Supply and maintenance of fixed and portable fire extinguishers for immediate response.',
      },
    ],
  },
  {
    category: 'Fire Detection (Passive)',
    color: '#ff4d00',
    icon: '🚨',
    items: [
      {
        name: 'Intelligent Fire Alarms',
        desc: 'Advanced detection and quick alerts in conventional and addressable models for early warning.',
      },
      {
        name: 'VESDA Systems',
        desc: 'Very Early Smoke Detection Apparatus for mission-critical environments and high-sensitivity areas.',
      },
      {
        name: 'Gas Detection Systems',
        desc: 'Real-time detection of flammable, toxic, or hazardous gases with integrated shutdown controls.',
      },
      {
        name: 'Water Leak Detection',
        desc: 'Smart sensors to detect even the smallest leaks in critical zones like BMS areas and server rooms.',
      },
    ],
  },
  {
    category: 'Security & Monitoring',
    color: '#a78bfa',
    icon: '🛡️',
    items: [
      {
        name: 'CCTV Surveillance',
        desc: '24/7 high-definition monitoring with night vision, motion alerts, and remote mobile access.',
      },
      {
        name: 'Access Control Systems',
        desc: 'Secure entry management and monitoring for residential, commercial, and industrial facilities.',
      },
      {
        name: 'Public Address (PA) Systems',
        desc: 'Zone-based or centralized broadcast systems for clear announcements and emergency instructions.',
      },
      {
        name: 'Rodent Repellent Systems',
        desc: 'Chemical-free ultrasonic repellents to protect critical cables and electrical infrastructure.',
      },
    ],
  },
  {
    category: 'Advanced Solutions',
    color: '#4ade80',
    icon: '⚙️',
    items: [
      {
        name: 'Gas Suppression Systems',
        desc: 'Fast, residue-free fire control using FM200, Novec 1230, and CO2 based agents.',
      },
      {
        name: 'BMS Integration',
        desc: 'Integrated Building Management Systems for centralized control of all safety and security modules.',
      },
      {
        name: '24/7 Monitoring & AMC',
        desc: 'Round-the-clock monitoring services and Annual Maintenance Contracts with expert manpower.',
      },
      {
        name: 'Design & Commissioning',
        desc: 'End-to-end solutions from design and supply to erection and commissioning of all systems.',
      },
    ],
  },
];

export default function Systems() {
  return (
    <section className="systems section" id="systems">
      <div className="systems__bg-container">
        <img src={imgServicesBg} alt="" className="systems__bg-img" />
        <div className="systems__bg-overlay" />
      </div>

      <div className="container">
        <div className="section-header animate-in">
          <div className="badge">Our Systems</div>
          <h2>Specialized <span className="gradient-text">Engineering</span> Solutions</h2>
          <p>We design, supply, install and maintain high-performance safety infrastructure.</p>
        </div>

        <div className="systems__grid">
          {SYSTEMS.map((sys, i) => (
            <div
              className="systems__card card animate-in"
              key={sys.category}
              style={{ '--sys-color': sys.color, animationDelay: `${i * 0.1}s` }}
            >
              <div className="systems__card-header">
                <div className="systems__card-icon" style={{ background: `${sys.color}15`, color: sys.color }}>
                  {sys.icon}
                </div>
                <h3>{sys.category}</h3>
              </div>
              <div className="systems__items">
                {sys.items.map((item) => (
                  <div className="systems__item" key={item.name}>
                    <div className="systems__item-dot" style={{ background: sys.color }} />
                    <div className="systems__item-text">
                      <strong>{item.name}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="systems__cta card animate-in" style={{ animationDelay: '0.4s' }}>
          <div className="systems__cta-content">
            <h3>Need a Custom Fire Safety Plan?</h3>
            <p>Our engineers provide detailed design and compliance consultation for industrial and commercial complexes.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Get Technical Consultation
          </a>
        </div>
      </div>
    </section>

  );
}

