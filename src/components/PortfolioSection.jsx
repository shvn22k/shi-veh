import React from 'react'

const PortfolioSection = () => {
  return (
    <section className="portfolio-projects" id="portfolio">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        <div className="project">
          <div className="project-image">
            <img src="https://via.placeholder.com/350x500" alt="AlexNet Implementation" />
          </div>
          <div className="project-category">PYTORCH</div>
          <h3 className="project-title">AlexNet - Scratch Implementation<br />December 2024</h3>
          <p className="project-description">
            • Implemented the Deep Learning Research Paper - ImageNet Classification using Deep Convolutional Neural Networks (2012)
            <br/>
            • Deeply Analyzed the paper and implemented AlexNet in PyTorch from scratch
          </p>
          <a href="https://github.com" className="project-link">GitHub</a>
        </div>

        <div className="project">
          <div className="project-image">
            <img src="https://via.placeholder.com/350x500" alt="Xamify" />
          </div>
          <div className="project-category">PHIDATA, GROQ</div>
          <h3 className="project-title">Xamify<br />February 2025</h3>
          <p className="project-description">
            • Made multiple AI-agents to analyze syllabus and PYQs of any subject
            <br/>
            • Used llama-3.xB model API from Groq and phidata's agentic framework
            <br/>
            • Deployed on Streamlit cloud and Vercel as a Next.js webapp
          </p>
          <div className="project-links">
            <a href="https://github.com" className="project-link">GitHub</a>
            <a href="#" className="project-link">Streamlit</a>
            <a href="#" className="project-link">Web App</a>
            <a href="#" className="project-link">Demo</a>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src="https://via.placeholder.com/350x500" alt="Seq2Seq Learning" />
          </div>
          <div className="project-category">PYTORCH</div>
          <h3 className="project-title">Seq2Seq Learning with NNs<br />April 2025</h3>
          <p className="project-description">
            • Implemented the Sequence to Sequence Learning with Neural Networks (2014) research paper from scratch
            <br/>
            • The paper introduced the Encoder-Decoder architecture for Neural Machine Translation
          </p>
          <a href="https://github.com" className="project-link">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection 