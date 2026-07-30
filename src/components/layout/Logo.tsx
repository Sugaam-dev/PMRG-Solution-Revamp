"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ── Standalone mark (used by not-found, etc.) ── */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="PMRG Solution"
      width={152}
      height={64}
      className={cn("h-8 w-auto", className)}
      priority
    />
  );
}

/* ── Primary navbar / footer logo with interactive effects ── */
export function Logo({
  className,
  textClassName,
  scrolled = false,
}: {
  className?: string;
  textClassName?: string;
  scrolled?: boolean;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  /* Detect prefers-reduced-motion once on mount */
  useEffect(() => {
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  /* ── Hover tilt handler ── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      if (prefersReduced) return;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rawX = (e.clientY - cy) / (rect.height / 2);
      const rawY = (e.clientX - cx) / (rect.width / 2);
      setTilt({
        x: Math.max(-6, Math.min(6, -rawX * 6)),
        y: Math.max(-6, Math.min(6, rawY * 6)),
      });
    },
    [prefersReduced]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  /* ── Framer Motion entrance variants ── */
  const entranceInitial = prefersReduced
    ? { opacity: 1, scale: 1 }
    : { opacity: 0, scale: 0.92 };

  const entranceAnimate = { opacity: 1, scale: 1 };

  const entranceTransition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  /* All hover transforms composed into one string — no fighting transitions */
  const hoverScale = isHovered ? 1.05 : 1;
  const composedTransform = `scale(${hoverScale}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 translate-y-0.5", className)}
      aria-label="PMRG Solution — home"
    >
      <span
        ref={wrapRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="logo-tilt-wrapper relative"
        style={{
          perspective: "600px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow ring — behind everything */}
        <span className="logo-glow-ring" aria-hidden />

        {/* Single animated wrapper — entrance + tilt + scale + brightness */}
        <motion.span
          className="logo-img-wrapper relative inline-block"
          initial={entranceInitial}
          animate={entranceAnimate}
          transition={entranceTransition}
          style={{ transform: composedTransform }}
        >
          <Image
            src="/logo.svg"
            alt="PMRG Solution"
            width={380}
            height={160}
            className={cn(
              "w-auto transition-all duration-500",
              scrolled
                ? "h-[58px]"
                : "h-12 sm:h-14 md:h-[4.5rem] lg:h-[76px] lgx:h-[76px] xl:h-[76px]",
              textClassName
            )}
            priority
          />
        </motion.span>
      </span>
    </Link>
  );
}
