import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const InterestsSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className="interests-section py-5" style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--text-color)' }}>
      <div className="container">
        <h2 className="text-center mb-4">Interests</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
          <div className="card h-100 text-center" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
              <div className="card-body">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3" style={{ backgroundColor: 'var(--icon-bg)' }}>
                <i className="bi bi-book fs-4" style={{ color: 'var(--icon-color)' }}></i>
                </div>
                <h3 className="h5 card-title">Continuous Learning</h3>
                <p className={`card-text ${darkMode ? '' : 'text-muted'}`}>
                  Always exploring new technologies and methodologies to expand my knowledge.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 text-center" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
              <div className="card-body">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3" style={{ backgroundColor: 'var(--icon-bg)' }}>
                <i className="bi bi-briefcase fs-4" style={{ color: 'var(--icon-color)' }}></i>
                </div>
                <h3 className="h5 card-title">Open Source</h3>
                <p className={`card-text ${darkMode ? '' : 'text-muted'}`}>
                  Contributing to and maintaining open source projects in my spare time.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
          <div className="card h-100 text-center" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
              <div className="card-body">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3" style={{ backgroundColor: 'var(--icon-bg)' }}>
                <i className="bi bi-hear fs-4" style={{ color: 'var(--icon-color)' }}></i>
                </div>
                <h3 className="h5 card-title">UI/UX Design</h3>
                <p className={`card-text ${darkMode ? '' : 'text-muted'}`}>
                  Passionate about creating beautiful, intuitive interfaces that enhance user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;