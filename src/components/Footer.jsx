import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://github.com/yourusername" className="text-light mx-2">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-light mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:your.email@example.com" className="text-light mx-2">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;