import React from 'react';

const ResumeDownload = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a
        href="/Jenisha_Resume.pdf"
        className="resume-button"
        download
      >
        Download My Resume
      </a>
    </section>
  );
};

export default ResumeDownload;
