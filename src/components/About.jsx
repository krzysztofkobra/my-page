import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/About.css';

const AboutSection = () => {
  const { darkMode } = useTheme();

  const interests = [
    'AI & Machine Learning',
    'Sport',
    'Traveling',
    'Films & Series',
    'Music',
    'Gym',
    'Robotics',
    'Gaming',
    'Cars'  
  ];

  const skills = [
    'Python',
    'JavaScript',
    'React',
    'C++',
    'MySQL',
    'HTML & CSS',
    'Django',
    'git',
    'Java',
    'English (C2)',
    'German (B1)',
    'Polish (native)'
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
    <div className="row d-flex" style={{ position: 'relative' }}>
      <div className="col-lg-5" style={{ paddingRight: '20px' }}>
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          I'm a passionate software developer with expertise in full-stack development. I love creating clean,
          efficient, and user-friendly applications that solve real-world problems.
        </p>
        <p className="about-paragraph secondary">
          With a strong foundation in modern web technologies and a keen eye for design, I strive to build
          software that functions flawlessly and delivers a great experience.
        </p>
        <p className="about-paragraph italic">
        Always learning, always evolving — staying sharp in the fast-paced world of tech.
        </p>
      </div>

      <div className="col-lg-6 about-details">
        <div>
          <h3 className="about-subheading">Interests</h3>
          <div className="about-tags-wrapper">
            {interests.map((interest, index) => (
              <div key={index} className="about-tag">
                {interest}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="about-subheading">Skills</h3>
          <div className="about-tags-wrapper">
            {skills.map((skill, index) => (
              <div key={index} className="about-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default AboutSection;