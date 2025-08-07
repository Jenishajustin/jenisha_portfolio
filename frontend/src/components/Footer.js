import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jenisha. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
