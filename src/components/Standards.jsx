import React from 'react';
import './Standards.css';

const STANDARDS = [
  { name: 'BIS', label: 'Bureau of Indian Standards', icon: '🇮🇳' },
  { name: 'NFPA', label: 'National Fire Protection Association', icon: '🇺🇸' },
  { name: 'ASME', label: 'American Society of Mechanical Engineers', icon: '⚙️' },
  { name: 'TAC', label: 'Tariff Advisory Committee', icon: '📋' },
  { name: 'OISD', label: 'Oil Industry Safety Directorate', icon: '🛢️' },
  { name: 'ISO', label: 'International Organization for Standardization', icon: '🌐' },
];

export default function Standards() {
  return (
    <section className="standards section">
      <div className="container">
        <div className="standards__grid card animate-in">
          <div className="standards__header">
            <div className="badge">Global Compliance</div>
            <h2>Adhering to the Highest <span className="gradient-text">Safety Codes</span></h2>
            <p>Our engineering and installations are strictly governed by national and international safety organizations.</p>
          </div>
          <div className="standards__list">
            {STANDARDS.map((s, i) => (
              <div className="standards__item" key={s.name} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="standards__item-icon">{s.icon}</div>
                <div className="standards__item-text">
                  <strong>{s.name}</strong>
                  <p>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
