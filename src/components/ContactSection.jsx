import React from 'react'

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Location</h3>
            <p>Noida, Uttar Pradesh, India</p>
          </div>
          
          <div className="contact-item">
            <h3>Email</h3>
            <p>shivenkumar22@gmail.com</p>
          </div>
          
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 9958497499</p>
          </div>
          
          <div className="contact-item">
            <h3>Social Profiles</h3>
            <div className="social-links">
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer">Medium</a>
              <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer">Kaggle</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 