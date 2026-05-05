'use client'
import { useState } from 'react'

/**
 * @param {{ items: Array<{q: string, a: string}> }} props
 */
export default function FaqAccordion({ items = [] }) {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ marginTop: '1rem' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: '1px solid #dee2e6',
            marginBottom: '0.5rem',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              padding: '1rem 0',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              color: '#1a1a2e',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span style={{ color: '#6c63ff', fontSize: '1.2rem' }}>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 0 1rem', color: '#495057', lineHeight: 1.7 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
