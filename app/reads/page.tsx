import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { reads } from "@/content/reads";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Reads",
  description: "Books and articles I keep coming back to.",
};

export default function ReadsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <div className="smallcaps mb-4">Books &amp; articles</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Reads<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-xl text-ink/80">
            Books and articles I keep coming back to.
          </p>
        </Reveal>

        {reads.length === 0 ? (
          <Reveal>
            <div className="mt-16 rounded-md border border-dashed border-[color:var(--rule)] bg-[color:var(--paper-warm)] p-12 text-center">
              <div className="smallcaps text-muted">Coming soon</div>
              <p className="mt-3 font-serif text-lg text-ink/75">
                Building this list out. Check back shortly.
              </p>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-16 divide-y divide-[color:var(--rule)]/70 border-y border-[color:var(--rule)]/70">
            {reads.map((r, i) => {
              const meta = [r.kind === "book" ? "Book" : "Article", r.author]
                .filter(Boolean)
                .join(" · ");
              return (
                <Reveal as="li" key={`${r.title}-${r.author}`} delay={i * 0.03}>
                  <div className="grid grid-cols-1 gap-2 py-5 md:grid-cols-12 md:gap-6">
                    <div className="smallcaps md:col-span-4">{meta}</div>
                    <div className="md:col-span-8">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        {r.href ? (
                          <a
                            href={r.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-baseline gap-1 font-display text-xl tracking-[-0.01em] hover:text-accent transition-colors"
                          >
                            {r.title}
                            <ArrowUpRight
                              className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              strokeWidth={1.5}
                            />
                          </a>
                        ) : (
                          <h2 className="font-display text-xl tracking-[-0.01em]">{r.title}</h2>
                        )}
                      </div>
                      {r.note ? (
                        <p className="mt-1 font-serif text-[1rem] text-ink/75">{r.note}</p>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
