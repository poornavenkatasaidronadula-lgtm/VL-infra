import React, { useEffect, useRef, useState } from 'react';
import imgHeroEpic     from '../assets/hero_epic.png';
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
  { img: imgHeroEpic,       label: 'Integrated Fire & Safety',            tag: 'Corporate',     color: '#f97316' },
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
      {/* ── Background Slides with Smooth Crossfade ── */}
      <div className="hero__bg-wrap">
        {BG_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`hero__bg-slide ${i === current ? 'active' : i === prev ? 'prev' : ''}`}
            style={{ backgroundImage: `url(${s.img})` }}
          >
            <div className="hero__bg-overlay" />
          </div>
        ))}
      </div>

      <div className="container hero__container">
        <div className="hero__content-wrap">
          <div className="hero__main">
            {/* badge */}
            <div className="hero__badge-wrap animate-fade-up">
              <span className="hero__badge">
                <span className="hero__badge-dot" />
                ISO Certified Safety Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Your Safety is<br />
              Our <span className="gradient-text">Commitment</span>
            </h1>

            {/* Subtitle */}
            <p className="hero__subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
              WE CHANGE THE WAY YOU FIGHT FIRE. Comprehensive protection, 
              detection, and security systems designed for maximum reliability 
              across South India.
            </p>

            {/* Buttons */}
            <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#systems" className="btn btn-primary">
                Explore Our Systems
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline">
                Get a Free Quote
              </a>
            </div>

            {/* Stats */}
            <div className="hero__stats-grid animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                { v: '27+',  l: 'Major Projects' },
                { v: '15+',  l: 'Years Excellence' },
                { v: '100%', l: 'Compliance' },
              ].map(s => (
                <div className="hero__stat-card" key={s.l}>
                  <span className="hero__stat-val">{s.v}</span>
                  <span className="hero__stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating HUD - Interactive info about current system */}
          <div className="hero__hud animate-fade-left">
            <div className="hero__hud-card card">
              <div className="hero__hud-tag" style={{ color: slide.color, background: `${slide.color}15` }}>
                {slide.tag}
              </div>
              <h3>{slide.label}</h3>
              <p>Specialized fire protection solution integrated for industrial and commercial environments.</p>
              
              <div className="hero__hud-footer">
                <div className="hero__progress">
                  <div 
                    className="hero__progress-bar" 
                    key={current}
                    style={{ 
                      '--pc': slide.color,
                      animationPlayState: paused ? 'paused' : 'running'
                    }} 
                  />
                </div>
                <div className="hero__nav">
                  <span className="hero__count">{String(current + 1).padStart(2, '0')} / {String(BG_SLIDES.length).padStart(2, '0')}</span>
                  <div className="hero__dots">
                    {BG_SLIDES.map((_, i) => (
                      <button 
                        key={i} 
                        className={`hero__dot ${i === current ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
