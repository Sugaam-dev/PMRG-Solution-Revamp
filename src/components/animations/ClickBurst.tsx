"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type CSSProperties } from "react";

type Burst = {
  id: number;
  x: number;
  y: number;
  intensity: number;
  mode: "default" | "nav" | "hold";
};

type BurstLayer = {
  className: string;
  style: CSSProperties;
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition: Record<string, unknown>;
};

type BurstSpark = {
  id: string;
  className: string;
  style: CSSProperties;
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition: Record<string, unknown>;
};

export default function ClickBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let nextId = 0;
    let holdTimer: number | null = null;
    let holdPulseTimer: number | null = null;
    let activeHoldPoint: { x: number; y: number } | null = null;

    const clearHoldTimers = () => {
      if (holdTimer !== null) window.clearTimeout(holdTimer);
      if (holdPulseTimer !== null) window.clearInterval(holdPulseTimer);
      holdTimer = null;
      holdPulseTimer = null;
      activeHoldPoint = null;
    };

    const spawnBurst = (x: number, y: number, intensity: number, mode: Burst["mode"]) => {
      const burst = { id: nextId++, x, y, intensity, mode };
      setBursts((current) => [...current, burst]);

      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== burst.id));
      }, mode === "hold" ? 720 : mode === "nav" ? 520 : 900);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.pointerType === "mouse" && event.button === 2) return;

      const target = event.target as Element | null;
      const isHeaderClick = !!target?.closest("header");
      const isNavClick = !!target?.closest("header nav a, header nav button, header [aria-label='Open menu']");
      const isInteractiveElement = !!target?.closest("a, button, [role='button'], input, select, textarea");
      const intensity = isNavClick ? 0.48 : isHeaderClick ? 1.15 : isInteractiveElement ? 1.15 : 1.05;

      if (isNavClick) {
        spawnBurst(event.clientX, event.clientY, intensity, "nav");

        if (target?.closest("header nav button")) {
          activeHoldPoint = { x: event.clientX, y: event.clientY };
          holdTimer = window.setTimeout(() => {
            if (!activeHoldPoint) return;
            spawnBurst(activeHoldPoint.x, activeHoldPoint.y, 0.42, "hold");
            holdPulseTimer = window.setInterval(() => {
              if (!activeHoldPoint) return;
              spawnBurst(activeHoldPoint.x, activeHoldPoint.y, 0.38, "hold");
            }, 170);
          }, 220);
        }
      } else {
        spawnBurst(event.clientX, event.clientY, intensity, isHeaderClick ? "default" : "default");
      }

      const cancelHold = () => clearHoldTimers();
      window.addEventListener("pointerup", cancelHold, { once: true });
      window.addEventListener("pointercancel", cancelHold, { once: true });
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      clearHoldTimers();
    };
  }, []);

  const burstLayers = (intensity: number, mode: Burst["mode"]): BurstLayer[] => {
    const sizeScale = mode === "nav" ? 0.72 : mode === "hold" ? 0.58 : 1;
    const ringScale = mode === "nav" ? 0.7 : mode === "hold" ? 0.62 : 1;
    const coreScale = mode === "nav" ? 0.72 : mode === "hold" ? 0.55 : 1;
    const sheenScale = mode === "nav" ? 0.68 : mode === "hold" ? 0.58 : 1;
    const size = 62 * intensity * sizeScale;
    const ring = 24 * intensity * ringScale;
    const core = 8 * intensity * coreScale;
    const sheen = 38 * intensity * sheenScale;

    return [
      {
        className:
          "rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(224,242,254,0.98)_14%,rgba(125,211,252,0.95)_30%,rgba(59,130,246,0.8)_56%,rgba(15,23,42,0)_78%)] blur-[3px] mix-blend-screen",
        style: { width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 },
        initial: { opacity: 1, scale: 0.2 },
        animate: { opacity: [1, 0.82, 0], scale: mode === "hold" ? [0.18, 0.82, 1.8] : [0.2, 1.08, 2.7] },
        transition: { duration: 0.95 / intensity, ease: [0.16, 1, 0.3, 1] },
      },
      {
        className:
          "rounded-full border border-sky-100/95 bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.08)_32%,rgba(37,99,235,0.4)_68%,rgba(37,99,235,0)_100%)] shadow-[0_0_32px_rgba(125,211,252,0.58),0_0_72px_rgba(37,99,235,0.3)] backdrop-blur-[1px]",
        style: { width: ring, height: ring, marginLeft: -ring / 2, marginTop: -ring / 2 },
        initial: { opacity: 1, scale: 0.55 },
        animate: { opacity: [1, 0.9, 0], scale: mode === "hold" ? [0.5, 1.2, 2.2] : [0.55, 1.7, 3.8] },
        transition: { duration: 0.85 / intensity, ease: [0.2, 1, 0.34, 1] },
      },
      {
        className:
          "rounded-full border border-white/95 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,1)_0%,rgba(186,230,253,0.98)_28%,rgba(56,189,248,0.7)_58%,rgba(37,99,235,0)_100%)] shadow-[0_0_24px_rgba(255,255,255,0.75)]",
        style: { width: core, height: core, marginLeft: -core / 2, marginTop: -core / 2 },
        initial: { opacity: 1, scale: 0.85 },
        animate: { opacity: [1, 0.96, 0], scale: mode === "hold" ? [0.8, 1.18, 1.8] : [0.85, 1.5, 2.4] },
        transition: { duration: 0.65 / intensity, ease: [0.22, 1, 0.36, 1] },
      },
      {
        className:
          "rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.78)_18%,rgba(255,255,255,0.24)_34%,rgba(186,230,253,0.14)_52%,rgba(255,255,255,0)_74%)] blur-[0.8px] mix-blend-screen",
        style: { width: sheen, height: sheen, marginLeft: -sheen / 2, marginTop: -sheen / 2 },
        initial: { opacity: 0, scale: 0.7, rotate: -20 },
        animate: {
          opacity: [0, 0.95, 0],
          x: mode === "hold" ? [-4 * intensity, 5 * intensity] : [-8 * intensity, 10 * intensity],
          y: mode === "hold" ? [-5 * intensity, 4 * intensity] : [-9 * intensity, 6 * intensity],
          scale: mode === "hold" ? [0.7, 0.95, 1.08] : [0.7, 1.04, 1.2],
          rotate: [-20, 22, 70],
        },
        transition: { duration: 0.85 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.03 },
      },
      ...(mode === "nav"
        ? [
            {
              className:
                "rounded-full border border-cyan-100/90 bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(125,211,252,0.82)_32%,rgba(14,165,233,0.46)_62%,rgba(14,165,233,0)_100%)] shadow-[0_0_24px_rgba(56,189,248,0.65),0_0_48px_rgba(59,130,246,0.3)]",
              style: {
                width: 12 * intensity,
                height: 12 * intensity,
                marginLeft: -6 * intensity,
                marginTop: -6 * intensity,
              },
              initial: { opacity: 0, x: 0, y: 0, scale: 0.4 },
              animate: {
                opacity: [0, 1, 0],
                x: [-4 * intensity, 10 * intensity, 3 * intensity, -8 * intensity],
                y: [-8 * intensity, -2 * intensity, 9 * intensity, 3 * intensity],
                scale: [0.4, 1, 0.82, 0.55],
                rotate: [0, 70, 160, 260],
              },
              transition: { duration: 0.58 / intensity, ease: [0.2, 1, 0.3, 1], delay: 0.01 },
            },
            {
              className:
                "rounded-full border border-white/90 bg-[conic-gradient(from_90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.9)_20%,rgba(125,211,252,0.85)_42%,rgba(255,255,255,0.12)_60%,rgba(255,255,255,0)_100%)] mix-blend-screen",
              style: {
                width: 28 * intensity,
                height: 28 * intensity,
                marginLeft: -14 * intensity,
                marginTop: -14 * intensity,
              },
              initial: { opacity: 0, scale: 0.35, rotate: -20 },
              animate: {
                opacity: [0, 0.9, 0],
                scale: [0.35, 0.82, 1.02],
                rotate: [-20, 110, 260],
              },
              transition: { duration: 0.52 / intensity, ease: [0.22, 1, 0.36, 1] },
            },
          ]
        : []),
    ];
  };

  const burstSparks = (intensity: number, mode: Burst["mode"]): BurstSpark[] => [
    {
      id: "spark-1",
      className: "rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]",
      style: { width: (mode === "hold" ? 2.4 : 3.5) * intensity, height: (mode === "hold" ? 2.4 : 3.5) * intensity, marginLeft: -(mode === "hold" ? 1.2 : 1.75) * intensity, marginTop: -(mode === "hold" ? 1.2 : 1.75) * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: {
        opacity: [0, 1, 0],
        x: mode === "nav" ? [-6, -12 * intensity, -18 * intensity] : [-8, -20 * intensity],
        y: mode === "nav" ? [-6, -2 * intensity, -14 * intensity] : [-8, -18 * intensity],
        scale: mode === "nav" ? [0.8, 1.08, 0.72] : [0.8, 1.3, 0.7],
      },
      transition: { duration: 0.65 / intensity, ease: [0.16, 1, 0.3, 1] },
    },
    {
      id: "spark-2",
      className: "rounded-full bg-sky-100 shadow-[0_0_10px_rgba(125,211,252,0.9)]",
      style: { width: (mode === "hold" ? 2 : 3) * intensity, height: (mode === "hold" ? 2 : 3) * intensity, marginLeft: -(mode === "hold" ? 1 : 1.5) * intensity, marginTop: -(mode === "hold" ? 1 : 1.5) * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: {
        opacity: [0, 1, 0],
        x: mode === "nav" ? [8, 16 * intensity, 24 * intensity] : [10, 18 * intensity],
        y: mode === "nav" ? [-4, 3 * intensity, -10 * intensity] : [-6, -14 * intensity],
        scale: mode === "nav" ? [0.8, 1.08, 0.62] : [0.8, 1.2, 0.65],
      },
      transition: { duration: 0.6 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.03 },
    },
    {
      id: "spark-3",
      className: "rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.85)]",
      style: { width: (mode === "hold" ? 1.8 : 2.6) * intensity, height: (mode === "hold" ? 1.8 : 2.6) * intensity, marginLeft: -(mode === "hold" ? 0.9 : 1.3) * intensity, marginTop: -(mode === "hold" ? 0.9 : 1.3) * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: {
        opacity: [0, 0.95, 0],
        x: mode === "nav" ? [-2, 8 * intensity, 14 * intensity] : [-4, -10 * intensity],
        y: mode === "nav" ? [8, 16 * intensity, 6 * intensity] : [10, 16 * intensity],
        scale: mode === "nav" ? [0.8, 1.02, 0.58] : [0.8, 1.1, 0.6],
      },
      transition: { duration: 0.58 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
    },
    {
      id: "spark-4",
      className: "rounded-full bg-sky-200 shadow-[0_0_12px_rgba(186,230,253,0.95)]",
      style: { width: (mode === "hold" ? 1.5 : 2.2) * intensity, height: (mode === "hold" ? 1.5 : 2.2) * intensity, marginLeft: -(mode === "hold" ? 0.75 : 1.1) * intensity, marginTop: -(mode === "hold" ? 0.75 : 1.1) * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: {
        opacity: [0, 1, 0],
        x: mode === "nav" ? [4, 12 * intensity, 20 * intensity] : [6, 16 * intensity],
        y: mode === "nav" ? [3, 14 * intensity, 18 * intensity] : [4, 22 * intensity],
        scale: mode === "nav" ? [0.8, 1.05, 0.6] : [0.8, 1.15, 0.65],
      },
      transition: { duration: 0.62 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.08 },
    },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div key={burst.id} className="absolute" style={{ left: burst.x, top: burst.y }}>
            {burstLayers(burst.intensity, burst.mode).map((layer, index) => (
              <motion.span
                key={`${burst.id}-${index}`}
                className={`absolute ${layer.className}`}
                style={layer.style}
                initial={layer.initial}
                animate={layer.animate}
                exit={{ opacity: 0 }}
                transition={layer.transition}
              />
            ))}
            {burstSparks(burst.intensity, burst.mode).map((spark) => (
              <motion.span
                key={`${burst.id}-${spark.id}`}
                className={`absolute ${spark.className}`}
                style={spark.style}
                initial={spark.initial}
                animate={spark.animate}
                exit={{ opacity: 0 }}
                transition={spark.transition}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}