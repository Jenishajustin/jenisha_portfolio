import React, { useState } from 'react';
import '../styles/projects.css';

const projectsData = {
  "Web Applications": [
    {
      title: 'EcoTrack',
      description: 'EcoTrack is a mobile app in progress that helps users monitor their carbon emissions and build eco-friendly habits. I worked on the frontend using React Native, while my teammate handled the backend with Node.js and Express. We are currently working on integrating both parts.',
      github: 'https://github.com/Jenishajustin/carbon-tracker-mern-gidy',
      demo: '',
    },
    {
      title: 'QuizMaster',
      description: 'QuizMaster is a simple quiz app I built during my college placement training to demonstrate JavaScript concepts like callbacks and higher-order functions. It features modular scoring logic with options for strict or lenient evaluation.',
      github: 'https://github.com/Jenishajustin/Quiz_Master',
      demo: 'https://jenishajustin.github.io/Quiz_Master/',
    },
    {
      title: 'SkyCast',
      description: 'SkyCast is a React-based weather app that lets users check live weather conditions by entering a city name. It uses the OpenWeatherMap API and React Router for navigation, with Axios for API calls and Hooks for state management..',
      github: 'https://github.com/Jenishajustin/SkyCast_FindMyWeather',
      demo: 'https://jenishajustin.github.io/SkyCast_FindMyWeather/',
    },
    {
      title: 'InspireMe',
      description: 'InspireMe is a simple web app I built during my placement training that shows a random motivational quote with each click. Made using HTML, CSS, and JavaScript, it features smooth transitions and a “Tweet this” option for quick sharing.',
      github: 'https://github.com/Jenishajustin/Quote_Generator',
      demo: 'https://jenishajustin.github.io/Quote_Generator/',
    },
  ],
  "AI / Machine Learning": [
    {
      title: 'Level UP',
      description: 'LevelUP is a smart learning platform that helps users discover job roles, build personalized skill roadmaps, and access curated resources. An interactive AI chatbot guides users through their upskilling journey with tailored support.',
      github: 'https://github.com/Jenishajustin/Level_UP',
      demo: 'https://level-up.streamlit.app/',
    },
    {
      title: 'AlzWELL (via MRI and Blood biomarkers)',
      description: 'AlzWELL is a team project focused on early detection of Alzheimer’s disease using deep learning. I developed a CNN model to analyze brain MRI scans and classify disease stages (Normal, EMCI, LMCI, and AD). My teammates worked on predicting Alzheimer’s risk using blood biomarker data, making the solution more comprehensive.',
      github: 'https://github.com/Jenishajustin/AlzWELL_Prognostic_Analysis_of_AD_via_MRI',
      demo: '',
    }
  ],
  "EDA & Data Visualization": [
    
    {
      title: 'Elevate EDA',
      description: 'Elevate EDA is a simple, interactive tool I built to make exploring data easier and more intuitive. Using Python and Streamlit, it helps users quickly visualize their datasets, understand key patterns, and generate reports - all without heavy coding.',
      github: 'https://github.com/Jenishajustin/Elevate_EDA',
      demo: 'https://elevate-eda-360.streamlit.app/',
    },
  ],
};

const Projects = () => {
  const [category, setCategory] = useState('Web Applications');

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-tabs">
        {Object.keys(projectsData).map((cat) => (
          <button
            key={cat}
            className={`project-tab ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="project-list">
        {projectsData[category].map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="btn secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
