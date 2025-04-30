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
    'Cars',
    'Technology & Innovation',
    'Space & Science',
    'Personal Growth'
  ];

  const skills = [
    'Python',
    'JavaScript',
    'C++',
    'TypeScript',
    'Django',
    'Node.js',
    'React',
    'Angular',
    'MySQL',
    'HTML & CSS',
    'git',
    'Java',
    'English (C2)',
    'German (B1)',
    'Polish (native)'
  ];
 
  return (
    <section className="about-section py-10 px-4" style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--text-color)' }}>
      <div className="container">
    <div className="row d-flex" style={{ position: 'relative' }}>
      <div className="col-lg-5" style={{ paddingRight: '20px' }}>
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          I'm a passionate software developer with a broad skill set spanning web, mobile, and desktop technologies. I enjoy building clean, efficient, and practical solutions that solve real-world problems and provide great user experiences.
        </p>
        <p className="about-paragraph secondary">
        Curious and self-driven, I constantly explore new tools and technologies through personal projects. I value growth, honesty, and responsibility — and I strive to reflect that in both my work and how I work with others.
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