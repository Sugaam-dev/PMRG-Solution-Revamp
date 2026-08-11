"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Team member type ─────────────────────────────────────────── */

export interface MeetTeamMember {
  name: string;
  firstName: string;
  lastName: string;
  position: string;
  image: string;
}

interface MeetTheTeamProps {
  members: MeetTeamMember[];
  /** Auto-cycle interval in ms (default 5000) */
  interval?: number;
}

/* ── Easing curves ────────────────────────────────────────────── */
const smoothEase = [0.22, 1, 0.36, 1] as const;
const gentleEase = [0.4, 0, 0.2, 1] as const;

/* ── Component ───────────────────────────────────────────────── */

export default function MeetTheTeam({
  members,
  interval = 5000,
}: MeetTheTeamProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState(1);
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  /* ── Auto-cycle — advances every `interval` ms ───────────── */
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % members.length);
    }, interval);
  }, [members.length, interval, clearTimer]);

  /* Start on mount, restart when unpaused */
  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      clearTimer();
    }
    return clearTimer;
  }, [isPaused, startTimer, clearTimer]);

  /* ── Interaction handlers ────────────────────────────────── */
  const handleSelect = useCallback(
    (index: number) => {
      setDirection(index > activeIndexRef.current ? 1 : -1);
      setActiveIndex(index);
      /* Reset timer so full interval runs from this point */
      if (!isPaused) startTimer();
    },
    [isPaused, startTimer]
  );

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  const active = members[activeIndex];

  /* ── Image transition variants ───────────────────────────── */
  const imageVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.08,
      x: dir > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.97,
      x: dir > 0 ? -20 : 20,
    }),
  };

  /* ── Floating card variants ──────────────────────────────── */
  const cardVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
    },
  };

  return (
    <div
      className="meet-team-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Main image showcase ─────────────────────────────── */}
      <div className="meet-team-showcase">
        {/* Crossfade images with Framer Motion */}
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.9, ease: smoothEase as unknown as number[] },
              scale: { duration: 1.1, ease: gentleEase as unknown as number[] },
              x: { duration: 0.9, ease: smoothEase as unknown as number[] },
            }}
            className="meet-team-img meet-team-img--active"
          >
            <Image
              src={active.image}
              alt={active.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay for readability */}
        <div className="meet-team-img-overlay" />

        {/* ── Floating glassmorphic name card ─────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-${activeIndex}`}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: smoothEase as unknown as number[],
            }}
            className="meet-team-floating-card"
          >
            <span className="meet-team-floating-role">{active.position}</span>
            <h3 className="meet-team-floating-name">{active.name}</h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Name sidebar ────────────────────────────────────── */}
      <nav className="meet-team-sidebar" aria-label="Team members">
        {members.map((member, i) => {
          const isActive = i === activeIndex;

          return (
            <motion.button
              key={member.name}
              className={`meet-team-sidebar-item ${
                isActive ? "meet-team-sidebar-item--active" : ""
              }`}
              onClick={() => handleSelect(i)}
              onMouseEnter={() => handleSelect(i)}
              aria-pressed={isActive}
              layout
              transition={{
                layout: { duration: 0.5, ease: smoothEase as unknown as number[] },
              }}
            >
              {/* Left accent line — animated */}
              <motion.span
                className="meet-team-accent-line"
                animate={{
                  scaleY: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: smoothEase as unknown as number[] }}
              />

              {/* Active glow dot */}
              <motion.span
                className="meet-team-sidebar-dot"
                animate={{
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: smoothEase as unknown as number[] }}
              />

              {/* Name — animated size/color/weight */}
              <motion.div
                className="meet-team-sidebar-name-wrap"
                animate={{
                  opacity: isActive ? 1 : 0.35,
                }}
                transition={{ duration: 0.5, ease: smoothEase as unknown as number[] }}
              >
                <motion.span
                  className={`meet-team-sidebar-fullname ${
                    isActive ? "meet-team-sidebar-fullname--active" : ""
                  }`}
                  layout="position"
                  transition={{
                    layout: { duration: 0.45, ease: smoothEase as unknown as number[] },
                  }}
                >
                  <span className="meet-team-sidebar-fname">
                    {member.firstName}
                  </span>{" "}
                  <span className="meet-team-sidebar-lname">
                    {member.lastName}
                  </span>
                </motion.span>

                {/* Role — only shows on active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      className="meet-team-sidebar-role"
                      initial={{ opacity: 0, height: 0, y: -4 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -4 }}
                      transition={{
                        duration: 0.4,
                        ease: smoothEase as unknown as number[],
                      }}
                    >
                      {member.position}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
