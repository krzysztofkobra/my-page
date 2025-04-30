import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Scrollable.css';

const ScrollableSections = () => {
  const { darkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const experienceItems = [
    {
      title: 'Embedded Software Developer',
      company: 'ML System • 2024-07 - 2024-09',
      description: 'Led the development of critical features for the company\'s flagship product. Mentored junior developers and implemented best practices that improved code quality.'
    },
    {
      title: 'ZSTiO',
      company: 'Previous Company • 2018 - 2021',
      description: 'Developed and maintained web applications using React, Node.js, and SQL. Collaborated with design team to implement responsive UI components.'
    },{
      title: 'Senior Developer',
      company: 'Tech Company • 2021 - Present',
      description: 'Led the development of critical features for the company\'s flagship product. Mentored junior developers and implemented best practices that improved code quality.'
    },{
      title: 'Senior Developer',
      company: 'Tech Company • 2021 - Present',
      description: 'Led the development of critical features for the company\'s flagship product. Mentored junior developers and implemented best practices that improved code quality.'
    },
  ];

  const educationItems = [
    {
      title: 'ZSTiO Jarosław',
      company: '2021 - 2026',
      description: 'Programming in C++, Python, Java, Developing web applications using HTML, CSS, JavaScript, Angular, Bootstrap, Working with relational databases (MySQL), Creating mobile applications in Java (Android), Understanding of algorithms, OOP, software design patterns, Version control with Git, Building desktop applications using PyQt'
    },
  ]

  const projects = [
    {
      title: 'Minecraft',
      description: 'A brief description of this amazing project and what technologies were used.',
      image: `${process.env.PUBLIC_URL}/images/example.jpg`,
      technologies: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/krzysztofkobra/ClockApp'
    },
    {
      title: 'ClockApp',
      description: 'An interesting project showcasing different skills and problem-solving.',
      image: `${process.env.PUBLIC_URL}/images/clockapp.png`,
      technologies: ['Python', 'PyQt'],
      github: 'https://github.com/krzysztofkobra/clock_app'
    },
    {
      title: 'DayNote',
      description: 'A third amazing project.',
      image: `${process.env.PUBLIC_URL}/images/daynote.png`,
      technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/krzysztofkobra/DayNote'
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
    <section className="scrollable-sections">
      <div className="scroll-wrapper">
        <div className="scroll-card">
          <h2 className="card-title">Projects</h2>
          <div className="card-content">
            <div
                className="card-project"
                style={{
                    backgroundImage: `url(${projects[currentProject].image || ''})`,
                }}
            >
                <div className="card-body"></div>
                <div className="project-footer">
                  <div className="project-name">{projects[currentProject].title}</div>
                  <div className="technologies">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <span key={index} className={`tech-tag ${darkMode ? 'dark-mode' : 'light-mode'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer" className="github-link">Learn more</a>
                </div>
            </div>

            <div className="portfolio-navigation mt-3 text-center">
              <button className="nav-button" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
              </button>
              {projects.map((_, index) => (
                <span
                  key={index}
                  style={{
                    margin: '0 6px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    color: currentProject === index ? 'var(--accent-color)' : '#aaa',
                  }}
                  onClick={() => setCurrentProject(index)}
                >
                  ●
                </span>
              ))}
              <button className="nav-button" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="scroll-card" style={{ maxWidth: '700px' }}>
          <h2 className="card-title">Experience</h2>
          <div className="work-experience">
            {experienceItems.map((item, index) => (
              <div key={index} className="work-experience-item">
                <div className="dot-line">
                  <span className="dot"></span>
                  {index < experienceItems.length - 1 && <span className="line"></span>}
                </div>
                <div className="work-experience-content">
                  <h3 className="work-title">{item.title}</h3>
                  <p className="work-company">{item.company}</p>
                  <p className="work-description">{item.description}</p>
                </div>
              </div>
            ))}
            
          </div>
          <a 
            href="/my-page/cv-szymon-wydra-programista.pdf" 
            download="cv-szymon-wydra-programista.pdf" 
            className="cv-button" 
            onClick={(e) => {
              e.preventDefault();
              const link = document.createElement('a');
              link.href = '/my-page/cv-szymon-wydra-programista.pdf';
              link.download = 'cv-szymon-wydra-programista.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>CV 
          </a>
        </div>
      </div>
    </section>

    <section className="scrollable-sections" style={{ paddingBottom: '5rem' }}>
    <div className="scroll-wrapper">
      <div className="scroll-card" style={{ maxWidth: '1500px' }}>
        <h2 className="card-title">Education</h2>
        <div className="work-experience">
            {educationItems.map((item, index) => (
              <div key={index} className="work-experience-item">
                <div className="dot-line">
                  <span className="dot"></span>
                  {index < educationItems.length - 1 && <span className="line"></span>}
                </div>
                <div className="work-experience-content" style={{ width: '90%' }}>
                  <h3 className="work-title">{item.title}</h3>
                  <p className="work-company">{item.company}</p>
                  <p className="work-description">{item.description}</p>
                </div>
              </div>
            ))}
            
          </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default ScrollableSections;
