// app/travel/essentials/inflight-comfort/page.tsx
import PageShell from "@/components/page-shell";

export const postMeta = {
  title: "My In-Flight Survival Pouch - What I Actually Use on a Long-Haul Flight",
  description:
    "The exact items in my carry-on pouch for long flights - including a few things you won't find on other lists.",
  emoji: "✈️",
  readingTime: "6 min read",
  tags: ["flights", "comfort", "packing"],
};

export default function InflightComfortPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "In-Flight Comfort" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          My In-Flight Survival Pouch - What I Actually Use on a Long-Haul Flight
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          Not a generic list. These are the things that actually live in my
          carry-on pouch on every long flight.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>6 min read</span>
        </div>

        <div className="mt-14 space-y-16">

          {/* ── The pouch concept ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The pouch concept - one bag, seat pocket, done
            </h2>
            <p>
              Everything I need during the flight lives in one small pouch that
              goes in the seat pocket in front of me. Not in the overhead bin.
              Not buried in my backpack. Right there, accessible without
              unbuckling and standing up.
            </p>
            <p>
              The goal is to arrive having slept and not dehydrated with dry skin.
            </p>
          </section>

          {/* ── The items ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What's in it
            </h2>

            {/* Category: Skin + face */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-amber-50 border-b border-amber-100 px-6 py-4 flex items-center gap-3">
                <h3 className="font-serif text-lg font-semibold text-amber-900">Skin & face</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                    item: "Squalane oil",
                    note: "This is my most non-obvious recommendation and the one I get asked about most. Cabin air is extremely dry - your face and hands will feel it within a few hours. I use squalane oil, which is the lightest oil you can put on your skin. It absorbs instantly, doesn't feel greasy, and works on both face and hands. Regular moisturizer works too, but squalane is more versatile and lighter to carry.",
                    highlight: true,
                  },
                  {
                    item: "Lip balm",
                    note: "Lips dry out faster than any other part of your face in the air. Apply before you board, again when you wake up.",
                  },
                  {
                    item: "Alcohol spray",
                    note: "For hands and surfaces. Wipe down your tray table, armrests, and the screen before you settle in.",
                  },
                ].map((row) => (
                  <ItemRow key={row.item} item={row.item} note={row.note} highlight={row.highlight} />
                ))}
              </div>
            </div>

            {/* Category: Comfort + sleep */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-[#dce7e6] border-b border-teal-100 px-6 py-4 flex items-center gap-3">
                <h3 className="font-serif text-lg font-semibold text-teal-900">Comfort & sleep</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                      item: "Silicone putty earplugs - not foam",
                      note: "There's an important difference between the two. Foam earplugs have to be compressed and inserted deep into the ear canal to work - over time this can push earwax further in, causing compaction and raising infection risk. Silicone putty earplugs (like Mack's earplugs) work differently: you press them over the ear canal opening without inserting them inside. They seal the entrance from the outside. Same noise blocking, none of the wax-pushing problem.",
                      highlight: true,
                      link: {
                        href: "https://www.amazon.com/Macks-Pillow-Soft-Silicone-Earplugs/dp/B07G1MWHNR/",
                        label: "Mack's Pillow Soft Silicone Earplugs (Amazon)",
                      },
                  },
                  {
                    item: "Eye mask",
                    note: "Planes are rarely dark enough to sleep well, especially on daytime flights or if someone near you is watching a bright screen. A good eye mask is non-negotiable for actual rest.",
                  },
                  {
                    item: "Earphones (wired)",
                    note: "I bring wired earphones specifically for the in-flight entertainment - most plane headphone jacks are still 3.5mm. Less waste, no battery to manage.",
                  },
                  {
                    item: "Throw / light shawl",
                    note: "Airline blankets are thin and often scratchy. A personal shawl or light throw does double duty - warmth when the AC is aggressive, and a weight on your lap that signals to your body it's time to rest.",
                  },
                  {
                    item: "Mask",
                    note: "For two situations: you're flying with a cold or allergy and the cold cabin air is making it worse, or the passenger next to you is coughing. Either way, mask on and you stop worrying about it.",
                  },
                  {
                    item: "Loose slip-on shoes or socks only",
                    note: "Remove your regular shoes as soon as you sit down. Feet swell during long flights - keeping shoes on makes this worse. If you don't want to pad around in just socks, pack a loose pair of slip-ons in your carry-on.",
                  },
                  {
                    item: "Bucket hat",
                    highlight: true,
                    note: "My secret weapon that no one talks about - I wear a bucket hat on every flight. The brim blocks peripheral light and screens from the sides, the fabric keeps your head warm in cold cabin air, and pulling it down slightly signals to everyone around you that you are not available for conversation. It does everything an eye mask does for light, plus keeps you warm, plus adds a layer of social invisibility. Soft bucket hats pack flat and weigh nothing.",
                  },
                ].map((row) => (
                  <ItemRow
                    key={row.item}
                    item={row.item}
                    note={row.note}
                    highlight={row.highlight}
                    link={row.link}
                  />
                ))}
              </div>
            </div>

            {/* Category: Food + drinks */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 px-6 py-4 flex items-center gap-3">
                <h3 className="font-serif text-lg font-semibold text-green-900">Food & drinks</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                    item: "Instant coffee / matcha / teabags",
                    note: "Flight attendants will give you hot water any time you ask - you don't have to wait for the drink trolley. I bring my own teabags and matcha sachets because plane tea is always weak and their coffee is not good. A small ritual of making your own drink mid-flight is genuinely calming.",
                    highlight: true,
                  },
                  {
                    item: "Vitamin C",
                    note: "Low immunity is a real risk in recirculated cabin air. A chewable vitamin C taken before and during a long flight is a small habit with a real effect on how you feel when you land.",
                  },
                  {
                    item: "Steel water bottle (lightweight)",
                    note: "Ask flight attendants to fill it - they will. Staying hydrated on a long flight is the single biggest factor in how you feel on arrival. The standard small cups they hand out are nowhere near enough.",
                  },
                ].map((row) => (
                  <ItemRow key={row.item} item={row.item} note={row.note} highlight={row.highlight} />
                ))}
              </div>
            </div>

            {/* Category: Practical */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-100 px-6 py-4 flex items-center gap-3">
                <h3 className="font-serif text-lg font-semibold text-purple-900">Practical</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                    item: "Charging cable (short)",
                    note: "Many seats now have USB charging ports. A short cable means you can keep your phone charged without it trailing across the seat.",
                  },
                  {
                    item: "Plastic bag or dry bag",
                    note: "For trash, for wet things, for the meal packaging you're not done with, for keeping the pouch itself clean. Always one in the pouch.",
                  },
                  {
                    item: "Panty liner",
                    note: "Practical, lightweight, and one of those things you'll quietly thank yourself for on a 14-hour flight. Provides an alternative to changing underwear and helps you feel clean.",
                  },
                ].map((row) => (
                  <ItemRow key={row.item} item={row.item} note={row.note} />
                ))}
              </div>
            </div>

            {/* Category: For the feet */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-orange-50 border-b border-orange-100 px-6 py-4 flex items-center gap-3">
                <h3 className="font-serif text-lg font-semibold text-orange-900">For your feet (avoid elephant feet)</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                    item: "Foot roller (small massage ball or roller)",
                    note: "Feet and ankles swell on long flights - it's called dependent edema and it's very common. A small massage ball or foot roller that you use while seated keeps circulation moving. Roll your feet under the seat every hour or so. It's one of those things that sounds minor until you're on a 15-hour flight and your ankles look like balloons.",
                    highlight: true,
                    link: {
                      href: "https://www.amazon.com/Due-North-Massage-Plantar-Fasciitus/dp/B002QEY6NK/",
                      label: "The one I use - Rubz foot massage ball (Amazon)",
                    },
                  },
                  {
                    item: "Get up every 2 hours",
                    note: "Yes it disturbs your sleep. Yes it's worth it. Walk to the back galley, do a few calf raises, walk back. Two minutes is enough. The difference in how your legs and lower back feel on arrival is significant. Aisle seat helps.",
                    highlight: false,
                    link: null,
                  },
                ].map((row) => (
                  <div key={row.item} className={`px-6 py-4 ${row.highlight ? "bg-amber-50/50" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      {row.highlight && (
                        <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full flex-shrink-0">
                          Non-obvious
                        </span>
                      )}
                    </div>
                    <p className="font-medium text-[var(--text)] text-sm">{row.item}</p>
                    <p className="mt-1 text-sm leading-7 text-neutral-600">{row.note}</p>
                    {row.link && (
                      <a
                        href={row.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 underline underline-offset-2 hover:text-teal-900"
                      >
                        🛒 {row.link.label} ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── The quick reference ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
              Full pouch list
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Squalane oil",
                "Lip balm",
                "Alcohol spray (small)",
                "Ear seal",
                "Eye mask",
                "Wired earphones",
                "Light shawl or throw",
                "Mask",
                "Teabags / matcha / instant coffee",
                "Vitamin C",
                "Steel water bottle",
                "Charging cable (short)",
                "Plastic bag",
                "Panty liner",
                "Foot roller or massage ball",
                "Bucket hat",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                  {item}
                </div>
              ))}
            </div>
          </section>

        </div>

        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              None of this is expensive or heavy. The whole pouch fits in a large
              ziplock bag.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

function ItemRow({
  item,
  note,
  highlight,
  link,
}: {
  item: string;
  note: string;
  highlight?: boolean;
  link?: {
    href: string;
    label: string;
  };
}) {
  return (
    <div className={`px-6 py-4 ${highlight ? "bg-amber-50/50" : ""}`}>
      <div className="flex items-start gap-3">
        {highlight && (
          <span className="mt-0.5 flex-shrink-0 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
            Non-obvious
          </span>
        )}
      </div>
      <p className="font-medium text-[var(--text)] text-sm mt-1">{item}</p>
      <p className="mt-1 text-sm leading-7 text-neutral-600">{note}</p>
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 underline underline-offset-2 hover:text-teal-900"
        >
          🛒 {link.label} ↗
        </a>
      )}
    </div>
  );
}
