import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div style={{ background: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      <Component {...pageProps} />
    </div>
  )
}
