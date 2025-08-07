import React from 'react';
import '../styles/skills.css';

const skills = {
  'Programming Languages': ['Python', 'C', 'C++', 'Java'],
  'Web Development & UI': ['HTML', 'CSS', 'React', 'SpringBoot', 'Figma'],
  'AI / ML / DL': ['Scikit-learn', 'TensorFlow', 'CNN', 'Autoencoders', 'OpenCV'],
  'Data Analysis & Visualization': ['Pandas', 'Matplotlib', 'Seaborn', 'Power BI', 'Streamlit', 'EDA'],
  'Tools & Platforms': ['GitHub', 'AWS Cloud', 'MongoDB'],
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
  <div className="skills-wrapper">
    <h2>Skills</h2>
    <p className="skills-intro">
      A versatile stack blending core programming, intelligent systems, creative design, and visual storytelling.
    </p>
    <div className="skills-grid">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h4>{category}</h4>
          <ul>
            {items.map((skill, index) => (
              <li key={index} className="skill-pill">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Skills;
