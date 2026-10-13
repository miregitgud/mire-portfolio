# mire-portfolio

Personal portfolio of **Ayyash "miregitgud" Muhammad Jibril** — Android & Web Developer.

Built with Next.js (App Router), Tailwind CSS v4, and TypeScript. Scroll-snapped single-page layout with light/dark mode, motion animations, and a few Easter eggs.

## Stack

- **Framework** — Next.js (App Router)
- **Styling** — Tailwind CSS v4 + custom CSS
- **Fonts** — Syne (display), Geist Sans, Geist Mono
- **Language** — TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Entry point
  globals.css       # Global styles, animations, CSS vars
components/
  portfolio.tsx     # Main page composition
  scene.tsx         # Hero background (Android mascot + grid)
  nav.tsx           # Fixed navigation bar
  typewriter.tsx    # Animated role typewriter
  glitch-text.tsx   # Glitch swap text (contact section)
  steam-box.tsx     # Steam Easter egg pill
  discord-tag.tsx   # Discord handle (swaps in on Steam hover)
  contact-mascot.tsx# Bugdroid ⇄ pixel sword swap animation
  external-link.tsx # Confirmation dialog wrapper for external links
  reveal.tsx        # Scroll-triggered fade-in wrapper
lib/
  content.ts        # All copy, links, projects, certs, skills
public/
  cv-ayyash-jibril.pdf
  icons/            # Project icons
```

## Features

- Scroll-snap sections with entrance animations
- Light / dark mode toggle (persisted via `data-theme` on `<html>`)
- External link confirmation dialog on every outbound link
- Steam Easter egg — hover the mystery pill in the footer to swap the contact section into gaming mode
