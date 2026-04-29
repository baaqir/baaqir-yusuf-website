"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";

// A hand-drawn style wordmark — SVG paths stroke in on mount,
// and shimmer toward the accent color on hover.
export function Signature({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: 0.15 + i * 0.12,
          duration: reduce ? 0.001 : 1.2,
          ease: "easeInOut" as const,
        },
        opacity: { delay: 0.15 + i * 0.12, duration: 0.2 },
      },
    }),
  };

  return (
    <motion.svg
      viewBox="0 0 360 110"
      className={className}
      aria-hidden
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "var(--accent)" : undefined,
        filter: hovered
          ? "drop-shadow(0 0 8px color-mix(in oklab, var(--accent) 50%, transparent))"
          : "none",
        transition: "color 350ms ease-out, filter 350ms ease-out",
      }}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* "b" */}
      <motion.path d="M20,20 C20,60 20,80 22,95 M22,60 C34,48 56,48 62,66 C66,82 52,94 38,92 C30,91 24,86 22,80" custom={0} variants={draw} />
      {/* "a" */}
      <motion.path d="M80,72 C74,58 96,52 104,62 C108,70 108,82 106,92 M106,72 C96,72 82,74 82,84 C82,94 100,94 106,86" custom={1} variants={draw} />
      {/* "a" */}
      <motion.path d="M126,72 C120,58 142,52 150,62 C154,70 154,82 152,92 M152,72 C142,72 128,74 128,84 C128,94 146,94 152,86" custom={2} variants={draw} />
      {/* "q" */}
      <motion.path d="M196,72 C186,60 168,68 168,82 C168,96 186,100 196,88 M196,60 C196,84 196,96 198,104" custom={3} variants={draw} />
      {/* "i" */}
      <motion.path d="M214,58 L214,92" custom={4} variants={draw} />
      <motion.circle cx={214} cy={48} r={1.8} fill="currentColor" stroke="none" custom={4} variants={draw} />
      {/* "r" */}
      <motion.path d="M230,60 L230,92 M230,68 C234,60 242,56 250,60" custom={5} variants={draw} />
      {/* swash underline */}
      <motion.path
        d="M16,100 C90,108 200,106 280,96 C300,94 310,92 320,88"
        custom={6}
        variants={draw}
        stroke="currentColor"
        strokeWidth={1.25}
        opacity={0.7}
      />
    </motion.svg>
  );
}
