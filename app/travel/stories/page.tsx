// app/travel/stories/page.tsx
//
// HOW TO ADD A NEW STORY:
//   1. Create app/travel/stories/[slug]/page.tsx
//   2. Add one entry to the STORIES array below - done.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import PageShell from "@/components/page-shell";

type Story = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  location: string;
  readingTime?: string;
  tags?: string[];
};

// ── ✏️  ADD NEW STORIES HERE ──────────────────────────────────────────────────
const STORIES: Story[] = [
  {
    slug: "paris-rash-uber",
    title: "The Paris Morning I Was Late - And What It Changed",
    description:
      "A solo trip, a disgruntled Uber driver, heavy Monday morning traffic - all that taught me to always leave early.",
    emoji: "🗼",
    location: "Paris, France",
    readingTime: "3 min read",
    tags: ["solo travel", "Paris", "lessons"],
  },
  // ↓ Add new stories here
];
// ─────────────────────────────────────────────────────────────────────────────

export default function TravelStoriesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Stories" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Travel · Stories
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--text)]">
            Stories
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            The personal side of travel - moments, mishaps, and things that
            changed how I think about being somewhere new.
          </p>
          <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
        </div>

        {/* Story count */}
        <p className="mb-6 text-sm text-[var(--muted)]">
          {STORIES.length} {STORIES.length === 1 ? "story" : "stories"}
        </p>

        {/* Stories list - vertical, essay-style cards */}
        <div className="space-y-4">
          {STORIES.map((story) => (
            <Link
              key={story.slug}
              href={`/travel/stories/${story.slug}`}
              className="group flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{story.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <span className="text-xs text-[var(--muted)]">{story.location}</span>
                  {story.readingTime && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-neutral-300 flex-shrink-0" />
                      <span className="text-xs text-[var(--muted)]">{story.readingTime}</span>
                    </>
                  )}
                </div>
                <h2 className="font-serif text-xl font-semibold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                  {story.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                  {story.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {story.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-[var(--muted)] flex-shrink-0 mt-1 transition-colors group-hover:text-[var(--accent)]">
                →
              </span>
            </Link>
          ))}
        </div>

      </main>
    </PageShell>
  );
}