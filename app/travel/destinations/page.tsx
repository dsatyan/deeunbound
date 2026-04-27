// app/travel/destinations/page.tsx
//
// HOW TO ADD A NEW COUNTRY:
//   1. Create app/travel/destinations/[country]/page.tsx
//   2. Add one entry to COUNTRIES in lib/destinations-data.ts — done.
//      The nav dropdown and this page both update automatically.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import PageShell from "@/components/page-shell";
import { COUNTRIES, CONTINENT_ORDER } from "@/lib/destinations-data";

const byContinent = COUNTRIES.reduce<Record<string, typeof COUNTRIES>>((acc, c) => {
  if (!acc[c.continent]) acc[c.continent] = [];
  acc[c.continent].push(c);
  return acc;
}, {});

export default function TravelDestinationsPage() {
  const sortedContinents = CONTINENT_ORDER.filter((c) => byContinent[c]);

  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Travel · Destinations
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--text)]">
            Destinations
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Destination notes, visa guides, itinerary ideas, and city-by-city
            travel pages — from an Indian passport holder based in the US.
          </p>
          <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
        </div>

        {/* Countries by continent */}
        <div className="space-y-12">
          {sortedContinents.map((continent) => (
            <div key={continent}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                {continent}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {byContinent[continent]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((country) => (
                    <Link
                      key={country.slug}
                      href={`/travel/destinations/${country.slug}`}
                      className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{country.emoji}</span>
                        <h2 className="font-serif text-xl font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                          {country.name}
                        </h2>
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-[var(--muted)]">
                        {country.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-[var(--muted)]">
                          {country.postCount} {country.postCount === 1 ? "guide" : "guides"}
                        </span>
                        <span className="text-xs text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
                          Explore →
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </main>
    </PageShell>
  );
}