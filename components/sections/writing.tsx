import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { getAllPosts, formatDate } from "@/lib/posts";
import { ArrowRight } from "lucide-react";

export function Writing() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <section id="writing" className="py-24 md:py-32 border-t border-[color:var(--rule)]/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-4xl tracking-[-0.01em] md:text-5xl">Writing</h2>
            <Link
              href="/writing"
              className="smallcaps hidden md:inline-flex items-center gap-2 text-ink hover:text-accent transition-colors"
            >
              Read all <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-14 divide-y divide-[color:var(--rule)]/70 border-y border-[color:var(--rule)]/70">
          {posts.map((post, idx) => (
            <Reveal as="li" key={post.slug} delay={idx * 0.04}>
              <Link
                href={`/writing/${post.slug}`}
                className="group grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:gap-6"
              >
                <div className="smallcaps md:col-span-3">
                  {formatDate(post.date)}
                  <span className="ml-2 text-muted/80">· {post.readingMinutes} min</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="flex flex-wrap items-baseline gap-2 font-display text-2xl tracking-[-0.01em] md:text-3xl text-ink transition-colors group-hover:text-accent">
                    <span>{post.title}</span>
                    <ArrowRight
                      className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </h3>
                  <p className="mt-2 font-serif text-[1.05rem] leading-relaxed text-ink/75 max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 md:hidden">
          <Link
            href="/writing"
            className="smallcaps inline-flex items-center gap-2 text-ink hover:text-accent transition-colors"
          >
            Read all <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
