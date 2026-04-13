import React, { useEffect, useRef, useState, useCallback } from 'react'

/** Asymmetric bento — 4-column grid (see CSS). Order matches DOM for mobile stack. */
const bentoTiles = [
  {
    id: 'cv',
    title: 'Computer Vision & Deep Learning',
    items: [
      'PyTorch',
      'OpenCV',
      'MediaPipe',
      'Ultralytics YOLO',
      'Object Detection',
      'Object Tracking',
      'CNN Architectures',
      'Transfer Learning',
      'Diffusion Models',
    ],
    grid: { c: '1 / 3', r: '1 / 3' },
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['Python', 'SQL'],
    grid: { c: '3 / 5', r: '1 / 2' },
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    items: [
      'Scikit-learn',
      'XGBoost',
      'Ensemble Methods',
      'Feature Engineering',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
    ],
    grid: { c: '3 / 5', r: '2 / 3' },
  },
  {
    id: 'ai',
    title: 'AI Systems',
    items: [
      'LangChain',
      'PhiData',
      'Hugging Face',
      'RAG Pipelines',
      'Agentic AI',
      'Pinecone',
      'Neo4j',
    ],
    grid: { c: '1 / 3', r: '3 / 4' },
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    items: ['FastAPI', 'Flask', 'Streamlit', 'React', 'Beautiful Soup'],
    grid: { c: '3 / 5', r: '3 / 4' },
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    items: ['Git', 'Docker', 'QGIS', 'Vercel', 'Streamlit Cloud', 'Roboflow'],
    grid: { c: '1 / 3', r: '4 / 5' },
  },
  {
    id: 'db',
    title: 'Databases',
    items: ['SQLite', 'Supabase', 'Vector Databases', 'Graph Databases'],
    grid: { c: '3 / 5', r: '4 / 5' },
  },
]

function BentoCard({ title, items, grid, delay, inView }) {
  const ref = useRef(null)

  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
    el.style.setProperty('--glow-i', '1')
  }, [])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--glow-i', '0')
    el.style.removeProperty('--mx')
    el.style.removeProperty('--my')
  }, [])

  return (
    <article
      ref={ref}
      className={`skills-bento-card${inView ? ' skills-bento-card--visible' : ''}`}
      style={{
        gridColumn: grid.c,
        gridRow: grid.r,
        '--bento-delay': delay,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="skills-bento-card__glow" aria-hidden />
      <div className="skills-bento-card__shine" aria-hidden />
      <div className="skills-bento-card__body">
        <h3 className="skills-bento-card__title">{title}</h3>
        <ul className="skills-bento-card__items">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

const SkillsSection = () => {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const grid = gridRef.current
    if (!grid) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) return

    const spotlight = document.createElement('div')
    spotlight.className = 'skills-bento-spotlight'
    spotlight.setAttribute('aria-hidden', 'true')
    document.body.appendChild(spotlight)

    const onMove = (e) => {
      const rect = grid.getBoundingClientRect()
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      if (!inside) {
        spotlight.style.opacity = '0'
        return
      }
      spotlight.style.left = `${e.clientX}px`
      spotlight.style.top = `${e.clientY}px`
      spotlight.style.opacity = '1'
    }

    const onLeave = () => {
      spotlight.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove)
    grid.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      grid.removeEventListener('mouseleave', onLeave)
      spotlight.remove()
    }
  }, [inView])

  return (
    <div ref={sectionRef} className="skills-section skills-section--bento">
      <div className="section-header">
        <h2>TECHNICAL SKILLS</h2>
      </div>

      <div ref={gridRef} className="skills-bento-grid">
        {bentoTiles.map((tile, i) => (
          <BentoCard
            key={tile.id}
            title={tile.title}
            items={tile.items}
            grid={tile.grid}
            delay={`${0.06 + i * 0.07}s`}
            inView={inView}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
