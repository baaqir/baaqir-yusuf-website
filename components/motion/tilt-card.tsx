"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
  const shadowX = useTransform(x, [-0.5, 0.5], [18, -18]);
  const shadowY = useTransform(y, [-0.5, 0.5], [18, -18]);
  const shadow = useTransform(
    [x, y, shadowX, shadowY],
    ([cx, cy, sx, sy]) => {
      const intensity = Math.min(1, (Math.abs(cx as number) + Math.abs(cy as number)) * 2);
      const opacity = 0.18 * intensity;
      return `${sx}px ${sy}px 40px -20px rgba(0,0,0,${opacity})`;
    },
  );

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={
        reduce
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900, boxShadow: shadow as unknown as string }
      }
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
