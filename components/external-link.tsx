"use client";

import React, { forwardRef, useCallback, useRef, useState } from "react";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  function ExternalLink({ href, children, onClick, ...props }, forwardedRef) {
    const [pending, setPending] = useState<string | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!href.startsWith("http://") && !href.startsWith("https://")) return;

        // Run the consumer's onClick first (e.g. SteamBox first-tap guard).
        // If it called e.preventDefault(), they're handling navigation themselves
        // — bail out and don't show the dialog.
        onClick?.(e);
        if (e.defaultPrevented) return;

        e.preventDefault();
        setPending(href);
        const el = dialogRef.current;
        if (!el) return;
        el.showModal();
      },
      [href, onClick],
    );

    // Animate out then close
    const closeWithAnimation = (afterClose?: () => void) => {
      const el = dialogRef.current;
      if (!el) return;
      el.classList.add("is-closing");
      const onEnd = () => {
        el.removeEventListener("animationend", onEnd);
        el.classList.remove("is-closing");
        el.close();
        afterClose?.();
      };
      el.addEventListener("animationend", onEnd);
    };

    const confirm = () => {
      const url = pending;
      closeWithAnimation(() => {
        if (url) window.open(url, "_blank", "noopener,noreferrer");
        setPending(null);
      });
    };

    const cancel = () => {
      closeWithAnimation(() => setPending(null));
    };

    let displayHost = "";
    try {
      displayHost = new URL(href).hostname.replace(/^www\./, "");
    } catch {
      displayHost = href;
    }

    const isPlaceholder = href === "#" || href.startsWith("#");

    return (
      <>
        <a ref={forwardedRef} href={href} onClick={handleClick} {...props}>
          {children}
          {isPlaceholder && (
            <span className="wip-badge" aria-label="Work in progress" aria-hidden="true">
              [ soon ]
            </span>
          )}
        </a>

        <dialog ref={dialogRef} className="exit-dialog" onClick={(e) => e.target === dialogRef.current && cancel()}>
          <div className="exit-dialog__inner">
            <p className="exit-dialog__label">You&apos;re redirecting to</p>
            <p className="exit-dialog__host">{displayHost}</p>
            <p className="exit-dialog__sub">This link opens in a new tab.</p>
            <div className="exit-dialog__actions">
              <button className="exit-dialog__cancel" onClick={cancel}>
                Cancel
              </button>
              <button className="exit-dialog__confirm" onClick={confirm} autoFocus>
                Continue →
              </button>
            </div>
          </div>
        </dialog>
      </>
    );
  }
);
