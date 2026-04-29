import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photos",
  description: "Small things I've found worth pointing a camera at.",
};

export default function PhotosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="smallcaps mb-4">Through the lens</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Frames<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl text-ink/80">
            I used to carry my camera everywhere I went, and these are some of my favorite shots.
            I haven&apos;t shot much for a while since I burned out on media a bit after Triad and
            Suora, but I&apos;m looking forward to adding to this collection again soon.
          </p>
        </Reveal>

        {photos.length === 0 ? (
          <Reveal>
            <div className="mt-16 rounded-md border border-dashed border-[color:var(--rule)] bg-[color:var(--paper-warm)] p-10 text-center font-serif text-ink/70">
              Photo grid placeholder — drop files in{" "}
              <code className="font-mono text-sm">/public/photos</code> and add metadata in{" "}
              <code className="font-mono text-sm">content/photos.ts</code>.
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3 [column-fill:_balance]">
            {photos.map((p, i) => (
              <Reveal
                key={p.src}
                delay={i * 0.03}
                className="mb-5 break-inside-avoid"
              >
                <figure className="group">
                  <div className="overflow-hidden rounded-md border border-[color:var(--rule)]/60 bg-[color:var(--paper-warm)]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  {(p.caption || p.location || p.year) && (
                    <figcaption className="mt-2 flex flex-wrap items-baseline justify-between gap-2 font-serif text-sm text-ink/65">
                      {p.caption ? <span>{p.caption}</span> : <span aria-hidden />}
                      <span className="smallcaps text-muted/70">
                        {[p.location, p.year].filter(Boolean).join(" · ")}
                      </span>
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
