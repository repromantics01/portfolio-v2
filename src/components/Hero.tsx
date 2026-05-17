export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-8 md:grid-cols-[1.5fr_1fr]">
        {" "}
        {/* Left: text column — left edge aligns with the navbar logo */}
        <div className="order-2 pt-4 pb-20 md:order-1 md:pt-0 md:pb-28">
          <h1 className="font-serif font-semibold leading-[1.02] tracking-tight text-brown">
            <span className="text-5xl md:text-6xl font-light">Hey there,</span>
            <br />
    
            <span className="text-6xl md:text-[5.25rem] font-bold">
              I&rsquo;m Pauline<span className="text-taupe">.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-screen text-xl leading-relaxed text-muted">
            An aspiring software engineer who builds full-stack web applications and{" "}
            <span className="font-medium text-brown">
              integrates intelligent systems into real, deployed products
            </span>
            &mdash; comfortable across the stack, from database design to
            frontend, with a growing focus on practical AI integration.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-taupe-dark px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-brown hover:shadow-md"
            >
              Contact Me
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-brown underline-offset-4 transition-colors hover:text-taupe-dark hover:underline"
            >
              View my work
            </a>
          </div>
        </div>
        {/* Right: portrait — circular on mobile, tall on desktop */}
        <div className="relative order-1 flex w-full items-center justify-center pt-8 md:order-2 md:justify-end md:pt-10">
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 -z-10 hidden h-[55vh] w-[55vh] -translate-x-1/2 rounded-full bg-taupe/25 blur-2xl md:left-auto md:right-4 md:block md:translate-x-0"
          />

          {/* Mobile: centered circular portrait */}
          <div className="mx-auto h-72 w-72 overflow-hidden rounded-full bg-taupe sm:h-80 sm:w-80 md:hidden">
            <img
              src="/me/me-hero.png"
              alt="Pauline Dejos"
              className="h-full w-full object-cover object-[center_top]"
            />
          </div>

          {/* Desktop: tall portrait anchored to the bottom */}
          <div className="hidden h-[clamp(50vh,65vh,90vh)] md:block">
            <img
              src="/me/me-hero.png"
              alt="Pauline Dejos"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
