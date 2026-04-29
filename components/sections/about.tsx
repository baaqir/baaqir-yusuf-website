import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[color:var(--rule)]/60">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-3">
          <div className="smallcaps md:sticky md:top-24">About</div>
        </Reveal>

        <Reveal className="md:col-span-6" delay={0.05}>
          <div className="font-serif text-[1.25rem] leading-[1.7] text-ink/90">
            {profile.about.map((p, i) => (
              <p key={i} className={i === 0 ? "dropcap mb-6" : "mb-6"}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-3" delay={0.1}>
          <aside className="md:sticky md:top-24 md:pt-1">
            <ul className="space-y-5">
              {profile.marginalia.map((m) => (
                <li key={m.label}>
                  <div className="smallcaps">{m.label}</div>
                  <div className="font-serif text-[0.98rem] text-ink/85 mt-1">{m.value}</div>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>

    </section>
  );
}
