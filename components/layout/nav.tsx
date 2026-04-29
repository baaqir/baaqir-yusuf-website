import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CollectionsMenu } from "./collections-menu";
import { MobileMenu } from "./mobile-menu";
import { profile } from "@/content/profile";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Writing", href: "/writing" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-[color:var(--paper)]/70 border-b border-[color:var(--rule)]/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 font-display text-[1.15rem] tracking-tight"
        >
          <span className="transition-[letter-spacing] duration-300 group-hover:tracking-wide">
            {profile.name}
          </span>
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.95rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink/80 hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CollectionsMenu />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline smallcaps text-ink hover:text-accent transition-colors"
          >
            Say hello
          </Link>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
