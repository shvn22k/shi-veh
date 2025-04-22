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
            Life Experience
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
                <span className="year">???</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="position">Professional Nap Taker</h3>
                <p className="company">Remote - My Bedroom</p>
                <p className="description">
                  Specialized in advanced rest techniques while dreaming about becoming a tech genius.
                  Achieved a 100% success rate in oversleeping alarms and making excuses for delayed assignments.
                  Expert in "just one more hour" negotiations with morning responsibilities.
                </p>
                <div className="tech-used">
                  <span className="tech-tag">Pillow</span>
                  <span className="tech-tag">Blanket</span>
                  <span className="tech-tag">Comfort</span>
                  <span className="tech-tag">Dreams</span>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">Forever</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="experience-details">
                <h3 className="position">X Shitposter</h3>
                <p className="company">Twitter/X</p>
                <p className="description">
                  Dedicated to ranting and shitposting on X, occasionally dropping insights about my work.
                  Developed an unreasonable amount of hot takes with questionable accuracy.
                  Established a sophisticated system for overthinking tweets before posting, then posting them anyway.
                </p>
                <div className="tech-used">
                  <span className="tech-tag">Memes</span>
                  <span className="tech-tag">Hot Takes</span>
                  <span className="tech-tag">Rants</span>
                  <span className="tech-tag">Tech Threads</span>
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
                  Hate to mention but haha I have a nice GPA too.
                </p>
                <div className="achievements">
                  <span className="achievement-tag">CGPA: 8.995/10</span>
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