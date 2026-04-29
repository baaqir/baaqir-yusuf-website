"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import type { Film } from "@/content/movies";

type FilmWithPoster = Film & { poster?: string };

const ALL = "All";
const ALL_TIMERS = "All-timers";

function genreBuckets(film: Film): string[] {
  if (!film.genre) return [];
  return film.genre.split("/").map((g) => g.trim());
}

function topGenres(films: Film[], limit = 8): string[] {
  const counts = new Map<string, number>();
  for (const f of films) {
    for (const g of genreBuckets(f)) {
      counts.set(g, (counts.get(g) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([g]) => g);
}

export function PosterWall({ films }: { films: FilmWithPoster[] }) {
  const [filter, setFilter] = useState<string>(ALL);
  const genres = useMemo(() => topGenres(films), [films]);
  const chips = [ALL, ALL_TIMERS, ...genres];

  const filtered = useMemo(() => {
    if (filter === ALL) return films;
    if (filter === ALL_TIMERS) return films.filter((f) => f.allTimer);
    return films.filter((f) => genreBuckets(f).includes(filter));
  }, [films, filter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {chips.map((chip) => {
          const active = filter === chip;
          return (
            <button
              key={chip}
              type="button"
              onClick={() => setFilter(chip)}
              className={
                "smallcaps rounded-full border px-3 py-1.5 text-[0.65rem] transition-colors " +
                (active
                  ? "border-accent bg-accent text-paper"
                  : "border-[color:var(--rule)] text-ink/70 hover:border-accent/60 hover:text-ink")
              }
            >
              {chip}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((f) => (
          <Card key={`${f.title}-${f.year}`} film={f} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 font-serif text-ink/65">No films match that filter.</p>
      ) : null}
    </div>
  );
}

function Card({ film }: { film: FilmWithPoster }) {
  return (
    <figure className="group relative">
      <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-[color:var(--rule)]/60 bg-[color:var(--paper-warm)]">
        {film.poster ? (
          <Image
            src={film.poster}
            alt={`${film.title} poster`}
            fill
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 25vw, 45vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-3 text-center font-display text-sm text-ink/60">
            {film.title}
          </div>
        )}

        {film.allTimer ? (
          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-paper/95 shadow-sm">
            <Star className="h-3 w-3 fill-accent stroke-accent" />
          </div>
        ) : null}

        {film.seriesCount && film.seriesCount > 1 ? (
          <div className="smallcaps absolute left-2 top-2 rounded-full bg-paper/95 px-2 py-0.5 text-[0.55rem] text-ink/80 shadow-sm">
            {film.seriesCount} films
          </div>
        ) : null}

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="font-display text-[0.95rem] leading-tight text-paper">{film.title}</div>
          <div className="mt-0.5 smallcaps text-[0.6rem] text-paper/85">
            {[film.year, film.director].filter(Boolean).join(" · ")}
          </div>
          {film.genre ? (
            <div className="mt-0.5 smallcaps text-[0.6rem] text-paper/65">{film.genre}</div>
          ) : null}
        </div>
      </div>
    </figure>
  );
}
