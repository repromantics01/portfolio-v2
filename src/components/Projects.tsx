import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../types";
import { FEATURED, OTHER } from "../data/projects";

function getHostname(url?: string): string | null {
  if (!url || url === "#") return null;
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function BrowserChrome({ url }: { url?: string }) {
  const hostname = getHostname(url);
  return (
    <div className="flex items-center gap-2.5 border-b border-brown/10 bg-cream/80 px-3 py-2 shrink-0">
      <div className="flex gap-1.5 shrink-0">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex flex-1 min-w-0 items-center rounded bg-white/60 border border-brown/10 px-2 py-0.5">
        <span className="truncate text-[10px] text-muted/70">
          {hostname ?? "preview"}
        </span>
      </div>
      {url && url !== "#" && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open in new tab"
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 text-taupe hover:text-brown transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7" />
            <path d="M8 1h3v3" />
            <path d="M11 1 6 6" />
          </svg>
        </a>
      )}
    </div>
  );
}

function BrowserFrame({
  url,
  children,
}: {
  url?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brown/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <BrowserChrome url={url} />
      {children}
    </div>
  );
}

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

function ScreenshotGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelect = (i: number) => {
    setActive(i);
    setPaused(true);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), 4000);
  };

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      3500,
    );
    return () => clearInterval(id);
  }, [images.length, paused]);

  useEffect(
    () => () => {
      if (resumeRef.current) clearTimeout(resumeRef.current);
    },
    [],
  );

  if (images.length === 0) return null;

  return (
    <div>
      {/* Active main screenshot */}
      <div className="relative h-52 md:h-80 overflow-hidden bg-linear-to-br from-taupe/30 to-cream">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} — ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onError={(e) => {
              e.currentTarget.style.opacity = "0";
            }}
          />
        ))}
      </div>

      {/* Thumbnail grid */}
      {images.length > 1 && (
        <div className="border-t border-brown/10 bg-cream/30 p-2">
          <div className="grid grid-cols-3 gap-1.5 max-h-52 overflow-y-auto scrollbar-thin">
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View screenshot ${i + 1}`}
                onClick={() => handleSelect(i)}
                className={`aspect-video overflow-hidden rounded-md transition-all duration-200 ${
                  i === active
                    ? "ring-2 ring-brown"
                    : "opacity-60 hover:opacity-90 ring-1 ring-transparent hover:ring-brown/20"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    (
                      e.currentTarget.parentElement as HTMLElement
                    ).style.display = "none";
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function getCarouselStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);
  if (abs > 2) return { opacity: 0, zIndex: 0, pointerEvents: "none" };
  const sign = offset > 0 ? 1 : -1;
  if (abs === 0)
    return { transform: "translateX(-50%) translateZ(0px)", opacity: 1, zIndex: 10 };
  const xPx   = sign * (abs === 1 ? 400 : 760);
  const zPx   = abs === 1 ? -110 : -220;
  const ryDeg = -sign * (abs === 1 ? 42 : 62);
  const scale = abs === 1 ? 0.84 : 0.68;
  const opacity = abs === 1 ? 0.72 : 0.38;
  return {
    transform: `translateX(calc(-50% + ${xPx}px)) translateZ(${zPx}px) rotateY(${ryDeg}deg) scale(${scale})`,
    opacity,
    zIndex: abs === 1 ? 6 : 3,
  };
}

function FeaturedCarousel({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const n = projects.length;

  const prev = () => setIdx((i) => (i - 1 + n) % n);
  const next = () => setIdx((i) => (i + 1) % n);

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % n), 4200);
    return () => clearInterval(id);
  }, [hovered, n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + n) % n);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Depth spotlight backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-105 md:h-170"
        style={{
          background:
            "radial-gradient(ellipse 55% 75% at 50% 45%, rgba(125,106,90,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Cards stage */}
      <div
        className="relative h-105 md:h-170 overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {projects.map((project, i) => {
          let offset = i - idx;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const style = getCarouselStyle(offset);
          const isCenter = offset === 0;

          return (
            <div
              key={project.title}
              className={`absolute left-1/2 top-1/2 w-225 max-w-[92vw] -translate-y-1/2 transition-all duration-500 ease-out${!isCenter ? " max-md:hidden!" : ""}`}
              style={{ ...style, transformStyle: "preserve-3d" }}
              onClick={() => (isCenter ? onOpen(project) : setIdx(i))}
            >
              <div
                className={`overflow-hidden rounded-2xl border transition-shadow duration-500 ${
                  isCenter
                    ? "cursor-pointer border-brown/15 shadow-[0_32px_72px_rgba(0,0,0,0.20)]"
                    : "cursor-pointer border-brown/10 shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
                }`}
              >
                <BrowserFrame url={project.liveUrl}>
                  <div className="relative h-60 md:h-120 overflow-hidden bg-linear-to-br from-taupe/30 to-cream">
                    <span
                      aria-hidden
                      className="absolute inset-0 flex items-center justify-center font-serif text-7xl font-bold text-brown/20"
                    >
                      {project.title.charAt(0)}
                    </span>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    {isCenter && (
                      <div className="group absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-200 hover:bg-ink/12">
                        <span className="translate-y-2 font-sans text-sm font-medium tracking-wide text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                          View project &rarr;
                        </span>
                      </div>
                    )}
                  </div>
                </BrowserFrame>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous project"
        className="absolute left-6 top-52.5 md:top-85 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-brown/12 bg-white/90 text-xl text-brown shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:shadow-lg"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next project"
        className="absolute right-6 top-52.5 md:top-85 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-brown/12 bg-white/90 text-xl text-brown shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:shadow-lg"
      >
        ›
      </button>

      {/* Project info — re-mounts on idx change for fadeUp animation */}
      <div
        key={idx}
        className="mx-auto mt-10 max-w-2xl px-6 text-center [animation:fadeUp_0.4s_ease_both]"
      >
        {/* Counter */}
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-taupe">
          {String(idx + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(n).padStart(2, "0")}
        </span>

        {/* Title */}
        <h3 className="mt-2 font-serif text-2xl md:text-[2.1rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
          {projects[idx].title}
        </h3>

        {/* Divider */}
        <div className="mx-auto mt-4 h-px w-10 bg-brown/35" />

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.75] text-muted">
          {projects[idx].description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {projects[idx].tags.slice(0, 4).map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        {/* Actions */}
        <div className="mt-7 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => onOpen(projects[idx])}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-surface transition-colors duration-200 hover:bg-brown"
          >
            Explore project
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </button>
          <div
            className="text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectLinks project={projects[idx]} />
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to project ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-6 bg-brown" : "w-1.5 bg-brown/25 hover:bg-brown/50"
            }`}
          />
        ))}
      </div>
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
  const images = project.screenshots ?? (project.image ? [project.image] : []);
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
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-200 ease-out ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden
      />

      {/* panel */}
      <div
        className={`relative z-10 flex flex-col md:flex-row max-h-[96vh] w-full max-w-[92vw] overflow-hidden rounded-3xl border border-brown/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out motion-reduce:transition-none ${
          show
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-20 text-2xl leading-none text-muted transition-colors hover:text-brown"
        >
          &times;
        </button>

        {/* ── left: browser preview ── */}
        <div className="flex w-full md:w-[52%] shrink-0 flex-col justify-center bg-cream/40 p-4 md:p-6">
          {images.length > 0 ? (
            <BrowserFrame url={project.liveUrl}>
              <ScreenshotGallery images={images} title={project.title} />
            </BrowserFrame>
          ) : (
            <div className="flex h-64 items-center justify-center rounded-2xl border border-brown/10 bg-cream">
              <span className="font-serif text-6xl font-bold text-brown/30">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* ── right: text details ── */}
        <div className="flex flex-1 flex-col overflow-y-auto border-t md:border-t-0 md:border-l border-brown/10 bg-white p-5 md:p-8">
          <h3 className="pr-8 font-serif text-2xl font-bold text-brown">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">
            {project.description}
          </p>

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

          <div className="mt-auto border-t border-brown/10 pt-5">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-4 md:px-8 pt-12 pb-20">
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

        <FeaturedCarousel
          projects={FEATURED}
          onOpen={(p) => setActive(p)}
        />

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
