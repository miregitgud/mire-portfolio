"use client";

import { certs, disciplines, projects } from "@/lib/content";
import { Nav } from "@/components/nav";
import { Scene } from "@/components/scene";
import { Typewriter } from "@/components/typewriter";

export function Portfolio() {
  return (
    <div className="relative">
      <Nav />

      <section
        id="home"
        className="snap-section relative flex items-center px-6 md:px-12"
      >
        <Scene />
        <div className="relative mx-auto w-full max-w-6xl pt-16">
          <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
            Ayyash · build / draw / move
          </p>
          <div className="hero-mask">
            <h1 className="hero-title font-display whitespace-nowrap text-[clamp(2.05rem,8.4vw,7.1rem)] leading-[0.92] font-bold tracking-[-0.045em]">
              Hi, I&apos;m Ayyash
            </h1>
            <span className="hero-box" aria-hidden="true" />
          </div>
          <Typewriter />
          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-3 text-[11px] tracking-[0.22em] text-muted uppercase"
          >
            <span className="h-px w-10 bg-lime" />
            Scroll
          </a>
        </div>
      </section>

      <section
        id="about"
        className="snap-section relative flex items-center border-t border-paper/8 bg-snow px-6 md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* graph-paper grid */}
          <svg viewBox="0 0 600 400" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full" style={{opacity: 0.07}}>
            <defs>
              <pattern id="grid-about" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--paper)" strokeWidth="0.6"/>
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#grid-about)"/>
          </svg>
          {/* crosshair top-right corner */}
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="absolute" style={{top: '6%', right: '4%', width: 'min(4vw, 38px)', opacity: 0.09}}>
            <circle cx="20" cy="20" r="16" stroke="var(--paper)" strokeWidth="1"/>
            <circle cx="20" cy="20" r="4" stroke="var(--paper)" strokeWidth="1"/>
            <line x1="20" y1="0" x2="20" y2="14" stroke="var(--paper)" strokeWidth="1"/>
            <line x1="20" y1="26" x2="20" y2="40" stroke="var(--paper)" strokeWidth="1"/>
            <line x1="0" y1="20" x2="14" y2="20" stroke="var(--paper)" strokeWidth="1"/>
            <line x1="26" y1="20" x2="40" y2="20" stroke="var(--paper)" strokeWidth="1"/>
          </svg>
          {/* node connection lines */}
          <svg viewBox="0 0 300 200" fill="none" aria-hidden="true" className="absolute" style={{bottom: '5%', right: '2%', width: 'min(30vw, 280px)', opacity: 0.08}}>
            <circle cx="40" cy="100" r="4" stroke="var(--paper)" strokeWidth="1"/>
            <circle cx="150" cy="40" r="4" stroke="var(--paper)" strokeWidth="1"/>
            <circle cx="260" cy="140" r="4" stroke="var(--paper)" strokeWidth="1"/>
            <circle cx="150" cy="160" r="4" stroke="var(--paper)" strokeWidth="1"/>
            <line x1="40" y1="100" x2="150" y2="40" stroke="var(--paper)" strokeWidth="0.8" strokeDasharray="4 3"/>
            <line x1="150" y1="40" x2="260" y2="140" stroke="var(--paper)" strokeWidth="0.8" strokeDasharray="4 3"/>
            <line x1="40" y1="100" x2="150" y2="160" stroke="var(--paper)" strokeWidth="0.8" strokeDasharray="4 3"/>
            <line x1="150" y1="160" x2="260" y2="140" stroke="var(--paper)" strokeWidth="0.8" strokeDasharray="4 3"/>
          </svg>
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-12 py-24 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
              02 — About
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Systems with a graphic pulse.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-paper/68">
              I ship Android products and backend services with the same
              discipline I bring to vectors and motion: tight grids, honest
              timing, no leftover noise.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {disciplines.map((item) => (
              <li
                key={item.tag}
                className="border border-paper/10 bg-ink/60 p-5"
              >
                <span className="font-mono text-[11px] text-lime">{item.tag}</span>
                <h3 className="mt-3 font-display text-xl tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="projects"
        className="snap-section relative flex items-center border-t border-paper/8 bg-snow px-6 md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* sweeping bezier curve */}
          <svg viewBox="0 0 700 300" fill="none" aria-hidden="true" className="absolute" style={{top: '10%', left: '-2%', width: 'min(70vw, 660px)', opacity: 0.08}}>
            <path d="M 0 250 C 120 60, 400 20, 700 160" stroke="var(--paper)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 5"/>
          </svg>
          {/* chevrons bottom-right */}
          <svg viewBox="0 0 120 28" fill="none" aria-hidden="true" className="absolute" style={{right: '3%', bottom: '12%', width: 'min(12vw, 100px)', opacity: 0.09}}>
            {[0, 32, 64].map((offset, i) => (
              <g key={i} transform={`translate(${offset}, 0)`} opacity={1 - i * 0.25}>
                <polyline points="4,4 14,14 4,24" stroke="var(--paper)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            ))}
          </svg>
        </div>
        <div className="mx-auto w-full max-w-6xl py-24">
          <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
            03 — Projects
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em]">
            Selected work
          </h2>
          <ul className="mt-10 divide-y divide-paper/10 border-y border-paper/10">
            {projects.map((project) => (
              <li
                key={project.title}
                className="group grid gap-2 py-6 md:grid-cols-[5.5rem_1.2fr_0.9fr_1.4fr] md:items-baseline"
              >
                <span className="font-mono text-[11px] text-muted">
                  {project.year}
                </span>
                <h3 className="font-display text-2xl tracking-[-0.03em] transition-colors group-hover:text-lime">
                  {project.title}
                </h3>
                <p className="text-xs tracking-[0.14em] text-mint uppercase">
                  {project.kind}
                </p>
                <p className="text-sm leading-6 text-muted">{project.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="certs"
        className="snap-section relative flex items-center border-t border-paper/8 bg-snow px-6 md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* orbit ring */}
          <svg viewBox="0 0 320 320" fill="none" aria-hidden="true" className="absolute" style={{right: '-6%', top: '5%', width: 'min(38vw, 340px)', opacity: 0.08, animation: 'spin-slow 32s linear infinite', transformOrigin: '50% 50%'}}>
            <circle cx="160" cy="160" r="148" stroke="var(--paper)" strokeWidth="1.2" strokeDasharray="10 7"/>
            <circle cx="160" cy="12" r="4" fill="var(--paper)" opacity="0.6"/>
          </svg>
          {/* code bracket bottom-left */}
          <svg viewBox="0 0 60 80" fill="none" aria-hidden="true" className="absolute" style={{left: '3%', bottom: '10%', width: 'min(5vw, 48px)', opacity: 0.09}}>
            <path d="M 36 4 L 20 4 C 12 4 8 8 8 16 L 8 32 C 8 38 4 40 4 40 C 4 40 8 42 8 48 L 8 64 C 8 72 12 76 20 76 L 36 76" stroke="var(--paper)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M 24 4 L 40 4 C 48 4 52 8 52 16 L 52 32 C 52 38 56 40 56 40 C 56 40 52 42 52 48 L 52 64 C 52 72 48 76 40 76 L 24 76" stroke="var(--paper)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="mx-auto w-full max-w-6xl py-24">
          <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
            04 — Certifications
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em]">
            Proof of craft
          </h2>
          <ul className="mt-10 grid gap-px bg-paper/10 sm:grid-cols-2">
            {certs.map((cert) => (
              <li key={cert.title} className="bg-snow p-7">
                <p className="font-mono text-[11px] tracking-[0.18em] text-lime uppercase">
                  {cert.issuer}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-[-0.03em]">
                  {cert.title}
                </h3>
                <p className="mt-6 text-sm text-muted">{cert.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer
        id="contact"
        className="snap-section relative flex items-end border-t border-paper/8 bg-ink px-6 pb-10 md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* large faint Bugdroid stroke outline */}
          <svg viewBox="0 0 200 248" fill="none" aria-hidden="true" className="float-slow absolute" style={{right: '4%', top: '8%', width: 'min(30vw, 240px)', opacity: 0.28, color: 'var(--lime)'}}>
            <path d="M58 42 L40 12" stroke="var(--lime)" strokeWidth="7" strokeLinecap="round"/>
            <path d="M142 42 L160 12" stroke="var(--lime)" strokeWidth="7" strokeLinecap="round"/>
            <circle cx="40" cy="12" r="6" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <circle cx="160" cy="12" r="6" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <path d="M36 92c0-36 28-58 64-58s64 22 64 58H36Z" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <circle cx="76" cy="66" r="7.5" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <circle cx="124" cy="66" r="7.5" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <rect x="36" y="100" width="128" height="92" rx="14" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <rect x="8" y="104" width="22" height="72" rx="11" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <rect x="170" y="104" width="22" height="72" rx="11" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <rect x="60" y="196" width="28" height="44" rx="14" stroke="var(--lime)" strokeWidth="2" fill="none"/>
            <rect x="112" y="196" width="28" height="44" rx="14" stroke="var(--lime)" strokeWidth="2" fill="none"/>
          </svg>
          {/* motion chevrons */}
          <svg viewBox="0 0 120 28" fill="none" aria-hidden="true" className="absolute" style={{left: '3%', bottom: '12%', width: 'min(14vw, 120px)', opacity: 0.3}}>
            {[0, 32, 64].map((offset, i) => (
              <g key={i} transform={`translate(${offset}, 0)`} opacity={1 - i * 0.22}>
                <polyline points="4,4 14,14 4,24" stroke="var(--lime)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            ))}
            <line x1="4" y1="14" x2="110" y2="14" stroke="var(--lime)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5"/>
          </svg>
        </div>
        <div className="mx-auto w-full max-w-6xl py-24">
          <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
            05 — Footer
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.9] font-semibold tracking-[-0.05em]">
            Let&apos;s connect.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-paper/75">
            <a className="hover:text-lime" href="mailto:ayyash@example.com">
              ayyash@example.com
            </a>
            <a className="hover:text-lime" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-lime" href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="mt-16 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            © 2026 Ayyash · Backend · Android · Vector · Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
