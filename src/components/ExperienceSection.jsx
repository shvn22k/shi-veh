import React, { useState } from 'react'
import SectionHead from './SectionHead'

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience')

  return (
    <div className="experience-section">
      <SectionHead no="02" title="Experience" meta="2023 — present" />

      <div className="tab-selector">
        <button
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>

      <div className="experience-content">
        {activeTab === 'experience' ? (
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">Oct 2025 — Present</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="position">AI/ML Intern</h3>
                <p className="company">
                  Artha Research and Intelligence Lab · Remote
                </p>
                <p className="description">
                  Developed a geospatial analysis project for healthcare-center
                  accessibility in Himachal Pradesh, using QGIS for spatial
                  data visualization and analysis. Built predictive models to
                  assess accessibility metrics, working with geospatial
                  datasets and applying machine learning for spatial
                  prediction.
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
          <div className="education-list">
            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">2023 — 2027</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="degree">B.Tech in CS (AI &amp; ML)</h3>
                <p className="institution">
                  G.L. Bajaj Institute of Technology and Management · Greater
                  Noida
                </p>
                <div className="achievements">
                  <span className="achievement-tag">CGPA: 8.24 / 10</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">2023</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="degree">CBSE Class XII</h3>
                <p className="institution">Noida, Uttar Pradesh</p>
                <div className="achievements">
                  <span className="achievement-tag">90.8%</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">2021</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="degree">CBSE Class X</h3>
                <p className="institution">Noida, Uttar Pradesh</p>
                <div className="achievements">
                  <span className="achievement-tag">96.4%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceSection
