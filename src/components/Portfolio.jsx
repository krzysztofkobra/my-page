import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const PortfolioSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className="portfolio-section py-5" style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--text-color)' }}>
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-md-6 col-lg-4">
          <div className="card h-100" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
              <img 
                src="/api/placeholder/400/300" 
                className="card-img-top" 
                alt="Project 1" 
              />
              <div className="card-body">
                <h3 className="card-title h5">Project Title</h3>
                <p className={`card-text ${darkMode ? '' : 'text-muted'}`}>
                  A brief description of this amazing project and what technologies were used.
                </p>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-color)' }}>React</span>
                  <span className="badge me-2" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-color)' }}>Angular</span>
                </div>
                <a href="#" className="text-decoration-none" style={{ color: 'var(--accent-color)' }}>
                  View Project <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
              <img 
                src="/api/placeholder/400/300" 
                className="card-img-top" 
                alt="Project 2" 
              />
              <div className="card-body">
                <h3 className="card-title h5">Another Project</h3>
                <p className={`card-text ${darkMode ? '' : 'text-muted'}`}>
                  An interesting project showcasing different skills and problem-solving.
                </p>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-color)' }}>React</span>
                  <span className="badge me-2" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-color)' }}>React</span>
                </div>
                <a href="#" className="text-decoration-none" style={{ color: 'var(--accent-color)' }}>
                  View Project <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-6 col-lg-4">
          <div className="card h-100" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
              <img 
                src="/api/placeholder/400/300" 
                className="card-img-top" 
                alt="Project 3" 
              />
              <div className="card-body">
                <h3 className="card-title h5">Cool Application</h3>
                <p className={`card-text ${darkMode ? '' : 'text-muted'}`}>
                  A description of this application and the challenges overcome during development.
                </p>
                <div className="mb-3">
                  <span className="badge me-2" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-color)' }}>React</span>
                  <span className="badge me-2" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-color)' }}>React</span>
                </div>
                <a href="#" className="text-decoration-none" style={{ color: 'var(--accent-color)' }}>
                  View Project <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;