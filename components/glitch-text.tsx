"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

type Cell = { ch: string; glitch: boolean };

const toCells = (s: string): Cell[] =>
  Array.from(s).map((ch) => ({ ch, glitch: false }));

const GLITCH_STYLE: React.CSSProperties = {
  color: "var(--lime)",
  textShadow: "1px 0 var(--mint), -1px 0 #ff3b6b",
  opacity: 0.9,
};

type Props = {
  text: string;
  className?: string;
  /** frames of delay added per letter (lower = faster wave) */
  stagger?: number;
  /** how many frames each letter scrambles before settling */
  scrambleFrames?: number;
  frameMs?: number;
  /** when true, text changes crossfade instead of glitching */
  fade?: boolean;
  /** duration of each half of the crossfade (out, then in) */
  fadeMs?: number;
  /** every string this text can become, used to lock the block's height */
  reserve?: string[];
};

export function GlitchText({
  text,
  className = "",
  stagger = 0.6,
  scrambleFrames = 7,
  frameMs = 35,
  fade = false,
  fadeMs = 180,
  reserve = [],
}: Props) {
  const [cells, setCells] = useState<Cell[]>(() => toCells(text));
  const [faded, setFaded] = useState(false);
  const shownRef = useRef(text);

  useEffect(() => {
    const from = shownRef.current;
    if (from === text) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      shownRef.current = text;
      setCells(toCells(text));
      setFaded(false);
      return;
    }

    // simple crossfade: fade out → swap text → fade in
    if (fade) {
      setFaded(true);
      const t = window.setTimeout(() => {
        shownRef.current = text;
        setCells(toCells(text));
        setFaded(false);
      }, fadeMs);
      return () => window.clearTimeout(t);
    }

    // glitch: scramble letter by letter
    setFaded(false);
    const target = Array.from(text);
    const old = Array.from(from);

    const len = Math.max(target.length, old.length);
    const plan = Array.from({ length: len }, (_, i) => {
      const start = Math.floor(i * stagger);
      return { start, end: start + scrambleFrames + Math.floor(Math.random() * 4) };
    });

    let frame = 0;
    const id = window.setInterval(() => {
      frame++;
      let done = true;

      const next: Cell[] = plan.map(({ start, end }, i) => {
        const t = target[i] ?? "";
        if (frame < start) {
          done = false;
          return { ch: old[i] ?? "", glitch: false };
        }
        if (frame < end) {
          done = false;
          if (t === " ") return { ch: " ", glitch: false };
          return { ch: GLYPHS[Math.floor(Math.random() * GLYPHS.length)], glitch: true };
        }
        return { ch: t, glitch: false };
      });

      shownRef.current = next.map((c) => c.ch).join("");
      setCells(next);
      if (done) window.clearInterval(id);
    }, frameMs);

    return () => window.clearInterval(id);
  }, [text, fade, fadeMs, stagger, scrambleFrames, frameMs]);

  // group letters into words so line breaks only happen between words
  const words: { ch: string; glitch: boolean; i: number }[][] = [];
  let current: { ch: string; glitch: boolean; i: number }[] = [];
  cells.forEach((c, i) => {
    if (c.ch === " ") {
      if (current.length) {
        words.push(current);
        current = [];
      }
    } else if (c.ch !== "") {
      current.push({ ...c, i });
    }
  });
  if (current.length) words.push(current);

  return (
    <span className={`grid ${className}`}>
      <span className="sr-only">{text}</span>

      {/* invisible copies reserve the tallest layout so nothing jumps */}
      {reserve.map((r) => (
        <span key={r} aria-hidden="true" className="invisible col-start-1 row-start-1">
          {r}
        </span>
      ))}

      <span
        aria-hidden="true"
        className="col-start-1 row-start-1"
        style={{
          opacity: faded ? 0 : 1,
          transition: `opacity ${fadeMs}ms ease`,
        }}
      >
        {words.map((word, wi) => (
          <span key={wi}>
            {wi > 0 && " "}
            <span className="inline-block whitespace-nowrap">
              {word.map((c) => (
                <span key={c.i} style={c.glitch ? GLITCH_STYLE : undefined}>
                  {c.ch}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}