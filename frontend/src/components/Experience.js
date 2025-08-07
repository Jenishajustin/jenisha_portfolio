import React from 'react';
import '../styles/experience.css';

const experiences = [
  {
    role: 'AI Intern',
    org: 'NoviTech Pvt. Ltd.',
    duration: 'Jan 2024 – Feb 2024',
    details:
      'Focused on building intelligent systems using image classification and predictive modeling with deep learning.',
  },
  {
    role: 'Data Science Intern',
    org: 'Arjun Vision Tech Solutions (NSIC)',
    duration: 'Jun 2024 – Jul 2024',
    details:
      'Worked on real-time data preprocessing, ML/DL model building, and web-based health applications integrating AI and analytics.',
  }
  
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <span className="timeline-dot" />
              <h4>
                {exp.role} <span className="org">@ {exp.org}</span>
              </h4>
              <span className="duration">{exp.duration}</span>
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
