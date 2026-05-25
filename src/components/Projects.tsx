import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../types";
import { FEATURED, OTHER } from "../data/projects";

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-brown">
      {label}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-5">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-brown transition-colors hover:text-taupe-dark"
        >
          Live demo
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </a>
      )}
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-brown hover:underline"
        >
          Source
        </a>
      )}
    </div>
  );
}

function Carousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-linear-to-br from-taupe/30 to-cream">
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`${title} screenshot ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to screenshot ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-5 bg-white"
                  : "w-2 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const images = project.gallery ?? (project.image ? [project.image] : []);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.setTimeout(onClose, 200);
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true));
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden
      />
      <div
        className={`relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-brown/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out motion-reduce:transition-none ${
          show
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-2xl leading-none text-muted transition-colors hover:text-brown"
        >
          &times;
        </button>
        {images.length > 0 && (
          <div className="mb-5">
            <Carousel images={images} title={project.title} />
          </div>
        )}
        <h3 className="pr-8 font-serif text-2xl font-bold text-brown">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-taupe-dark">
          Features & Contributions
        </h4>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((h, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-muted"
            >
              <span aria-hidden className="mt-1.5 text-brown">
                &bull;
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-taupe-dark">
          Tech & Tags
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        <div className="mt-7 border-t border-brown/10 pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-8 pt-12 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <span className="eyebrow">
            <span className="eyebrow-line" />
            <span>Projects</span>
            <span className="eyebrow-num">03</span>
          </span>
        </div>

        <h2 className="section-h2">
          Things I&rsquo;ve <em>shipped</em>
          <span className="block font-normal text-muted">
            &mdash; and the ones still in motion.
          </span>
        </h2>
        <p className="section-intro">
          A selection of work I&rsquo;ve been involved in &mdash; from larger,
          notable builds to smaller focused experiments.
        </p>

        <h3 className="subsection-label mt-12">Featured</h3>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {FEATURED.map((project, i) => (
            <article
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => setActive(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(project);
                }
              }}
              className="flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-brown/10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brown/40"
            >
              <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-taupe/30 to-cream">
                <span
                  aria-hidden
                  className="font-serif text-5xl font-bold text-brown/40"
                >
                  {project.title.charAt(0)}
                </span>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h4 className="font-serif text-2xl font-bold text-brown">
                  {project.title}
                </h4>
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
                <div className="mt-6" onClick={(e) => e.stopPropagation()}>
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other / smaller projects */}
        <h3 className="subsection-label mt-10">Other Projects</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER.map((project, i) => (
            <article
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => setActive(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(project);
                }
              }}
              className="flex cursor-pointer flex-col rounded-2xl border border-brown/10 bg-white p-6 transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brown/40"
            >
              <h4 className="text-lg font-bold text-brown">{project.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <div className="mt-5" onClick={(e) => e.stopPropagation()}>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <ProjectDialog project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
