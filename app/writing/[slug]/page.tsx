import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <Reveal>
          <Link
            href="/writing"
            className="smallcaps inline-flex items-center gap-2 text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
            All writing
          </Link>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="smallcaps mt-12">
            {formatDate(post.date)} · {post.readingMinutes} min read
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="prose-essay mt-12">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-20 hr-rule" />
          <Link
            href="/writing"
            className="smallcaps mt-8 inline-flex items-center gap-2 text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-3 w-3" strokeWidth={1.5} />
            All writing
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
