import { projects } from "@/content/projects";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[color:var(--rule)]/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-4xl tracking-[-0.01em] md:text-5xl">Projects</h2>
            <span className="smallcaps hidden md:inline">Things I&apos;ve built</span>
          </div>
          <p className="mt-5 max-w-2xl font-serif text-lg italic text-ink/75 md:text-xl">
            I really enjoy building things from zero. Each of these started as a question I
            wanted to answer and became an excuse to learn something new. They all ended up
            actually useful, and quite fun to make. Feel free to check them out and give me your
            honest feedback.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, idx) => {
            const isPreview = !p.href && (p.status === "WIP" || p.status === "Coming soon");
            const cardHref = p.href ?? (isPreview ? "/contact" : null);
            const isExternal = !!p.href;

            return (
              <Reveal key={p.name} delay={idx * 0.04}>
                <TiltCard className="h-full">
                  <article
                    className={
                      "group relative h-full rounded-lg border border-[color:var(--rule)] bg-[color:var(--paper-warm)] p-7 transition-colors " +
                      (cardHref ? "cursor-pointer hover:border-accent/60" : "")
                    }
                  >
                    {cardHref ? (
                      <a
                        href={cardHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={
                          isExternal ? `Open ${p.name}` : `Get early access to ${p.name}`
                        }
                        className="absolute inset-0 z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      />
                    ) : null}
                    <header className="flex items-baseline justify-between">
                      <h3 className="font-display text-2xl tracking-[-0.01em] transition-colors group-hover:text-accent">
                        {p.name}
                      </h3>
                      <span className="smallcaps">{p.year}</span>
                    </header>

                    <p className="mt-3 font-serif text-[1.02rem] leading-relaxed text-ink/85">
                      {p.blurb}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <ul className="flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <li
                            key={s}
                            className="smallcaps rounded-full border border-[color:var(--rule)] px-2.5 py-1 text-[0.65rem]"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>

                      {p.status ? (
                        <span className="smallcaps flex items-center gap-1.5">
                          <span
                            aria-hidden
                            className={
                              "h-1.5 w-1.5 rounded-full " +
                              (p.status === "Live"
                                ? "bg-accent"
                                : p.status === "WIP"
                                  ? "bg-gold"
                                  : p.status === "Coming soon"
                                    ? "bg-accent/50"
                                    : "bg-muted/60")
                            }
                          />
                          {p.status}
                        </span>
                      ) : null}
                    </div>

                    {isPreview ? (
                      <div className="mt-4 smallcaps text-accent">
                        Reach out for early access →
                      </div>
                    ) : null}

                    {cardHref ? (
                      <ArrowUpRight
                        className="absolute right-6 top-6 h-4 w-4 text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    ) : null}
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
