import React from 'react'

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="section-header">
        <h2>TECHNICAL SKILLS</h2>
      </div>
      
      <div className="skills-container">
        <div className="skill-group">
          <h3 className="skill-group-title">LANGUAGES</h3>
          <div className="skill-items">
            <div className="skill-item">
              <div className="skill-icon navy-text">Py</div>
              <span className="skill-name navy-text">Python</span>
            </div>
          </div>
        </div>
        
        <div className="skill-group">
          <h3 className="skill-group-title">FRAMEWORKS & LIBRARIES</h3>
          <div className="skill-items">
            <div className="skill-item">
              <div className="skill-icon navy-text">PT</div>
              <span className="skill-name navy-text">PyTorch</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">NP</div>
              <span className="skill-name navy-text">Numpy</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">PD</div>
              <span className="skill-name navy-text">Pandas</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">MP</div>
              <span className="skill-name navy-text">Matplotlib</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">SK</div>
              <span className="skill-name navy-text">Scikit-learn</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">FL</div>
              <span className="skill-name navy-text">Flask</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">FA</div>
              <span className="skill-name navy-text">FastAPI</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">HF</div>
              <span className="skill-name navy-text">Huggingface</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon navy-text">LC</div>
              <span className="skill-name navy-text">LangChain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection 