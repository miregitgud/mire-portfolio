"use client";

import { useEffect, useRef, useState } from "react";

import { contact } from "@/lib/content";
import { ExternalLink } from "@/components/external-link";

type Props = {
  onActiveChange?: (active: boolean) => void;
};

export function SteamBox({ onActiveChange }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const pointerType = useRef<string>("mouse");
  // touch only: true after the first tap (pill open, link not yet followed)
  const [armed, setArmed] = useState(false);

  // while armed, a tap anywhere else closes the pill again
  useEffect(() => {
    if (!armed) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setArmed(false);
        onActiveChange?.(false);
      }
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [armed, onActiveChange]);

  return (
    <ExternalLink
      ref={ref}
      href={contact.steam}
      aria-label="Add me on Steam"
      data-open={armed}
      onPointerDown={(e) => {
        pointerType.current = (e as React.PointerEvent).pointerType;
      }}
      onPointerEnter={(e) => {
        if ((e as React.PointerEvent).pointerType === "mouse") onActiveChange?.(true);
      }}
      onPointerLeave={(e) => {
        if ((e as React.PointerEvent).pointerType === "mouse") onActiveChange?.(false);
      }}
      onKeyDown={() => {
        pointerType.current = "mouse";
      }}
      onClick={(e) => {
        const isTouch = pointerType.current !== "mouse";
        if (isTouch && !armed) {
          e.preventDefault();
          setArmed(true);
          onActiveChange?.(true);
          return;
        }
        if (armed) {
          window.setTimeout(() => {
            setArmed(false);
            onActiveChange?.(false);
          }, 400);
        }
      }}
      onFocus={(e) => {
        if (e.currentTarget.matches(":focus-visible")) onActiveChange?.(true);
      }}
      onBlur={() => {
        setArmed(false);
        onActiveChange?.(false);
      }}
      className="
        steam-hint group relative mt-6 inline-flex items-center overflow-hidden
        rounded-sm border border-paper/20 bg-paper/5
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        w-8 h-8
        hover:w-[28rem] hover:max-w-[calc(100vw-3rem)] hover:h-9
        hover:border-[#4c6b8a]/60 hover:bg-[#1b2838]
        hover:rounded-full hover:px-3
        focus-visible:w-[28rem] focus-visible:max-w-[calc(100vw-3rem)] focus-visible:h-9
        focus-visible:border-[#4c6b8a]/60 focus-visible:bg-[#1b2838]
        focus-visible:rounded-full focus-visible:px-3
        data-[open=true]:w-[28rem] data-[open=true]:max-w-[calc(100vw-3rem)] data-[open=true]:h-9
        data-[open=true]:border-[#4c6b8a]/60 data-[open=true]:bg-[#1b2838]
        data-[open=true]:rounded-full data-[open=true]:px-3
      "
    >
      {/* 8-bit ? — visible by default, fades out when open */}
      <span
        className="
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-200
          opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0
          group-data-[open=true]:opacity-0
        "
        aria-hidden="true"
      >
        <svg viewBox="0 0 7 9" width="14" height="14" style={{ imageRendering: "pixelated" }} fill="currentColor" className="text-paper/60">
          {/* 8-bit ? pixels */}
          <rect x="1" y="0" width="5" height="1"/>
          <rect x="0" y="1" width="1" height="2"/>
          <rect x="6" y="1" width="1" height="2"/>
          <rect x="5" y="2" width="1" height="1"/>
          <rect x="4" y="3" width="1" height="1"/>
          <rect x="3" y="4" width="1" height="1"/>
          <rect x="3" y="6" width="1" height="1"/>
        </svg>
      </span>

      {/* expanded content — hidden by default, fades in when open */}
      <span
        className="
          flex min-w-max items-center gap-2.5
          opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100
          group-data-[open=true]:opacity-100
          transition-opacity duration-300 delay-150
        "
      >
        {/* Steam icon */}
        <svg width="17" height="13" viewBox="0 0 24 24" fill="#c7d5e0" className="flex-shrink-0" aria-hidden="true">
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273.012c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
        </svg>
        <span className="font-mono text-[10px] tracking-[0.08em] text-[#c7d5e0]/80 whitespace-nowrap">
          <span className="hidden sm:inline">our taste in games might align — add me on Steam!</span>
          <span className="sm:hidden">our taste in games might align — add me!</span>
        </span>
        {/* pixel arrow */}
        <svg viewBox="0 0 8 8" width="8" height="8" fill="#c7d5e0" style={{ imageRendering: "pixelated" }} className="flex-shrink-0 opacity-50" aria-hidden="true">
          <rect x="0" y="3" width="5" height="2"/>
          <rect x="4" y="1" width="2" height="2"/>
          <rect x="4" y="5" width="2" height="2"/>
          <rect x="6" y="2" width="2" height="4"/>
        </svg>
      </span>
    </ExternalLink>
  );
}