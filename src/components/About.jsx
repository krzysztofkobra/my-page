import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/About.css';

const AboutSection = () => {
  const { darkMode } = useTheme();

  const sections = [
    { name: 'Experience & Projects', id: 'scrollable' },
    { name: 'Interests', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-section py-10 px-4" style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--text-color)' }}>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
              About Me
            </h2>
            <p className="mb-3" style={{ fontSize: '1.1rem' }}>
              I'm a passionate software developer with expertise in full-stack development. I love creating clean, 
              efficient, and user-friendly applications that solve real-world problems.
            </p>
            <p className="mb-3" style={{ fontSize: '1rem', opacity: 0.9 }}>
              With a strong foundation in modern web technologies and a keen eye for design, I strive to build 
              software that functions flawlessly and delivers a great experience.
            </p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', opacity: 0.85 }}>
              Always learning, always evolving — staying sharp in the fast-paced world of tech.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-start justify-content-lg-end mt-4 mt-lg-0">
            <div className="nav-sections-wrapper">
              <div className="vertical-line"></div>
              <ul className="nav-sections list-unstyled">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className="nav-item"
                    onClick={() => scrollToSection(section.id)}
                  >
                    <span className="dot"></span>
                    <span className="label">{section.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
