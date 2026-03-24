// app/travel/essentials/daypack-system/page.tsx
import PageShell from "@/components/page-shell";

export const postMeta = {
  title: "The Daypack System That Saves You Hours Every Trip",
  description:
    "One pre-packed bag, always ready to go. The system I built after a ferry scramble in New Zealand.",
  emoji: "🎒",
  readingTime: "7 min read",
  tags: ["packing", "systems", "gear"],
};

export default function DaypackSystemPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "Daypack System" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          The Daypack System That Saves You Hours Every Trip
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          One bag. Always packed. Ready in under two minutes whether you're
          jumping out of a rental car, checking into a hotel, or scrambling
          for a ferry you nearly missed.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>7 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Updated 2025</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          The better you plan and pack, the easier travel becomes. Even the
          smallest things - lighter bags, the right items in the right place -
          add up and make the difference between stress and flow.
        </blockquote>

        <div className="mt-14 space-y-16">

          {/* ── The Ferry Story ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How a ferry in New Zealand changed how I pack
            </h2>
            <p>
              We were on the South Island, staying somewhere near the water, and
              the ferry was leaving in minutes. We'd just arrived at our
              accommodation, bags barely off the car, and suddenly it was:
              grab what you need, go, now.
            </p>
            <p>
              What followed was a completely avoidable scramble. Sunscreen buried
              somewhere in the main suitcase. Sunglasses in a different bag.
              Water bottle not filled. Cap missing. We made the ferry, barely -
              but spent the first twenty minutes of a beautiful crossing hunting
              through bags instead of looking at the view.
            </p>
            <p>
              That was the last time I packed that way. From that trip onwards,
              I've kept a pre-packed daypack - always ready, always the same
              contents, always the first thing I pull out when we arrive anywhere.
            </p>
          </section>

          {/* ── The Philosophy ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The idea: treat it like an emergency bag
            </h2>
            <p>
              Think of your daypack the way you'd think of a first aid kit or a
              go-bag. It's not something you pack fresh each day. It's something
              you pack once, keep stocked, and just pick up.
            </p>
            <p>
              The logic is simple: most of what you need for a day out doesn't
              change much from day to day or even trip to trip. Sunscreen, a
              jacket, water, your cap. If these things are already in a bag that
              lives in your car or by the hotel door, you've eliminated a decision
              - and a search - from every single outing.
            </p>

            {/* Two modes */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "🚗",
                  title: "Car-ready mode",
                  desc: "Daypack lives in the back seat or boot. You park, grab the bag, and go. Navigation, snacks, sun protection - all already there.",
                  color: "bg-[#dce7e6] border-teal-200",
                },
                {
                  icon: "🏨",
                  title: "Hotel-ready mode",
                  desc: "Check in, drop the big bag, pick up the daypack. Walk out the door already set for the afternoon without unpacking anything.",
                  color: "bg-amber-50 border-amber-200",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl border px-5 py-5 ${item.color}`}
                >
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <p className="font-serif text-lg font-semibold text-[var(--text)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-base leading-7 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── What's in it ── */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What's in the daypack
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              This isn't a minimalist bag and it isn't a kitchen sink. Everything
              here has earned its place from a specific moment where I wished I
              had it - or a moment where I was glad I did.
            </p>

            {/* Category cards */}
            <div className="space-y-4">

              {/* Sun + weather */}
              <CategoryCard
                emoji="☀️"
                title="Sun & weather"
                color="gold"
                items={[
                  { item: "Sunscreen (SPF 50+)", note: "NZ and tropical destinations especially - the UV is brutal" },
                  { item: "Sunglasses", note: "Keep a dedicated pair in the daypack, not your main bag" },
                  { item: "Cap or sun hat", note: "Lightweight, crushable" },
                  { item: "Compact umbrella", note: "The small ones fold to nothing and save you constantly in changeable climates" },
                  { item: "Packable jacket", note: "Even in summer - mornings, ferry crossings, and mountain drives get cold fast" },
                ]}
              />

              {/* Everyday carry */}
              <CategoryCard
                emoji="👜"
                title="Everyday carry"
                color="teal"
                items={[
                  { item: "Wallet", note: "Cash, cards, and your travel card specifically" },
                  { item: "Water bottle", note: "Reusable - refill at the hotel before you leave" },
                  { item: "Power bank (charged)", note: "The most important item on this list. Dead phone = no maps, no bookings, no photos" },
                  { item: "Earphones or AirPods", note: "Long drives, waiting, walking" },
                  { item: "Reusable tote bag", note: "Folds flat - for grocery runs, beach trips, or anything you buy on the way" },
                ]}
              />

              {/* Driving additions */}
              <CategoryCard
                emoji="🚗"
                title="If you're driving (add these)"
                color="blue"
                items={[
                  { item: "Phone mount", note: "Non-negotiable. Holding your phone while driving to navigate is dangerous and pointless" },
                  { item: "Car charger", note: "USB-C preferably - charges phone and power bank" },
                  { item: "Driving gloves", note: "Optional, but on long scenic drives in cold countries the steering wheel gets very cold early morning" },
                  { item: "Snacks", note: "Especially important for vegetarian travelers on South Island NZ, rural routes, or anywhere food is sparse. Nuts, energy bars - whatever you'd eat" },
                ]}
              />

              {/* Small emergency kit */}
              <CategoryCard
                emoji="🩹"
                title="Small emergency kit (fits in a ziplock)"
                color="orange"
                items={[
                  { item: "Pain relief tablets", note: "Paracetamol or ibuprofen - headaches happen at inconvenient times" },
                  { item: "Blister plasters x 2", note: "New shoes + walking cities = guaranteed blisters" },
                  { item: "Lip balm with SPF", note: "Especially on boats, ski slopes, and high-altitude days" },
                  { item: "Hand sanitiser (small)", note: "Not everywhere has soap at outdoor attractions" },
                ]}
              />

              {/* Wet weather / misc */}
              <CategoryCard
                emoji="🛍️"
                title="Odds and ends worth keeping"
                color="purple"
                items={[
                  { item: "Plastic bags or dry bags", note: "For wet clothes, sandy shoes, rubbish, or protecting your phone on a boat. A few folded ziplock bags weigh nothing" },
                  { item: "Tissues or small pack of wipes", note: "Useful more often than you'd think" },
                  { item: "Pen", note: "Landing cards, receipts, writing down an address someone gives you" },
                ]}
              />
            </div>
          </section>

          {/* ── The system in practice ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How to actually maintain it
            </h2>
            <p>
              The system only works if the bag stays stocked. The weak point is
              items you use and don't replace - sunscreen that runs out, the
              power bank you borrowed to charge at the hotel and left behind.
            </p>

            <div className="space-y-3">
              {[
                {
                  step: "Pack it before you leave home",
                  detail: "Build the bag once in your living room with all the items above. From then on you're just maintaining it, not rebuilding it.",
                },
                {
                  step: "Restock at the hotel each night",
                  detail: "Refill the water bottle. Plug in the power bank. Put the sunscreen back if you took it out. Takes 3 minutes and means you wake up ready.",
                },
                {
                  step: "Keep it separate from your main bag",
                  detail: "The whole point is that it's grab-and-go. If the daypack items are mixed into your suitcase, you've just made a packing list, not a system.",
                },
                {
                  step: "Replace consumables as soon as you notice they're low",
                  detail: "Sunscreen is the classic one. Don't wait until the day you need it. If you see a pharmacy, top up. Tiny bottles travel better anyway.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
                >
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-sm font-medium text-teal-700">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-[var(--text)]">{item.step}</p>
                    <p className="mt-1 text-base leading-7 text-neutral-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Closing philosophy ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
            <p className="font-serif text-xl font-semibold text-[var(--text)] mb-4">
              The real value isn't the stuff - it's the mental load you remove
            </p>
            <p className="text-lg leading-8 text-neutral-700">
              Every decision you eliminate before you leave the hotel is energy
              you keep for the actual trip. The daypack doesn't make your travels
              perfect. It just removes a specific category of small, avoidable
              friction - the scramble, the "where did I put it", the arriving
              somewhere and realising you need to find a pharmacy before you can
              even start.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              Pack it once. Keep it ready. Let the trip be the thing you're
              thinking about - not the bag.
            </p>
          </section>

        </div>

        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

type CardColor = "teal" | "gold" | "blue" | "orange" | "purple" | "green";

const cardColorMap: Record<CardColor, { header: string; dot: string }> = {
  teal:   { header: "bg-[#dce7e6] text-teal-800",   dot: "bg-teal-600" },
  gold:   { header: "bg-amber-100 text-amber-900",   dot: "bg-amber-600" },
  blue:   { header: "bg-blue-100 text-blue-900",     dot: "bg-blue-600" },
  orange: { header: "bg-orange-100 text-orange-900", dot: "bg-orange-500" },
  purple: { header: "bg-purple-100 text-purple-900", dot: "bg-purple-600" },
  green:  { header: "bg-green-100 text-green-900",   dot: "bg-green-600" },
};

function CategoryCard({
  emoji,
  title,
  color,
  items,
}: {
  emoji: string;
  title: string;
  color: CardColor;
  items: { item: string; note: string }[];
}) {
  const c = cardColorMap[color];
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      <div className={`flex items-center gap-3 px-6 py-4 ${c.header}`}>
        <span className="text-xl">{emoji}</span>
        <h3 className="font-serif text-lg font-semibold">{title}</h3>
      </div>
      <div className="divide-y divide-[var(--border)]">
        {items.map((row) => (
          <div key={row.item} className="flex items-start gap-4 px-6 py-4">
            <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${c.dot}`} />
            <div>
              <span className="font-medium text-[var(--text)] text-sm">{row.item}</span>
              <span className="text-sm text-[var(--muted)]"> - {row.note}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}