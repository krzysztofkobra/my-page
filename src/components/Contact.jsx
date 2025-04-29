import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`contact-section py-5 ${darkMode ? 'bg-secondary text-light' : 'bg-warning text-dark'}`}>
      <div className="container text-center">
        <h2 className="mb-4">Get In Touch</h2>
        <p className="mb-4 mx-auto" style={{ maxWidth: '700px' }}>
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="mailto:your.email@example.com" className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}>
            <i className="bi bi-envelope me-2"></i>
            Email Me
          </a>
          <a href="https://linkedin.com/in/swydraa" className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}>
            <i className="bi bi-linkedin me-2"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;