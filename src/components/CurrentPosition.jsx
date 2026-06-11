import React, { useState, useEffect } from 'react'
import SectionHead from './SectionHead'

const TITLES = ['AI/ML Developer', 'Vibe Coder']

const CurrentPosition = () => {
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
    <div className="current-position">
      <SectionHead no="01" title="I am a" />

      <div className="position-content">
        <h3 className="position-title typewriter">
          <span>{displayText}</span>
          <span className="cursor">|</span>
        </h3>
        <div className="position-timeline">2023 — Present</div>

        <div className="position-description">
          <p>
            I build ML systems end to end — from implementing research papers
            in PyTorch to deploying real-time inference pipelines, agentic AI
            apps, and full-stack GenAI products. I also write about what I
            learn on Medium.
          </p>
          <p className="freelance-notice">
            Open for freelance work — I design and ship fast, functional
            websites and AI-powered apps, end to end.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentPosition
