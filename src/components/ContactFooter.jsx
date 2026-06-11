import React from 'react'
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import SectionHead from './SectionHead'

const RESUME_URL =
  'https://drive.google.com/file/d/1IQiRE_IqbUMZrKcIc6he8VMEFIiLzrxO/view?usp=sharing'

const ContactFooter = () => {
  return (
    <footer className="contact-footer">
      <SectionHead no="04" title="Contact" meta="reply < 24h" />

      <h2 className="contact-headline">
        Let's build <span className="outline">something</span> together.
      </h2>
      <p className="contact-sub">
        Open to AI/ML internships, research collaborations, and freelance
        projects. The fastest way to reach me is email — I usually reply
        within a day.
      </p>

      <div className="contact-actions">
        <a href="mailto:shivenkumar22@gmail.com" className="btn btn--solid">
          <FaEnvelope aria-hidden />
          shivenkumar22@gmail.com
        </a>
        <a
          href={RESUME_URL}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf aria-hidden />
          Resume
        </a>
      </div>

      <div className="footer-bar">
        <span>© {new Date().getFullYear()} Shiven Shandil · Noida, India</span>
        <div className="footer-socials">
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
        <span>Designed &amp; built by Shiven</span>
      </div>
    </footer>
  )
}

export default ContactFooter
