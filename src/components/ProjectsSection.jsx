import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import SectionHead from './SectionHead'

/*
 * Blueprint mosaic — 6-column grid, every tile carries its image.
 * Widths vary for rhythm; rows pack exactly:
 *   row 1 : MindMirror (3) · Recommendation (3)
 *   row 2 : CHINTU (4, panoramic) · Object Detection (2)
 *   row 3 : BlueSignal (2) · Xamify (2) · Seq2Seq (2)
 *   row 4 : AlexNet (2) · get-yo-aah (2) · Supernova (2)
 * w = column span. Image aspect ratio adapts to tile width (see CSS).
 */
const projects = [
  {
    title: 'MindMirror: Cognitive Load Estimation',
    description:
      'End-to-end real-time cognitive load estimation system integrating behavioral signals — FastAPI backend, Streamlit frontend, live ML inference pipeline. Baseline ensemble models at 64% accuracy, improving via feature engineering; targeted at neurodivergent users and adaptive HCI research.',
    tags: ['MediaPipe', 'XGBoost', 'Ensemble', 'FastAPI', 'Docker'],
    github: 'https://github.com/shvn22k/mindmirror',
    video: 'https://youtu.be/YCRFMQNqVXw',
    live: 'https://mindmirror22.vercel.app/',
    date: 'Apr 2026',
    image: '/mindmirror.png',
    type: 'AI/ML',
    w: 3,
  },
  {
    title: 'Product Recommendation System',
    description:
      'Multi-stage semantic retrieval on real e-commerce data: sentence embeddings, LLM query understanding, and hybrid reranking. Redis caching across the pipeline cut latency from 3–5 s to under 100 ms — a 30–50× speedup.',
    tags: ['Python', 'Docker', 'Redis', 'FastAPI'],
    github: 'https://github.com/shvn22k/recommendation-engine-toastd',
    live: 'https://recommendation-engine-toastd-aofq.vercel.app/',
    date: 'Nov 2025',
    image: '/toastd.png',
    type: 'AI/ML',
    w: 3,
  },
  {
    title: 'CHINTU — Geopolitical Knowledge Graph',
    description:
      'Full-stack geopolitical intelligence system: GDELT world events ingested into a TigerGraph knowledge graph linked by causal influence edges. A Flask API with LLM intent extraction routes questions to whitelisted GSQL queries; a Next.js frontend renders interactive D3 force-directed subgraphs.',
    tags: ['TigerGraph', 'Flask', 'OpenAI'],
    github: 'https://github.com/shvn22k/chintu',
    video: 'https://youtu.be/qM3iMzK2wcE',
    date: 'April 2026',
    image: '/chintu.png',
    type: 'AI/ML',
    w: 4,
  },
  {
    title: 'Object Detection & Tracking',
    description:
      'YOLO26 finetuned on a custom dataset merged with Roboflow data — detects, tracks (ByteTrack), and counts jute sacks in truck-loading videos under real on-site conditions.',
    tags: ['Computer Vision', 'Ultralytics', 'YOLO'],
    github: 'https://github.com/shvn22k/object-tracking',
    demo: 'https://drive.google.com/drive/folders/1GjO4C9p6XIftdXhKj_EQxCd6oZCdv2Yu?usp=sharing',
    date: 'Feb 2026',
    image: '/object-tracking.png',
    type: 'AI/ML',
    w: 2,
  },
  {
    title: 'BlueSignal.AI: Flood Crowdsourcing',
    description:
      'Real-time flood crowdsourcing platform with SSE live updates between citizens and authorities; CLIP-ViT for image verification and DistilBERT for text classification.',
    tags: ['Flask', 'React', 'Hugging Face'],
    github: 'https://github.com/shvn22k/bluesignal',
    video: 'https://www.youtube.com/watch?v=8HGXNpC3kTY',
    date: 'Oct 2025',
    image: '/bluesignal.png',
    type: 'AI/ML',
    w: 2,
  },
  {
    title: 'Xamify',
    description:
      'AI agents that analyze syllabi and previous-year questions, ranking topics by exam frequency so you study what actually matters.',
    tags: ['Phidata', 'Groq', 'Streamlit'],
    github: 'https://github.com/shvn22k/xamify-streamlit',
    demo: 'https://xamify-shvn.streamlit.app/',
    video: 'https://www.youtube.com/watch?v=Dq7N2BjoSyw',
    date: 'Feb 2025',
    image: '/xamify.png',
    type: 'AI/ML',
    w: 2,
  },
  {
    title: 'Seq2Seq Learning with NNs',
    description:
      'Scratch PyTorch implementation of the 2014 paper that introduced the Encoder-Decoder architecture for neural machine translation.',
    tags: ['PyTorch', 'NLP', 'Research'],
    github: 'https://github.com/shvn22k/seq2seq',
    date: 'Apr 2025',
    image: '/seq2seq.png',
    type: 'Research',
    w: 2,
  },
  {
    title: 'AlexNet — Scratch Implementation',
    description:
      'Scratch PyTorch implementation of ImageNet Classification with Deep Convolutional Neural Networks (2012).',
    tags: ['PyTorch', 'CNN', 'Research'],
    github: 'https://github.com/shvn22k/AlexNet-Implementation',
    date: 'Dec 2024',
    image: '/alexnet.webp',
    type: 'Research',
    w: 2,
  },
  {
    title: 'get-yo-aah-to-work',
    description:
      'Accountability webapp for friends: rooms of up to 4, daily to-dos with automatic rollover, check-ins, streaks, and a real-time leaderboard. Clerk auth + Supabase backend.',
    tags: ['React', 'Clerk', 'Supabase'],
    github: 'https://github.com/shvn22k/get-yo-aah-to-work',
    demo: 'https://get-yo-aah-to-work.vercel.app',
    date: 'Nov 2025',
    image: '/get-yo-aah-to-work.png',
    type: 'Web Dev',
    w: 2,
  },
  {
    title: 'Supernova Hacks',
    description:
      "Responsive frontend for my college's hackathon — event details, timeline, prizes, and sponsors with smooth animations in pure React.",
    tags: ['React', 'CSS'],
    github: 'https://github.com/shvn22k/supernova',
    demo: 'https://supernova-mu.vercel.app',
    date: 'Apr 2025',
    image: '/supernova.png',
    type: 'Web Dev',
    w: 2,
  },
]

const ProjectLinks = ({ project }) => (
  <div className="project-links">
    {project.github && (
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
        <FaGithub /> GitHub
      </a>
    )}
    {project.live && (
      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
        <FaExternalLinkAlt /> Live
      </a>
    )}
    {project.demo && (
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
        <FaExternalLinkAlt /> Demo
      </a>
    )}
    {project.video && (
      <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link">
        <FaPlay /> Video
      </a>
    )}
  </div>
)

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <SectionHead no="01" title="Projects" meta={`${projects.length} entries`} />

      <div className="mosaic">
        {projects.map((project, i) => {
          const no = String(i + 1).padStart(3, '0')
          return (
            <article key={project.title} className={`tile tile--w${project.w}`}>
              <div className="tile-top">
                <span className="tile-no" aria-hidden>
                  {no}
                </span>
                <span className="chip">{project.type}</span>
                <span className="tile-year">{project.date}</span>
                <span className="tile-arrow" aria-hidden>
                  ↗
                </span>
              </div>

              {project.image && (
                <figure className="tile-fig">
                  <div className="tile-fig-frame">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <figcaption>fig.{no}</figcaption>
                </figure>
              )}

              <h3>{project.title}</h3>
              <p className="tile-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <ProjectLinks project={project} />
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsSection
