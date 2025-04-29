import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-4" style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)' }}>
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://github.com/yourusername" className="mx-2" style={{ color: 'var(--footer-text)' }}>
            <i className="bi bi-github"></i>
          </a>
          <a href="https://github.com/yourusername" className="mx-2" style={{ color: 'var(--footer-text)' }}>
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:your.email@example.com" className="mx-2" style={{ color: 'var(--footer-text)' }}>
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;