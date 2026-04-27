// lib/destinations-data.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for destination countries.
// Used by:
//   - app/travel/destinations/page.tsx  (destinations index page)
//   - components/site-header.tsx        (nav dropdown with country sub-menu)
//
// HOW TO ADD A NEW COUNTRY:
//   1. Create app/travel/destinations/[country]/page.tsx
//   2. Add one entry to COUNTRIES below — nav + index page update automatically
// ─────────────────────────────────────────────────────────────────────────────

export type Country = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  continent: string;
  postCount: number;
};

export const COUNTRIES: Country[] = [
  {
    slug: "japan",
    name: "Japan",
    emoji: "🇯🇵",
    description: "Visa guide, city notes, and trip planning for Japan from the US on an Indian passport.",
    continent: "Asia",
    postCount: 4,
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    emoji: "🇳🇿",
    description: "South + North Island road trip, Milford Sound, and everything in between.",
    continent: "Oceania",
    postCount: 1,
  },
];

export const CONTINENT_ORDER = [
  "Asia", "Europe", "Africa", "North America", "South America", "Oceania", "Antarctica",
];