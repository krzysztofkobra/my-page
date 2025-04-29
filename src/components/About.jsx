import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className="about-section py-5" style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--text-color)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center mb-4" style={{ color: 'var(--text-color)' }}>About Me</h2>
            <p className="lead mb-3">
              I'm a passionate software developer with expertise in full-stack development. I love creating clean, 
              efficient, and user-friendly applications that solve real-world problems.
            </p>
            <p className="mb-3">
              With a strong foundation in modern web technologies and a keen eye for design, I strive to build 
              software that not only functions flawlessly but also provides an exceptional user experience.
            </p>
            <p>
              I'm constantly learning and exploring new technologies to expand my skill set and stay at the 
              forefront of the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;