"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export function Headshot() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  // Cursor-driven tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), {
    stiffness: 200,
    damping: 22,
  });

  // Scroll parallax — card drifts up slower than the page scrolls
  const { scrollY } = useScroll();
  const parallaxRaw = useTransform(scrollY, [0, 800], [0, -60]);
  const parallaxY = useSpring(parallaxRaw, { stiffness: 100, damping: 30 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  const drawTransition = (delay: number) => ({
    pathLength: { delay, duration: reduce ? 0.001 : 1.2, ease: "easeInOut" as const },
    opacity: { delay, duration: 0.3 },
  });

  return (
    <motion.div
      ref={wrapperRef}
      style={reduce ? undefined : { y: parallaxY }}
      className="mx-auto w-full max-w-[18rem] md:mx-0 md:ml-auto"
    >
      {/* Breathing wrapper — gently scales on a slow loop */}
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.006, 1] }}
        transition={
          reduce
            ? undefined
            : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative"
      >
        {/* Hand-drawn frame */}
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
          strokeLinecap="round"
        >
          <motion.path
            d="M2,2 L98,2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={drawTransition(0.4)}
          />
          <motion.path
            d="M98,2 L98,98"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={drawTransition(0.6)}
          />
          <motion.path
            d="M98,98 L2,98"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={drawTransition(0.8)}
          />
          <motion.path
            d="M2,98 L2,2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={drawTransition(1.0)}
          />
        </motion.svg>

        {/* Corner ticks */}
        {[
          { top: "-0.6rem", left: "-0.6rem", rotate: 0 },
          { top: "-0.6rem", right: "-0.6rem", rotate: 90 },
          { bottom: "-0.6rem", right: "-0.6rem", rotate: 180 },
          { bottom: "-0.6rem", left: "-0.6rem", rotate: 270 },
        ].map((pos, i) => (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 + i * 0.08, duration: 0.4, ease: "easeOut" }}
            className="absolute h-2 w-2 text-accent"
            style={pos}
          >
            <svg viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1">
              <path d={`M0,${pos.rotate < 180 ? 0 : 8} L0,${pos.rotate < 180 ? 8 : 0}`} />
              <path
                d={`M${pos.rotate < 90 || pos.rotate > 270 ? 0 : 8},0 L${pos.rotate < 90 || pos.rotate > 270 ? 8 : 0},0`}
              />
            </svg>
          </motion.span>
        ))}

        {/* Stylized photo */}
        <motion.div
          ref={cardRef}
          onPointerMove={onMove}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={onLeave}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
          style={
            reduce
              ? undefined
              : { rotateX, rotateY, transformPerspective: 900 }
          }
          className="relative aspect-square w-full overflow-hidden rounded-sm border border-[color:var(--rule)]/30 bg-ink will-change-transform"
        >
          <Image
            src="/headshot.jpg"
            alt="Baaqir Yusuf"
            fill
            priority
            sizes="(min-width: 768px) 30vw, 70vw"
            className={
              "object-cover transition-all duration-[900ms] ease-out " +
              (hovered ? "grayscale-0 contrast-100 scale-[1.03]" : "grayscale contrast-125 scale-100")
            }
          />

          {/* Duotone tint */}
          <div
            aria-hidden
            className={
              "pointer-events-none absolute inset-0 transition-opacity duration-[900ms] " +
              (hovered ? "opacity-0" : "opacity-50")
            }
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--accent) 60%, transparent) 0%, color-mix(in oklab, var(--ink) 80%, transparent) 100%)",
              mixBlendMode: "color",
            }}
          />

          {/* Grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Inner accent glow on hover */}
          <div
            aria-hidden
            className={
              "pointer-events-none absolute inset-0 transition-opacity duration-500 " +
              (hovered ? "opacity-100" : "opacity-0")
            }
            style={{
              boxShadow: "inset 0 0 60px color-mix(in oklab, var(--accent) 40%, transparent)",
            }}
          />
        </motion.div>
      </motion.div>

    </motion.div>
  );
}
