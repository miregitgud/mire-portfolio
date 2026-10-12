/* ─── Background Scene ────────────────────────────────────────────────────── */

// ── Backend / code decoration: small `{ }` label ──────────────────────────
function CodeLabel() {
  return (
    <svg
      viewBox="0 0 120 52"
      fill="none"
      aria-hidden="true"
      className="absolute"
      style={{top: '11%',
        left: '3%',
        width: 'min(14vw, 110px)',
        animation: 'fade-drift 9s ease-in-out infinite',}}
    >
      {/* rounded rect frame */}
      <rect
        x="2" y="2" width="116" height="48" rx="8"
        stroke="var(--lime)" strokeWidth="1.2" strokeDasharray="4 3"
        opacity="0.22"
      />
      {/* code text rendered as SVG text */}
      <text
        x="14" y="22"
        fontFamily="monospace" fontSize="11" fill="var(--lime)" opacity="0.7"
      >
        const api =
      </text>
      <text
        x="14" y="38"
        fontFamily="monospace" fontSize="11" fill="var(--mint)" opacity="0.6"
      >
        {'{'}  route(){'}'}  
      </text>
    </svg>
  );
}

// ── Backend / code decoration: horizontal signal line ─────────────────────
function SignalLine() {
  return (
    <svg
      viewBox="0 0 320 24"
      fill="none"
      aria-hidden="true"
      className="absolute"
      style={{bottom: '14%',
        left: '1%',
        width: 'min(38vw, 320px)',
        opacity: 0.14,}}
    >
      {/* dashed line */}
      <line
        x1="0" y1="12" x2="320" y2="12"
        stroke="var(--lime)" strokeWidth="1"
        strokeDasharray="6 5"
      />
      {/* node dots at intervals */}
      {[20, 80, 150, 230, 300].map((cx) => (
        <circle key={cx} cx={cx} cy="12" r="3" fill="var(--lime)" />
      ))}
      {/* small label above centre node */}
      <text
        x="145" y="8"
        fontFamily="monospace" fontSize="7" fill="var(--lime)"
      >
        /api
      </text>
    </svg>
  );
}

// ── Android / mobile decoration: two phone outlines ───────────────────────
function PhoneOutlines() {
  return (
    <>
      {/* larger phone, sits slightly behind */}
      <svg
        viewBox="0 0 54 100"
        fill="none"
        aria-hidden="true"
        className="float-slow absolute"
        style={{left: '6%',
          top: '34%',
          width: 'min(6vw, 54px)',
          opacity: 0.13,
          animationDelay: '0s',}}
      >
        <rect
          x="2" y="2" width="50" height="96" rx="9"
          stroke="var(--lime)" strokeWidth="1.6"
        />
        <line x1="18" y1="92" x2="36" y2="92" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* smaller phone in front, offset + delayed */}
      <svg
        viewBox="0 0 42 78"
        fill="none"
        aria-hidden="true"
        className="float-slow absolute"
        style={{left: '10%',
          top: '42%',
          width: 'min(5vw, 42px)',
          opacity: 0.18,
          animationDelay: '1.8s',}}
      >
        <rect
          x="2" y="2" width="38" height="74" rx="7"
          stroke="var(--mint)" strokeWidth="1.5"
        />
        {/* notch */}
        <rect x="14" y="5" width="14" height="4" rx="2" stroke="var(--mint)" strokeWidth="1" />
        {/* notification badge */}
        <circle cx="36" cy="6" r="4" fill="var(--lime)" opacity="0.9" />
        <text x="33.5" y="9" fontFamily="monospace" fontSize="5" fill="var(--paper)">1</text>
      </svg>
    </>
  );
}

// ── Illustration: sweeping bezier arc ──────────────────────────────────────
function BezierArc() {
  return (
    <svg
      viewBox="0 0 500 220"
      fill="none"
      aria-hidden="true"
      className="absolute"
      style={{top: '4%',
        left: '-2%',
        width: 'min(52vw, 500px)',
        opacity: 0.13,}}
    >
      <path
        d="M 0 200 C 80 50, 280 20, 500 120"
        stroke="var(--lime)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="draw-path"
      />
    </svg>
  );
}

// ── Illustration: crosshair / registration mark ───────────────────────────
function Crosshair() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className="absolute"
      style={{left: '16%',
        top: '55%',
        width: 'min(3.5vw, 36px)',
        opacity: 0.14,}}
    >
      {/* outer circle */}
      <circle cx="20" cy="20" r="16" stroke="var(--lime)" strokeWidth="1" />
      {/* inner circle */}
      <circle cx="20" cy="20" r="4" stroke="var(--lime)" strokeWidth="1" />
      {/* cross lines */}
      <line x1="20" y1="0"  x2="20" y2="14" stroke="var(--lime)" strokeWidth="1" />
      <line x1="20" y1="26" x2="20" y2="40" stroke="var(--lime)" strokeWidth="1" />
      <line x1="0"  y1="20" x2="14" y2="20" stroke="var(--lime)" strokeWidth="1" />
      <line x1="26" y1="20" x2="40" y2="20" stroke="var(--lime)" strokeWidth="1" />
    </svg>
  );
}

// ── Motion graphics: dashed orbit ring around Bugdroid ─────────────────────
function OrbitRing() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      aria-hidden="true"
      className="absolute"
      style={{right: '-4%',
        top: '10%',
        width: 'min(42vw, 380px)',
        opacity: 0.12,
        animation: 'spin-slow 24s linear infinite',
        transformOrigin: '50% 50%',}}
    >
      <circle
        cx="160" cy="160" r="148"
        stroke="var(--lime)" strokeWidth="1.2"
        strokeDasharray="10 7"
      />
      {/* small dot travelling the ring, anchored at top */}
      <circle cx="160" cy="12" r="4" fill="var(--lime)" opacity="0.7" />
    </svg>
  );
}

// ── Motion graphics: arrow chevrons bottom-right ──────────────────────────
function MotionChevrons() {
  return (
    <svg
      viewBox="0 0 120 28"
      fill="none"
      aria-hidden="true"
      className="absolute"
      style={{right: '2%',
        bottom: '8%',
        width: 'min(14vw, 120px)',
        opacity: 0.16,}}
    >
      {[0, 32, 64].map((offset, i) => (
        <g key={i} transform={`translate(${offset}, 0)`} opacity={1 - i * 0.22}>
          <polyline
            points="4,4 14,14 4,24"
            stroke="var(--lime)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>
      ))}
      <line
        x1="4" y1="14" x2="110" y2="14"
        stroke="var(--lime)" strokeWidth="0.8" strokeDasharray="4 4"
        opacity="0.5"
      />
    </svg>
  );
}

// ── Bugdroid ───────────────────────────────────────────────────────────────
function Bugdroid({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 248"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M58 42 L40 12"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M142 42 L160 12"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="40" cy="12" r="6" fill="currentColor" />
      <circle cx="160" cy="12" r="6" fill="currentColor" />
      <path
        d="M36 92c0-36 28-58 64-58s64 22 64 58H36Z"
        fill="currentColor"
      />
      <circle cx="76" cy="66" r="7.5" fill="var(--ink)" />
      <circle cx="124" cy="66" r="7.5" fill="var(--ink)" />
      <rect x="36" y="100" width="128" height="92" rx="14" fill="currentColor" />
      <rect x="8" y="104" width="22" height="72" rx="11" fill="currentColor" />
      <rect x="170" y="104" width="22" height="72" rx="11" fill="currentColor" />
      <rect x="60" y="196" width="28" height="44" rx="14" fill="currentColor" />
      <rect x="112" y="196" width="28" height="44" rx="14" fill="currentColor" />
    </svg>
  );
}

export function Scene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ── existing: dot grid with radial mask ── */}
      <div className="android-grid absolute inset-0" />

      {/* ── existing: green glow top-right ── */}
      <div className="absolute -top-20 right-[-8%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(61,220,132,0.16),transparent_64%)]" />

      {/* ── illustration: sweeping bezier arc (draw-path reveal) ── */}
      <BezierArc />

      {/* ── backend: code label top-left ── */}
      <CodeLabel />

      {/* ── backend: signal / API route line bottom-left ── */}
      <SignalLine />

      {/* ── android: two phone outlines left-center ── */}
      <PhoneOutlines />

      {/* ── illustration: crosshair / registration mark mid-left ── */}
      <Crosshair />

      {/* ── motion graphics: orbit ring around Bugdroid area ── */}
      <OrbitRing />

      {/* ── existing: Android Bugdroid mascot ── */}
      <Bugdroid className="android-mark float-slow absolute right-[4%] top-[22%] h-[min(52vh,22rem)] w-auto text-[#3ddc84]" />

      {/* ── motion graphics: chevron arrows bottom-right ── */}
      <MotionChevrons />
    </div>
  );
}
