import React, { useEffect, useRef, useState } from 'react';
import imgSprinkler      from '../assets/sprinkler.png';
import imgFireAlarm      from '../assets/fire_alarm.png';
import imgExtinguisher   from '../assets/extinguisher.png';
import imgCleanAgent     from '../assets/clean_agent.png';
import imgGasSuppression from '../assets/gas_suppression.png';
import imgDelugeFoam     from '../assets/deluge_foam.png';
import imgCCTV           from '../assets/cctv.png';
import imgPASystem       from '../assets/pa_system.png';
import imgBMS            from '../assets/bms.png';
import './Hero.css';

const BG_SLIDES = [
  { img: imgSprinkler,      label: 'Automatic Fire Sprinkler System',     tag: 'Water-Based',   color: '#0d6efd' },
  { img: imgFireAlarm,      label: 'Automatic Fire Alarm & Detection',    tag: 'Detection',     color: '#ff4d00' },
  { img: imgExtinguisher,   label: 'Fixed & Portable Fire Extinguishers', tag: 'Portable',      color: '#ff7a1a' },
  { img: imgCleanAgent,     label: 'Clean Agent Fire Suppression',        tag: 'FM-200®',       color: '#00b4d8' },
  { img: imgGasSuppression, label: 'Gas Suppression System',              tag: 'Gas-Based',     color: '#a78bfa' },
  { img: imgDelugeFoam,     label: 'Deluge, Water Spray & Foam',          tag: 'Deluge',        color: '#06b6d4' },
  { img: imgCCTV,           label: 'CCTV Surveillance System',            tag: 'Security',      color: '#4ade80' },
  { img: imgPASystem,       label: 'Public Address System',               tag: 'Communication', color: '#ffd166' },
  { img: imgBMS,            label: 'BMS — Building Management System',    tag: 'Integrated',    color: '#f472b6' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev,    setPrev]    = useState(null);
  const [paused,  setPaused]  = useState(false);
  const timerRef = useRef(null);

  const advance = () => {
    setCurrent(c => { setPrev(c); return (c + 1) % BG_SLIDES.length; });
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (i) => {
    setPrev(current);
    setCurrent(i);
    clearInterval(timerRef.current);
    if (!paused) timerRef.current = setInterval(advance, 4500);
  };

  const slide = BG_SLIDES[current];

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Full-bleed background slides ── */}
      <div className="hero__bg-wrap">
        {BG_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`hero__bg-slide ${i === current ? 'active' : i === prev ? 'prev' : ''}`}
            style={{ backgroundImage: `url(${s.img})` }}
          />
        ))}
      </div>

      {/* Layered overlays */}
      <div className="hero__ov hero__ov--base"   />
      <div className="hero__ov hero__ov--left"   />
      <div className="hero__ov hero__ov--bottom" />

      {/* Glow blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      {/* ── MAIN CONTENT – strictly left side ── */}
      <div className="hero__stage">
        <div className="hero__content">

          {/* Badge */}
          <div className="badge hero__badge">
            <span className="hero__dot-pulse" />
            Certified Fire &amp; Safety Experts
          </div>

          {/* Headline – 2 clean lines */}
          <h1 className="hero__headline">
            Protecting Lives<br />
            with <span className="hero__fire-text">Advanced</span><br />
            Fire &amp; Safety
          </h1>

          {/* Divider accent */}
          <div className="hero__accent-line" />

          {/* Subtitle */}
          <p className="hero__sub">
            Comprehensive fire protection, detection &amp; security —
            designed, installed and maintained under one roof.
          </p>

          {/* CTA buttons */}
          <div className="hero__btns">
            <a href="#services" className="btn btn-primary hero__btn-main">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Explore Services
            </a>
            <a href="#contact" className="btn btn-outline hero__btn-sec">
              Get Free Quote
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {[
              { v: '27+',  l: 'Projects' },
              { v: '15+',  l: 'Years Exp.' },
              { v: '100%', l: 'Compliant' },
              { v: '24/7', l: 'Support' },
            ].map(s => (
              <div className="hero__stat" key={s.l}>
                <span className="hero__stat-v">{s.v}</span>
                <span className="hero__stat-l">{s.l}</span>
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="hero__trust">
            <div className="hero__avatars">
              {['R','T','A','K','V'].map((l, i) => (
                <span key={i} className="hero__av">{l}</span>
              ))}
            </div>
            <p className="hero__trust-txt">
              Trusted by <strong>27+ companies</strong> across AP &amp; Telangana
            </p>
          </div>

        </div>
      </div>

      {/* ── BOTTOM HUD ── */}
      <div className="hero__hud">
        <div className="hero__hud-info" style={{ borderLeftColor: slide.color }}>
          <span
            className="hero__hud-tag"
            style={{ color: slide.color, background: `${slide.color}18`, borderColor: `${slide.color}40` }}
          >
            {slide.tag}
          </span>
          <span className="hero__hud-name">{slide.label}</span>
        </div>

        <div className="hero__dots">
          {BG_SLIDES.map((s, i) => (
            <button
              key={i}
              aria-label={s.label}
              className={`hero__dot ${i === current ? 'hero__dot--on' : ''}`}
              style={{ '--dc': BG_SLIDES[i].color }}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <span className="hero__counter">
          {String(current + 1).padStart(2, '0')} / {String(BG_SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      {/* Progress bar */}
      <div className="hero__prog">
        <div
          className="hero__prog-fill"
          key={`${current}-prog`}
          style={{
            '--pc': slide.color,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        />
      </div>
    </section>
  );
}
