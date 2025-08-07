import React from 'react';
import '../styles/about.css';
import profileImg from '../images/avatar.png'; // Make sure it's a transparent PNG

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>
        <p>Hi, I'm <strong>Jenisha</strong> — an undergraduate student pursuing <strong>B.Tech in Artificial Intelligence and Data Science</strong> at Saveetha Engineering College.</p>

<p>I’m passionate about exploring the possibilities of <strong>AI</strong> and <strong>data-driven solutions</strong>, especially in the <strong>healthcare space</strong>. I love building intelligent systems that combine <strong>creativity, code</strong>, and <strong>real-world impact</strong> — whether it’s through <strong>deep learning</strong>, smart web applications, or meaningful visualizations.</p>

<p>Right now, I’m eager to expand my knowledge in <strong>databases</strong>, <strong>cloud computing</strong>, and <strong>large language models (LLMs)</strong>. Beyond the tech, I enjoy expressing myself through <strong>art and design</strong>, and I’m always excited to meet like-minded people who share a passion for innovation.</p>
</div>
      <div className="about-image-wrapper">
        <img src={profileImg} alt="Jenisha" className="about-image" />
      </div>
    </section>
  );
};

export default About;
