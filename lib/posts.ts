// lib/posts.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all posts across the site.
// Both the home page and blog page import from here.
//
// HOW TO ADD A NEW POST:
//   1. Create the page (e.g. app/travel/essentials/packing-list/page.tsx)
//   2. Add one entry to the array below — it shows up everywhere automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type Post = {
  slug: string;       // full path used in href, e.g. "/travel/essentials/esim"
  title: string;
  description: string;
  category: string;   // shown as the eyebrow label on cards, e.g. "Travel Essentials"
  emoji?: string;
  readingTime?: string;
  tags?: string[];
  date?: string;      // optional, for future sorting — e.g. "2025-06-01"
};

export const allPosts: Post[] = [
  {
    slug: "/travel/essentials/gate-habits",
    title: "What I Do at the Airport Gate That Saves Me Hours Later",
    description: "Turn waiting time into your biggest travel advantage.",
    category: "Travel Essentials",
    emoji: "🛫",
    readingTime: "7 min read",
    tags: ["planning", "connectivity"],
    date: "2025-01-01",
  },
  {
    slug: "/travel/essentials/esim",
    title: "eSIMs: The Easiest Way to Stay Connected When You Land",
    description: "No queues, no SIM kiosks. Land already connected.",
    category: "Travel Essentials",
    emoji: "📱",
    readingTime: "6 min read",
    tags: ["connectivity", "gear"],
    date: "2025-01-02",
  },
  // ↓ Add new posts here
  // {
  //   slug: "/travel/essentials/packing-list",
  //   title: "My Carry-On Packing List",
  //   description: "Everything I bring, nothing I don't.",
  //   category: "Travel Essentials",
  //   emoji: "🎒",
  //   readingTime: "4 min read",
  //   tags: ["packing", "gear"],
  //   date: "2025-02-01",
  // },
];