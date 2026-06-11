import React, { useState, useEffect } from 'react'
import { FaMedium, FaLinkedin, FaGithub, FaFilePdf, FaEnvelope } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

const TITLES = ['AI/ML Developer', 'Vibe Coder']
const RESUME_URL =
  'https://drive.google.com/file/d/1IQiRE_IqbUMZrKcIc6he8VMEFIiLzrxO/view?usp=sharing'

const Typewriter = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(150)

  useEffect(() => {
    const title = TITLES[titleIndex]
    let timer

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(title.substring(0, displayText.length - 1))
        setSpeed(60)
      }, speed)

      if (displayText === '') {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % TITLES.length)
        setSpeed(150)
      }
    } else {
      timer = setTimeout(() => {
        setDisplayText(title.substring(0, displayText.length + 1))
      }, speed)

      if (displayText === title) {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, titleIndex, speed])

  return (
    <span className="typewriter">
      <span>{displayText}</span>
      <span className="cursor">|</span>
    </span>
  )
}

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-kicker"> AI/ML · CV · NLP</p>

          <h1 className="hero-name">
            Shiven
            <br />
            <span className="outline">Shandil</span>
          </h1>

          <div className="hero-type">
            <Typewriter />
            <span className="hero-since">2023 — Present</span>
          </div>

          <div className="hero-desc">
            <p>
              CS undergrad specializing in AI/ML — focused on NLP, LLMs, and
              computer vision. I implement research papers from scratch and
              ship end-to-end ML systems: real-time inference pipelines,
              agentic AI apps, and full-stack GenAI products.
            </p>
            <p>
              Currently exploring MLOps. I write about what I learn on Medium.
            </p>
          </div>

          <div className="hero-actions">
            <a
              href={RESUME_URL}
              className="btn btn--solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf aria-hidden />
              View resume
            </a>
            <a href="mailto:shivenkumar22@gmail.com" className="btn">
              <FaEnvelope aria-hidden />
              Get in touch
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/shvn22k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shiven-k-58b423212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://medium.com/@shivenkumar22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <FaMedium />
            </a>
            <a
              href="https://x.com/k_shvn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <RiTwitterXFill />
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="portrait">
            <div className="portrait-frame">
              <img src="/shiven.png" alt="Shiven Shandil" />
            </div>
          </div>

          <div className="spec-sheet" aria-label="Quick facts">
            <div className="spec-row">
              <span className="spec-key">Location</span>
              <span className="spec-val">Noida, IN</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Focus</span>
              <span className="spec-val">CV · NLP · MLOps</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Degree</span>
              <span className="spec-val">B.Tech CS (AI/ML)</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Status</span>
              <span className="spec-val spec-status">
                <span className="status-dot" aria-hidden />
                Open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
