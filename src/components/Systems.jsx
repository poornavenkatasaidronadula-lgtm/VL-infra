import React from 'react';
import './Systems.css';

const SYSTEMS = [
  {
    category: 'Water Base System',
    color: '#0d6efd',
    icon: '💧',
    items: [
      {
        name: 'Hydrant System',
        desc: 'System of pipe work connected directly to water supply mains — always kept pressurized, providing water to every outlet for firefighters.',
      },
      {
        name: 'Sprinkler System',
        desc: 'Water supply with installation control valves and pipe arrays fitted with sprinkler heads at ceilings and roofs for heat sensing and distribution.',
      },
      {
        name: 'Spray Systems',
        desc: 'High Velocity (flash point ≥65°C) and Medium Velocity systems (lighter oils & LPG) with Deluge Valve actuation and alarm equipment.',
      },
      {
        name: 'Foam System',
        desc: 'Air-filled bubble aggregates that form a floating blanket on flammable liquids — excluding air, cooling fuel, and preventing re-ignition.',
      },
    ],
  },
  {
    category: 'Powder Base System',
    color: '#ff7a1a',
    icon: '🧪',
    items: [
      {
        name: 'Dry Chemical Powder',
        desc: 'Total flooding systems with ASME-grade pressure vessels, nitrogen cylinders, and electric/pneumatic manual actuation devices.',
      },
    ],
  },
  {
    category: 'Gas Base System',
    color: '#a78bfa',
    icon: '⚗️',
    items: [
      {
        name: 'FM-200® Suppression',
        desc: 'Colourless, liquefied compressed gas with zero ozone depletion. Electrically non-conductive, people-safe, and fast-acting. Ideal for server rooms and sensitive areas.',
      },
    ],
  },
];

export default function Systems() {
  return (
    <section className="systems section" id="systems">
      <div className="systems__top-glow" />
      <div className="container">
        <div className="section-header">
          <div className="badge">Active Fire Protection</div>
          <h2>Fire Suppression <span className="gradient-text">Systems</span></h2>
          <div className="divider" />
          <p>Three distinct categories covering every fire risk from industrial plants to sensitive electronic environments.</p>
        </div>

        <div className="systems__grid">
          {SYSTEMS.map((sys) => (
            <div className="systems__category card" key={sys.category} style={{ '--sys-color': sys.color }}>
              <div className="systems__cat-header">
                <span className="systems__cat-icon" style={{ background: `${sys.color}18`, border: `1px solid ${sys.color}30` }}>
                  {sys.icon}
                </span>
                <h3 className="systems__cat-title">{sys.category}</h3>
              </div>
              <div className="systems__items">
                {sys.items.map((item, i) => (
                  <div className="systems__item" key={item.name}>
                    <div className="systems__item-num" style={{ color: sys.color, borderColor: `${sys.color}30`, background: `${sys.color}10` }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="systems__item-content">
                      <div className="systems__item-name">{item.name}</div>
                      <div className="systems__item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detection alert box */}
        <div className="systems__detection">
          <div className="systems__detection-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffd166" strokeWidth="1.8">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4 12 14.01l-3-3"/>
            </svg>
          </div>
          <div className="systems__detection-content">
            <h3>Passive Fire Protection — Detection &amp; Alarm</h3>
            <p>Advanced fire detection with four key elements:</p>
            <div className="systems__detection-elements">
              {[
                { icon: '🔬', label: 'Detectors', desc: 'Smoke, heat & flame detectors' },
                { icon: '🖥️', label: 'Control Panel', desc: 'Intelligent addressable panels' },
                { icon: '🔊', label: 'Warning Sounders', desc: 'Alarms, strobes & hooters' },
                { icon: '🚪', label: 'Ancillary Devices', desc: 'Door closers, fan shutdowns' },
              ].map((el) => (
                <div className="systems__detection-el" key={el.label}>
                  <span>{el.icon}</span>
                  <strong>{el.label}</strong>
                  <small>{el.desc}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
