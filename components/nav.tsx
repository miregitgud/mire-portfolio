"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export function Nav() {
  const [active, setActive] = useState("#home");

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-paper/10 bg-snow/70 px-2 py-1.5 shadow-sm backdrop-blur-md">
        {nav.map((item) => {
          const on = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase transition-colors ${
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
      </nav>
    </header>
  );
}
