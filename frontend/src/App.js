import React, { useEffect } from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { trackVisitor } from './api';
import './App.css';

function App() {
  useEffect(() => {
    trackVisitor()
      .then(() => console.log('Visitor Tracked'))
      .catch((error) => console.error('Visitor Tracking Failed', error));
  }, []);

  return (
    <>
      
<Header />
      {/* Main content that scrolls below the header */}
      <main className="font-sans bg-white text-gray-900 overflow-x-hidden">
        {/* Animated background */}
        
        <div className="animated-background">
          
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
        </div>
        <br></br>
        <br></br>
        <br></br><br></br><br></br>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
