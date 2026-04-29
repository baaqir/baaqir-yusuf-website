import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { PosterWall } from "@/components/movies/poster-wall";
import { films, type Film } from "@/content/movies";
import postersData from "@/content/posters.json";

export const metadata: Metadata = {
  title: "Movies",
  description: "Films I'd recommend you watch.",
};

const posters = postersData as Record<string, string>;

function yearSpan(films: Film[]): string {
  let min = Infinity;
  let max = -Infinity;
  for (const f of films) {
    for (const m of f.year.matchAll(/\d{4}/g)) {
      const y = parseInt(m[0], 10);
      if (y < min) min = y;
      if (y > max) max = y;
    }
  }
  return `${min}–${max}`;
}

function topDirector(films: Film[]): string {
  const counts = new Map<string, number>();
  for (const f of films) {
    if (f.director.includes(",") || f.director === "Various") continue;
    counts.set(f.director, (counts.get(f.director) ?? 0) + 1);
  }
  let topName = "";
  let topCount = 0;
  for (const [name, count] of counts) {
    if (count > topCount) {
      topName = name;
      topCount = count;
    }
  }
  return topName.split(" ").pop() ?? topName;
}

export default function MoviesPage() {
  const filmsWithPosters = films.map((f) => ({
    ...f,
    poster: posters[f.title],
  }));

  const allTimers = filmsWithPosters.filter((f) => f.allTimer).length;
  const span = yearSpan(films);
  const director = topDirector(films);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="smallcaps mb-4">Worth watching</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Movies<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
            I love movies, especially in theaters. It&apos;s one of my favorite things to do. A
            running joke (kind of, I do believe it in the moment) is that every time I see a good
            movie, I say it&apos;s in my top 10. Every film on this page is one I probably said
            that about at some point. This isn&apos;t every movie I&apos;ve ever seen, but if it
            comes up in conversation, these are the ones I&apos;d vouch for. Go watch them. Drama
            is my favorite genre, with thrillers a close second. I love being on the edge of my
            seat, and I appreciate every craft that goes into a good film: sound, editing, score,
            cinematography, writing, acting. I&apos;m always down to rewatch any of these,
            especially with someone seeing it for the first time.
          </p>
        </Reveal>

        <Reveal>
          <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border-t border-[color:var(--rule)] pt-3">
              <dt className="smallcaps">Films</dt>
              <dd className="mt-1 font-display text-3xl tracking-[-0.02em] md:text-4xl">
                {filmsWithPosters.length}
              </dd>
            </div>
            <div className="border-t border-[color:var(--rule)] pt-3">
              <dt className="smallcaps">All-timers</dt>
              <dd className="mt-1 font-display text-3xl tracking-[-0.02em] md:text-4xl">
                {allTimers}
              </dd>
            </div>
            <div className="border-t border-[color:var(--rule)] pt-3">
              <dt className="smallcaps">Most-watched director</dt>
              <dd className="mt-1 font-display text-3xl tracking-[-0.02em] md:text-4xl">
                {director}
              </dd>
            </div>
            <div className="border-t border-[color:var(--rule)] pt-3">
              <dt className="smallcaps">Span</dt>
              <dd className="mt-1 font-display text-3xl tracking-[-0.02em] md:text-4xl">
                {span}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <PosterWall films={filmsWithPosters} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
