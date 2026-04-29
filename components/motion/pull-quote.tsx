"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Quote = { text: string; author: string };

const ROTATE_MS = 9000;

export function PullQuote({
  quotes,
  className,
}: {
  quotes: readonly Quote[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (quotes.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [quotes.length]);

  const current = quotes[index];

  return (
    <figure className={className}>
      <motion.span
        aria-hidden
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="block font-display text-[7rem] leading-none text-accent/60 md:text-[9rem]"
      >
        “
      </motion.span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <blockquote className="font-display text-3xl leading-[1.15] tracking-[-0.01em] text-ink md:text-[2.75rem]">
            {current.text}
          </blockquote>
          {current.author ? (
            <figcaption className="smallcaps mt-6">— {current.author}</figcaption>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </figure>
  );
}
