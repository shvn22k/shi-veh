import React, { useState, useEffect } from 'react'

const CurrentPosition = () => {
  const titles = ["AI/ML Developer", "Vibe Coder"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const title = titles[titleIndex];
    let timer;

    // Handle typewriter effect
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(title.substring(0, displayText.length - 1));
        setSpeed(60); // Delete faster than typing
      }, speed);

      if (displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setSpeed(150); // Reset speed for typing
      }
    } else {
      timer = setTimeout(() => {
        setDisplayText(title.substring(0, displayText.length + 1));
      }, speed);

      // If the full title is displayed, wait longer then start deleting
      if (displayText === title) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles, speed]);

  return (
    <div className="current-position">
      <div className="section-header">
        <h2>I am a</h2>
      </div>
      
      <div className="position-content">
        <h3 className="position-title typewriter">
          <span>{displayText}</span>
          <span className="cursor">|</span>
        </h3>
        <div className="position-timeline">2023 - PRESENT</div>
        
        <div className="position-description">
          <p>
            I like building cool stuff with AI and usually build GenAI webapps and do some research paper implementations. I'm a quick learner too :] I write blogs too, check them out on medium.
          </p>
          <p className="freelance-notice">
            Open for freelance work — I can vibe code your sites and get things done anyhow. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentPosition 