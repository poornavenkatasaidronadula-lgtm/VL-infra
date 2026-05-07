import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  { id: 1, name: 'Renewsys India Pvt Ltd', location: 'Hyderabad', type: 'Industrial', sector: 'Manufacturing' },
  { id: 2, name: 'TVS Warehouse', location: 'Hyderabad', type: 'Warehouse', sector: 'Automotive' },
  { id: 3, name: 'Apache Footwear India Ltd', location: 'Sullurpet', type: 'Industrial', sector: 'Manufacturing' },
  { id: 4, name: 'Ramky Environment', location: 'Rapur', type: 'Industrial', sector: 'Environment' },
  { id: 5, name: 'M/s. KVR Prime', location: 'Mangalagiri', type: 'Commercial', sector: 'Real Estate' },
  { id: 6, name: 'M/s. Vijaya Medical Center', location: 'Vizag', type: 'Healthcare', sector: 'Hospital' },
  { id: 7, name: 'Mitrocum Pharma', location: 'Khajipalli', type: 'Industrial', sector: 'Pharma' },
  { id: 8, name: 'M/s. Prasad Organics Pvt Ltd', location: 'APIIC, Ongole', type: 'Industrial', sector: 'Chemical' },
  { id: 9, name: 'M/s. Govt. Hospital', location: 'Vijayawada', type: 'Healthcare', sector: 'Hospital' },
  { id: 10, name: 'M/s. Godfrey Phillips India Ltd', location: 'APIIC, Ongole', type: 'Industrial', sector: 'FMCG' },
  { id: 11, name: 'M/s. Ranga Particle Board Industries', location: 'Kandukur', type: 'Industrial', sector: 'Wood' },
  { id: 12, name: 'M/s. Sathya Export Unit-1', location: 'Ongole', type: 'Industrial', sector: 'Export' },
  { id: 13, name: 'M/s. Neo Corbans Pvt Ltd', location: 'Nayudupeta', type: 'Industrial', sector: 'Industrial' },
  { id: 14, name: 'M/s. BVSR Engineering College', location: 'Chimakurthy', type: 'Education', sector: 'Education' },
  { id: 15, name: 'M/s. Vasavi Educational Society', location: 'Cumbam', type: 'Education', sector: 'Education' },
  { id: 16, name: 'M/s. Raveendra Barathi Schools', location: 'Kadapa', type: 'Education', sector: 'Schools' },
  { id: 17, name: 'M/s. Raveendra Barathi Schools', location: 'Chittoor', type: 'Education', sector: 'Schools' },
  { id: 18, name: 'M/s. Narayana Schools', location: 'Tirupathi', type: 'Education', sector: 'Schools' },
  { id: 19, name: 'M/s. Chaitanya Schools', location: 'Kadapa', type: 'Education', sector: 'Schools' },
  { id: 20, name: 'M/s. Bhasyam Schools', location: 'Yemmiganur', type: 'Education', sector: 'Schools' },
  { id: 21, name: 'M/s. VR Residency Hotel', location: 'Nellore', type: 'Hospitality', sector: 'Hotel' },
  { id: 22, name: 'M/s. Sri Gananadha Hotels', location: 'Nellore', type: 'Hospitality', sector: 'Hotel' },
  { id: 23, name: 'M/s. Nutri Bio Pharma', location: 'Nellore', type: 'Industrial', sector: 'Pharma' },
  { id: 24, name: 'M/s. Mycon Properties', location: 'Hyderabad', type: 'Commercial', sector: 'Real Estate' },
  { id: 25, name: 'M/s. Anjaneya Filling Stations', location: 'Siddipeta', type: 'Industrial', sector: 'Fuel' },
  { id: 26, name: 'M/s. Big Suncity Hotel', location: 'Sri City', type: 'Hospitality', sector: 'Hotel' },
  { id: 27, name: 'Income Tax Office', location: 'Lakadikapul', type: 'Government', sector: 'Government' },
];

const SECTORS = ['All', 'Industrial', 'Education', 'Healthcare', 'Hospitality', 'Government', 'Commercial'];

const SECTOR_COLORS = {
  Industrial: '#ff7a1a',
  Education: '#00b4d8',
  Healthcare: '#4ade80',
  Hospitality: '#a78bfa',
  Government: '#ffd166',
  Commercial: '#f472b6',
  'Real Estate': '#f472b6',
  Automotive: '#fb923c',
  Pharma: '#34d399',
  Hotel: '#a78bfa',
  Schools: '#22d3ee',
  Hospital: '#4ade80',
  Manufacturing: '#ff7a1a',
};

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter);

  return (
    <section className="projects section" id="projects">
      <div className="projects__glow" />
      <div className="container">
        <div className="section-header">
          <div className="badge">Our Track Record</div>
          <h2>Projects <span className="gradient-text">Handled</span></h2>
          <div className="divider" />
          <p>Trusted by industries, educational institutions, hospitals, hotels and government bodies across Andhra Pradesh and Telangana.</p>
        </div>

        {/* Stats bar */}
        <div className="projects__stats">
          {[
            { v: '27+', l: 'Total Projects' },
            { v: '5+', l: 'States Covered' },
            { v: '7', l: 'Industry Sectors' },
            { v: '100%', l: 'Client Satisfaction' },
          ].map(s => (
            <div className="projects__stat-item" key={s.l}>
              <span className="projects__stat-v gradient-text">{s.v}</span>
              <span className="projects__stat-l">{s.l}</span>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="projects__filters">
          {SECTORS.map(sec => (
            <button
              key={sec}
              className={`projects__filter-btn ${filter === sec ? 'active' : ''}`}
              onClick={() => setFilter(sec)}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((proj, i) => {
            const color = SECTOR_COLORS[proj.sector] || SECTOR_COLORS[proj.type] || '#ff7a1a';
            return (
              <div className="projects__card card" key={proj.id} style={{ animationDelay: `${(i % 6) * 0.05}s` }}>
                <div className="projects__card-num" style={{ color, background: `${color}15`, borderColor: `${color}25` }}>
                  {String(proj.id).padStart(2, '0')}
                </div>
                <div className="projects__card-body">
                  <span className="projects__card-type" style={{ color, background: `${color}10`, borderColor: `${color}25` }}>
                    {proj.sector}
                  </span>
                  <h4 className="projects__card-name">{proj.name}</h4>
                  <div className="projects__card-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {proj.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
