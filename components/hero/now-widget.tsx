"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

type NowItem = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const items: NowItem[] = [
  {
    label: "Currently",
    value: `${profile.currently.role} at ${profile.currently.at}`,
    href: profile.currently.href,
    external: true,
  },
  ...profile.marginalia.map((m) => {
    const item: NowItem = { label: m.label, value: m.value };
    if (m.label === "Next trip" || m.label === "Based in") item.href = "/travel";
    if (m.label === "Reading") item.href = "/writing";
    return item;
  }),
];

const ROTATE_MS = 4500;

export function NowWidget() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const item = items[index];

  const ValueEl = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="smallcaps text-muted/80">{item.label}</div>
        <div className="mt-1 font-display text-xl tracking-[-0.01em] text-ink md:text-2xl">
          {item.value}
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (!item.href) return <div className="block">{children}</div>;
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="block transition-colors hover:text-accent"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={item.href} className="block transition-colors hover:text-accent">
        {children}
      </Link>
    );
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full max-w-xs rounded-md border border-[color:var(--rule)] bg-[color:var(--paper-warm)]/60 px-5 py-4 backdrop-blur-sm md:max-w-sm"
      aria-live="polite"
    >
      <Wrapper>{ValueEl}</Wrapper>

      <div className="mt-4 flex items-center gap-1.5">
        {items.map((it, i) => (
          <button
            key={it.label}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${it.label}`}
            className={
              "h-1 rounded-full transition-all " +
              (i === index ? "w-6 bg-accent" : "w-1.5 bg-[color:var(--rule)] hover:bg-muted")
            }
          />
        ))}
      </div>
    </div>
  );
}
