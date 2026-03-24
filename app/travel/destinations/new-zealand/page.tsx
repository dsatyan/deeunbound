import Link from "next/link";
import PageShell from "@/components/page-shell";
 
type NZPage = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  readingTime?: string;
  tags?: string[];
};
 
const NZ_PAGES: NZPage[] = [
  {
    slug: "travel-tips",
    title: "New Zealand Travel Tips — Things I Wish I'd Known",
    description: "Speed cameras, 7kg carry-on rules, why you shouldn't tip, the best souvenir towns, and 18 practical tips from a South + North Island road trip.",
    emoji: "📝",
    readingTime: "10 min read",
    tags: ["road trip", "practical", "driving", "food"],
  },
  // ↓ Add new NZ pages here
  // {
  //   slug: "south-island-itinerary",
  //   title: "South Island 10-Day Itinerary",
  //   description: "...",
  //   emoji: "🗺️",
  // },
];
 
export default function NewZealandPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "New Zealand" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🇳🇿</span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Destinations
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--text)]">
                New Zealand
              </h1>
            </div>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            South + North Island road trip guides, practical driving tips, and
            honest notes from two weeks in Aotearoa.
          </p>
          <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
        </div>
 
        <p className="mb-6 text-sm text-[var(--muted)]">
          {NZ_PAGES.length} {NZ_PAGES.length === 1 ? "guide" : "guides"}
        </p>
 
        <div className="grid gap-5 sm:grid-cols-2">
          {NZ_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/travel/destinations/new-zealand/${page.slug}`}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md"
            >
              {page.emoji && <span className="mb-4 text-3xl">{page.emoji}</span>}
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
                    <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-0.5 text-xs text-[var(--muted)]">
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