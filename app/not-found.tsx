import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-6 py-24 md:px-10">
      <div className="smallcaps mb-4">404 · Missing pages</div>
      <h1 className="font-display text-5xl leading-[1] tracking-[-0.02em] md:text-7xl">
        A page that isn&apos;t<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-lg font-serif text-xl text-ink/80">
        The URL you followed has no home here. Either it was renamed, retired, or it never existed
        in the first place. Sorry about that.
      </p>
      <Link href="/" className="mt-10 font-display text-2xl text-accent ink-link">
        Back to the front page →
      </Link>
    </section>
  );
}
