// app/travel/essentials/page.tsx
//
// HOW TO ADD A NEW POST:
//   1. Create app/travel/essentials/your-slug/page.tsx
//   2. Add one entry to the POSTS array below - done.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import PageShell from "@/components/page-shell";

type Post = {
  slug: string;
  title: string;
  description: string;
  emoji?: string;
  readingTime?: string;
  tags?: string[];
};

const posts: Post[] = [
  {
  slug: "packing-list",
  title: "Complete Travel Packing Checklist",
  description: "Interactive checklist — check off, skip, and customise for every trip.",
  emoji: "🧳",
  tags: ["packing", "essentials", "planning"],
  },
  {
    slug: "gate-habits",
    title: "What I Do at the Airport Gate That Saves Me Hours Later",
    description: "Turn waiting time into your biggest travel advantage.",
    emoji: "🛫",
    readingTime: "7 min read",
    tags: ["planning", "connectivity"],
  },
  {
    slug: "esim",
    title: "eSIMs: The Easiest Way to Stay Connected When You Land",
    description: "No queues, no SIM kiosks. Land already connected.",
    emoji: "📱",
    readingTime: "6 min read",
    tags: ["connectivity", "gear"],
  },
  {
    slug: "itinerary-system",
    title: "How I Plan Every Trip - My Two-Tool System",
    description: "One Google Doc, one map app, zero scattered tabs.",
    emoji: "🗂️",
    readingTime: "8 min read",
    tags: ["planning", "systems"],
  },
  {
    slug: "book-flights-smart",
    title: "How to Book Flights Smart",
    description: "Read this, before you book your next flight.",
    emoji: "🛫",
    readingTime: "9 min read",
    tags: ["flights", "planning", "money"],
  },
  {
    slug: "daypack-system",
    title: "The Daypack System That Saves You Hours Every Trip",
    description: "One pre-packed bag, always ready to go",
    emoji: "🎒",
    readingTime: "7 min read",
    tags: ["packing", "systems", "gear"],
  },
  {
    slug: "after-landing",
    title: "The First 30 Minutes After Landing",
    description: "Connect, withdraw cash, activate your eSIM",
    emoji: "🛫",
    readingTime: "4 min read",
    tags: ["arrival", "connectivity", "money"],
  },
  {
    slug: "in-flight",
    title: "My In-Flight Survival Pouch - What I Actually Use on a Long-Haul Flight",
    description:
      "The exact items in my carry-on pouch for long flights - including a few things you won't find on other lists.",
    emoji: "🛫",
    readingTime: "6 min read",
    tags: ["flights", "comfort", "packing"],
  },
  {
    slug: "phone-fails",
    title: "When Your Phone Dies Mid-Trip - What I Learned in Switzerland",
    description:
      "iPhone thermal shutdown in Lugano. eSIM data gone in the middle of nowhere. Here's what saved us - and what to do before it happens to you.",
    emoji: "📵",
    readingTime: "4 min read",
    tags: ["connectivity", "eSIM", "offline", "phone"],
  },
  // Add new posts here ↓
];

export default function EssentialsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--text)]">
            Essentials
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Packing lists, planning systems, and tiny habits that make travel smoother.
          </p>
          <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
        </div>

        {/* Count */}
        <p className="mb-6 text-sm text-[var(--muted)]">
          {posts.length} {posts.length === 1 ? "guide" : "guides"}
        </p>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/travel/essentials/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md"
            >
              {post.emoji && (
                <span className="mb-4 text-3xl">{post.emoji}</span>
              )}

              <h2 className="font-serif text-xl font-semibold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {post.title}
              </h2>

              {post.description && (
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {post.description}
                </p>
              )}

              <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-xs text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
                  {post.readingTime && <span>{post.readingTime}</span>}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </main>
    </PageShell>
  );
}