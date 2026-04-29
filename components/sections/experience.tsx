import { experience } from "@/content/experience";
import { Reveal } from "@/components/motion/reveal";

export function Experience() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-[color:var(--rule)]/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-4xl tracking-[-0.01em] md:text-5xl">Selected Work</h2>
            <span className="smallcaps hidden md:inline">A short résumé</span>
          </div>
        </Reveal>

        <ol className="mt-14 space-y-14">
          {experience.map((role, idx) => (
            <Reveal as="li" key={`${role.company}-${role.start}`} delay={idx * 0.04}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="smallcaps">
                    {role.start}&ndash;{role.end}
                  </div>
                  <div className="mt-1 font-serif text-sm text-muted">{role.location}</div>
                </div>

                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-2xl tracking-[-0.01em] md:text-[1.75rem]">
                      {role.href ? (
                        <a href={role.href} target="_blank" rel="noreferrer" className="ink-link">
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </h3>
                    <span className="font-serif italic text-ink/70">· {role.title}</span>
                  </div>

                  <p className="mt-3 font-serif text-[1.1rem] leading-relaxed text-ink/85 max-w-3xl">
                    {role.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
