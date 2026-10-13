"use client";

// 24×24 pixel grid, outline only (generated + visually checked)
const SWORD_PATH =
  "M19 2h1v1h-1zM20 2h1v1h-1zM21 2h1v1h-1zM17 3h1v1h-1zM18 3h1v1h-1zM21 3h1v1h-1zM16 4h1v1h-1zM21 4h1v1h-1zM15 5h1v1h-1zM20 5h1v1h-1zM14 6h1v1h-1zM20 6h1v1h-1zM13 7h1v1h-1zM19 7h1v1h-1zM12 8h1v1h-1zM18 8h1v1h-1zM11 9h1v1h-1zM17 9h1v1h-1zM5 10h1v1h-1zM10 10h1v1h-1zM16 10h1v1h-1zM4 11h1v1h-1zM6 11h1v1h-1zM9 11h1v1h-1zM15 11h1v1h-1zM4 12h1v1h-1zM7 12h1v1h-1zM8 12h1v1h-1zM14 12h1v1h-1zM5 13h1v1h-1zM13 13h1v1h-1zM6 14h1v1h-1zM12 14h1v1h-1zM7 15h1v1h-1zM11 15h1v1h-1zM6 16h1v1h-1zM8 16h1v1h-1zM11 16h1v1h-1zM5 17h1v1h-1zM7 17h1v1h-1zM9 17h1v1h-1zM12 17h1v1h-1zM4 18h1v1h-1zM6 18h1v1h-1zM10 18h1v1h-1zM13 18h1v1h-1zM2 19h1v1h-1zM3 19h1v1h-1zM5 19h1v1h-1zM11 19h1v1h-1zM12 19h1v1h-1zM2 20h1v1h-1zM4 20h1v1h-1zM3 21h1v1h-1zM4 21h1v1h-1z";

type Props = {
  active: boolean;
};

export function ContactMascot({ active }: Props) {
  return (
    <div
      aria-hidden="true"
      className="float-slow absolute grid place-items-center"
      style={{ right: "4%", top: "8%", width: "min(30vw, 240px)", opacity: 0.28 }}
    >
      {/* Bugdroid outline */}
      <svg
        viewBox="0 0 200 248"
        fill="none"
        data-show={!active}
        className="mascot-layer mascot-bug col-start-1 row-start-1 w-full"
      >
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

      {/* 8-bit sword outline */}
      <svg
        viewBox="0 0 24 24"
        fill="var(--lime)"
        shapeRendering="crispEdges"
        data-show={active}
        className="mascot-layer mascot-sword col-start-1 row-start-1 w-full"
      >
        <path d={SWORD_PATH} />
      </svg>
    </div>
  );
}