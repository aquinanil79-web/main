import SplashCursor from '@/components/splash-cursor'

export default function Page() {
  return (
    <main
      style={{
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#050505',
        color: '#fff',
      }}
    >
      <SplashCursor />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', pointerEvents: 'none' }}>
        <p style={{ margin: 0, fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.65 }}>
          Interactive fluid canvas
        </p>
        <h1 style={{ margin: '16px 0 0', fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.06em' }}>
          Move your cursor
        </h1>
      </div>
    </main>
  )
}
