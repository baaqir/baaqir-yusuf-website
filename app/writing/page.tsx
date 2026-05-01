import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import { Reveal } from "@/components/motion/reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing",
  description: "Short pieces on building, selling, and the craft of running a company.",
};

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <div className="smallcaps mb-4">Essays &amp; notes</div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Writing<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-xl text-ink/80">
            A few things I&rsquo;ve felt compelled to write down. Some personal, some what I&rsquo;ve taken away from the corners of business I&rsquo;ve been lucky to work in.
          </p>
        </Reveal>

        <ul className="mt-16 divide-y divide-[color:var(--rule)]/70 border-y border-[color:var(--rule)]/70">
          {posts.map((post, idx) => (
            <Reveal as="li" key={post.slug} delay={idx * 0.04}>
              <Link href={`/writing/${post.slug}`} className="group block py-7">
                <div className="smallcaps">
                  {formatDate(post.date)}
                  <span className="ml-2 text-muted/80">· {post.readingMinutes} min</span>
                </div>
                <h2 className="mt-2 flex flex-wrap items-baseline gap-2 font-display text-2xl tracking-[-0.01em] md:text-3xl transition-colors group-hover:text-accent">
                  <span>{post.title}</span>
                  <ArrowRight
                    className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </h2>
                <p className="mt-2 font-serif text-[1.05rem] text-ink/75 max-w-2xl">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
