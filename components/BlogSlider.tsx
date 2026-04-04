"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { type Post } from "@/lib/posts";

export default function BlogSlider({ posts }: { posts: Post[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);

  // Touch tracking
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const VISIBLE = 3;
  const total = posts.length;

  const cardWidth = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return 0;
    return card.offsetWidth + 20;
  };

  const maxOffset = () => Math.max(0, (total - VISIBLE) * cardWidth());

  const prevDesktop = () => setOffset((o) => Math.max(o - cardWidth(), 0));
  const nextDesktop = () => setOffset((o) => Math.min(o + cardWidth(), maxOffset()));

  const prevMobile = () =>
    setMobileIdx((i) => (i - 1 + total) % total);
  const nextMobile = () =>
    setMobileIdx((i) => (i + 1) % total);

  const atStart = offset === 0;
  const atEnd = offset >= maxOffset();

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (
    e: React.TouchEvent,
    onLeft: () => void,
    onRight: () => void
  ) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? onRight() : onLeft();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
      {/* Header */}
      <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        Blog
      </p>
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="font-editorial text-4xl font-semibold">Latest writing</h2>
        <Link
          href="/blog"
          className="shrink-0 pb-1 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
        >
          View all posts →
        </Link>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden">
        {/* Featured first post — large card */}
        <Link
          href={featured.slug}
          className="group mb-4 flex flex-col rounded-[24px] border border-[var(--accent)] bg-[var(--card)] p-6 transition-all"
        >
          <p className="text-sm text-[var(--muted)]">{featured.category}</p>
          <h3 className="mt-3 font-editorial text-2xl font-semibold leading-snug text-[var(--accent)]">
            {featured.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">
            {featured.description}
          </p>
          <p className="mt-5 text-xs text-[var(--accent)]">
            {featured.readingTime && <span>{featured.readingTime} </span>}
            <span>→</span>
          </p>
        </Link>

        {/* Remaining posts — left/right swipe carousel */}
        {rest.length > 0 && (
          <div
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={(e) => onTouchEnd(e, prevMobile, nextMobile)}
          >
            <div
              className="flex transition-transform duration-400 ease-in-out"
              style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
            >
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={post.slug}
                  className="flex w-full flex-shrink-0 flex-col rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--accent)]"
                >
                  <p className="text-sm text-[var(--muted)]">{post.category}</p>
                  <h3 className="mt-3 font-editorial text-xl font-semibold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {post.description}
                  </p>
                  <p className="mt-5 text-xs text-[var(--muted)]">
                    {post.readingTime && <span>{post.readingTime} </span>}
                    <span>→</span>
                  </p>
                </Link>
              ))}
            </div>

            {/* Mobile blog arrows — only show if more than 1 remaining */}
            {rest.length > 1 && (
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onPointerUp={prevMobile}
                  aria-label="Previous post"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm text-[var(--muted)]"
                >
                  ←
                </button>
                <button
                  onPointerUp={nextMobile}
                  aria-label="Next post"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm text-[var(--muted)]"
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── DESKTOP slider (hidden below md) ── */}
      <div className="hidden md:block">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-500 ease-in-out"
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

        {total > VISIBLE && (
          <div className="mt-6 flex justify-end gap-2">
            <button
              onPointerUp={prevDesktop}
              disabled={atStart}
              aria-label="Previous posts"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm text-[var(--muted)] transition hover:bg-[var(--card)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>
            <button
              onPointerUp={nextDesktop}
              disabled={atEnd}
              aria-label="Next posts"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm text-[var(--muted)] transition hover:bg-[var(--card)] disabled:cursor-not-allowed disabled:opacity-30"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}