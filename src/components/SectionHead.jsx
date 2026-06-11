import React from 'react'

const SectionHead = ({ no, title, meta }) => (
  <header className="section-head">
    <span className="section-no" aria-hidden>
      {no}
    </span>
    <h2>{title}</h2>
    <span className="section-rule" aria-hidden />
    {meta && <span className="section-meta">[ {meta} ]</span>}
  </header>
)

export default SectionHead
