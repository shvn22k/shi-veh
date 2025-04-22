import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AlexNet - Scratch Implementation",
      description: "Implemented the Deep Learning Research Paper - ImageNet Classification using Deep Convolutional Neural Networks (2012) from scratch in PyTorch",
      tags: ["Python", "PyTorch", "CNN", "Research"],
      github: "https://github.com",
      date: "December 2024",
      image: "/project-placeholder.jpg",
      type: "AI/ML"
    },
    {
      id: 2,
      title: "Xamify",
      description: "AI-agents to analyze syllabus and PYQs of any subject and give out unit-wise list of topics with the number of times they occurred in PYQs to highlight important sections",
      tags: ["Phidata", "Groq", "Streamlit", "Next.js"],
      github: "https://github.com",
      demo: "https://streamlit.com",
      video: "https://youtube.com",
      date: "February 2025",
      image: "/project-placeholder.jpg",
      type: "AI/ML"
    },
    {
      id: 3,
      title: "Seq2Seq Learning with NNs",
      description: "Implemented the Sequence to Sequence Learning with Neural Networks (2014) research paper from scratch using PyTorch, introducing the Encoder-Decoder architecture for NMT",
      tags: ["Python", "PyTorch", "NLP", "Research"],
      github: "https://github.com",
      date: "April 2025",
      image: "/project-placeholder.jpg",
      type: "AI/ML"
    },
    {
      id: 4,
      title: "Supernova Hacks",
      description: "Vibe coded a sleek, dynamic frontend for my college's hackathon event in pure React. Created a visually stunning, responsive interface to showcase event details, timeline, prizes, and sponsors with smooth animations.",
      tags: ["React", "CSS", "JavaScript", "Vibe Coding"],
      github: "https://github.com",
      demo: "https://supernovahacks.demo",
      date: "March 2025",
      image: "/project-placeholder.jpg",
      type: "Web Dev"
    }
  ];

  return (
    <div className="projects-section">
      <div className="section-header">
        <h2>RECENT PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <span className="project-type">{project.type}</span>
              <span className="project-name">{project.title}</span>
              <span className="project-link-icon">↗</span>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <span className="tech-year">{project.date}</span>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GITHUB
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> DEMO
                  </a>
                )}
                {project.video && (
                  <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaPlay /> VIDEO
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        <span className="scroll-arrow">→</span>
      </div>
    </div>
  );
};

export default ProjectsSection; 