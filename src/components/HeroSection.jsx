import React from 'react'
import { FaMedium, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="profile-pictures">
        <div className="profile-picture">
          <img src="/shivenbw.jpg" alt="Shiven" />
        </div>
        <div className="profile-picture">
          <img src="/shiven.jpg" alt="Shiven" />
        </div>
        <div className="profile-picture">
          <img src="/shivenbw.jpg" alt="Shiven" />
        </div>
      </div>
      <div className="profile-info">
        <h1>Hi, I am Shiven.</h1>
        <p className="profile-description">
          A 3rd year UG computer science student  in AI/ML development with a focus on NLP and LLMs.
        </p>
        <p className="profile-location">NOIDA (UP), INDIA</p>
        
        <div className="social-links">
          <a href="https://github.com/shvn22k" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://medium.com/@shivenkumar22" target="_blank" rel="noopener noreferrer">
            <FaMedium />
          </a>
          <a href="https://x.com/k_shvn" target="_blank" rel="noopener noreferrer">
            <RiTwitterXFill />
          </a>
          {/* <a href="https://linkedin.com/in/shiven-k-58b423212" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default HeroSection 