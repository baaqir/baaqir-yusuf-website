import Link from "next/link";
import { PullQuote } from "@/components/motion/pull-quote";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-32 border-t border-[color:var(--rule)]/70 bg-[color:var(--paper-warm)]"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:px-10 md:py-28">
        <PullQuote quotes={profile.quotes} />

        <div className="hr-rule" />

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="smallcaps mb-4">Elsewhere</div>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group inline-flex items-baseline gap-2 font-serif text-lg text-ink/90 hover:text-ink transition-colors"
                  >
                    <span className="ink-link">{s.label}</span>
                    <span className="text-muted text-sm">{s.handle}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="smallcaps mb-4">Site</div>
            <ul className="space-y-2 font-serif text-lg">
              <li>
                <Link href="/#about" className="ink-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#work" className="ink-link">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="ink-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/writing" className="ink-link">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="ink-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="smallcaps mb-4">Want to talk?</div>
            <p className="font-serif text-lg leading-relaxed text-ink/85">
              I love meeting new people. Always happy to connect, swap notes, or figure out how we
              can help each other.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block font-display text-2xl text-accent ink-link"
            >
              Say hello →
            </Link>
          </div>
        </div>

        <div className="hr-rule" />

        <div className="flex flex-col gap-2 smallcaps md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}.
          </span>
          <span>
            Last updated{" "}
            {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
          </span>
        </div>
      </div>
    </footer>
  );
}
