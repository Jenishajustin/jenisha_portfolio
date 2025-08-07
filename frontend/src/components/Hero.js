import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const name = 'Jenisha';
  const [typedLetters, setTypedLetters] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < name.length) {
        setTypedLetters((prev) => [
          ...prev,
          <span key={index + '-' + Date.now()} className="sparkle-letter">
            {name[index]}
          </span>,
        ]);
        setIndex(index + 1);
      } else {
        // Reset to repeat after short delay
        setTimeout(() => {
          setTypedLetters([]);
          setIndex(0);
        }, 1000); // 1s pause before restart
      }
    }, 250); // typing speed

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="typed-name">
          Hello, I'm {typedLetters}
        </h1>
        <p className="tagline">Exploring AI | Crafting Smart Web Experiences | Driven by Data & Creativity        </p>
        <p className="description">I'm deeply curious about how intelligence can be built with code. I love working with AI, Data Science, and Deep Learning to create solutions that are not only smart but also meaningful. Alongside that, I enjoy bringing ideas to life through full-stack development — especially with Java and modern web technologies. My work blends logic, creativity, and a drive to make tech more impactful.        </p>
        <div className="hero-buttons">
          <a href="https://github.com/Jenishajustin" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/jenisha-j-723bb622b/" className="btn">LinkedIn</a>
          <a href="https://drive.google.com/file/d/1MQUDhTestL3wXUF-l5Pqg1jWo09LwiGN/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href="#projects" className="btn secondary">View Projects</a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
