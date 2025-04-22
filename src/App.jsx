import React, { useState, useEffect } from 'react'
import './index.css'
import './theme-override.css'
import HeroSection from './components/HeroSection'
import CurrentPosition from './components/CurrentPosition'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import { FaHome } from 'react-icons/fa'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
  };

  // Apply theme color to document body
  useEffect(() => {
    document.body.className = theme;
    document.documentElement.className = theme;
  }, [theme]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`portfolio ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">SHVN22K</div>
        </div>
        <HeroSection />
      </div>
      <div className="main-content">
        <div id="current-position">
          <CurrentPosition />
        </div>
        
        <div className="content-divider"></div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div className="content-divider"></div>
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div className="content-divider"></div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        {/* Floating Navigation */}
        <div className="floating-nav">
          <div className="nav-item" onClick={() => scrollToSection('current-position')}>
            <FaHome />
          </div>
          <div className="nav-item" onClick={() => scrollToSection('projects')}>Projects</div>
          <div className="nav-item" onClick={() => scrollToSection('experience')}>Experience</div>
          <div className="nav-item" onClick={() => scrollToSection('skills')}>Skills</div>
        </div>
      </div>
    </div>
  )
}

export default App
