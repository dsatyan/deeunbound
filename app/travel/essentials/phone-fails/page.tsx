// app/travel/essentials/phone-fails/page.tsx
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const postMeta = {
  title: "When Your Phone Dies Mid-Trip - What I Learned in Switzerland",
  description:
    "iPhone thermal shutdown in Lugano. eSIM data gone in the middle of nowhere. Here's what saved us - and what to do before it happens to you.",
  emoji: "📵",
  readingTime: "5 min read",
  tags: ["connectivity", "eSIM", "offline", "phone"],
};

export default function PhoneFailsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "Phone Fails" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          When Your Phone Dies Mid-Trip - What I Learned in Switzerland
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          Two things went wrong on the same Switzerland trip: the phone shut
          down from heat on a train table in Lugano, and the eSIM data ran out
          with no Wi-Fi in sight. Here's what actually happened, how we got
          through it, and what I do differently now.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>4 min read</span>
        </div>

        <div className="mt-14 space-y-16">

          {/* ── Story 1: Overheating ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The phone that stopped working in Lugano
            </h2>
            <p>
              We were on a train in Switzerland, heading from Lugano to Lucerne.
              My phone was sitting on the table by the window. The afternoon sun
              was coming in directly, I had Google Maps running, a few apps open
              in the background - and at some point I looked down and the screen
              was black. The phone was hot to the touch and completely
              unresponsive.
            </p>
            <p>
              It had shut itself down. This is not a malfunction - it's a
              deliberate protection feature. When an iPhone gets too hot, it cuts
              off to prevent damage to the battery and internals. No warning, no
              gradual slow-down. Just off.
            </p>

            {/* What happened box */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
                What we actually did
              </p>
              <p className="text-base leading-7 text-neutral-700">
                We needed to change platforms at the next station and neither of
                us knew which train or which platform. No maps. No itinerary.
                We found a café near the station, sat down, ordered something
                cold, and waited for the phone to cool down naturally. About 15
                minutes later it was responsive again. We used the café's Wi-Fi
                to pull up the itinerary, checked the train times, and continued.
              </p>
              <p className="mt-3 text-base leading-7 text-neutral-700">
                It was fine in the end - but those 15 minutes of not knowing
                where we were going, were genuinely stressful.
              </p>
            </div>
          </section>

          {/* ── What to do ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              If your iPhone shuts down from overheating
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              In order: cool first, restart second. Skipping the first step means the restart won't hold.
            </p>

            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Remove it from the heat source immediately",
                  detail: "Off the sunny table, out of the hot car, away from direct sunlight. Put it somewhere shaded and ideally with airflow - on a table inside a café, not in a bag or pocket where heat stays trapped.",
                  color: "bg-[#dce7e6] text-teal-700",
                },
                {
                  n: "2",
                  title: "Wait - do not try to turn it on yet",
                  detail: "Give it 10–20 minutes to cool down at room temperature. Trying to restart while still hot often fails and can extend the shutdown.",
                  color: "bg-[#dce7e6] text-teal-700",
                },
                {
                  n: "⚠",
                  title: "Never put it in the fridge or freezer",
                  detail: "The sudden temperature drop causes condensation inside the phone, which can damage the electronics permanently. Room temperature only.",
                  color: "bg-red-100 text-red-700",
                },
                {
                  n: "3",
                  title: "Force restart once it's cooled",
                  detail: "If the phone doesn't turn back on by itself, use the force restart sequence.",
                  color: "bg-[#dce7e6] text-teal-700",
                  extra: true,
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5"
                >
                  <span className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium ${step.color}`}>
                    {step.n}
                  </span>
                  <div>
                    <p className="font-medium text-[var(--text)]">{step.title}</p>
                    <p className="mt-1 text-base leading-7 text-neutral-600">{step.detail}</p>
                    {step.extra && (
                      <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4">
                        <p className="text-sm font-medium text-[var(--text)] mb-3">
                          Force restart sequence - iPhone 8 and later (including all current models):
                        </p>
                        <div className="space-y-2">
                          {[
                            { key: "Press and quickly release", action: "Volume Up button" },
                            { key: "Press and quickly release", action: "Volume Down button" },
                            { key: "Press and hold", action: "Side button (right side of phone) - keep holding until Apple logo appears, then release. May take 10–20 seconds." },
                          ].map((s, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-xs font-medium text-teal-700 mt-0.5">
                                {i + 1}
                              </span>
                              <span>
                                <span className="text-[var(--muted)]">{s.key}: </span>
                                <span className="font-medium text-[var(--text)]">{s.action}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <NoteBox>
              <strong>Prevent it in the first place:</strong> Don't leave your phone on a surface in direct sunlight, especially on trains or near windows. Close background apps before long journeys. If you're using Maps heavily, screen brightness and GPS together generate real heat - turn the screen down or lock it once the route is set.
            </NoteBox>
          </section>

          {/* ── Story 2: eSIM runs out ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The other problem: eSIM data ran out
            </h2>
            <p>
              Same trip. The Airalo data plan - a 5GB pack - ran out while we
              were between places. No mobile data, no way to top up without
              Wi-Fi to log into the Airalo app and purchase more data.
            </p>
            <p>
              The catch with eSIM top-ups is exactly this: you need internet to
              buy more internet. If you're somewhere without Wi-Fi, you're
              stuck until you find a café, a hotel lobby, or a public network.
              We found a place with Wi-Fi, connected just long enough to top up,
              and continued. But it was another avoidable delay.
            </p>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
                The fix
              </p>
              <p className="text-base leading-7 text-neutral-700">
                Top up your eSIM <em>before</em> you run out - not when you get
                the low-data warning. Check your usage every day or two,
                especially if you're using navigation heavily (Maps eats data
                fast on unfamiliar roads). Top up when you still have 1GB left
                and you still have mobile data to do it from anywhere.
              </p>
            </div>
          </section>

          {/* Quick reference */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
              Pre-departure phone checklist
            </p>
            <div className="space-y-2">
              {[
                {
                    text: "Offline maps downloaded for every city/region on your itinerary",
                    link: { href: "/travel/essentials/gate-habits", label: "more about this in gate habits" },
                },
                {
                    text: "Itinerary doc marked 'Available offline' in Google Docs",
                    link: { href: "/travel/essentials/itinerary-system", label: "The itinerary system post covers how to set this up" },
                },
                {
                    text: "Hotel/accommodation address saved in Notes (no internet required)",
                    link: null,
                },
                {
                    text: "eSIM data topped up - check balance before departing",
                    link: { href: "/travel/essentials/esim", label: "eSIM guide" },
                },
                {
                    text: "Force restart sequence memorised: Vol Up → Vol Down → hold Side button",
                    link: null,
                },
                {
                    text: "Brightness turned down when using navigation on trains/long rides",
                    link: null,
                },
                {
                    text: "Phone not left in direct sunlight on tables or car dashboards",
                    link: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-xs font-medium text-teal-700">
                    ✓
                  </span>
                  <span>
                    {item.text}
                    {item.link && (
                        <>
                        {" - "}
                        <a
                            href={item.link.href}
                            className="font-medium text-teal-700 underline underline-offset-2 hover:text-teal-900"
                        >
                            {item.link.label}
                        </a>
                        </>
                    )}
                    </span>
                </div>
              ))}
            </div>
          </section>

        </div>

        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              Switzerland sorted itself out. We made the train, got to Lucerne,
              and the rest of the trip was fine. But I've hardly ever left for a trip
              since without offline maps, an offline itinerary, and a topped-up
              eSIM.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

function NoteBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031] ${className}`}>
      {children}
    </div>
  );
}