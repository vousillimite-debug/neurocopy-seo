import Link from 'next/link'

export default function CtaInline() {
  return (
    <div
      style={{
        background: '#111111',
        border: '1px solid #E8FF47',
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
      <p style={{ margin: 0, fontWeight: 500, color: '#ffffff' }}>
        Vous souhaitez du contenu SEO optimisé pour votre site ?
      </p>
      <Link
        href="/signup"
        style={{
          background: '#E8FF47',
          color: '#000000',
          padding: '0.6rem 1.25rem',
          borderRadius: '6px',
          fontWeight: 700,
          fontSize: '0.9rem',
          whiteSpace: 'nowrap',
          textDecoration: 'none',
        }}
      >
        Essayer NeuroCopy →
      </Link>
    </div>
  )
}
