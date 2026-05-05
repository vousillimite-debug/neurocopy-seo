import Link from 'next/link'

export default function EditorialHeader() {
  return (
    <header
      style={{
        background: '#1a1a2e',
        color: '#ffffff',
        padding: '1rem 0',
        borderBottom: '3px solid #6c63ff',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Link href="/" style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.2rem' }}>
          NeuroCopy <span style={{ color: '#6c63ff' }}>SEO</span>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/" style={{ color: '#a29bfe', fontSize: '0.9rem' }}>
            Accueil
          </Link>
        </nav>
      </div>
    </header>
  )
}
