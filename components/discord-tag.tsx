"use client";

import { contact } from "@/lib/content";
import { GlitchText } from "@/components/glitch-text";

type Props = {
  active: boolean;
  className?: string;
};

export function DiscordTag({ active, className = "" }: Props) {
  return (
    <div
      aria-hidden={!active}
      className={`pointer-events-none flex items-center gap-3 text-base text-paper/75 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.simpleicons.org/discord/5865F2"
        alt=""
        width={22}
        height={22}
        className="h-[22px] w-[22px]"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "none" : "scale(0.6) rotate(-12deg)",
          // in: pop with rotation. out: plain fade, then snap the transform back unseen
          transition: active
            ? "opacity 0.5s ease, transform 0.5s ease"
            : "opacity 0.3s ease, transform 0s linear 0.3s",
        }}
      />
      <GlitchText
        text={active ? contact.discord : ""}
        fade={!active}
        className="font-mono tracking-[0.08em]"
        stagger={0.9}
      />
    </div>
  );
}