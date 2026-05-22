import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export default function Navbar() {
  const [active, setActive] = useState<string>('home')


  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className="nav">
      <a href="#home" className="nav-mark">
        <span className="nav-dot" />
        <span>PAULINE DEJOS</span>
      </a>

      <nav className="nav-links">
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'nav-link active' : 'nav-link'}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-taupe-dark px-5 py-2 text-sm text-white shadow-sm transition-colors hover:bg-brown md:inline-block"
        >
          View Resume
        </a>
    </header>
  )
}
