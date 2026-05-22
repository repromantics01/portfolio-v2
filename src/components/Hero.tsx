import { useEffect, useRef, useState, type ReactNode } from 'react'

/* ─── SplitText: letter-by-letter reveal when in view ─────────────────── */
function SplitText({
  text,
  delay = 0,
  stagger = 28,
}: {
  text: string
  delay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <span ref={ref} className="split">
      {[...text].map((c, i) => (
        <span key={i} className="split-wrap">
          <span
            className={`split-char ${visible ? 'split-in' : ''}`}
            style={{
              transitionDelay: visible ? `${delay + i * stagger}ms` : '0ms',
            }}
          >
            {c === ' ' ? ' ' : c}
          </span>
        </span>
      ))}
    </span>
  )
}

/* ─── Magnetic: child eases toward the cursor on hover ────────────────── */
function Magnetic({
  children,
  strength = 0.25,
}: {
  children: ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0,0)'
  }
  return (
    <span className="magnetic-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
      <span ref={ref} className="magnetic-inner">
        {children}
      </span>
    </span>
  )
}

/* ─── LocalClock: live HH:MM:SS in Asia/Manila ────────────────────────── */
function LocalClock() {
  const [t, setT] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const fmt = new Intl.DateTimeFormat('en-PH', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Manila',
  })
  return <span className="tabular">{fmt.format(t)}</span>
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on the portrait as you scroll.
  useEffect(() => {
    const onScroll = () => {
      const el = imgRef.current
      if (!el) return
      const y = Math.min(60, window.scrollY * 0.08)
      el.style.transform = `translateY(${y}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="status-pill">
            <span className="status-dot" />
            <span>Baybay City, PH</span>
            <span className="status-sep">·</span>
            <LocalClock />
          </div>

          <h1 className="hero-h1">
            <span className="hero-greet">Hey there, I&rsquo;m</span>
            <span className="hero-name">
              <SplitText text="Pauline" stagger={36} />
              <span className="hero-period">.</span>
            </span>
          </h1>

          <p className="hero-lede">
            An aspiring software engineer who builds full-stack web applications
            and integrates intelligent systems into real, deployed products
            &mdash; comfortable across the stack, with a focus on practical AI
            integration.
          </p>

          <div className="hero-actions">
            <Magnetic>
              <a href="#projects" className="btn-primary">
                <span>See my work</span>
                <span className="btn-arrow" aria-hidden>
                  →
                </span>
              </a>
            </Magnetic>
            <a href="#contact" className="btn-ghost">
              <span>Get in touch</span>
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame" aria-hidden />
          <div ref={imgRef} className="portrait-img">
            <img src="/me/me-hero.png" alt="Pauline Dejos" />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about">
        <span>Scroll</span>
        <span className="scroll-line" />
      </a>
    </section>
  )
}
