"use client";

import React, { useEffect, useState } from "react";

import { certs, contact, disciplines, projects, skills } from "@/lib/content";
import { Nav } from "@/components/nav";
import { Scene } from "@/components/scene";
import { Typewriter } from "@/components/typewriter";
import { Reveal } from "@/components/reveal";
import { SteamBox } from "@/components/steam-box";
import { GlitchText } from "@/components/glitch-text";
import { DiscordTag } from "@/components/discord-tag";
import { ContactMascot } from "@/components/contact-mascot";
import { ExternalLink } from "@/components/external-link";

export function Portfolio() {
  const [steamActive, setSteamActive] = useState(false);

  useEffect(() => {
    // Always return to top on load/refresh — disable browser scroll restoration
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    // Enable hero entrance animations after hydration
    document.documentElement.classList.add("hero-ready");
  }, []);

  return (
    <div className="relative">
      <Nav />
      <div>

    <section
      id="home"
      className="snap-section relative flex items-center px-6 md:px-12"
    >
      <Scene />
      <div className="relative mx-auto w-full max-w-6xl pt-16">
        <div className="w-full md:max-w-[52%]">
        <p
          className="hero-in mb-6 font-mono text-[11px] tracking-[0.28em] text-mint uppercase"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          Android & Web Developer
        </p>
        <div className="hero-mask">
          <h1 className="hero-title font-display md:whitespace-nowrap text-[clamp(2.05rem,8.4vw,5.1rem)] leading-[0.92] font-bold tracking-[-0.045em]">
            Hi, I&apos;m Ayyash
          </h1>
          <span className="hero-box" aria-hidden="true" />
        </div>
        <div className="hero-in" style={{ "--d": "0.75s" } as React.CSSProperties}>
          <Typewriter />
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={skill.name}
              className="hero-in group/pill rounded-full border border-paper/20 bg-paper/8 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-paper/85 transition-all duration-200 cursor-default"
              style={
                {
                  "--d": `${(0.95 + i * 0.05).toFixed(2)}s`,
                  "--pill-color": skill.color,
                  "--pill-color-bg": skill.color + "1a",
                  "--pill-color-border": skill.color + "80",
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = skill.color;
                el.style.borderColor = skill.color + "80";
                el.style.backgroundColor = skill.color + "1a";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "";
                el.style.borderColor = "";
                el.style.backgroundColor = "";
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
        </p>
        <a
          href="#about"
          className="hero-in mt-14 inline-flex items-center gap-3 text-[11px] tracking-[0.22em] text-muted uppercase"
          style={{ "--d": `${(0.95 + skills.length * 0.05 + 0.1).toFixed(2)}s` } as React.CSSProperties}
        >
          <span className="h-px w-10 bg-lime" />
          Scroll
          <svg
            className="scroll-chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden="true"
          >
            <polyline
              points="1,1 6,7 11,1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        </div>
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
          <Reveal delay={0}>
            <div>
              <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
                02 — About
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Keeping pace with a fast-moving industry.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-7 text-paper/68">
                Software developer with hands-on experience shipping Android apps to real users —
                from rebuilding a field operations platform for Balitower technicians to
                co-teaching mobile dev to 300+ students at Infinite Learning.
                I move between Kotlin, React, and motion tooling without losing the thread.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-paper/10 pt-6">
                {[
                  { value: "2+", label: "Years exp." },
                  { value: "5", label: "Apps shipped" },
                  { value: "30+", label: "Cup of coffees made per month" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-bold tracking-[-0.04em] text-paper">{stat.value}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="grid gap-4 sm:grid-cols-2">
            {disciplines.map((item) => (
              <li
                key={item.tag}
                className="group relative border border-paper/10 bg-ink/60 p-6 overflow-hidden transition-colors hover:border-lime/30 hover:bg-ink/80 flex flex-col"
              >
                {/* large faint tag number — decorative background */}
                <span
                  className="pointer-events-none absolute -right-3 -top-4 font-display text-[7rem] font-bold leading-none tracking-tighter text-paper/[0.04] select-none transition-colors group-hover:text-lime/[0.07]"
                  aria-hidden="true"
                >
                  {item.tag}
                </span>

                {/* top accent line */}
                <span className="block h-[2px] w-8 bg-lime/40 mb-5 transition-all duration-300 group-hover:w-14 group-hover:bg-lime" />

                <span className="font-mono text-[10px] tracking-[0.22em] text-lime/70 uppercase">{item.tag}</span>
                <h3 className="mt-2 font-display text-xl tracking-[-0.03em] transition-colors group-hover:text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>

                {/* icon cluster — bottom-right */}
                <div className="pointer-events-none mt-auto pt-4 self-end flex items-center gap-2" aria-hidden="true">
                  {item.icons.map((icon) =>
                    icon.type === "inline" ? (
                      <svg key={icon.label} viewBox="0 0 200 248" fill="currentColor" className="h-7 w-7 opacity-20 group-hover:opacity-35 transition-opacity" style={{ color: "#3ddc84" }}>
                        <path d="M58 42 L40 12" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                        <path d="M142 42 L160 12" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                        <circle cx="40" cy="12" r="6" fill="currentColor"/>
                        <circle cx="160" cy="12" r="6" fill="currentColor"/>
                        <path d="M36 92c0-36 28-58 64-58s64 22 64 58H36Z" fill="currentColor"/>
                        <circle cx="76" cy="66" r="7.5" fill="var(--ink)"/>
                        <circle cx="124" cy="66" r="7.5" fill="var(--ink)"/>
                        <rect x="36" y="100" width="128" height="92" rx="14" fill="currentColor"/>
                        <rect x="8" y="104" width="22" height="72" rx="11" fill="currentColor"/>
                        <rect x="170" y="104" width="22" height="72" rx="11" fill="currentColor"/>
                        <rect x="60" y="196" width="28" height="44" rx="14" fill="currentColor"/>
                        <rect x="112" y="196" width="28" height="44" rx="14" fill="currentColor"/>
                      </svg>
                    ) : icon.type === "svg" ? (
                      <svg key={icon.label} viewBox="0 0 24 24" className="h-[22px] w-[22px] opacity-25 group-hover:opacity-40 transition-opacity" fill={icon.color} aria-label={icon.label}>
                        <path d={icon.path} />
                      </svg>
                    ) : (
                      <img
                        key={icon.label}
                        src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color.replace("#", "")}`}
                        alt={icon.label}
                        title={icon.label}
                        width={22}
                        height={22}
                        className="h-[22px] w-[22px] transition-opacity group-hover:opacity-40"
                        style={{ opacity: (icon as { opacity?: number }).opacity ?? 0.25 }}
                        loading="lazy"
                      />
                    )
                  )}
                </div>
              </li>
            ))}
            </ul>
          </Reveal>
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
          <Reveal delay={0}>
            <div className="border-l-4 border-lime pl-4">
              <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
                03 — Projects
              </p>
              <h2 className="mt-3 font-display text-5xl md:text-6xl font-semibold tracking-[-0.04em]">
                Selected work
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-14 divide-y divide-paper/10 border-y border-paper/10">
            {projects.map((project) => (
              <li key={project.title}>
                <ExternalLink
                  href={project.href}
                  className="group relative grid gap-2 py-6 md:grid-cols-[5.5rem_1.2fr_0.9fr_1.4fr] md:items-baseline overflow-hidden"
                  style={{ "--project-accent": project.accent } as React.CSSProperties}
                >
                  {/* icon overlay — always faintly visible at bottom-right, brightens on hover */}
                  <span
                    className="pointer-events-none absolute right-0 bottom-0 top-0 w-40 md:w-56 flex items-center justify-end pr-4"
                    aria-hidden="true"
                  >
                    {/* radial fade mask so icon dissolves left */}
                    <span className="absolute inset-0" style={{background: `radial-gradient(ellipse 70% 90% at 100% 50%, ${project.glow}, transparent)`}} />
                    {/* icon or initials badge */}
                    {project.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.icon}
                        alt=""
                        className="relative z-10 h-16 w-16 rounded-[22%] shadow-md opacity-20 group-hover:opacity-60 transition-opacity duration-500 bg-paper/10"
                        loading="lazy"
                      />
                    ) : (
                      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-[22%] font-display text-base font-bold tracking-tight transition-all duration-500"
                        style={{ color: project.accent, opacity: 0.4, border: `1px solid ${project.accent}40`, background: `${project.accent}1a` }}
                      >
                        {project.initials}
                      </span>
                    )}
                  </span>

                  <span className="font-mono text-[11px] text-muted flex items-center">
                    <span
                      className="inline-block h-2 w-2 rounded-full mr-2 md:hidden flex-shrink-0"
                      style={{background: project.accent}}
                      aria-hidden="true"
                    />
                    {project.year}
                  </span>
                  <h3 className="font-display text-2xl tracking-[-0.03em] transition-colors duration-300 group-hover:[color:var(--project-accent)]">
                    {project.title}
                  </h3>
                  <p className="text-xs tracking-[0.14em] uppercase transition-colors duration-300 group-hover:[color:var(--project-accent)]" style={{ color: project.accent, opacity: 0.75 }}>
                    {project.kind}
                  </p>
                  <p className="text-sm leading-6 text-muted">{project.copy}</p>
                </ExternalLink>
              </li>
            ))}
            </ul>
          </Reveal>
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
          <Reveal delay={0}>
            <div>
              <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
                04 — Training
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em]">
                Courses &amp; training
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-10 grid gap-px bg-paper/10 sm:grid-cols-2">
            {certs.map((cert) => (
              <li key={cert.title} className="bg-snow">
                <ExternalLink
                  href={cert.href}
                  className="group relative block overflow-hidden border-b border-paper/8 p-7 transition-all hover:bg-ink/[0.03]"
                >
                  {/* left border accent on hover */}
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-lime scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" aria-hidden="true" />

                  <p className="font-mono text-[10px] tracking-[0.22em] text-lime uppercase">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] transition-colors group-hover:text-lime">
                    {cert.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-muted">{cert.year}</span>
                    <span className="h-px flex-1 bg-paper/8" />
                    <span className="font-mono text-[10px] tracking-[0.1em] text-muted/60">{cert.location}</span>
                  </div>
                </ExternalLink>
              </li>
            ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <footer
        id="contact"
        className="snap-section relative flex items-end border-t border-paper/8 px-6 pb-10 md:px-12"
        style={{ contain: "layout paint", willChange: "transform" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* dot grid — full coverage, very faint */}
          <svg viewBox="0 0 600 400" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full" style={{opacity: 0.06}}>
            <defs>
              <pattern id="dot-contact" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="var(--lime)"/>
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#dot-contact)"/>
          </svg>

          {/* large spinning orbit ring — top left */}
          <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="absolute" style={{left: '-8%', top: '-10%', width: 'min(55vw, 420px)', opacity: 0.18, animation: 'spin-slow 32s linear infinite', transformOrigin: '50% 50%'}}>
            <circle cx="200" cy="200" r="188" stroke="var(--lime)" strokeWidth="1" strokeDasharray="12 8"/>
            <circle cx="200" cy="12" r="5" fill="var(--lime)" opacity="0.8"/>
          </svg>

          {/* smaller reverse orbit ring — bottom right */}
          <svg viewBox="0 0 260 260" fill="none" aria-hidden="true" className="absolute" style={{right: '18%', bottom: '-8%', width: 'min(32vw, 260px)', opacity: 0.14, animation: 'spin-slow 20s linear infinite reverse', transformOrigin: '50% 50%'}}>
            <circle cx="130" cy="130" r="120" stroke="var(--mint)" strokeWidth="1" strokeDasharray="6 5"/>
            <circle cx="130" cy="10" r="3.5" fill="var(--mint)" opacity="0.7"/>
          </svg>

          {/* sweeping bezier arc top */}
          <svg viewBox="0 0 700 280" fill="none" aria-hidden="true" className="absolute" style={{top: '0%', left: '-2%', width: 'min(75vw, 680px)', opacity: 0.2}}>
            <path d="M 0 240 C 100 80, 340 20, 700 140" stroke="var(--lime)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="8 6"/>
          </svg>

          {/* horizontal signal line with nodes */}
          <svg viewBox="0 0 600 24" fill="none" aria-hidden="true" className="absolute" style={{left: 0, right: 0, top: '48%', width: '100%', opacity: 0.12}}>
            <line x1="0" y1="12" x2="600" y2="12" stroke="var(--lime)" strokeWidth="0.8" strokeDasharray="5 4"/>
            {[30, 90, 160, 240, 320, 420, 520, 580].map((cx) => (
              <circle key={cx} cx={cx} cy="12" r="2.5" fill="var(--lime)"/>
            ))}
          </svg>

          {/* crosshair — mid left */}
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="absolute" style={{left: '6%', top: '40%', width: 'min(4vw, 40px)', opacity: 0.25}}>
            <circle cx="20" cy="20" r="16" stroke="var(--lime)" strokeWidth="1"/>
            <circle cx="20" cy="20" r="4" stroke="var(--lime)" strokeWidth="1"/>
            <line x1="20" y1="0" x2="20" y2="14" stroke="var(--lime)" strokeWidth="1"/>
            <line x1="20" y1="26" x2="20" y2="40" stroke="var(--lime)" strokeWidth="1"/>
            <line x1="0" y1="20" x2="14" y2="20" stroke="var(--lime)" strokeWidth="1"/>
            <line x1="26" y1="20" x2="40" y2="20" stroke="var(--lime)" strokeWidth="1"/>
          </svg>

          {/* code snippet frame — bottom center */}
          <svg viewBox="0 0 140 52" fill="none" aria-hidden="true" className="absolute" style={{left: '50%', bottom: '8%', transform: 'translateX(-50%)', width: 'min(18vw, 130px)', opacity: 0.2, animation: 'fade-drift 9s ease-in-out infinite'}}>
            <rect x="2" y="2" width="136" height="48" rx="8" stroke="var(--lime)" strokeWidth="1.2" strokeDasharray="4 3"/>
            <text x="12" y="22" fontFamily="monospace" fontSize="10" fill="var(--lime)" opacity="0.9">let&apos;s build()</text>
            <text x="12" y="38" fontFamily="monospace" fontSize="10" fill="var(--mint)" opacity="0.8">{`{ together }`}</text>
          </svg>

          {/* Bugdroid ⇄ pixel sword (swaps while the Steam pill is hovered) */}
          <ContactMascot active={steamActive} />

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
          <Reveal delay={0}>
            <div>
              <p className="font-mono text-[11px] tracking-[0.28em] text-mint uppercase">
                05 — Contact
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.9] font-semibold tracking-[-0.05em] overflow-hidden" style={{ contain: "layout" }}>
                <GlitchText
                  fade={!steamActive}
                  text={
                    steamActive
                      ? "Open to Duelist & Controller roles. Run it down."
                      : "Open to Android & Fullstack roles. Let's discuss."
                  }
                  reserve={[
                    "Open to Android & Fullstack roles. Let's discuss.",
                    "Open to Duelist & Controller roles. Run it down.",
                  ]}
                />
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
          <p className="mt-4 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <GlitchText
              fade={!steamActive}
              stagger={0.45}
              text={
                steamActive
                  ? "Currently open (but not limited) to Valorant and Monster Hunter parties · Based in Depok, Indonesia"
                  : "Currently open to part-time remote roles and mobile app commissions · Based in Depok, Indonesia"
              }
              reserve={[
                "Currently open to part-time remote roles and mobile app commissions · Based in Depok, Indonesia",
                "Currently open to (but not limited) Valorant and Monster Hunter parties · Based in Depok, Indonesia",
              ]}
            />
          </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 grid">
              <div
                ref={(el) => {
                  // keeps hidden links out of the tab order while Discord is showing
                  el?.toggleAttribute("inert", steamActive);
                }}
                data-away={steamActive}
                className="contact-row col-start-1 row-start-1 flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-paper/75"
              >
                <a className="hover:text-lime transition-colors" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                <span className="text-paper/20">|</span>
                <ExternalLink
                  className="text-paper/75 hover:text-lime transition-colors"
                  href={contact.whatsapp}
                  aria-label="WhatsApp"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.424A9.955 9.955 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2Zm0 1.8a8.2 8.2 0 1 1 0 16.4 8.2 8.2 0 0 1 0-16.4Zm-3.39 3.707c-.207 0-.43.003-.62.012-.198.01-.476.074-.727.35-.252.277-.962.94-.962 2.29 0 1.35.984 2.655 1.122 2.84.137.183 1.907 3.037 4.69 4.136.655.25 1.167.4 1.566.51.658.185 1.258.16 1.732.097.528-.07 1.627-.664 1.857-1.306.23-.64.23-1.19.16-1.305-.068-.114-.252-.183-.528-.32-.277-.137-1.637-.808-1.89-.9-.252-.092-.435-.137-.617.137-.183.275-.71.9-.87 1.085-.16.183-.32.206-.596.069-.275-.138-1.162-.428-2.213-1.365-.818-.73-1.37-1.63-1.531-1.905-.16-.275-.017-.424.12-.56.123-.123.275-.32.413-.48.138-.16.183-.274.275-.457.09-.183.045-.343-.023-.48-.069-.137-.617-1.49-.847-2.04-.22-.534-.448-.462-.617-.47l-.525-.008Z"/>
                  </svg>
                </ExternalLink>
                <span className="text-paper/20">|</span>
                <ExternalLink
                  className="text-paper/75 hover:text-lime transition-colors"
                  href={contact.linkedin}
                  aria-label="LinkedIn"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-1.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94V9.13H5.5v9.37h2.77Z"/>
                  </svg>
                </ExternalLink>
                <span className="text-paper/20">|</span>
                <ExternalLink
                  className="text-paper/75 hover:text-lime transition-colors"
                  href={contact.github}
                  aria-label="GitHub"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/>
                  </svg>
                </ExternalLink>
                <a
                  className="inline-flex items-center gap-2 border border-paper/20 px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-lime hover:text-lime"
                  href={contact.cv}
                  download
                >
                  <span className="cv-icon">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                      <path d="M8 12L3 7h3V2h4v5h3L8 12ZM2 14h12v1.5H2V14Z"/>
                    </svg>
                  </span>
                  Download CV
                </a>
              </div>

              <DiscordTag active={steamActive} className="col-start-1 row-start-1" />
            </div>
          </Reveal>
          
          {/* Steam — mystery box easter egg */}
          <Reveal delay={0.22}>
            <div className="mt-16 flex min-h-9 flex-wrap items-center gap-3 [&>a]:mt-0 [&>a]:cursor-help [&>a]:opacity-40 [&>a:hover]:opacity-100 [&>a:focus-visible]:opacity-100 [&>a[data-open=true]]:opacity-100">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                © 2026 miregitgud · Made with love and a cup of coffee.
              </p>
              <SteamBox onActiveChange={setSteamActive} />
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
    </div>
  );
}