// app/travel/destinations/japan/jr-pass-worth-it/page.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const metadata: Metadata = {
  title:
    "Is the JR Pass Worth It in 2026? Real Cost Breakdown + When It Makes Sense | Dee Unbound",
  description:
    "Is the JR Pass worth it in 2026? We ran the real numbers from our April 2026 Japan trip, compared individual tickets vs JR East Pass vs nationwide JR Pass, and explain when the pass actually saves money.",
  keywords: [
    "JR pass worth it 2026",
    "is JR pass worth it",
    "JR pass cost breakdown",
    "JR East pass vs JR pass",
    "japan rail pass calculator",
    "japan train pass comparison",
    "is JR pass cheaper than individual tickets",
  ],
  openGraph: {
    title:
      "Is the JR Pass Worth It in 2026? Real Cost Breakdown + When It Actually Makes Sense",
    description:
      "Actual numbers from our April 2026 Japan trip: every route, every yen, and why we skipped the nationwide JR Pass.",
    url: "https://www.deeunbound.com/travel/destinations/japan/jr-pass-worth-it",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical:
      "https://www.deeunbound.com/travel/destinations/japan/jr-pass-worth-it",
  },
};

export default function JRPassWorthItPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Is the JR Pass worth it?" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Rail passes
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Is the JR Pass worth it in 2026? Real cost breakdown from a 10-day
          trip
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          We almost spent ¥160,000 on a nationwide JR Pass we did not need.
          After the 2023 price hike, buying the JR Pass is no longer automatic -
          so we ran the actual numbers from our April 2026 Japan trip across 8
          cities. Here is what we spent, what we skipped, and when the JR Pass
          still makes sense.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
        </div>

        <div className="mt-14 space-y-16">
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Short answer: is the JR Pass worth it in 2026?
            </h2>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-6">
              <p className="text-lg leading-8 text-amber-950">
                For most 7–10 day Japan trips, the nationwide JR Pass is{" "}
                <strong>not automatically worth it anymore</strong>. It only
                makes sense if your most expensive long-distance JR train rides
                fit inside one pass window - usually 7, 14, or 21 consecutive
                days.
              </p>
              <p className="mt-4 text-base leading-7 text-amber-900">
                For our route, the best value was not the nationwide JR Pass. We
                used individual tickets for Central Japan and the JR East Pass
                for our Tohoku leg.
              </p>
            </div>

            <p className="text-lg leading-8 text-neutral-700">
              One small planning mistake also cost us extra: we thought we could
              collect our JR East Pass at Otsuki Station before heading to Ueno.
              We could not. Otsuki did not support JR East Pass collection, so
              we had to buy a separate ticket to Ueno and collect the pass at
              the JR East Travel Service Center there. I wrote the full story in
              my{" "}
              <Link
                href="/travel/destinations/japan/jr-pass-mistakes"
                className="text-teal-700 underline underline-offset-2"
              >
                JR Pass mistakes guide
              </Link>
              .
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Current JR Pass prices in 2026
            </h2>

            <p className="text-lg leading-8 text-neutral-700">
              These are the prices in effect until September 30, 2026 for passes
              purchased through the official JR website and most authorised
              agencies. From October 1, 2026, agency prices are expected to
              increase by roughly 5–6% while official JR website pricing remains
              the same. If you are buying through an agency, check the latest
              official pricing before purchasing.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--card)]">
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">
                      Pass
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-[var(--text)]">
                      Price per person
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">
                      Coverage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-white">
                  {[
                    {
                      pass: "JR Pass nationwide",
                      duration: "7 days",
                      price: "¥50,000",
                      coverage:
                        "JR lines across Japan; Nozomi/Mizuho require restrictions or separate conditions",
                    },
                    {
                      pass: "JR Pass nationwide",
                      duration: "14 days",
                      price: "¥80,000",
                      coverage: "Same as above",
                    },
                    {
                      pass: "JR Pass nationwide",
                      duration: "21 days",
                      price: "¥100,000",
                      coverage: "Same as above",
                    },
                    {
                      pass: "JR East Pass",
                      duration: "5 days",
                      price: "¥35,000",
                      coverage: "Tokyo + Tohoku + Nagano + Niigata region",
                    },
                    {
                      pass: "JR East Pass",
                      duration: "10 days",
                      price: "¥55,000",
                      coverage: "Same as above",
                    },
                  ].map((row, i) => (
                    <tr key={row.pass + row.duration} className={i >= 3 ? "bg-[#f0f7ee]" : ""}>
                      <td className="px-4 py-3 font-medium text-[var(--text)]">
                        {row.pass}
                      </td>
                      <td className="px-4 py-3 text-neutral-600">
                        {row.duration}
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-medium text-[var(--text)]">
                        {row.price}
                      </td>
                      <td className="px-4 py-3 text-xs text-neutral-600">
                        {row.coverage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm italic text-[var(--muted)]">
              Source:{" "}
              <a
                href="https://japanrailpass.net/en/purchase/price/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--text)]"
              >
                Japan Rail Pass official pricing
              </a>{" "}
              and{" "}
              <a
                href="https://www.jreast.co.jp/en/multi/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--text)]"
              >
                JR East Pass official page
              </a>
            </p>

            <NoteBox>
              <strong>The price that changed everything:</strong> the 7-day
              nationwide JR Pass increased from ¥29,650 to ¥50,000 in October
              2023. Before that increase, a simple Tokyo–Kyoto round trip nearly
              covered the pass cost. At ¥50,000, you now need several expensive
              JR rides inside the same pass window to break even.
            </NoteBox>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What the JR Pass does not cover
            </h2>

            <p className="text-lg leading-8 text-neutral-700">
              The biggest mistake tourists make is assuming the JR Pass covers
              all trains, buses, and subways in Japan. It does not. Before you
              buy any pass, check how much of your itinerary is actually on JR.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Nozomi and Mizuho Shinkansen",
                  detail:
                    "The fastest services on the Tokaido-Sanyo route are restricted for standard JR Pass use. On Tokyo to Kyoto, taking Hikari instead of Nozomi can add roughly 15–25 minutes depending on the train. It is not a huge issue, but it matters when planning tight transfers.",
                  icon: "🚄",
                },
                {
                  title: "Private highway buses",
                  detail:
                    "This hit us directly. Kanazawa to Shirakawa-go, Shirakawa-go to Takayama, and Mishima to Kawaguchiko were private bus routes. No JR Pass covered them.",
                  icon: "🚌",
                },
                {
                  title: "City subways and metro systems",
                  detail:
                    "Tokyo Metro, Toei Subway, Osaka Metro, and Kyoto City Subway are not JR. You need an IC card like Suica or PASMO for city transit.",
                  icon: "🚇",
                },
                {
                  title: "Most private railways",
                  detail:
                    "Fujikyu, Kintetsu, Odakyu, Hankyu, Keihan, and many other useful tourist routes are private operators. These usually require separate tickets.",
                  icon: "🚃",
                },
                {
                  title: "Tokaido Shinkansen with JR East Pass",
                  detail:
                    "The JR East Pass does not cover the Tokaido Shinkansen between Tokyo, Nagoya, Kyoto, and Osaka because that route is operated by JR Central.",
                  icon: "⚠️",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-red-200 bg-red-50 px-5 py-4"
                >
                  <span className="mt-0.5 flex-shrink-0 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-red-900">
                      ✗ {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-red-800">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg leading-8 text-neutral-700">
              For everyday city travel, read my{" "}
              <Link
                href="/travel/destinations/japan/suica-ic-card"
                className="text-teal-700 underline underline-offset-2"
              >
                Suica IC card setup guide
              </Link>
              . For confusing long-distance tickets, start with my{" "}
              <Link
                href="/travel/destinations/japan/train-tickets-explained"
                className="text-teal-700 underline underline-offset-2"
              >
                Japan train tickets explained guide
              </Link>
              .
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Our actual route and what each leg cost
            </h2>

            <p className="text-lg leading-8 text-neutral-700">
              Our April 2026 trip covered Tokyo, Kanazawa, Shirakawa-go,
              Takayama, Nagoya, Kyoto, Kawaguchiko, Hirosaki, and Aomori. Here
              is every major transport leg with the actual cost for two people.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--card)]">
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">
                      Route
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">
                      Mode
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-[var(--text)]">
                      Cost for 2
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">
                      Covered by pass?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-white">
                  {[
                    ["Narita Airport → Tokyo", "Keisei Main Line", "¥2,120", "No JR pass", "text-red-600"],
                    ["Tokyo → Kanazawa", "Hokuriku Shinkansen", "¥28,800", "Nationwide JR Pass", "text-amber-600"],
                    ["Kanazawa → Shirakawa-go", "Private highway bus", "¥5,600", "No JR pass", "text-red-600"],
                    ["Shirakawa-go → Takayama", "Private highway bus", "¥5,600", "No JR pass", "text-red-600"],
                    ["Takayama → Nagoya", "JR Hida Limited Express", "~¥8,200", "Nationwide JR Pass", "text-amber-600"],
                    ["Nagoya → Kyoto", "Tokaido Shinkansen", "¥11,220", "Nationwide JR Pass with eligible service", "text-amber-600"],
                    ["Kyoto → Mishima", "Tokaido Shinkansen", "¥11,000", "Nationwide JR Pass with eligible service", "text-amber-600"],
                    ["Mishima → Kawaguchiko", "Private bus", "¥2,500", "No JR pass", "text-red-600"],
                    ["Kawaguchiko → Otsuki", "Fujikyu Railway", "¥4,860", "No JR pass", "text-red-600"],
                    ["Otsuki → Ueno", "JR individual ticket", "~¥3,000", "JR East Pass would cover, but ours was not collected yet", "text-amber-600"],
                    ["Ueno → Shin-Aomori", "Hayabusa Shinkansen", "¥34,220 value", "JR East Pass ✓", "text-teal-700"],
                    ["Shin-Aomori → Hirosaki", "JR local", "¥1,000 value", "JR East Pass ✓", "text-teal-700"],
                    ["Hirosaki → Aomori day trip", "JR local", "~¥2,000 value", "JR East Pass ✓", "text-teal-700"],
                    ["Shin-Aomori → Tokyo", "Hayabusa Shinkansen", "¥34,220 value", "JR East Pass ✓", "text-teal-700"],
                    ["Tokyo → Narita Airport", "Narita Express (N'EX)", "~¥3,000 value", "JR East Pass ✓", "text-teal-700"]
                  ].map(([route, mode, cost, covered, color]) => (
                    <tr
                      key={route}
                      className={color === "text-teal-700" ? "bg-[#f0f7ee]" : ""}
                    >
                      <td className="px-4 py-3 font-medium text-[var(--text)]">
                        {route}
                      </td>
                      <td className="px-4 py-3 text-xs text-neutral-500">
                        {mode}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-[var(--text)]">
                        {cost}
                      </td>
                      <td className={`px-4 py-3 text-xs font-medium ${color}`}>
                        {covered}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[var(--border)] bg-[var(--card)]">
                    <td
                      colSpan={2}
                      className="px-4 py-3 font-semibold text-[var(--text)]"
                    >
                      JR East Pass for 2 people, 5 days
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-semibold text-[var(--text)]">
                      ¥70,000
                    </td>
                    <td className="px-4 py-3 text-xs font-medium text-teal-700">
                      Covered roughly ¥70,440+ in Tohoku fares
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Why we skipped the nationwide JR Pass
            </h2>

            <p className="text-lg leading-8 text-neutral-700">
              The nationwide 7-day JR Pass costs ¥50,000 per person, or
              ¥100,000 for two. On paper, our JR fares looked high enough. But
              the timing of our route made the pass much less useful.
            </p>

            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title:
                    "Our expensive train rides did not fit into one 7-day window",
                  detail:
                    "Our Central Japan legs happened earlier, while the Tohoku leg happened at the end. A 7-day pass could not cover both ends of the trip.",
                },
                {
                  n: "2",
                  title:
                    "The 14-day nationwide pass would cost ¥160,000 for two",
                  detail:
                    "That was the same as our approximate total transport cost including private buses and the JR East Pass. With the 14-day nationwide pass, we would still pay private bus fares on top.",
                },
                {
                  n: "3",
                  title:
                    "The JR East Pass covered the most expensive part almost perfectly",
                  detail:
                    "The Tokyo to Aomori round trip nearly broke even by itself. Everything else in Tohoku became added value.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-sm font-medium text-teal-700">
                      {item.n}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[var(--text)]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg leading-8 text-neutral-700">
              The financially correct answer for us was a hybrid strategy:
              individual tickets for Central Japan, then JR East Pass for
              Tohoku.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Which pass makes sense for which trip?
            </h2>

            <div className="space-y-4">
              {[
                {
                  scenario: "Tokyo only, 7–10 days",
                  verdict: "Skip JR Pass",
                  detail:
                    "Use Suica or PASMO. Tokyo Metro and Toei Subway are not covered by JR Pass, and most city-only trips do not come close to ¥50,000 in JR fares.",
                },
                {
                  scenario: "Tokyo + Kyoto + Osaka, 7 days",
                  verdict: "Usually skip",
                  detail:
                    "A Tokyo–Kyoto/Osaka round trip alone usually does not break even. Add Hiroshima or several long-distance JR day trips before reconsidering.",
                },
                {
                  scenario: "Tokyo + Kyoto + Tohoku, 10–14 days",
                  verdict: "Calculate carefully",
                  detail:
                    "A nationwide 14-day pass may be convenient, but a hybrid strategy can be cheaper depending on timing.",
                },
                {
                  scenario: "Tohoku-heavy trip",
                  verdict: "JR East Pass likely wins",
                  detail:
                    "If you are going from Tokyo to Sendai, Aomori, Hirosaki, Akita, or nearby Tohoku cities, the JR East Pass can be excellent value.",
                },
              ].map((item) => (
                <div
                  key={item.scenario}
                  className="rounded-2xl border border-[var(--border)] bg-white px-6 py-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-semibold text-[var(--text)]">
                      {item.scenario}
                    </h3>
                    <span className="rounded-full bg-[#f0f7ee] px-3 py-1 text-xs font-semibold text-teal-700">
                      {item.verdict}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Three questions to ask before buying a JR Pass
            </h2>

            <div className="space-y-3">
              {[
                {
                  q: "1. Add up only the JR-covered legs",
                  detail:
                    "Do not include private buses, city subways, Fujikyu, Kintetsu, Odakyu, or other private operators.",
                },
                {
                  q: "2. Check if your expensive rides fit inside the pass window",
                  detail:
                    "A 7-day pass only works for 7 consecutive days. If your big rides are spread out, the math changes quickly.",
                },
                {
                  q: "3. Compare regional passes before buying the nationwide pass",
                  detail:
                    "For our trip, the JR East Pass was a better fit than the nationwide JR Pass.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5"
                >
                  <p className="mb-2 font-medium text-[var(--text)]">
                    {item.q}
                  </p>
                  <p className="text-sm leading-7 text-neutral-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <NoteBox>
              JR East has a free official tool that recommends pass options
              based on your route. Try it before buying anything:{" "}
              <a
                href="https://pass-search.jre-maas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amber-800 underline underline-offset-2"
              >
                JR East Pass Search Tool ↗
              </a>
            </NoteBox>
          </section>

          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Our conclusion
            </h2>

            <p>
              We did not buy the nationwide JR Pass. For our route, it would
              have cost ¥160,000 for two people for 14 days, and it still would
              not have covered the private buses we needed.
            </p>

            <p>
              Instead, we paid for individual tickets across Central Japan and
              bought the JR East Pass for the Tohoku segment. Our total
              transport cost for two across 10 days was approximately ¥160,000
              including private buses, local trains, and the JR East Pass.
            </p>

            <p>
              The JR Pass is not dead. For certain itineraries, especially
              fast-paced multi-city trips with several Shinkansen rides, it can
              still save money. But it is no longer the automatic purchase it
              used to be. Run the numbers first.
            </p>
          </section>

          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Official resources
            </p>

            <div className="space-y-3">
              {[
                {
                  label: "Japan Rail Pass official prices",
                  href: "https://japanrailpass.net/en/purchase/price/",
                },
                {
                  label: "JR East Pass official page",
                  href: "https://www.jreast.co.jp/en/multi/",
                },
                {
                  label: "JR East Pass Search Tool",
                  href: "https://pass-search.jre-maas.com/",
                },
                {
                  label: "Japan Rail Pass exchange offices",
                  href: "https://japanrailpass.net/en/exchange/",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-teal-700 transition-colors hover:border-teal-400"
                >
                  {link.label}
                  <span className="ml-2 flex-shrink-0">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Related Japan guides
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/travel/destinations/japan/jr-pass-mistakes",
                  icon: "🚫",
                  title: "JR Pass mistakes we made",
                  desc: "Why we could not collect the pass at Otsuki and what the right process is.",
                },
                {
                  href: "/travel/destinations/japan/train-tickets-explained",
                  icon: "🎫",
                  title: "Japan train tickets explained",
                  desc: "Why you get multiple tickets and how to use them at the gate.",
                },
                {
                  href: "/travel/destinations/japan/train-travel-tips",
                  icon: "🚆",
                  title: "Japan train travel tips",
                  desc: "Train types, transfers, etiquette, WiFi, and more.",
                },
                {
                  href: "/travel/destinations/japan/suica-ic-card",
                  icon: "💳",
                  title: "Suica IC card setup guide",
                  desc: "Get your card, top up, use lockers, and link to JR East e-tickets.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:border-[var(--accent)]"
                >
                  <span className="flex-shrink-0 text-2xl">{link.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                      {link.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                      {link.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              The pass that saves money is the one that fits your actual route -
              not the one every travel blog tells you to buy.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
      {children}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-white px-5 py-5">
      <h3 className="font-medium text-[var(--text)]">{q}</h3>
      <p className="mt-2 text-sm leading-7 text-neutral-600">{a}</p>
    </div>
  );
}