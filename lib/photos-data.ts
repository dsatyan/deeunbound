// lib/photos-data.ts
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD PHOTOS:
//   1. Upload photo to Cloudinary in the correct folder
//      e.g. travel/new-zealand/landscapes/aoraki-sunset.jpg
//   2. Add one entry below — publicId is the Cloudinary path after /upload/
//   3. That's it. The gallery picks it up automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type Photo = {
  publicId: string;   // Cloudinary path e.g. "travel/new-zealand/landscapes/aoraki-sunset"
  location: string;   // Shown on hover and in modal e.g. "Aoraki / Mount Cook, New Zealand"
  country: string;    // Must match a value in COUNTRIES below for filtering
  caption?: string;   // Optional longer description shown in modal
  date: string; // "YYYY-MM" — month precision is enough, no need for exact day
};

// ── Countries shown in the filter bar (add new ones here as you travel) ───────
export const COUNTRIES = [
  "All",
  "Austria",
  "Canada",
  "France",
  "Germany",
  "Greece",
  "Indonesia",
  "Italy",
  "Japan",
  "New Zealand",
  "Norway",
  "Peru",
  "Poland",
  "South Korea",
  "Spain",
  "Switzerland",
  "Turkey",
  "USA",
] as const;

// ── ✏️  ADD PHOTOS HERE ────────────────────────────────────────────────────────
export const PHOTOS: Photo[] = [
  // ── NEW ZEALAND ──────────────────────────────────────────────────────────────
  {
    publicId: "travel/new-zealand/sealy-tarns-hike-mt-cook-1",
    location: "Sealy Tarns, Aoraki / Mount Cook, New Zealand",
    country: "New Zealand",
    caption: "The hike up to Sealy Tarns with the Aoraki valley at sunrise",
    date: "2026-01",
  },
  // ── JAPAN ────────────────────────────────────────────────────────────────────
  // {
  //   publicId: "travel/japan/tokyo-shibuya-night",
  //   location: "Shibuya, Tokyo, Japan",
  //   country: "Japan",
  //   caption: "Shibuya crossing at dusk",
  // },
  // ── Add more countries below ──────────────────────────────────────────────────
];