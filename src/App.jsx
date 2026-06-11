import React, { useState, useEffect } from 'react'
import './index.css'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactFooter from './components/ContactFooter'
import ThemeToggle from './components/ThemeToggle'

const NAV_SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const MARQUEE_ITEMS = [
  'PyTorch',
  'Computer Vision',
  'NLP',
  'LLMs',
  'Agentic AI',
  'RAG Pipelines',
  'FastAPI',
  'Docker',
  'MLOps',
  'Research Implementations',
]

const Marquee = () => {
  const seg = (key) => (
    <div className="marquee-seg" key={key} aria-hidden={key === 'b'}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
  return <div className="marquee">{<div className="marquee-track">{[seg('a'), seg('b')]}</div>}</div>
}

function App() {
  const [theme, setTheme] = useState('light-theme')
  const [activeSection, setActiveSection] = useState('')

  const toggleTheme = () => {
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')
  }

  useEffect(() => {
    document.body.className = theme
    document.documentElement.className = theme
  }, [theme])

  // Scroll-spy for topbar links
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`portfolio ${theme}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <a
            className="logo"
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            SHVN22K
          </a>
          <nav className="topbar-nav" aria-label="Sections">
            {NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                className={`topbar-link${activeSection === id ? ' active' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="topbar-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </header>

      <main id="top">
        <div className="container">
          <HeroSection />
        </div>

        <Marquee />

        <div className="container">
          <section id="projects" className="section reveal">
            <ProjectsSection />
          </section>

          <section id="experience" className="section reveal">
            <ExperienceSection />
          </section>

          <section id="skills" className="section reveal">
            <SkillsSection />
          </section>

          <section id="contact" className="section reveal">
            <ContactFooter />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
