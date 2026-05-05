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
      <h2 style={{ color: '#ffffff', marginTop: 0 }}>
        Prêt à booster votre référencement ?
      </h2>
      <p style={{ color: '#a29bfe', marginBottom: '1.5rem' }}>
        NeuroCopy génère du contenu SEO de qualité, en quelques secondes.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          background: '#6c63ff',
          color: '#ffffff',
          padding: '0.85rem 2rem',
          borderRadius: '8px',
          fontWeight: 700,
          fontSize: '1rem',
        }}
      >
        Commencer gratuitement →
      </Link>
    </div>
  )
}
