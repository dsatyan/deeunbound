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
          carry-on pouch on every long flight - earned over 40+ trips. A few of
          them you won't see on other lists.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>6 min read</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          Long-haul flights are not something that just happen to you. With the
          right small bag, you can land feeling like a person instead of a
          crumpled receipt.
        </blockquote>

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
              The goal is to arrive having slept, not dehydrated, with skin that
              doesn't feel like parchment, and without having disturbed everyone
              around me six times. This pouch makes that possible.
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
                <span className="text-xl">🧴</span>
                <h3 className="font-serif text-lg font-semibold text-amber-900">Skin & face</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                    item: "Squalane oil",
                    note: "This is my most non-obvious recommendation and the one I get asked about most. Cabin air is extremely dry - your face and hands will feel it within a few hours. I use squalane oil, which is the lightest oil you can put on your skin. It absorbs instantly, doesn't feel greasy, and works on both face and hands. A small bottle lasts for many flights. Regular moisturizer works too, but squalane is more versatile and lighter to carry.",
                    highlight: true,
                  },
                  {
                    item: "Lip balm with SPF",
                    note: "Lips dry out faster than any other part of your face in the air. Apply before you board, again when you wake up.",
                  },
                  {
                    item: "Alcohol wipes / sanitary wipes",
                    note: "Wipe down your tray table, armrests, and the screen before you settle in. Not paranoia - just practical. Also useful mid-flight for a quick refresh.",
                  },
                  {
                    item: "Alcohol spray (small)",
                    note: "For hands when the bathroom queue is long. Doubles as a surface disinfectant.",
                  },
                ].map((row) => (
                  <ItemRow key={row.item} item={row.item} note={row.note} highlight={row.highlight} />
                ))}
              </div>
            </div>

            {/* Category: Comfort + sleep */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-[#dce7e6] border-b border-teal-100 px-6 py-4 flex items-center gap-3">
                <span className="text-xl">😴</span>
                <h3 className="font-serif text-lg font-semibold text-teal-900">Comfort & sleep</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                    item: "Ear seal / noise-isolating earplugs",
                    note: "Not just any earplugs. Proper ear seals that physically block sound. Wax or foam that moulds to your ear canal. Combined with an eye mask, this is the closest thing to a sleep button for a plane. The engine noise alone on a 15-hour flight is exhausting - blocking it out makes a significant difference.",
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
                    note: "Keeps cabin air from drying out your nose and throat, especially useful on very long flights. Also filters out some of what other passengers are breathing.",
                  },
                  {
                    item: "Loose slip-on shoes or socks only",
                    note: "Remove your regular shoes as soon as you sit down. Feet swell during long flights - keeping shoes on makes this worse. If you don't want to pad around in just socks, pack a loose pair of slip-ons in your carry-on.",
                  },
                ].map((row) => (
                  <ItemRow key={row.item} item={row.item} note={row.note} />
                ))}
              </div>
            </div>

            {/* Category: Food + drinks */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-green-50 border-b border-green-100 px-6 py-4 flex items-center gap-3">
                <span className="text-xl">🍵</span>
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
                <span className="text-xl">🔌</span>
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
                    note: "Practical, lightweight, and one of those things you'll quietly thank yourself for on a 14-hour flight. Plane restrooms are small and hygiene routines get disrupted.",
                  },
                ].map((row) => (
                  <ItemRow key={row.item} item={row.item} note={row.note} />
                ))}
              </div>
            </div>

            {/* Category: For the feet */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="bg-orange-50 border-b border-orange-100 px-6 py-4 flex items-center gap-3">
                <span className="text-xl">🦶</span>
                <h3 className="font-serif text-lg font-semibold text-orange-900">For your feet (avoid elephant feet)</h3>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  {
                    item: "Foot roller (small massage ball or roller)",
                    note: "Feet and ankles swell on long flights - it's called dependent edema and it's very common. A small massage ball or foot roller that you use while seated keeps circulation moving. Roll your feet under the seat every hour or so. It's one of those things that sounds minor until you're on a 15-hour flight and your ankles look like balloons.",
                    highlight: true,
                  },
                  {
                    item: "Compression socks",
                    note: "If you're prone to swollen feet or have a very long flight, compression socks are genuinely effective. They're especially worth it if you have a long day of walking ahead of you on arrival.",
                  },
                  {
                    item: "Get up every 2 hours",
                    note: "Yes it disturbs your sleep. Yes it's worth it. Walk to the back galley, do a few calf raises, walk back. Two minutes is enough. The difference in how your legs feel on arrival is significant. Aisle seat helps.",
                  },
                ].map((row) => (
                  <ItemRow key={row.item} item={row.item} note={row.note} highlight={row.highlight} />
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
                "Lip balm with SPF",
                "Alcohol wipes",
                "Alcohol spray (small)",
                "Ear seal / noise-isolating earplugs",
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
                "Compression socks (optional)",
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
              ziplock bag. It's the kind of thing you assemble once and then just
              refill before each trip - and it quietly makes every long flight
              better.
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
}: {
  item: string;
  note: string;
  highlight?: boolean;
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
    </div>
  );
}