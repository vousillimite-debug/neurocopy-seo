import Link from 'next/link'

export default function CtaFinal() {
  return (
    <div
      style={{
        background: '#1a1a2e',
        color: '#ffffff',
        borderRadius: '12px',
        padding: '3rem 2rem',
        marginTop: '3rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
        Ton copy a l'air bien.<br />Le cerveau de tes prospects a décidé autrement.
      </h2>
      <p style={{ color: '#a29bfe', marginBottom: '1.5rem' }}>
        30 secondes pour savoir exactement<br />
        pourquoi — et comment corriger.
      </p>
      <Link
        href="/signup"
        style={{
          display: 'inline-block',
          background: '#6c63ff',
          color: '#ffffff',
          padding: '0.85rem 2rem',
          borderRadius: '8px',
          fontWeight: 700,
          fontSize: '1rem',
          textDecoration: 'none',
        }}
      >
        Commencer gratuitement →
      </Link>
      <p style={{ color: '#6c757d', fontSize: '0.8rem', marginTop: '0.75rem', marginBottom: 0 }}>
        Aucune carte requise
      </p>
    </div>
  )
}
