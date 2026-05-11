import React, { useState, useEffect, useCallback } from 'react';
import './Projects.css';
import imgIndustrial from '../assets/proj_industrial.png';
import imgHospital   from '../assets/proj_hospital.png';
import imgHotel      from '../assets/proj_hotel.png';
import imgSchool     from '../assets/proj_school.png';

const SECTOR_DESC = {
  Manufacturing: 'Designed and installed a complete fire hydrant and automatic sprinkler system with auto control panels, covering the entire manufacturing floor and warehouse areas as per NFPA standards.',
  Automotive:    'Supplied and commissioned a high-pressure fire hydrant system with suppression units tailored for automotive storage warehouses and high-rack inventory areas.',
  Environment:   'Installed fire alarm detection and gas suppression systems for hazardous material handling and environmental processing zones.',
  Hospital:      'Designed a hospital-grade fire alarm and suppression system with zone-based detection, PA integration, and emergency lighting for patient safety compliance.',
  'Real Estate': 'Provided end-to-end fire safety solutions including sprinkler systems, fire alarms, and access control for commercial and residential complexes.',
  Pharma:        'Installed gas suppression (FM200) and clean agent systems for pharmaceutical clean rooms and sensitive production areas.',
  Chemical:      'Deployed deluge and water spray systems for chemical plant protection with hazardous gas detection and automated shutdown controls.',
  FMCG:          'Installed fire hydrant, sprinkler, and alarm systems across FMCG production and packaging facilities meeting all statutory safety codes.',
  Wood:          'Designed foam and water spray systems for wood processing industrial plants with high fire risk.',
  Export:        'Fire hydrant and alarm system installation for multi-unit export processing zones.',
  Industrial:    'Comprehensive fire protection system including hydrant, sprinkler, alarm, and gas detection integrated into one smart safety network.',
  Education:     'Installed zoned fire alarm and PA systems across campus buildings with smoke detectors and emergency lighting for mass evacuation preparedness.',
  Schools:       'Deployed addressable fire alarm systems with PA integration ensuring rapid evacuation response across all classrooms and corridors.',
  Hotel:         'Installed a complete fire protection suite including sprinklers, clean agent rooms, alarm systems, and CCTV across all floors of the hotel.',
  Government:    'Supplied and commissioned fire alarm, hydrant, and CCTV systems for government office buildings meeting all public safety regulatory requirements.',
  Fuel:          'Installed foam-based fire suppression and gas detection systems for fuel storage and petrol station safety compliance.',
  Warehouse:     'Deployed high-pressure hydrant and sprinkler systems for large-scale warehouse and logistics facilities.',
};

const PROJECTS = [
  { id: 1,  name: 'Renewsys India Pvt Ltd',          location: 'Hyderabad',     type: 'Industrial',  sector: 'Manufacturing', img: imgIndustrial, images: [imgIndustrial, imgHospital, imgHotel] },
  { id: 2,  name: 'TVS Warehouse',                    location: 'Hyderabad',     type: 'Industrial',  sector: 'Automotive',    img: imgIndustrial, images: [imgIndustrial, imgSchool, imgHospital] },
  { id: 3,  name: 'Apache Footwear India Ltd',        location: 'Sullurpet',     type: 'Industrial',  sector: 'Manufacturing', img: imgIndustrial, images: [imgIndustrial, imgHotel, imgSchool] },
  { id: 4,  name: 'Ramky Environment',                location: 'Rapur',         type: 'Industrial',  sector: 'Environment',   img: imgIndustrial, images: [imgIndustrial, imgHospital, imgSchool] },
  { id: 5,  name: 'M/s. KVR Prime',                  location: 'Mangalagiri',   type: 'Commercial',  sector: 'Real Estate',   img: imgHotel,      images: [imgHotel, imgIndustrial, imgSchool] },
  { id: 6,  name: 'M/s. Vijaya Medical Center',       location: 'Vizag',         type: 'Healthcare',  sector: 'Hospital',      img: imgHospital,   images: [imgHospital, imgSchool, imgHotel] },
  { id: 7,  name: 'Mitrocum Pharma',                  location: 'Khajipalli',    type: 'Industrial',  sector: 'Pharma',        img: imgIndustrial, images: [imgIndustrial, imgHospital, imgHotel] },
  { id: 8,  name: 'M/s. Prasad Organics Pvt Ltd',    location: 'APIIC, Ongole', type: 'Industrial',  sector: 'Chemical',      img: imgIndustrial, images: [imgIndustrial, imgHotel, imgHospital] },
  { id: 9,  name: 'M/s. Govt. Hospital',              location: 'Vijayawada',    type: 'Healthcare',  sector: 'Hospital',      img: imgHospital,   images: [imgHospital, imgIndustrial, imgSchool] },
  { id: 10, name: 'M/s. Godfrey Phillips India Ltd',  location: 'APIIC, Ongole', type: 'Industrial',  sector: 'FMCG',          img: imgIndustrial, images: [imgIndustrial, imgSchool, imgHotel] },
  { id: 11, name: 'M/s. Ranga Particle Board Ind',   location: 'Kandukur',      type: 'Industrial',  sector: 'Wood',          img: imgIndustrial, images: [imgIndustrial, imgHospital, imgSchool] },
  { id: 12, name: 'M/s. Sathya Export Unit-1',       location: 'Ongole',        type: 'Industrial',  sector: 'Export',        img: imgIndustrial, images: [imgIndustrial, imgHotel, imgHospital] },
  { id: 13, name: 'M/s. Neo Corbans Pvt Ltd',        location: 'Nayudupeta',    type: 'Industrial',  sector: 'Industrial',    img: imgIndustrial, images: [imgIndustrial, imgSchool, imgHospital] },
  { id: 14, name: 'M/s. BVSR Engineering College',   location: 'Chimakurthy',   type: 'Education',   sector: 'Education',     img: imgSchool,     images: [imgSchool, imgIndustrial, imgHospital] },
  { id: 15, name: 'M/s. Vasavi Educational Society', location: 'Cumbam',        type: 'Education',   sector: 'Education',     img: imgSchool,     images: [imgSchool, imgHotel, imgIndustrial] },
  { id: 16, name: 'M/s. Raveendra Barathi Schools',  location: 'Kadapa',        type: 'Education',   sector: 'Schools',       img: imgSchool,     images: [imgSchool, imgHospital, imgHotel] },
  { id: 17, name: 'M/s. Raveendra Barathi Schools',  location: 'Chittoor',      type: 'Education',   sector: 'Schools',       img: imgSchool,     images: [imgSchool, imgIndustrial, imgHotel] },
  { id: 18, name: 'M/s. Narayana Schools',           location: 'Tirupathi',     type: 'Education',   sector: 'Schools',       img: imgSchool,     images: [imgSchool, imgHospital, imgIndustrial] },
  { id: 19, name: 'M/s. Chaitanya Schools',          location: 'Kadapa',        type: 'Education',   sector: 'Schools',       img: imgSchool,     images: [imgSchool, imgHotel, imgHospital] },
  { id: 20, name: 'M/s. Bhasyam Schools',            location: 'Yemmiganur',    type: 'Education',   sector: 'Schools',       img: imgSchool,     images: [imgSchool, imgIndustrial, imgHospital] },
  { id: 21, name: 'M/s. VR Residency Hotel',         location: 'Nellore',       type: 'Hospitality', sector: 'Hotel',         img: imgHotel,      images: [imgHotel, imgSchool, imgIndustrial] },
  { id: 22, name: 'M/s. Sri Gananadha Hotels',       location: 'Nellore',       type: 'Hospitality', sector: 'Hotel',         img: imgHotel,      images: [imgHotel, imgHospital, imgSchool] },
  { id: 23, name: 'M/s. Nutri Bio Pharma',           location: 'Nellore',       type: 'Industrial',  sector: 'Pharma',        img: imgIndustrial, images: [imgIndustrial, imgHotel, imgSchool] },
  { id: 24, name: 'M/s. Mycon Properties',           location: 'Hyderabad',     type: 'Commercial',  sector: 'Real Estate',   img: imgHotel,      images: [imgHotel, imgSchool, imgIndustrial] },
  { id: 25, name: 'M/s. Anjaneya Filling Stations',  location: 'Siddipeta',     type: 'Industrial',  sector: 'Fuel',          img: imgIndustrial, images: [imgIndustrial, imgHospital, imgHotel] },
  { id: 26, name: 'M/s. Big Suncity Hotel',          location: 'Sri City',      type: 'Hospitality', sector: 'Hotel',         img: imgHotel,      images: [imgHotel, imgIndustrial, imgHospital] },
  { id: 27, name: 'Income Tax Office',               location: 'Lakadikapul',   type: 'Government',  sector: 'Government',    img: imgHospital,   images: [imgHospital, imgSchool, imgHotel] },
];

const SECTORS = ['All', 'Industrial', 'Education', 'Healthcare', 'Hospitality', 'Government', 'Commercial'];

const SECTOR_COLORS = {
  Industrial: '#ff7a1a', Education: '#00b4d8', Healthcare: '#4ade80',
  Hospitality: '#a78bfa', Government: '#ffd166', Commercial: '#f472b6',
  'Real Estate': '#f472b6', Automotive: '#fb923c', Pharma: '#34d399',
  Hotel: '#a78bfa', Schools: '#22d3ee', Hospital: '#4ade80', Manufacturing: '#ff7a1a',
};

/* ── Project Detail Modal with Slideshow ── */
function ProjectModal({ proj, onClose }) {
  const [slide, setSlide] = useState(0);

  const imgs = proj?.images || (proj ? [proj.img] : []);
  const total = imgs.length;

  const next = useCallback(() => setSlide(s => (s + 1) % total), [total]);
  const prev = useCallback(() => setSlide(s => (s - 1 + total) % total), [total]);

  /* Auto-play every 3 s */
  useEffect(() => {
    if (!proj) return;
    setSlide(0);                       // reset on open
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [proj, next]);

  if (!proj) return null;
  const color = SECTOR_COLORS[proj.sector] || SECTOR_COLORS[proj.type] || '#ff7a1a';
  const desc  = SECTOR_DESC[proj.sector] || SECTOR_DESC[proj.type] ||
    'VL Infra successfully delivered a comprehensive fire safety solution for this facility, meeting all national and international safety standards.';

  return (
    <div className="proj-modal__backdrop" onClick={onClose}>
      <div className="proj-modal" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="proj-modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Slideshow panel */}
        <div className="proj-modal__img-wrap">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${proj.name} – slide ${i + 1}`}
              className={`proj-modal__slide ${i === slide ? 'active' : ''}`}
            />
          ))}
          <div className="proj-modal__img-overlay" />

          {/* Badge + counter */}
          <div className="proj-modal__img-badge" style={{ background: color }}>{proj.sector}</div>
          <div className="proj-modal__img-num">#{String(proj.id).padStart(2,'0')}</div>

          {/* Counter */}
          <div className="proj-modal__counter">{slide + 1} / {total}</div>

          {/* Arrows */}
          <button className="proj-modal__arrow proj-modal__arrow--prev" onClick={e => { e.stopPropagation(); prev(); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="proj-modal__arrow proj-modal__arrow--next" onClick={e => { e.stopPropagation(); next(); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Dots */}
          <div className="proj-modal__dots">
            {imgs.map((_, i) => (
              <button
                key={i}
                className={`proj-modal__dot ${i === slide ? 'active' : ''}`}
                onClick={e => { e.stopPropagation(); setSlide(i); }}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="proj-modal__body">
          <h2>{proj.name}</h2>

          <div className="proj-modal__meta">
            <div className="proj-modal__meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {proj.location}
            </div>
            <div className="proj-modal__meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              {proj.type}
            </div>
          </div>

          <p className="proj-modal__desc">{desc}</p>

          <div className="proj-modal__tags">
            <span style={{ background: `${color}15`, color }}>Fire Protection</span>
            <span style={{ background: `${color}15`, color }}>Detection System</span>
            <span style={{ background: `${color}15`, color }}>AMC Support</span>
            <span style={{ background: `${color}15`, color }}>BIS Compliant</span>
          </div>

          <a href="#contact" className="btn btn-primary" onClick={onClose}>
            Get Similar Solution
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}


export default function Projects() {
  const [filter,  setFilter]  = useState('All');
  const [active,  setActive]  = useState(null);

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  const featured = filtered.slice(0, 4);
  const rest     = filtered.slice(4);

  return (
    <section className="projects section" id="projects">
      <div className="container">

        {/* Header */}
        <div className="section-header animate-in">
          <div className="badge">Project Portfolio</div>
          <h2>Our <span className="gradient-text">Success</span> Stories</h2>
          <p>Trusted by industry leaders across South India — 27+ major projects delivered on time, every time.</p>
        </div>

        {/* Stats Bar */}
        <div className="projects__stats animate-in" style={{ animationDelay: '0.1s' }}>
          {[
            { val: '27+',  label: 'Major Projects' },
            { val: '15+',  label: 'Cities Covered' },
            { val: '100%', label: 'Client Retention' },
            { val: '0',    label: 'Safety Incidents' },
          ].map(s => (
            <div className="projects__stat-card" key={s.label}>
              <span className="projects__stat-val">{s.val}</span>
              <span className="projects__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Filter Nav */}
        <div className="projects__nav animate-in" style={{ animationDelay: '0.2s' }}>
          {SECTORS.map(sec => (
            <button
              key={sec}
              className={`projects__nav-btn ${filter === sec ? 'active' : ''}`}
              onClick={() => setFilter(sec)}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Featured Image Cards */}
        <div className="projects__featured animate-in" style={{ animationDelay: '0.3s' }}>
          {featured.map((proj, i) => {
            const color = SECTOR_COLORS[proj.sector] || SECTOR_COLORS[proj.type] || '#ff7a1a';
            return (
              <div
                className="projects__feat-card"
                key={proj.id}
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                onClick={() => setActive(proj)}
              >
                <img src={proj.img} alt={proj.name} className="projects__feat-img" />
                <div className="projects__feat-overlay" />
                <div className="projects__feat-body">
                  <span className="projects__feat-badge" style={{ background: color }}>{proj.sector}</span>
                  <h3>{proj.name}</h3>
                  <div className="projects__feat-location">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {proj.location}
                  </div>
                  <button className="projects__feat-read-more" onClick={e => { e.stopPropagation(); setActive(proj); }}>
                    Read More
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
                <div className="projects__feat-num">#{String(proj.id).padStart(2,'0')}</div>
              </div>
            );
          })}
        </div>

        {/* Remaining List */}
        {rest.length > 0 && (
          <div className="projects__list animate-in" style={{ animationDelay: '0.4s' }}>

            {/* Table Header */}
            <div className="projects__list-header">
              <span className="projects__list-num">#</span>
              <span className="projects__list-thumb-ph" />
              <span className="projects__list-col-head" style={{ flex: 1 }}>Project Name</span>
              <span className="projects__list-col-head projects__list-col-location">Location</span>
              <span className="projects__list-col-head">Sector</span>
              <span className="projects__list-col-head">Details</span>
            </div>

            {/* Table Rows */}
            {rest.map(proj => {
              const color = SECTOR_COLORS[proj.sector] || SECTOR_COLORS[proj.type] || '#ff7a1a';
              return (
                <div className="projects__list-item" key={proj.id}>
                  <span className="projects__list-num">#{String(proj.id).padStart(2,'0')}</span>
                  <img src={proj.img} alt="" className="projects__list-thumb" />
                  <div className="projects__list-info">
                    <strong>{proj.name}</strong>
                  </div>
                  <span className="projects__list-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {proj.location}
                  </span>
                  <span className="projects__list-sector" style={{ color, background: `${color}15` }}>
                    {proj.sector}
                  </span>
                  <button className="projects__list-read-more" onClick={() => setActive(proj)}>
                    View Details
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Modal */}
      <ProjectModal proj={active} onClose={() => setActive(null)} />
    </section>
  );
}
