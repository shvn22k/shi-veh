import React from 'react'

const AboutSection = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-tabs">
        <button className="tab active">About Me</button>
        <button className="tab">Education</button>
        <button className="tab">Skills</button>
        <button className="tab">Projects</button>
        <button className="tab">Achievements</button>
      </div>
      <div className="about-content">
        <div className="workspace-image">
          <img src="/shivenbw.jpg" alt="Workspace" />
        </div>
        <div className="about-details">
          <h2>CS & AI/ML Engineering Student<br />from India</h2>
          <p className="about-description">
            An enthusiastic AI/ML Engineering student with a focus on deep learning and natural language processing. 
            Passionate about implementing research papers from scratch and developing AI-powered solutions. Currently 
            getting into Computer Vision and MLOps.
          </p>

          <div className="contact-info">
            <div>
              <h3>Name:</h3>
              <p>Shiven</p>
            </div>
            <div>
              <h3>Phone Number:</h3>
              <p>+91 9958497499</p>
            </div>
            <div>
              <h3>Email Address:</h3>
              <p>shivenkumar22@gmail.com</p>
            </div>
            <div>
              <h3>Social Network:</h3>
              <div className="social-links">
                {/* <a href="https://linkedin.com">Ln.</a> */}
                <a href="https://github.com">Gh.</a>
                <a href="https://medium.com">Me.</a>
                <a href="https://twitter.com">X.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection