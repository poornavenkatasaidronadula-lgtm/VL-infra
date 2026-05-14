import React, { useState } from 'react';
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

// New AI Generated Images
import imgGasDetection from '../assets/gas_detection.png';
import imgWaterCurtain from '../assets/water_curtain.png';
import imgBladderTank from '../assets/bladder_tank.png';
import imgWaterMonitor from '../assets/water_monitor.png';
import imgTalkBack from '../assets/talk_back.png';

const FIRE_SERVICES = [
  {
    id: 'alarm',
    image: imgAlarm,
    title: 'Fire Alarm Systems',
    shortDesc: 'Our intelligent fire alarm systems provide early detection and quick alerts to ensure fast emergency response. Available in conventional and addressable models.',
    fullDesc: 'Our intelligent fire alarm systems provide early detection and quick alerts to ensure fast emergency response. Available in conventional and addressable models, they are tailored to fit residential, commercial, and industrial setups. Seamlessly integrates with fire suppression and building management systems. Enhances safety, minimizes risk, and ensures regulatory compliance. Reliable protection when seconds matter most. We offer cutting-edge sensors that can differentiate between actual smoke and dust, significantly reducing false alarms. Maintenance contracts are available to ensure 24/7 operational readiness.'
  },
  {
    id: 'hydrant',
    image: imgHydrant,
    title: 'Fire Hydrant Systems',
    shortDesc: 'Our fire hydrant systems deliver high-pressure water supply to combat large-scale fires effectively. They include pumps, pipes, valves, and hoses built to the latest standards.',
    fullDesc: 'Our fire hydrant systems deliver high-pressure water supply to combat large-scale fires effectively. They include pumps, pipes, valves, and hoses built to the latest fire safety standards. Ideal for factories, warehouses, and high-rise buildings with wide coverage needs. Designed for durability, performance, and easy maintenance. A critical component in any comprehensive firefighting setup. Our installations feature underground and above-ground ring mains, strategically placed hydrant valves, and heavy-duty booster pumps for optimal pressure distribution.'
  },
  {
    id: 'sprinkler',
    image: imgSprinkler,
    title: 'Automatic Fire Sprinklers',
    shortDesc: 'Sprinkler systems automatically sense heat and distribute water to quickly control or extinguish fires before they spread, featuring ceiling and roof-mounted heads.',
    fullDesc: 'Sprinkler systems automatically sense heat and distribute water to quickly control or extinguish fires before they spread. These systems feature ceiling and roof-mounted heads placed strategically throughout your facility. We utilize hydraulic balancing and advanced heat-sensing technology to guarantee immediate response and minimal water damage during an emergency. We provide wet pipe, dry pipe, and pre-action sprinkler systems specifically customized to the ambient temperature and hazard levels of your facility.'
  },
  {
    id: 'extinguisher',
    image: imgExtinguisher,
    title: 'Fire Extinguishers',
    shortDesc: 'We supply, install, and maintain a complete range of fixed and portable fire extinguishers including ABC dry powder, CO2, foam-based, and clean agent extinguishers.',
    fullDesc: 'We supply, install, and maintain a complete range of fixed and portable fire extinguishers. Our inventory includes ABC dry powder, CO2, foam-based, and clean agent extinguishers suited for all fire risk categories. We ensure your facility is equipped with the right type of extinguisher for specific fire hazards, and provide regular refills and testing. We also offer comprehensive training programs for your staff to confidently and safely operate these devices in case of an emergency breakout.'
  },
  {
    id: 'clean-agent',
    image: imgCleanAgent,
    title: 'Clean Agent Systems',
    shortDesc: 'FM-200® fire suppression is an advanced, environmentally acceptable Halon replacement. This gas-based system has zero ozone depleting potential and leaves no residue.',
    fullDesc: 'FM-200® fire suppression is an advanced, environmentally acceptable Halon replacement. This gas-based system has zero ozone depleting potential, is non-conductive, entirely safe for people, and leaves no residue. It is the perfect solution for protecting sensitive equipment in server rooms, data centers, and telecommunication facilities without causing collateral damage. The rapid discharge mechanism extinguishes fires in 10 seconds or less, severely limiting equipment downtime and data loss.'
  },
  {
    id: 'gas',
    image: imgGas,
    title: 'Gas Suppression Systems',
    shortDesc: 'Our dry chemical powder and gas-based total flooding systems use premium nitrogen cylinders and ASME-grade pressure vessels for rapid fire knockdown.',
    fullDesc: 'Our dry chemical powder and gas-based total flooding systems use premium nitrogen cylinders and ASME-grade pressure vessels. Designed with both electric and pneumatic actuation devices, these factory-designed units offer rapid fire knockdown. Perfect for industrial settings and critical control rooms where water-based suppression is not viable. Our expert engineers provide full volumetric calculations and room integrity testing to ensure the gas concentration reaches extinguishing levels instantly.'
  },
  {
    id: 'spray',
    image: imgDeluge,
    title: 'Deluge, Spray & Foam Systems',
    shortDesc: 'High and medium velocity water spray systems featuring automatic Deluge Valve actuation. Creates a thick foam blanket or powerful water spray for flammable liquids.',
    fullDesc: 'We offer high and medium velocity water spray systems featuring automatic Deluge Valve actuation. These systems create a thick foam blanket or powerful water spray, specifically designed for protecting vessels, chemical plants, and areas exposed to flammable liquids and gases. Rigorous hydraulic calculations ensure optimal flow and coverage. Foam proportioning systems are also meticulously calibrated to ensure the precise water-to-foam ratio for maximum smothering effect.'
  },
  {
    id: 'gas-detect',
    image: imgGasDetection,
    title: 'Gas Detection System',
    shortDesc: 'Advanced gas detection systems engineered to identify combustible, toxic, and asphyxiating gases in real-time, ensuring a safe industrial working environment.',
    fullDesc: 'Advanced gas detection systems engineered to identify combustible, toxic, and asphyxiating gases in real-time, ensuring a safe industrial working environment. Our solutions include portable monitors, fixed point detectors, and comprehensive multi-gas control panels. They interface directly with exhaust, shut-off, and alarm systems to automatically trigger life-saving protocols. Regular calibration and precision testing guarantee zero-latency response to hazardous gas leaks, making them essential for chemical plants, refineries, and confined spaces.'
  },
  {
    id: 'water-curtain',
    image: imgWaterCurtain,
    title: 'Water Curtain System',
    shortDesc: 'Specialized fire protection systems that deploy a continuous, dense wall of water to block radiant heat and stop the spread of fire between building compartments.',
    fullDesc: 'Specialized fire protection systems that deploy a continuous, dense wall of water to block radiant heat and stop the spread of fire between building compartments. Water curtains act as an impenetrable thermal barrier, safeguarding escape routes, unburnt structures, and sensitive equipment. Engineered with high-velocity nozzles, they are ideal for theater stages, large open-plan factories, and conveyor belt openings where physical fire doors cannot be installed. We provide custom hydraulic designs to ensure an unbroken curtain of protection.'
  },
  {
    id: 'bladder-tank',
    image: imgBladderTank,
    title: 'Bladder Tank System',
    shortDesc: 'High-capacity foam proportioning systems utilizing a flexible elastomeric bladder inside a pressurized steel tank, guaranteeing accurate foam concentrate delivery.',
    fullDesc: 'High-capacity foam proportioning systems utilizing a flexible elastomeric bladder inside a pressurized steel tank, guaranteeing accurate foam concentrate delivery. Bladder tank systems require no external power or additional pumps, relying solely on the main fire water pressure to squeeze the bladder and mix the foam. They are incredibly reliable and require low maintenance, making them the industry standard for aircraft hangars, petrochemical facilities, and hazardous liquid storage depots where massive foam generation is critical.'
  },
  {
    id: 'water-monitor',
    image: imgWaterMonitor,
    title: 'Water Monitor System',
    shortDesc: 'Heavy-duty industrial water and foam monitor cannons designed to deliver massive volumes of extinguishing agents accurately over extreme distances.',
    fullDesc: 'Heavy-duty industrial water and foam monitor cannons designed to deliver massive volumes of extinguishing agents accurately over extreme distances. These highly robust cannons can be manually operated, oscillating, or remote-controlled via a central command station. They are engineered to combat severe, high-hazard fires where it is unsafe for personnel to approach closely. Essential for marine docks, offshore platforms, tank farms, and massive waste recycling plants.'
  }
];

const SECURITY_SERVICES = [
  {
    id: 'cctv',
    image: imgCCTV,
    title: 'CCTV Surveillance',
    shortDesc: 'Complete video surveillance solutions with high-definition IP and analog cameras, advanced DVR/NVR setups, and remote monitoring capabilities.',
    fullDesc: 'Complete video surveillance solutions with high-definition IP and analog cameras, advanced DVR/NVR setups, and remote monitoring capabilities. Designed to protect your premises 24/7, providing unparalleled visibility, intelligent motion detection, and secure cloud storage for industrial, commercial, and residential properties. Our systems feature night vision, thermal imaging options, and AI-powered analytics like facial recognition and license plate reading.'
  },
  {
    id: 'sec-alarm',
    image: imgAlarm, // Reusing fire alarm image
    title: 'Fire Alarm System',
    shortDesc: 'Our comprehensive fire alarm panels range from simple conventional setups to highly intelligent addressable systems, forming the backbone of your life safety strategy.',
    fullDesc: 'Our comprehensive fire alarm panels range from simple conventional setups to highly intelligent addressable systems. Equipped with full communication capabilities, they instantly alert occupants and authorities, forming the backbone of your building’s life safety strategy. We integrate multi-sensor detectors and manual call points that are monitored 24/7 by a central station, ensuring rapid dispatch of emergency services.'
  },
  {
    id: 'pa',
    image: imgPA,
    title: 'Public Address Systems',
    shortDesc: 'Crystal clear Public Address (PA) and voice evacuation systems featuring automatic panels and communication networks for safe, organized evacuations.',
    fullDesc: 'Crystal clear Public Address (PA) and voice evacuation systems featuring automatic panels and communication networks. Ensure safe, organized, and rapid evacuations during emergencies, as well as reliable routine voice broadcasts across your entire facility. We deploy multi-zone zoning architectures, allowing targeted announcements to specific building wings while simultaneously playing pre-recorded emergency evacuation instructions elsewhere.'
  },
  {
    id: 'bms',
    image: imgBMS,
    title: 'Building Management Systems (BMS)',
    shortDesc: 'State-of-the-art Building Management Systems that seamlessly integrate fire safety, physical security, CCTV, and HVAC controls into a single monitoring platform.',
    fullDesc: 'State-of-the-art Building Management Systems that seamlessly integrate fire safety, physical security, CCTV, and HVAC controls into a single, unified monitoring platform. Optimize building efficiency, lower energy costs, and gain complete centralized control over your infrastructure. Interactive 3D floor plans and real-time dashboard analytics give facility managers ultimate operational oversight, drastically reducing response times to alarms.'
  },
  {
    id: 'talk-back',
    image: imgTalkBack,
    title: 'Talk Back System',
    shortDesc: 'Crucial two-way communication systems designed for emergency scenarios, allowing trapped individuals or rescue workers to communicate directly with the control room.',
    fullDesc: 'Crucial two-way communication systems designed for emergency scenarios, allowing trapped individuals or rescue workers to communicate directly with the control room. Talk back systems are strategically installed in fire refuge areas, stairwells, and elevator lobbies. Featuring heavy-duty, tamper-proof master and slave intercom units, they guarantee crystal-clear voice transmission even in highly noisy environments, ensuring coordinated and successful rescue operations.'
  }
];

export default function Services() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderServiceRow = (service, index) => {
    const isEven = index % 2 === 0;
    const isExpanded = expanded[service.id];

    return (
      <div 
        key={service.id} 
        className={`service-row ${isEven ? 'service-row--even' : 'service-row--odd'}`}
      >
        <div className="service-row__content">
          <h3 className="service-row__title">{service.title}</h3>
          <p className="service-row__desc">
            {isExpanded ? service.fullDesc : service.shortDesc}
          </p>
          <div>
            <button 
              className="service-row__readmore" 
              onClick={() => toggleExpand(service.id)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
        <div className="service-row__image-wrapper">
          <img src={service.image} alt={service.title} className="service-row__image" />
        </div>
      </div>
    );
  };

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
          {FIRE_SERVICES.map((service, index) => renderServiceRow(service, index))}
        </div>

        {/* Security Header */}
        <div className="section-header" style={{ marginTop: '100px' }}>
          <div className="badge">Security & Management</div>
          <h2>Security <span className="gradient-text">Services</span></h2>
          <div className="divider" />
        </div>

        {/* Zigzag Security Services Layout */}
        <div className="services__list">
          {SECURITY_SERVICES.map((service, index) => renderServiceRow(service, index))}
        </div>

      </div>
    </section>
  );
}
