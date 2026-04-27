// app/travel/destinations/japan/page.tsx
//
// HOW TO ADD A NEW JAPAN PAGE:
//   1. Create app/travel/destinations/japan/[topic]/page.tsx
//   2. Add one entry to the JAPAN_PAGES array below - done.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import PageShell from "@/components/page-shell";

type JapanPage = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  readingTime?: string;
  tags?: string[];
};

// ── ✏️  ADD NEW JAPAN PAGES HERE ─────────────────────────────────────────────
const JAPAN_PAGES: JapanPage[] = [
  {
    slug: "visa",
    title: "Japan eVisa - Indian Passport, US Resident (H1B)",
    description: "Step-by-step: how to apply online, what got our application rejected the first time, applying for a family member, and the full timeline from submission to issuance.",
    emoji: "📋",
    tags: ["Visa", "eVisa", "H1B", "Indian passport"],
  },
  {
    slug: "japan-immigration-qr-code",
    title: "Japan immigration QR code is a must — register before you fly",
    description: "Do this at the gate. How to register on Visit Japan Web and get your QR code.",
    emoji: "✈️",
    tags: ["Visa", "Immigration", "Customs"],
  },
  {
    slug: "tax-free-shopping",
    title: "Tax-Free Shopping in Japan — What Actually Happens Store by Store",
    description: "How to use the Visit Japan Web QR code, why you must carry your passport, and how Uniqlo, Zara, and department stores each handle it differently.",
    emoji: "🛍️",
    tags: ["shopping", "money", "tips"],
  },
  // ↓ Add new Japan pages here
  // {
  //   slug: "tokyo",
  //   title: "Tokyo - What We Did, What We'd Skip",
  //   description: "...",
  //   emoji: "🗼",
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function JapanPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🇯🇵</span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Destinations
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--text)]">
                Japan
              </h1>
            </div>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            一期一会 Ichi-go ichi-e -  "One time, one meeting" 
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            This moment will never come again.
          </p>
          <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
        </div>

        {/* Page count */}
        <p className="mb-6 text-sm text-[var(--muted)]">
          {JAPAN_PAGES.length} {JAPAN_PAGES.length === 1 ? "guide" : "guides"}
        </p>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {JAPAN_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/travel/destinations/japan/${page.slug}`}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md"
            >
              {page.emoji && (
                <span className="mb-4 text-3xl">{page.emoji}</span>
              )}
              <h2 className="font-serif text-xl font-semibold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {page.title}
              </h2>
              {page.description && (
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {page.description}
                </p>
              )}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {page.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-xs text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
                  {page.readingTime && <span>{page.readingTime} </span>}
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