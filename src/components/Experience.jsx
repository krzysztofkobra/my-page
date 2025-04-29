import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ExperienceSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`experience-section py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <h2 className="text-center mb-4">Work Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Experience Item 1 */}
            <div className={`card mb-4 ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <div className="card-body">
                <div className="d-md-flex justify-content-between mb-3">
                  <h3 className="h5 mb-0">Senior Developer</h3>
                  <div className={`${darkMode ? '' : 'text-muted'} mt-2 mt-md-0`}>
                    <i className="bi bi-briefcase me-2"></i>
                    <span>Tech Company • 2021 - Present</span>
                  </div>
                </div>
                <p className={darkMode ? '' : 'text-muted'}>
                  Led the development of critical features for the company's flagship product.
                  Mentored junior developers and implemented best practices that improved code quality.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className={`card ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <div className="card-body">
                <div className="d-md-flex justify-content-between mb-3">
                  <h3 className="h5 mb-0">Full Stack Developer</h3>
                  <div className={`${darkMode ? '' : 'text-muted'} mt-2 mt-md-0`}>
                    <i className="bi bi-briefcase me-2"></i>
                    <span>Previous Company • 2018 - 2021</span>
                  </div>
                </div>
                <p className={darkMode ? '' : 'text-muted'}>
                  Developed and maintained web applications using React, Node.js, and SQL.
                  Collaborated with design team to implement responsive UI components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;