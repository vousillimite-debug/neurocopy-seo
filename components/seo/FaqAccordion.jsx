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
            borderBottom: '1px solid #333333',
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
              fontSize: '16px',
              cursor: 'pointer',
              color: open === i ? '#E8FF47' : '#FFFFFF',
              WebkitTextFillColor: open === i ? '#E8FF47' : '#FFFFFF',
              opacity: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span style={{ color: '#E8FF47', WebkitTextFillColor: '#E8FF47', fontSize: '1.2rem' }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 0 1rem', color: '#CCCCCC', fontSize: '15px', lineHeight: 1.7 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
