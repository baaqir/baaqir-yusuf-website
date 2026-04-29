import { Headshot } from "@/components/hero/headshot";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-10">
        <Reveal className="md:col-span-7">
          <div className="smallcaps mb-6">Welcome</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] text-ink md:text-7xl">
            {profile.name}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-ink/85 md:text-2xl">
            {profile.heroIntro}
          </p>
        </Reveal>

        <div className="md:col-span-5 md:pl-4">
          <Headshot />
        </div>
      </div>
    </section>
  );
}
