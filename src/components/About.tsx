import { BIO } from '../data/bio'
const iconClass = 'h-4 w-4'

const SKILL_GROUPS: {
  category: string
  items: string[]
  icon: React.ReactNode
}[] = [
  {
    category: 'Frameworks and Libraries',
    items: ['Vue.js', 'React', 'Nuxt.js', 'Next.js', 'Flutter', 'Tailwind CSS'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
        <path
          d="m12 3 9 5-9 5-9-5 9-5Zm9 9-9 5-9-5m18 4-9 5-9-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    category: 'Database',
    items: ['Firebase', 'Supabase', 'MySQL'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
        <ellipse
          cx="12"
          cy="5"
          rx="8"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    category: 'Languages',
    items: [
      'C',
      'C++',
      'C#',
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'Dart',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
        <path
          d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    category: 'Tools & Technologies',
    items: ['Figma', 'Postman API', 'Jupyter Notebook'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
        <path
          d="M14.7 6.3a4 4 0 0 1-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.6 2.6-2.1-.4-.4-2.1 2.6-2.6Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 -mt-5 px-8">
      <div className="mx-auto mb-5 max-w-6xl rounded-[3rem] bg-white px-8 pb-20 pt-16 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] md:px-14">
        <div className="grid gap-12 md:grid-cols-[1fr_1.35fr] lg:gap-20">
          {/* Left: photo + technical skills */}
          <div>
            <div className="relative mx-auto w-full max-w-[18rem] -rotate-3">
              <div
                aria-hidden
                className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-taupe/20"
              />
              <div className="relative aspect-square overflow-hidden rounded-3xl rotate-3 bg-taupe/30 ring-1 ring-brown/10">
                <img
                  src="/me/me-about.png"
                  alt="Pauline Dejos"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                  }}
                />
              </div>
            </div>

            <h3 className="mt-12 text-sm font-bold uppercase tracking-[0.18em] text-ink">
              Technical Skills
            </h3>

            <ul className="mt-6 space-y-5">
              {SKILL_GROUPS.map((group) => (
                <li
                  key={group.category}
                  className="rounded-2xl border-l-2 border-taupe/40 bg-cream/40 py-3 pl-5 pr-4 transition-colors hover:bg-cream/70"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-taupe/20 text-brown">
                      {group.icon}
                    </span>
                    <span className="text-sm font-bold text-ink">
                      {group.category}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-brown shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: heading + bio */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-taupe-dark">
              Get to know me
            </p>
            <h2 className="mt-3 text-5xl font-extrabold tracking-tight text-ink">
              About Me
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-taupe" />

            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
              {BIO.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
