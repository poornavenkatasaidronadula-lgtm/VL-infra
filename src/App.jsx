import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Systems from './components/Systems';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Need a slight timeout to ensure page renders before scrolling
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Systems />
              <Projects />
              <WhyChooseUs />
              <Contact />
            </>
          } />
          {/* SEPARATE PAGES */}
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
