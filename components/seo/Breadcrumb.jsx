import Link from 'next/link'

/**
 * @param {{ items: Array<{position: number, name: string, url: string}> }} props
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Fil d'Ariane" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.25rem',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {i < items.length - 1 ? (
              <>
                <Link href={item.url} style={{ color: '#6c63ff' }}>
                  {item.name}
                </Link>
                <span aria-hidden="true">›</span>
              </>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
