"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  {
    label: "Site",
    items: [
      { label: "About", href: "/#about" },
      { label: "Work", href: "/#work" },
      { label: "Projects", href: "/#projects" },
      { label: "Writing", href: "/writing" },
    ],
  },
  {
    label: "Collections",
    items: [
      { label: "Travel", href: "/travel" },
      { label: "Photos", href: "/photos" },
      { label: "Music", href: "/music" },
      { label: "Movies", href: "/movies" },
      { label: "Food", href: "/food" },
    ],
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--rule)] text-ink hover:bg-[color:var(--highlight)]/40 transition"
      >
        <Menu className="h-4 w-4" strokeWidth={1.5} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[color:var(--paper)]">
          <div className="flex items-center justify-between border-b border-[color:var(--rule)]/60 px-6 py-4">
            <span className="font-display text-[1.15rem]">
              Menu<span className="text-accent">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--rule)] text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-6 py-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.label}>
                  <div className="smallcaps mb-4">{section.label}</div>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="font-display text-3xl tracking-[-0.01em] text-ink hover:text-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <div className="smallcaps mb-4">Say hello</div>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl tracking-[-0.01em] text-accent ink-link"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
