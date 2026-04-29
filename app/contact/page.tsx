import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { socials } from "@/content/socials";
import { profile } from "@/content/profile";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Always happy to connect, swap notes, or figure out how we can help each other.",
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <Reveal>
          <div className="smallcaps mb-4">Say hello</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Contact<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 font-serif text-xl text-ink/85">
            I love meeting new people. Always happy to connect, swap notes, or figure out how we
            can help each other.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16 divide-y divide-[color:var(--rule)]/60 border-y border-[color:var(--rule)]/60">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-4 py-5 transition-colors hover:bg-[color:var(--highlight)]/30"
              >
                <div>
                  <div className="font-display text-2xl tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
                    {s.label}
                  </div>
                  <div className="mt-0.5 font-serif text-[1rem] text-ink/65">{s.handle}</div>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-16 font-serif text-[1rem] text-ink/65">
            Based in {profile.location}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
