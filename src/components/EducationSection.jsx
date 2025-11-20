import React from 'react'

const EducationSection = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-items">
        <div className="education-item">
          <div className="education-year">2023 - 2027</div>
          <div className="education-content">
            <h3>Bachelor of Technology in CSAIML</h3>
            <h4>G.L Bajaj Institute of Technology and Management</h4>
            <p>Greater Noida, Uttar Pradesh</p>
            <p>CGPA: 8.35</p>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-year">2023</div>
          <div className="education-content">
            <h3>CBSE Class XII</h3>
            <p>Noida, Uttar Pradesh</p>
            <p>Percentage: 90.8%</p>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-year">2021</div>
          <div className="education-content">
            <h3>CBSE Class X</h3>
            <p>Noida, Uttar Pradesh</p>
            <p>Percentage: 96.4%</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection 