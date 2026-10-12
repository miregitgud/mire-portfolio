"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export function Nav() {
  const [active, setActive] = useState("#home");
  const [dark, setDark] = useState(false);

  // Persist theme across reloads
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: [0.45, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-4 md:px-4 md:pt-5">
      <nav className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-paper/10 bg-snow/70 px-1.5 py-1 shadow-sm backdrop-blur-md max-w-[calc(100vw-1.5rem)] overflow-x-auto md:gap-1 md:px-2 md:py-1.5 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {nav.map((item) => {
          const on = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] uppercase transition-colors md:px-3.5 md:py-1.5 md:text-[11px] md:tracking-[0.16em] ${
                on ? "bg-paper text-snow" : "text-paper/55 hover:text-paper hover:underline underline-offset-2"
              }`}
            >
              <span className="relative">
                {item.label}
                {on && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-lime" />
                )}
              </span>
            </a>
          );
        })}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="ml-0.5 flex h-6 w-6 items-center justify-center rounded-full text-paper/50 transition-colors hover:text-lime md:ml-1 md:h-7 md:w-7"
        >
          {dark ? (
            /* Sun icon */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            /* Moon icon */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}
