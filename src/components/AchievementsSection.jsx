import React from 'react'

const AchievementsSection = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="section-title">Achievements</h2>
      
      <div className="achievements-list">
        <div className="achievement-item">
          <div className="achievement-icon">🏆</div>
          <div className="achievement-content">
            <h3>1st Place - Infronix'25 @IIIT-D</h3>
            <p>Won the hackathon, standing 1st among 50+ teams. Built SchemEase - an agentic AI solution to finding personalized government schemes for users.</p>
          </div>
        </div>
        
        <div className="achievement-item">
          <div className="achievement-icon">🏅</div>
          <div className="achievement-content">
            <h3>Top 10 - CubeInnovators @Tryst'25-IITD</h3>
            <p>Climbed to the top 10 teams in the edtech based hackathon at IIT Delhi.</p>
          </div>
        </div>
        
        <div className="achievement-item">
          <div className="achievement-icon">🎖️</div>
          <div className="achievement-content">
            <h3>Top 30 - GFG-Hackfest'24</h3>
            <p>Got shortlisted to represent college at a national level hackathon organized by GeeksForGeeks on FinTech theme.</p>
          </div>
        </div>
      </div>
      
      <div className="profile-links">
        <h3>Profile Links</h3>
        <ul>
          <li><a href="https://github.com">GitHub</a></li>
          <li><a href="https://medium.com">Medium</a></li>
          <li><a href="https://kaggle.com">Kaggle</a></li>
          <li><a href="https://twitter.com">X/Twitter</a></li>
        </ul>
      </div>
    </section>
  )
}

export default AchievementsSection 