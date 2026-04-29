import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { WorldMap } from "@/components/maps/world-map";
import { USStatesMap } from "@/components/maps/us-states-map";
import { countries, states, wishlist } from "@/content/travel";

export const metadata: Metadata = {
  title: "Travel",
  description: "Places I've been and places I'd like to go next.",
};

const CONTINENTS_VISITED = 5; // North America, South America, Europe, Asia, Africa

export default function TravelPage() {
  const stats = [
    { label: "Countries", value: countries.length },
    { label: "Continents", value: CONTINENTS_VISITED },
    { label: "US states", value: states.length },
    { label: "On the list", value: wishlist.length },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="smallcaps mb-4">Maps &amp; notes</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Travel<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-xl text-ink/80">
            Places I&apos;ve been, in no particular order, and a few I&apos;d like to see soon.
          </p>
        </Reveal>

        <Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-[color:var(--rule)] pt-3">
                <dt className="smallcaps">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl tracking-[-0.02em] md:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal>
          <section className="mt-20">
            <div className="flex items-baseline justify-between border-b border-[color:var(--rule)] pb-3">
              <h2 className="font-display text-3xl tracking-[-0.01em]">World</h2>
              <span className="smallcaps">Hover a country</span>
            </div>
            <div className="mt-8">
              <WorldMap />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20">
            <div className="flex items-baseline justify-between border-b border-[color:var(--rule)] pb-3">
              <h2 className="font-display text-3xl tracking-[-0.01em]">United States</h2>
              <span className="smallcaps">Hover a state</span>
            </div>
            <div className="mt-8">
              <USStatesMap />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20">
            <div className="flex items-baseline justify-between border-b border-[color:var(--rule)] pb-3">
              <h2 className="font-display text-3xl tracking-[-0.01em]">Up next</h2>
              <span className="smallcaps">{wishlist.length}</span>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 md:grid-cols-3">
              {wishlist.map((place) => (
                <li
                  key={place}
                  className="font-display text-lg tracking-[-0.01em] text-ink/85"
                >
                  {place}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20">
            <div className="flex items-baseline justify-between border-b border-[color:var(--rule)] pb-3">
              <h2 className="font-display text-3xl tracking-[-0.01em]">All countries</h2>
              <span className="smallcaps">{countries.length}</span>
            </div>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
              {countries.map((c) => (
                <li
                  key={c.code}
                  className="border-b border-[color:var(--rule)]/40 py-3"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-lg">{c.name}</span>
                    <span className="smallcaps text-muted/60">{c.code}</span>
                  </div>
                  {c.cities ? (
                    <div className="mt-1 font-serif text-[0.95rem] text-ink/65">
                      {c.cities}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20">
            <div className="flex items-baseline justify-between border-b border-[color:var(--rule)] pb-3">
              <h2 className="font-display text-3xl tracking-[-0.01em]">All US states</h2>
              <span className="smallcaps">{states.length}</span>
            </div>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
              {states.map((s) => (
                <li
                  key={s.abbrev}
                  className="border-b border-[color:var(--rule)]/40 py-3"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-lg">{s.name}</span>
                    <span className="smallcaps text-muted/60">{s.abbrev}</span>
                  </div>
                  {s.cities ? (
                    <div className="mt-1 font-serif text-[0.95rem] text-ink/65">
                      {s.cities}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
