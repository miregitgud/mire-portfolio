"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/content";

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = window.setTimeout(() => setArmed(true), reduced ? 0 : 1680);
    return () => window.clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!armed) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(roles[index]);
      const hold = window.setTimeout(
        () => setIndex((i) => (i + 1) % roles.length),
        index === roles.length - 1 ? 4200 : 2400,
      );
      return () => window.clearTimeout(hold);
    }

    const full = roles[index];
    const atEnd = !deleting && text === full;
    const atStart = deleting && text.length === 0;

    if (atEnd) {
      const isLast = index === roles.length - 1;
      const hold = window.setTimeout(
        () => setDeleting(true),
        isLast ? 4200 : 1700,
      );
      return () => window.clearTimeout(hold);
    }

    if (atStart) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }

    const delay = deleting ? 26 : 54;
    const tick = window.setTimeout(() => {
      const next = deleting
        ? full.slice(0, text.length - 1)
        : full.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => window.clearTimeout(tick);
  }, [armed, deleting, index, text]);

  return (
    <p
      className="mt-5 min-h-[1.6em] max-w-[42rem] text-[clamp(1rem,2.4vw,1.45rem)] font-normal tracking-[-0.01em] text-paper/72"
      aria-live="polite"
    >
      <span>{text}</span>
      {armed ? <span className="type-cursor" aria-hidden="true" /> : null}
    </p>
  );
}
