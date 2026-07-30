"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type IconPressProps = {
  children: React.ReactNode;
  className?: string;
};

export function IconPress({ children, className }: IconPressProps) {
  return (
    <motion.span
      aria-hidden
      className={cn("inline-flex origin-center will-change-transform", className)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9, rotate: -6 }}
      transition={{ type: "spring", stiffness: 520, damping: 24, mass: 0.45 }}
    >
      {children}
    </motion.span>
  );
}
