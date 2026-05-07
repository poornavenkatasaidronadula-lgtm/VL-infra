import React from 'react';
import './Services.css';

import imgAlarm from '../assets/fire_alarm.png';
import imgHydrant from '../assets/hydrant.png';
import imgSprinkler from '../assets/sprinkler.png';
import imgExtinguisher from '../assets/extinguisher.png';
import imgCleanAgent from '../assets/clean_agent.png';
import imgGas from '../assets/gas_suppression.png';
import imgDeluge from '../assets/deluge_foam.png';
import imgCCTV from '../assets/cctv.png';
import imgPA from '../assets/pa_system.png';
import imgBMS from '../assets/bms.png';

const FIRE_SERVICES = [
  {
    id: 'alarm',
    image: imgAlarm,
    title: 'Fire Alarm Systems',
    desc: 'Our intelligent fire alarm systems provide early detection and quick alerts to ensure fast emergency response. Available in conventional and addressable models, they are tailored to fit residential, commercial, and industrial setups. Seamlessly integrates with fire suppression and building management systems. Enhances safety, minimizes risk, and ensures regulatory compliance. Reliable protection when seconds matter most.',
  },
  {
    id: 'hydrant',
    image: imgHydrant,
    title: 'Fire Hydrant Systems',
    desc: 'Our fire hydrant systems deliver high-pressure water supply to combat large-scale fires effectively. They include pumps, pipes, valves, and hoses built to the latest fire safety standards. Ideal for factories, warehouses, and high-rise buildings with wide coverage needs. Designed for durability, performance, and easy maintenance. A critical component in any comprehensive firefighting setup.',
  },
  {
    id: 'sprinkler',
    image: imgSprinkler,
    title: 'Automatic Fire Sprinklers',
    desc: 'Sprinkler systems automatically sense heat and distribute water to quickly control or extinguish fires before they spread. These systems feature ceiling and roof-mounted heads placed strategically throughout your facility. We utilize hydraulic balancing and advanced heat-sensing technology to guarantee immediate response and minimal water damage during an emergency.',
  },
  {
    id: 'extinguisher',
    image: imgExtinguisher,
    title: 'Fire Extinguishers',
    desc: 'We supply, install, and maintain a complete range of fixed and portable fire extinguishers. Our inventory includes ABC dry powder, CO2, foam-based, and clean agent extinguishers suited for all fire risk categories. We ensure your facility is equipped with the right type of extinguisher for specific fire hazards, and provide regular refills and testing.',
  },
  {
    id: 'clean-agent',
    image: imgCleanAgent,
    title: 'Clean Agent Systems',
    desc: 'FM-200® fire suppression is an advanced, environmentally acceptable Halon replacement. This gas-based system has zero ozone depleting potential, is non-conductive, entirely safe for people, and leaves no residue. It is the perfect solution for protecting sensitive equipment in server rooms, data centers, and telecommunication facilities without causing collateral damage.',
  },
  {
    id: 'gas',
    image: imgGas,
    title: 'Gas Suppression Systems',
    desc: 'Our dry chemical powder and gas-based total flooding systems use premium nitrogen cylinders and ASME-grade pressure vessels. Designed with both electric and pneumatic actuation devices, these factory-designed units offer rapid fire knockdown. Perfect for industrial settings and critical control rooms where water-based suppression is not viable.',
  },
  {
    id: 'spray',
    image: imgDeluge,
    title: 'Deluge, Spray & Foam Systems',
    desc: 'We offer high and medium velocity water spray systems featuring automatic Deluge Valve actuation. These systems create a thick foam blanket or powerful water spray, specifically designed for protecting vessels, chemical plants, and areas exposed to flammable liquids and gases. Rigorous hydraulic calculations ensure optimal flow and coverage.',
  },
];

const SECURITY_SERVICES = [
  {
    id: 'cctv',
    image: imgCCTV,
    title: 'CCTV Surveillance',
    desc: 'Complete video surveillance solutions with high-definition IP and analog cameras, advanced DVR/NVR setups, and remote monitoring capabilities. Designed to protect your premises 24/7, providing unparalleled visibility, intelligent motion detection, and secure cloud storage for industrial, commercial, and residential properties.',
  },
  {
    id: 'sec-alarm',
    image: imgAlarm, // Reusing fire alarm image as requested
    title: 'Fire Alarm System',
    desc: 'Our comprehensive fire alarm panels range from simple conventional setups to highly intelligent addressable systems. Equipped with full communication capabilities, they instantly alert occupants and authorities, forming the backbone of your building’s life safety strategy.',
  },
  {
    id: 'pa',
    image: imgPA,
    title: 'Public Address Systems',
    desc: 'Crystal clear Public Address (PA) and voice evacuation systems featuring automatic panels and communication networks. Ensure safe, organized, and rapid evacuations during emergencies, as well as reliable routine voice broadcasts across your entire facility.',
  },
  {
    id: 'bms',
    image: imgBMS,
    title: 'Building Management Systems (BMS)',
    desc: 'State-of-the-art Building Management Systems that seamlessly integrate fire safety, physical security, CCTV, and HVAC controls into a single, unified monitoring platform. Optimize building efficiency, lower energy costs, and gain complete centralized control over your infrastructure.',
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="services__bg-glow" />
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="badge">What We Offer</div>
          <h2>Our <span className="gradient-text">Services</span></h2>
          <div className="divider" />
        </div>

        {/* Zigzag Services Layout */}
        <div className="services__list">
          {FIRE_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`service-row ${isEven ? 'service-row--even' : 'service-row--odd'}`}
              >
                <div className="service-row__content">
                  <h3 className="service-row__title">{service.title}</h3>
                  <p className="service-row__desc">{service.desc}</p>
                </div>
                <div className="service-row__image-wrapper">
                  <img src={service.image} alt={service.title} className="service-row__image" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Header */}
        <div className="section-header" style={{ marginTop: '100px' }}>
          <div className="badge">Security & Management</div>
          <h2>Security <span className="gradient-text">Services</span></h2>
          <div className="divider" />
        </div>

        {/* Zigzag Security Services Layout */}
        <div className="services__list">
          {SECURITY_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`service-row ${isEven ? 'service-row--even' : 'service-row--odd'}`}
              >
                <div className="service-row__content">
                  <h3 className="service-row__title">{service.title}</h3>
                  <p className="service-row__desc">{service.desc}</p>
                </div>
                <div className="service-row__image-wrapper">
                  <img src={service.image} alt={service.title} className="service-row__image" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
