"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--rule)] text-ink transition hover:bg-[color:var(--highlight)]/40"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <Moon className="h-4 w-4" strokeWidth={1.5} />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
