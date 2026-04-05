// app/travel/essentials/packing-list/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/page-shell";
import PackingListClient from "@/components/PackingListClient";
import { DEFAULT_CATEGORIES } from "@/lib/packing-list-data";

export const metadata: Metadata = {
  title: "Complete Travel Packing Checklist | Dee Unbound",
  description:
    "A complete interactive travel packing checklist covering documents, tech, clothing, toiletries, health, and bag organisation. Check off items as you pack, skip what you don't need, and add your own.",
  keywords: [
    "travel packing checklist",
    "packing list for travel",
    "what to pack for travel",
    "travel essentials list",
    "packing checklist",
  ],
  openGraph: {
    title: "Complete Travel Packing Checklist",
    description:
      "Interactive packing checklist for travel — check off items, skip what you don't need, and add your own.",
    url: "https://www.deeunbound.com/travel/essentials/packing-list",
    siteName: "Dee Unbound",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Complete Travel Packing Checklist | Dee Unbound",
    description:
      "Interactive packing checklist — check off, skip, and customise for every trip.",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/essentials/packing-list",
  },
};

export default function PackingListPage() {
  // Computed inside the function — avoids module-level evaluation crash
  const allItems = DEFAULT_CATEGORIES.flatMap(cat =>
    cat.items.map(item => item.name)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Complete Travel Packing Checklist",
    description:
      "A complete interactive travel packing checklist covering documents, tech, clothing, toiletries, health, and bag organisation.",
    url: "https://www.deeunbound.com/travel/essentials/packing-list",
    numberOfItems: allItems.length,
    itemListElement: allItems.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  };

  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "Packing list" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Static content for SEO crawlers — visually hidden */}
      <div className="sr-only">
        <h1>Complete Travel Packing Checklist</h1>
        <p>
          A complete travel packing checklist covering documents, tech,
          clothing, toiletries, health essentials, and bag organisation.
        </p>
        {DEFAULT_CATEGORIES.map(cat => (
          <section key={cat.cat}>
            <h2>{cat.cat}</h2>
            <ul>
              {cat.items.map(item => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <PackingListClient />
    </PageShell>
  );
}