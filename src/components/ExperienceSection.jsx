import React, { useState } from 'react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("placeholder");

  return (
    <div className="experience-section">
      <div className="section-header">
        <h2>EXPERIENCE</h2>
        <div className="tab-selector">
          <button 
            className={`tab-button ${activeTab === "placeholder" ? "active" : ""}`}
            onClick={() => setActiveTab("placeholder")}
          >
            Experience
          </button>
          <button 
            className={`tab-button ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>
      </div>

      <div className="experience-content">
        {activeTab === "placeholder" ? (
          <div className="placeholder-experience">
            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">Oct 2025 - Present</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="position">AI/ML Intern</h3>
                <p className="company">Artha Research and Intelligence Lab • Remote</p>
                <p className="description">
                  • Developed geospatial analysis project for healthcare centers accessibility in Himachal Pradesh using QGIS for spatial data visualization and analysis
                  <br/>
                  • Built predictive models to assess healthcare accessibility metrics, working with geospatial datasets and implementing machine learning for spatial prediction
                </p>
                <div className="tech-used">
                  <span className="tech-tag">QGIS</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Geospatial Analysis</span>
                  <span className="tech-tag">Predictive Modeling</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="education">
            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">2023 - 2027</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="degree">B.Tech in Computer Science</h3>
                <p className="institution">Some AKTU College</p>
                <p className="description">
                  I have an okay-ish GPA lol.
                </p>
                <div className="achievements">
                  <span className="achievement-tag">CGPA: 8.35/10</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection; 