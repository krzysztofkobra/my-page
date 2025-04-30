import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Contact.css';

const ContactSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className="contact-section py-5" style={{ backgroundColor: 'var(--secondary-bg)', color: 'var(--text-color)' }}>
      <div className="container text-center">
        <h2 className="mb-4">Get In Touch</h2>
        <p className="mb-4 mx-auto" style={{ maxWidth: '800px' }}>
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <div className={`card ${darkMode ? 'dark-card' : 'light-card'}`} style={{ maxWidth: '400px', width: '100%' }}>
            <a href="https://linkedin.com/in/swydraa" className="d-flex justify-content-center align-items-center" style={{ height: '100%', padding: '2rem', color: 'inherit' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <div className={`card ${darkMode ? 'dark-card' : 'light-card'}`} style={{ maxWidth: '400px', width: '100%' }}>
            <a href="mailto:swydraa@gmail.com" className="d-flex justify-content-center align-items-center" style={{ height: '100%', padding: '2rem', color: 'inherit' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;