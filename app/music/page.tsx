import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { playlists } from "@/content/music";

export const metadata: Metadata = {
  title: "Music",
  description: "Playlists I keep coming back to.",
};

export default function MusicPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="smallcaps mb-4">Playlists</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Music<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl text-ink/80">
            I&apos;ve always loved being the aux, playing music way too loud, and digging for new
            things to listen to. Here are the playlists I keep coming back to.
          </p>
        </Reveal>

        {playlists.length === 0 ? (
          <Reveal>
            <div className="mt-16 rounded-md border border-dashed border-[color:var(--rule)] bg-[color:var(--paper-warm)] p-10 text-center font-serif text-ink/70">
              Playlists placeholder — paste Spotify embeds into{" "}
              <code className="font-mono text-sm">content/music.ts</code>.
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {playlists.map((p, i) => (
              <Reveal key={p.embedUrl} delay={i * 0.03}>
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-xl tracking-[-0.01em]">{p.title}</h2>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="smallcaps text-ink/70 hover:text-accent transition-colors"
                      >
                        Open
                      </a>
                    )}
                  </div>
                  {p.description && (
                    <p className="mt-2 font-serif text-sm text-ink/75">{p.description}</p>
                  )}
                  <iframe
                    src={p.embedUrl}
                    title={p.title}
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="mt-3 rounded-md border-0"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
