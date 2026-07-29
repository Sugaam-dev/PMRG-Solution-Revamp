"use client";

import { useEffect, useRef, useCallback, useState, type ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────
   TeamCardGrid
   ─────────────────────────────────────────────────────────────
   Wraps the team member grid.  On mobile / tablet (< 768 px)
   it uses IntersectionObserver to auto-expand the card closest
   to the viewport centre and collapse it when it scrolls away.
   On desktop (≥ 768 px) it is inert — CSS :hover handles cards.
   ────────────────────────────────────────────────────────────── */

interface TeamCardGridProps {
  children: ReactNode;
  className?: string;
}

export default function TeamCardGrid({ children, className }: TeamCardGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const activeCardRef = useRef<HTMLElement | null>(null);

  /* ── Respond to viewport width changes ─────────────────── */
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mql); // initial check
    mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
  }, []);

  /* ── Clear all active states (used on resize desktop→mobile) */
  const clearActive = useCallback(() => {
    if (activeCardRef.current) {
      activeCardRef.current.classList.remove("team-card--active");
      activeCardRef.current = null;
    }
  }, []);

  /* ── Intersection Observer for scroll-triggered expand ──── */
  useEffect(() => {
    if (!isMobile || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll<HTMLElement>(".team-card");
    if (!cards.length) return;

    /*  The "active zone" is a band at the centre of the viewport.
     *  rootMargin shrinks the observer rect to the middle 30% of
     *  the screen — a card that enters this zone is the one that
     *  the user is naturally looking at.                          */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const card = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            /* Collapse previous card before expanding the new one */
            if (activeCardRef.current && activeCardRef.current !== card) {
              activeCardRef.current.classList.remove("team-card--active");
            }
            card.classList.add("team-card--active");
            activeCardRef.current = card;
          } else if (card === activeCardRef.current) {
            card.classList.remove("team-card--active");
            activeCardRef.current = null;
          }
        }
      },
      {
        /* Shrink the viewport rect so only a small central band counts.
         * -35% top and -35% bottom → only the middle ≈30% of the screen
         * triggers intersection. */
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0.3,
      }
    );

    cards.forEach((c) => observer.observe(c));

    return () => {
      observer.disconnect();
      clearActive();
    };
  }, [isMobile, clearActive]);

  /* ── Tap / click fallback ──────────────────────────────── */
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isMobile) return;

      /* Walk up from the click target to find the .team-card */
      const card = (e.target as HTMLElement).closest<HTMLElement>(".team-card");
      if (!card) return;

      const isAlreadyActive = card.classList.contains("team-card--active");

      /* Collapse previous card */
      if (activeCardRef.current && activeCardRef.current !== card) {
        activeCardRef.current.classList.remove("team-card--active");
      }

      if (isAlreadyActive) {
        card.classList.remove("team-card--active");
        activeCardRef.current = null;
      } else {
        card.classList.add("team-card--active");
        activeCardRef.current = card;
      }
    },
    [isMobile]
  );

  return (
    <div ref={gridRef} className={className} onClick={handleClick}>
      {children}
    </div>
  );
}
