"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type CSSProperties } from "react";

type Burst = {
  id: number;
  x: number;
  y: number;
  intensity: number;
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
    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.pointerType === "mouse" && event.button === 2) return;

      const target = event.target as Element | null;
      const isHeaderClick = !!target?.closest("header");
      const isInteractiveElement = !!target?.closest("a, button, [role='button'], input, select, textarea");
      const intensity = isHeaderClick ? 1.75 : isInteractiveElement ? 1.25 : 1.05;

      const burst = { id: nextId++, x: event.clientX, y: event.clientY, intensity };
      setBursts((current) => [...current, burst]);

      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== burst.id));
      }, isHeaderClick ? 1100 : 900);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const burstLayers = (intensity: number): BurstLayer[] => {
    const size = 96 * intensity;
    const ring = 36 * intensity;
    const core = 14 * intensity;
    const sheen = 64 * intensity;

    return [
      {
        className:
          "rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(224,242,254,0.98)_14%,rgba(125,211,252,0.95)_30%,rgba(59,130,246,0.8)_56%,rgba(15,23,42,0)_78%)] blur-[3px] mix-blend-screen",
        style: { width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 },
        initial: { opacity: 1, scale: 0.2 },
        animate: { opacity: [1, 0.85, 0], scale: [0.2, 1.16, 3.4] },
        transition: { duration: 0.95 / intensity, ease: [0.16, 1, 0.3, 1] },
      },
      {
        className:
          "rounded-full border border-sky-100/95 bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.08)_32%,rgba(37,99,235,0.4)_68%,rgba(37,99,235,0)_100%)] shadow-[0_0_32px_rgba(125,211,252,0.58),0_0_72px_rgba(37,99,235,0.3)] backdrop-blur-[1px]",
        style: { width: ring, height: ring, marginLeft: -ring / 2, marginTop: -ring / 2 },
        initial: { opacity: 1, scale: 0.55 },
        animate: { opacity: [1, 0.92, 0], scale: [0.55, 2, 4.9] },
        transition: { duration: 0.85 / intensity, ease: [0.2, 1, 0.34, 1] },
      },
      {
        className:
          "rounded-full border border-white/95 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,1)_0%,rgba(186,230,253,0.98)_28%,rgba(56,189,248,0.7)_58%,rgba(37,99,235,0)_100%)] shadow-[0_0_24px_rgba(255,255,255,0.75)]",
        style: { width: core, height: core, marginLeft: -core / 2, marginTop: -core / 2 },
        initial: { opacity: 1, scale: 0.85 },
        animate: { opacity: [1, 0.98, 0], scale: [0.85, 1.8, 3.1] },
        transition: { duration: 0.65 / intensity, ease: [0.22, 1, 0.36, 1] },
      },
      {
        className:
          "rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.78)_18%,rgba(255,255,255,0.24)_34%,rgba(186,230,253,0.14)_52%,rgba(255,255,255,0)_74%)] blur-[0.8px] mix-blend-screen",
        style: { width: sheen, height: sheen, marginLeft: -sheen / 2, marginTop: -sheen / 2 },
        initial: { opacity: 0, scale: 0.7, rotate: -20 },
        animate: {
          opacity: [0, 0.95, 0],
          x: [-10 * intensity, 12 * intensity],
          y: [-12 * intensity, 8 * intensity],
          scale: [0.7, 1.12, 1.35],
          rotate: [-20, 22, 70],
        },
        transition: { duration: 0.85 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.03 },
      },
    ];
  };

  const burstSparks = (intensity: number): BurstSpark[] => [
    {
      id: "spark-1",
      className: "rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]",
      style: { width: 5 * intensity, height: 5 * intensity, marginLeft: -2.5 * intensity, marginTop: -2.5 * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: { opacity: [0, 1, 0], x: [-8, -20 * intensity], y: [-8, -18 * intensity], scale: [0.8, 1.3, 0.7] },
      transition: { duration: 0.65 / intensity, ease: [0.16, 1, 0.3, 1] },
    },
    {
      id: "spark-2",
      className: "rounded-full bg-sky-100 shadow-[0_0_10px_rgba(125,211,252,0.9)]",
      style: { width: 4 * intensity, height: 4 * intensity, marginLeft: -2 * intensity, marginTop: -2 * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: { opacity: [0, 1, 0], x: [10, 18 * intensity], y: [-6, -14 * intensity], scale: [0.8, 1.2, 0.65] },
      transition: { duration: 0.6 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.03 },
    },
    {
      id: "spark-3",
      className: "rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.85)]",
      style: { width: 3.5 * intensity, height: 3.5 * intensity, marginLeft: -1.75 * intensity, marginTop: -1.75 * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: { opacity: [0, 0.95, 0], x: [-4, -10 * intensity], y: [10, 16 * intensity], scale: [0.8, 1.1, 0.6] },
      transition: { duration: 0.58 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
    },
    {
      id: "spark-4",
      className: "rounded-full bg-sky-200 shadow-[0_0_12px_rgba(186,230,253,0.95)]",
      style: { width: 2.8 * intensity, height: 2.8 * intensity, marginLeft: -1.4 * intensity, marginTop: -1.4 * intensity },
      initial: { opacity: 0, x: 0, y: 0, scale: 0.8 },
      animate: { opacity: [0, 1, 0], x: [6, 16 * intensity], y: [4, 22 * intensity], scale: [0.8, 1.15, 0.65] },
      transition: { duration: 0.62 / intensity, ease: [0.16, 1, 0.3, 1], delay: 0.08 },
    },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div key={burst.id} className="absolute" style={{ left: burst.x, top: burst.y }}>
            {burstLayers(burst.intensity).map((layer, index) => (
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
            {burstSparks(burst.intensity).map((spark) => (
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