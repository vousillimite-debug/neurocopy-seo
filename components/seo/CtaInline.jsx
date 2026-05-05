import Link from 'next/link'

export default function CtaInline() {
  return (
    <div
      style={{
        background: '#f0eeff',
        border: '1px solid #a29bfe',
        borderRadius: '8px',
        padding: '1.25rem 1.5rem',
        margin: '2rem 0',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <p style={{ margin: 0, fontWeight: 500, color: '#1a1a2e' }}>
        Vous souhaitez du contenu SEO optimisé pour votre site ?
      </p>
      <Link
        href="/"
        style={{
          background: '#6c63ff',
          color: '#ffffff',
          padding: '0.6rem 1.25rem',
          borderRadius: '6px',
          fontWeight: 600,
          fontSize: '0.9rem',
          whiteSpace: 'nowrap',
        }}
      >
        Essayer NeuroCopy →
      </Link>
    </div>
  )
}
