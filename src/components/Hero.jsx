import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import imgHeroBg1 from '../assets/hero_bg_light_1.png';
import imgHeroBg2 from '../assets/hero_bg_light_2.png';
import imgHeroBg3 from '../assets/hero_bg_light_3.png';
import imgHeroBg4 from '../assets/hero_bg_light_4.png';
import imgHeroBg5 from '../assets/hero_bg_light_5.png';
import './Hero.css';

const BG_SLIDES = [
  { img: imgHeroBg1, label: 'Industrial Fire Safety',          tag: 'Corporate',   color: '#f97316' },
  { img: imgHeroBg2, label: 'Advanced Clean Agent Systems',    tag: 'Suppression', color: '#00b4d8' },
  { img: imgHeroBg3, label: 'Heavy-duty Hydrant Networks',     tag: 'Protection',  color: '#ff4d00' },
  { img: imgHeroBg4, label: 'Intelligent Fire Detection',      tag: 'Detection',   color: '#eab308' },
  { img: imgHeroBg5, label: '24/7 CCTV & Security Monitoring', tag: 'Security',    color: '#4ade80' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev,    setPrev]    = useState(null);
  const [paused,  setPaused]  = useState(false);
  const timerRef = useRef(null);

  const advance = () => {
    setPrev(current);
    setCurrent((current + 1) % BG_SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused, current]);

  const goTo = (i) => {
    setPrev(current);
    setCurrent(i);
  };

  const slide = BG_SLIDES[current];

  return (
    <section
      className="hero"
      id="home"
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
            {/* Badge */}
            <div className="hero__badge-wrap animate-fade-up">
              <span className="hero__badge">
                <span className="hero__badge-dot" />
                Certified Fire &amp; Safety Experts
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Protecting Lives,<br />
              <span className="hero__title-accent">Securing Futures</span>
            </h1>

            {/* Divider line */}
            <div className="hero__divider animate-fade-up" style={{ animationDelay: '0.15s' }} />

            {/* Subtitle */}
            <p className="hero__subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive fire protection, detection, and security systems — engineered for
              maximum reliability across South India's industrial &amp; commercial sectors.
            </p>

            {/* Feature chips */}
            <div className="hero__chips animate-fade-up" style={{ animationDelay: '0.25s' }}>
              {[
                { name: 'Fire Hydrant Systems', id: 'hydrant' },
                { name: 'VESDA Detection', id: 'vesda' },
                { name: 'Gas Suppression', id: 'gas' },
                { name: 'Annual AMC', id: 'amc' }
              ].map(chip => (
                <Link to={`/services#${chip.id}`} className="hero__chip" key={chip.name} style={{ textDecoration: 'none' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {chip.name}
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#systems" className="btn btn-primary hero__btn-primary">
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
                { v: '300+', l: 'Major Projects', icon: '🏗️' },
                { v: '10+',  l: 'Years Excellence', icon: '⭐' },
                { v: '100%', l: 'NBF Compliant', icon: '✅' },
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
            <div 
              className="hero__hud-card card"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
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
