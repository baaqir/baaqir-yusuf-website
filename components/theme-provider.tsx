"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const COOKIE_KEY = "theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readCookie(): Theme {
  if (typeof document === "undefined") return "system";
  const match = document.cookie.match(/(?:^|;\s*)theme=([^;]+)/);
  const value = match?.[1];
  return value === "light" || value === "dark" ? value : "system";
}

function writeCookie(theme: Theme) {
  if (theme === "system") {
    document.cookie = `${COOKIE_KEY}=; path=/; max-age=0; samesite=lax`;
  } else {
    document.cookie = `${COOKIE_KEY}=${theme}; path=/; max-age=31536000; samesite=lax`;
  }
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
}

function applyClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  if (theme !== "system") root.classList.add(theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const stored = readCookie();
    setThemeState(stored);
    setResolvedTheme(stored === "system" ? getSystemTheme() : stored);
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia(MEDIA_QUERY);
    const handler = () => setResolvedTheme(getSystemTheme());
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    writeCookie(next);
    applyClass(next);
    setResolvedTheme(next === "system" ? getSystemTheme() : next);
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
