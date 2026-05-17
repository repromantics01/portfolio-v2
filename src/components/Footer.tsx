const CONTACTS = [
  {
    label: 'dejospauline26@gmail.com',
    href: 'mailto:dejospauline26@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: '+63 969 223 1657',
    href: 'tel:+639692231657',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M6.5 3.5 9 4l1 4-2 1.5a11 11 0 0 0 6 6L15.5 14l4 1 .5 2.5c0 1.1-.9 2-2 2A14 14 0 0 1 4.5 5.5c0-1.1.9-2 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Sampaguita Ladies Hall',
    sub: 'VSU Main Campus, Baybay City, Leyte',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/repromantics01',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pauline-dejos-64a208375/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.04 1.46-4.04 4.15V9.9H7.5V13h2.73v8h3.27Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/itspaupauuu',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-.95.04-1.46.2-1.8.34-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.13.34-.3.85-.34 1.8C3.21 9.3 3.2 9.65 3.2 12s.01 2.7.07 3.94c.04.95.2 1.46.34 1.8.18.46.39.78.73 1.12.34.34.66.55 1.12.73.34.13.85.3 1.8.34 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.95-.04 1.46-.2 1.8-.34.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.13-.34.3-.85.34-1.8.06-1.24.07-1.59.07-3.94s-.01-2.7-.07-3.94c-.04-.95-.2-1.46-.34-1.8a3 3 0 0 0-.73-1.12 3 3 0 0 0-1.12-.73c-.34-.13-.85-.3-1.8-.34C15.5 4.01 15.15 4 12 4Zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.15-.31a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z" />
      </svg>
    ),
  },
]

const MENU_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About ME', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'My Resume', href: '/resume.pdf' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#786865] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-8 pb-12 pt-20 md:grid-cols-3">
        {/* Get in Touch */}
        <div>
          <h2 className="text-5xl font-light">Get in Touch</h2>

          <p className="mt-5 leading-relaxed text-white/85">
            Want to turn ideas into code together?
            <br />
            Let&rsquo;s connect and make it happen!
          </p>

          <ul className="mt-10 space-y-6">
            {CONTACTS.map((c) => {
              const body = (
                <>
                  <span className="text-white/90">{c.icon}</span>
                  <span className="text-sm text-white/90">
                    {c.label}
                    {c.sub && (
                      <>
                        <br />
                        {c.sub}
                      </>
                    )}
                  </span>
                </>
              )
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="flex items-center gap-4 transition-colors hover:text-white"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">{body}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-2xl font-semibold">Socials</h3>
          <div className="mt-6 flex flex-wrap gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#786865] transition-transform hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-2xl font-semibold">Menu Links</h3>
          <ul className="mt-6 space-y-3">
            {MENU_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="py-5 text-center text-sm text-white/80">
          Designed by Pauline Dejos &copy; 2026
        </p>
      </div>
    </footer>
  )
}
