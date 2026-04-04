"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { type Post } from "@/lib/posts";

export default function BlogSlider({ posts }: { posts: Post[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const VISIBLE = 3;
  const total = posts.length;

  const cardWidth = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return 0;
    // width + gap (20px)
    return card.offsetWidth + 20;
  };

  const maxOffset = () => Math.max(0, (total - VISIBLE) * cardWidth());

  const prev = () => setOffset((o) => Math.max(o - cardWidth(), 0));
  const next = () => setOffset((o) => Math.min(o + cardWidth(), maxOffset()));

  const atStart = offset === 0;
  const atEnd = offset >= maxOffset();

  return (
    <section className="mx-auto max-w-7xl px-8 py-14">
      {/* Header */}
      <div className="mb-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Blog
        </p>
      </div>
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="font-editorial text-4xl font-semibold">
          Latest writing
        </h2>
        <Link
          href="/blog"
          className="shrink-0 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors pb-1"
        >
          View all posts →
        </Link>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-5 transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={post.slug}
              data-card
              className={`group flex w-[calc(33.333%-14px)] flex-shrink-0 flex-col rounded-[28px] border bg-[var(--card)] p-6 transition-all duration-200 hover:shadow-md ${
                i === 0
                  ? "border-[var(--accent)] hover:border-[var(--accent)]"
                  : "border-[var(--border)] hover:border-[var(--accent)]"
              }`}
            >
              <p className="text-sm text-[var(--muted)]">{post.category}</p>
              <h3
                className={`mt-3 flex-1 font-editorial text-2xl font-semibold leading-snug transition-colors ${
                  i === 0
                    ? "text-[var(--accent)]"
                    : "text-[var(--text)] group-hover:text-[var(--accent)]"
                }`}
              >
                {post.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                {post.description}
              </p>
              <p
                className={`mt-5 text-xs transition-colors ${
                  i === 0
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] group-hover:text-[var(--accent)]"
                }`}
              >
                {post.readingTime && <span>{post.readingTime} </span>}
                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Nav arrows — only show if more posts than visible */}
      {total > VISIBLE && (
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={prev}
            disabled={atStart}
            aria-label="Previous posts"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm text-[var(--muted)] transition hover:bg-[var(--card)] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={atEnd}
            aria-label="Next posts"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm text-[var(--muted)] transition hover:bg-[var(--card)] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}