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
    desc: 'Our intelligent fire alarm systems provide early detection and quick alerts to ensure fast emergency response. Available in conventional and addressable models, they are tailored to fit residential, commercial, and industrial setups. Seamlessly integrates with fire suppression and building management systems. Enhances safety, minimizes risk, and ensures regulatory compliance. Reliable protection when seconds matter most. We offer cutting-edge sensors that can differentiate between actual smoke and dust, significantly reducing false alarms. Maintenance contracts are available to ensure 24/7 operational readiness. Furthermore, our fire alarm control panels (FACP) offer advanced diagnostics, pinpointing the exact location of a fire event across vast multi-building campuses. By integrating voice evacuation protocols directly into the alarm logic, we can guarantee a coordinated, panic-free evacuation. Every system is wired using fire-resistant cables that maintain integrity even under extreme heat, ensuring communication lines to the central monitoring station are never severed. Our rigorous testing procedures include simulated smoke tests, decibel checks for sounders, and battery backup validations to guarantee flawless execution during an actual emergency.'
  },
  {
    id: 'hydrant',
    image: imgHydrant,
    title: 'Fire Hydrant Systems',
    desc: 'Our fire hydrant systems deliver high-pressure water supply to combat large-scale fires effectively. They include pumps, pipes, valves, and hoses built to the latest fire safety standards. Ideal for factories, warehouses, and high-rise buildings with wide coverage needs. Designed for durability, performance, and easy maintenance. A critical component in any comprehensive firefighting setup. Our installations feature underground and above-ground ring mains, strategically placed hydrant valves, and heavy-duty booster pumps for optimal pressure distribution. The hydrant network acts as the primary backbone of industrial fire defense, providing an inexhaustible supply of water directly to the fire brigade upon their arrival. We construct our piping networks using heavy-gauge, corrosion-resistant galvanized iron or carbon steel, coated with industrial-grade red oxide for maximum longevity. Each hydrant point is equipped with high-quality brass landing valves, reinforced rubber-lined hoses, and copper branch pipes designed to withstand tremendous hydrostatic pressure. Additionally, our intelligent jockey pump systems automatically maintain line pressure, compensating for minor leaks without activating the main high-capacity diesel or electric pumps.'
  },
  {
    id: 'sprinkler',
    image: imgSprinkler,
    title: 'Automatic Fire Sprinklers',
    desc: 'Sprinkler systems automatically sense heat and distribute water to quickly control or extinguish fires before they spread. These systems feature ceiling and roof-mounted heads placed strategically throughout your facility. We utilize hydraulic balancing and advanced heat-sensing technology to guarantee immediate response and minimal water damage during an emergency. We provide wet pipe, dry pipe, and pre-action sprinkler systems specifically customized to the ambient temperature and hazard levels of your facility. The moment a fire raises the ambient temperature past the activation threshold, the quartzoid bulb shatters, releasing a high-velocity spray of water directly over the source of the flame. This localized suppression minimizes collateral water damage to unaffected areas. For areas highly sensitive to accidental discharge, such as data centers or archives, we install sophisticated pre-action systems that require both a smoke detector activation and a heat trigger before water is permitted to fill the piping network. All our sprinkler heads undergo rigorous UL/FM certifications to guarantee reliability.'
  },
  {
    id: 'extinguisher',
    image: imgExtinguisher,
    title: 'Fire Extinguishers',
    desc: 'We supply, install, and maintain a complete range of fixed and portable fire extinguishers. Our inventory includes ABC dry powder, CO2, foam-based, and clean agent extinguishers suited for all fire risk categories. We ensure your facility is equipped with the right type of extinguisher for specific fire hazards, and provide regular refills and testing. We also offer comprehensive training programs for your staff to confidently and safely operate these devices in case of an emergency breakout. A well-placed and properly maintained fire extinguisher is often the first and most critical line of defense against incipient stage fires. We meticulously map out your facility to ensure extinguishers are located along escape routes and near specific hazard zones, strictly adhering to NFPA travel distance guidelines. Furthermore, our barcode-driven maintenance tracking system guarantees that hydrostatic testing, pressure gauge checks, and powder replacement schedules are never missed, ensuring 100% compliance during safety audits.'
  },
  {
    id: 'clean-agent',
    image: imgCleanAgent,
    title: 'Clean Agent Systems',
    desc: 'FM-200® fire suppression is an advanced, environmentally acceptable Halon replacement. This gas-based system has zero ozone depleting potential, is non-conductive, entirely safe for people, and leaves no residue. It is the perfect solution for protecting sensitive equipment in server rooms, data centers, and telecommunication facilities without causing collateral damage. The rapid discharge mechanism extinguishes fires in 10 seconds or less, severely limiting equipment downtime and data loss. Clean agents act chemically to interrupt the fire triangle, cooling the flame and removing the heat energy so rapidly that combustion can no longer be sustained. Because they leave absolutely no particulate residue, your expensive IT infrastructure and irreplaceable physical records require zero cleanup after a discharge. We meticulously calculate the precise agent concentration required based on the specific volume and leakage characteristics of your room, performing specialized door fan tests to ensure the gas remains in the room long enough to prevent fire re-ignition.'
  },
  {
    id: 'gas',
    image: imgGas,
    title: 'Gas Suppression Systems',
    desc: 'Our dry chemical powder and gas-based total flooding systems use premium nitrogen cylinders and ASME-grade pressure vessels. Designed with both electric and pneumatic actuation devices, these factory-designed units offer rapid fire knockdown. Perfect for industrial settings and critical control rooms where water-based suppression is not viable. Our expert engineers provide full volumetric calculations and room integrity testing to ensure the gas concentration reaches extinguishing levels instantly. We offer inert gas solutions like IG-55 and INERGEN, which lower the oxygen concentration in the room to a level where combustion is impossible, yet humans can still safely breathe and evacuate. These systems are highly effective for archiving rooms, museums, and electrical substations. The piping networks are engineered using high-pressure schedule 40 and 80 seamless steel pipes to handle the extreme discharge pressures safely. Directional valves can be utilized to protect multiple zones from a single centralized cylinder bank, making the system highly cost-effective for sprawling industrial complexes.'
  },
  {
    id: 'spray',
    image: imgDeluge,
    title: 'Deluge, Spray & Foam Systems',
    desc: 'We offer high and medium velocity water spray systems featuring automatic Deluge Valve actuation. These systems create a thick foam blanket or powerful water spray, specifically designed for protecting vessels, chemical plants, and areas exposed to flammable liquids and gases. Rigorous hydraulic calculations ensure optimal flow and coverage. Foam proportioning systems are also meticulously calibrated to ensure the precise water-to-foam ratio for maximum smothering effect. Deluge systems utilize open nozzles, meaning that when the deluge valve is triggered by a separate fire detection system, water discharges simultaneously from every single nozzle in the network. This total-saturation approach is absolutely critical for rapidly cooling extremely hot surfaces, such as transformers, LPG storage spheres, and conveyor belts, to prevent catastrophic explosions. By introducing AFFF (Aqueous Film-Forming Foam) concentrates into the deluge stream, the system can blanket highly volatile hydrocarbon fires, cutting off the oxygen supply and suppressing flammable vapors.'
  },
  {
    id: 'gas-detect',
    image: imgGasDetection,
    title: 'Gas Detection System',
    desc: 'Advanced gas detection systems engineered to identify combustible, toxic, and asphyxiating gases in real-time, ensuring a safe industrial working environment. Our solutions include portable monitors, fixed point detectors, and comprehensive multi-gas control panels. They interface directly with exhaust, shut-off, and alarm systems to automatically trigger life-saving protocols. Regular calibration and precision testing guarantee zero-latency response to hazardous gas leaks, making them essential for chemical plants, refineries, and confined spaces. These highly sensitive catalytic bead and infrared sensors can detect Lower Explosive Limits (LEL) of methane, propane, and hydrogen long before an ignition source can cause a blast. Additionally, electrochemical sensors are deployed to monitor deadly toxic gases like carbon monoxide (CO) and hydrogen sulfide (H2S) in parts-per-million (ppm) accuracy. The entire detection network is continually monitored by a sophisticated central logic solver that can instantly shut down main gas valves, activate high-velocity extraction fans, and alert emergency response teams without any human intervention.'
  },
  {
    id: 'water-curtain',
    image: imgWaterCurtain,
    title: 'Water Curtain System',
    desc: 'Specialized fire protection systems that deploy a continuous, dense wall of water to block radiant heat and stop the spread of fire between building compartments. Water curtains act as an impenetrable thermal barrier, safeguarding escape routes, unburnt structures, and sensitive equipment. Engineered with high-velocity nozzles, they are ideal for theater stages, large open-plan factories, and conveyor belt openings where physical fire doors cannot be installed. We provide custom hydraulic designs to ensure an unbroken curtain of protection. By meticulously angling the discharge nozzles, the system creates a laminar flow of water droplets designed specifically to absorb and deflect intense infrared radiation generated by a massive blaze. This allows personnel to safely evacuate past a raging fire without suffering thermal burns, and prevents structural steel on the unburnt side from reaching its critical failure temperature. Our systems can be triggered automatically via heat sensors or manually via quick-opening valves positioned safely away from the hazard zone.'
  },
  {
    id: 'bladder-tank',
    image: imgBladderTank,
    title: 'Bladder Tank System',
    desc: 'High-capacity foam proportioning systems utilizing a flexible elastomeric bladder inside a pressurized steel tank, guaranteeing accurate foam concentrate delivery. Bladder tank systems require no external power or additional pumps, relying solely on the main fire water pressure to squeeze the bladder and mix the foam. They are incredibly reliable and require low maintenance, making them the industry standard for aircraft hangars, petrochemical facilities, and hazardous liquid storage depots where massive foam generation is critical. Inside the ASME-certified carbon steel shell, a highly durable neoprene or polyurethane bladder safely stores the foam concentrate. As water from the main fire pump flows through the proportioning controller, a small amount is diverted into the tank, pressurizing the exterior of the bladder. This forces the concentrate out into the water stream at a precise 1%, 3%, or 6% ratio, regardless of fluctuations in the main water flow or pressure. This elegant, physics-driven design ensures absolute reliability when combating massive class B flammable liquid fires.'
  },
  {
    id: 'water-monitor',
    image: imgWaterMonitor,
    title: 'Water Monitor System',
    desc: 'Heavy-duty industrial water and foam monitor cannons designed to deliver massive volumes of extinguishing agents accurately over extreme distances. These highly robust cannons can be manually operated, oscillating, or remote-controlled via a central command station. They are engineered to combat severe, high-hazard fires where it is unsafe for personnel to approach closely. Essential for marine docks, offshore platforms, tank farms, and massive waste recycling plants. Capable of discharging up to 10,000 liters per minute, these monitors feature internal flow vanes to minimize turbulence and maximize throw range. Remote-controlled models utilize explosion-proof electric or hydraulic motors, allowing a single operator to sit safely in a fortified control room while directing the massive water stream with pinpoint accuracy using a joystick. Automatic oscillating monitors can be set to continuously sweep a specific arc, providing relentless cooling to adjacent storage tanks to prevent the fire from escalating into a catastrophic BLEVE (Boiling Liquid Expanding Vapor Explosion).'
  }
];

const SECURITY_SERVICES = [
  {
    id: 'cctv',
    image: imgCCTV,
    title: 'CCTV Surveillance',
    desc: 'Complete video surveillance solutions with high-definition IP and analog cameras, advanced DVR/NVR setups, and remote monitoring capabilities. Designed to protect your premises 24/7, providing unparalleled visibility, intelligent motion detection, and secure cloud storage for industrial, commercial, and residential properties. Our systems feature night vision, thermal imaging options, and AI-powered analytics like facial recognition and license plate reading. We utilize ultra-high-definition 4K sensors paired with motorized varifocal lenses, ensuring that even the most minute details—like a trespasser’s face or a vehicle’s license plate—can be clearly identified from hundreds of feet away. Built-in infrared illuminators allow for perfect visibility in pitch-black conditions. Advanced Video Management Software (VMS) allows security personnel to set up virtual tripwires and intrusion zones, triggering instant push notifications to mobile devices the moment unauthorized access is detected. Furthermore, our robust Network Video Recorders utilize RAID storage configurations to ensure months of video footage are securely archived without risk of data loss.'
  },
  {
    id: 'sec-alarm',
    image: imgAlarm, 
    title: 'Fire Alarm System',
    desc: 'Our comprehensive fire alarm panels range from simple conventional setups to highly intelligent addressable systems. Equipped with full communication capabilities, they instantly alert occupants and authorities, forming the backbone of your building’s life safety strategy. We integrate multi-sensor detectors and manual call points that are monitored 24/7 by a central station, ensuring rapid dispatch of emergency services. Addressable panels allow security teams to instantly identify the exact room and floor where a fire has broken out, saving precious minutes during the critical early stages of a response. These panels are networked to control building access control systems, automatically unlocking electronically secured doors during an alarm to facilitate rapid evacuation. In high-rise applications, the system automatically coordinates elevator recall operations, bringing all cars to the ground floor and preventing occupants from accidentally stepping into a smoke-filled lobby. System health is continuously self-monitored, generating automatic fault alerts if a sensor is disconnected or covered in dust.'
  },
  {
    id: 'pa',
    image: imgPA,
    title: 'Public Address Systems',
    desc: 'Crystal clear Public Address (PA) and voice evacuation systems featuring automatic panels and communication networks. Ensure safe, organized, and rapid evacuations during emergencies, as well as reliable routine voice broadcasts across your entire facility. We deploy multi-zone zoning architectures, allowing targeted announcements to specific building wings while simultaneously playing pre-recorded emergency evacuation instructions elsewhere. In emergency scenarios, a calm, authoritative human voice is statistically proven to reduce panic far more effectively than standard blaring sirens. Our highly intelligible ceiling and horn speakers are designed with specialized acoustic enclosures to cut through heavy industrial background noise. The system control matrix allows for seamless integration with the main fire alarm panel, ensuring that when an alarm is triggered, the system automatically overrides background music and begins broadcasting localized evacuation protocols in multiple languages depending on the facility demographics.'
  },
  {
    id: 'bms',
    image: imgBMS,
    title: 'Building Management Systems (BMS)',
    desc: 'State-of-the-art Building Management Systems that seamlessly integrate fire safety, physical security, CCTV, and HVAC controls into a single, unified monitoring platform. Optimize building efficiency, lower energy costs, and gain complete centralized control over your infrastructure. Interactive 3D floor plans and real-time dashboard analytics give facility managers ultimate operational oversight, drastically reducing response times to alarms. Through complex programmable logic controllers (PLCs), the BMS can execute highly sophisticated emergency sequences. For example, upon detecting a fire in the basement, the system will automatically power down supply fans to starve the fire of oxygen, activate smoke extraction fans, halt all escalators, and redirect security cameras to focus entirely on the affected zone—all within milliseconds. During normal operations, the BMS continuously monitors energy consumption, adjusting lighting and air conditioning based on room occupancy sensors, leading to massive reductions in a facility’s carbon footprint and operational overhead.'
  },
  {
    id: 'talk-back',
    image: imgTalkBack,
    title: 'Talk Back System',
    desc: 'Crucial two-way communication systems designed for emergency scenarios, allowing trapped individuals or rescue workers to communicate directly with the control room. Talk back systems are strategically installed in fire refuge areas, stairwells, and elevator lobbies. Featuring heavy-duty, tamper-proof master and slave intercom units, they guarantee crystal-clear voice transmission even in highly noisy environments, ensuring coordinated and successful rescue operations. When thick smoke severely limits visibility and radio signals fail to penetrate thick concrete walls, the hardwired Talk Back system becomes the only lifeline for first responders and trapped civilians. The master control station features a highly intuitive layout, allowing the fire chief to instantly see which remote stations are calling for help. The handsets are constructed from indestructible polycarbonate and feature noise-canceling microphones to ensure that panicked voices are heard clearly over the roar of a fire. The entire network is backed by independent dual power supplies, guaranteeing operation even during a total facility blackout.'
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
          <p className={`service-row__desc ${!isExpanded ? 'service-row__desc--clamped' : ''}`}>
            {service.desc}
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
