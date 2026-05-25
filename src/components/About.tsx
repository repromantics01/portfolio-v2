import { BIO } from '../data/bio'
import Reveal from './Reveal'

const SKILL_GROUPS: { category: string; items: string[] }[] = [
  {
    category: 'Frameworks',
    items: ['Vue.js', 'React', 'Nuxt.js', 'Next.js', 'Flutter', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    items: ['Firebase', 'Supabase', 'PostgreSQL', 'MySQL', 'pgvector'],
  },
  {
    category: 'Languages',
    items: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Dart',
      'C#',
      'C++',
      'C',
      'Java',
    ],
  },
  {
    category: 'ML & AI',
    items: [
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'RAG',
      'Computer Vision',
      'Streamlit',
    ],
  },
  {
    category: 'Tools',
    items: ['Figma', 'Postman', 'Jupyter', 'Docker', 'Git'],
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-head">
        <span className="eyebrow">
          <span className="eyebrow-line" />
          <span>About</span>
          <span className="eyebrow-num">01</span>
        </span>
      </div>

      <div className="about-grid">
        <Reveal>
          <div className="about-photo-stack">
            <div className="about-photo-back" aria-hidden />
            <div className="about-photo-front">
              <img src="/me/me-hero.png" alt="Pauline Dejos" />
            </div>
          </div>
          <div className="about-photo-caption">
            <span>Pauline Dejos</span>
            <span className="dot">·</span>
            <span>Engineer &amp; Designer</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="about-h2">
            I take ideas from <em>concept</em> to <em>production</em>{' '}
          </h2>
          <div className="about-body">
            {BIO.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Technical skills */}
      <Reveal className="skills">
        <div className="skills-head">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            <span>Technical skills</span>
            <span className="eyebrow-num">02</span>
          </span>
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <div key={g.category} className="skill-group">
              <h4 className="skill-cat">{g.category}</h4>
              <ul className="skill-list">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
