// app/travel/destinations/japan/train-travel-tips/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Japan Train Travel Tips: How Trains Work for First-Time Travelers | Dee Unbound",
  description:
    "A first-timer's guide to Japan's train system - types of trains, how tickets work, food etiquette, navigating huge stations, WiFi, luggage rules, and real mistakes we made on the way.",
  keywords: [
    "japan train tips",
    "how trains work in japan",
    "japan train guide first time",
    "japan train etiquette",
    "shinkansen tips tourists",
    "japan train types explained",
  ],
  openGraph: {
    title: "Japan Train Travel Tips: How Trains Work for First-Time Travelers",
    description:
      "Five types of trains, food etiquette, 30-minute connection rule, navigating stations, WiFi reality - everything we learned the hard way.",
    url: "https://www.deeunbound.com/travel/destinations/japan/train-travel-tips",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/destinations/japan/train-travel-tips",
  },
};

export default function TrainTravelTipsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Train travel tips" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* Hero */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Getting around
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Japan train travel tips: how trains work for first-time travelers
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          Japan's train system is extraordinary but it is not obvious. There
          are five types of trains, multiple ticketing rules, unspoken etiquette,
          and stations so large that missing a connection is genuinely possible.
          Here is everything we learned, including the things we got wrong.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
        </div>

        <div className="mt-14 space-y-16">

          {/* Types of trains */}
          <section className="space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The five types of trains in Japan
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Japan has five main train categories. The faster the train, the
              fewer stops it makes and the more you pay on top of the base fare.
              This is the single most confusing thing for first-timers because
              two tickets for the same journey can look completely different
              depending on which type of train you take.
            </p>

            {/* Train type comparison table */}
            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--card)] border-b border-[var(--border)]">
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">Japanese</th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">Stops</th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">Extra ticket?</th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--text)]">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)] bg-white">
                  {[
                    { type: "Local", jp: "普通 (Futsū)", stops: "Every station", extra: "No", best: "Short city trips", color: "" },
                    { type: "Rapid", jp: "快速 (Kaisoku)", stops: "Skips some", extra: "No", best: "Urban commutes, slightly faster", color: "" },
                    { type: "Express", jp: "急行 (Kyūkō)", stops: "Major stops", extra: "Usually no (on JR)", best: "Mid-distance travel", color: "" },
                    { type: "Limited Express", jp: "特急 (Tokkyū)", stops: "Key stations only", extra: "Yes - surcharge required", best: "Regional long-distance (Takayama, Nikko)", color: "bg-amber-50" },
                    { type: "Shinkansen", jp: "新幹線", stops: "Major cities only", extra: "Yes - always", best: "Inter-city: Tokyo, Kyoto, Osaka, Aomori", color: "bg-[#f0f7ee]" },
                  ].map(row => (
                    <tr key={row.type} className={row.color}>
                      <td className="px-4 py-3 font-medium text-[var(--text)]">{row.type}</td>
                      <td className="px-4 py-3 text-neutral-500">{row.jp}</td>
                      <td className="px-4 py-3 text-neutral-700">{row.stops}</td>
                      <td className={`px-4 py-3 font-medium ${row.extra.startsWith("Yes") ? "text-amber-700" : "text-teal-700"}`}>{row.extra}</td>
                      <td className="px-4 py-3 text-neutral-600">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[var(--muted)] italic">
              Source:{" "}
              <a href="https://www.japan-guide.com/e/e2016.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--text)]">
                Japan Guide - Taking the train in Japan
              </a>
            </p>

            {/* Shinkansen sub-types */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
              <p className="font-medium text-[var(--text)] mb-4">Shinkansen sub-types - important for JR Pass holders</p>
              <div className="space-y-3">
                {[
                  {
                    name: "Nozomi (のぞみ)",
                    desc: "Fastest. Fewest stops. NOT covered by JR Pass - you pay a full surcharge on top.",
                    warn: true,
                  },
                  {
                    name: "Hikari (ひかり)",
                    desc: "Second fastest. Covered by JR Pass. This is the one to book if you have a pass.",
                    warn: false,
                  },
                  {
                    name: "Kodama (こだま)",
                    desc: "Slowest Shinkansen, stops at every station. Covered by JR Pass. Good if you want to see more stops.",
                    warn: false,
                  },
                  {
                    name: "Hayabusa / Hayate (はやぶさ / はやて)",
                    desc: "Tohoku Shinkansen services to Aomori, Hokkaido. Covered by JR East Pass and JR Pass.",
                    warn: false,
                  },
                ].map(item => (
                  <div key={item.name} className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${item.warn ? "border-amber-200 bg-amber-50" : "border-[var(--border)] bg-white"}`}>
                    <span className={`flex-shrink-0 mt-0.5 font-bold ${item.warn ? "text-amber-600" : "text-teal-600"}`}>{item.warn ? "⚠" : "✓"}</span>
                    <div>
                      <p className="font-medium text-[var(--text)] text-sm">{item.name}</p>
                      <p className="text-sm leading-6 text-neutral-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <NoteBox>
              <strong>The practical rule:</strong> if the machine prints two
              separate tickets for one journey, you are on a Limited Express or
              Shinkansen. You need both at the gate. Insert them together as a
              stack.{" "}
              <Link href="/travel/destinations/japan/train-tickets-explained" className="font-medium text-amber-800 underline underline-offset-2">
                Full guide to multiple tickets here.
              </Link>
            </NoteBox>
          </section>

          {/* Connection time */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Always give yourself 30 minutes at transfer stations
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              We arrived at Nagoya with 12 minutes until our connecting train
              to Kyoto. The gate blocked us because we inserted the wrong
              tickets. We sorted it in seconds with help from station staff,
              but we boarded with no time to spare. It was completely
              avoidable stress.
            </p>
            <p className="text-lg leading-8 text-neutral-700">
              Nagoya Station is one of Japan's busiest transfer points. Getting from one
              platform to another - especially between different companies'
              gates - takes time even if you know exactly where you're going.
            </p>

            <NoteBox>
              <strong>Buy your connecting ticket before you leave your
              departure station.</strong> At Takayama, we bought our
              Nagoya-to-Kyoto Shinkansen ticket before boarding the first
              train. That is the only reason we made the connection. If we
              had planned to buy it at Nagoya with 12 minutes to spare, we
              would have missed it.{" "}
              <Link href="/travel/destinations/japan/train-tickets-explained" className="font-medium text-amber-800 underline underline-offset-2">
                More on buying tickets in advance here.
              </Link>
            </NoteBox>
          </section>

          {/* Navigating stations */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How to navigate stations - what actually works
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Japanese train stations range from a single platform with a
              vending machine to multi-floor complexes with shopping floors,
              food halls, and six different rail companies sharing the same
              building. Tokyo Station has 30 platforms. Shinjuku sees over
              three million passengers per day.
            </p>

            <div className="space-y-3">
              {[
                {
                  tip: "Ask station staff - not other tourists",
                  icon: "👷",
                  detail: "Every station has staff. JR staff wear dark uniforms near the gates and on platforms. Cleaning staff also know the station layout well. Ask any official-looking person in a uniform. Tourists are guessing just like you are.",
                  warn: false,
                },
                {
                  tip: "Follow the yellow tactile paving on the platform",
                  icon: "🟡",
                  detail: "The yellow raised dots and lines on platforms lead to ticket gates, exits, and mark safe standing distance from the platform edge. When you are lost inside a station, find the tactile path and follow it to the nearest gate.",
                  warn: false,
                },
                {
                  tip: "Use Google Maps for real-time directions inside stations",
                  icon: "📱",
                  detail: "At Ueno we had 50 minutes to collect the JR East Pass, get reserved tickets, cross terminals, and reach the right Shinkansen platform. We used AI step-by-step for directions inside the station. Google Maps works well for this too - switch to transit mode (train/bus) and it shows platform-level instructions at major stations.",
                  warn: false,
                },
                {
                  tip: "Stations are worth time - not just transfer points",
                  icon: "🏬",
                  detail: "Large city stations have food halls underground (depachika), ekiben shops, restaurants, and supermarkets inside the fare gates. Tokyo Station, Kyoto Station, and Osaka Station are particularly good. If you have time before a train, explore. Small rural stations are different - usually one konbini or a vending machine.",
                  warn: false,
                },
              ].map(item => (
                <div key={item.tip} className={`flex items-start gap-4 rounded-xl border px-5 py-4 ${item.warn ? "border-amber-200 bg-amber-50" : "border-[var(--border)] bg-[var(--surface)]"}`}>
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-medium text-[var(--text)] text-sm">{item.tip}</p>
                    <p className="mt-1 text-sm leading-7 text-neutral-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Food etiquette */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Food on trains - the simple rule
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              There are no signs saying do not eat on Japanese trains. Nobody
              will tell you off. But there is a clear unspoken norm that nearly
              everyone follows.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-teal-300 bg-teal-50 overflow-hidden">
                <div className="bg-[#dce7e6] border-b border-teal-200 px-5 py-4">
                  <p className="font-serif text-lg font-semibold text-teal-900">Eating is fine</p>
                </div>
                <div className="px-5 py-4 space-y-2">
                  {[
                    "Shinkansen - all services",
                    "Limited Express trains with tray tables",
                    "Small candy or mints on any train",
                    "Sealed drinks with lids on most trains",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-teal-800">
                      <span className="flex-shrink-0 mt-0.5 text-teal-600">✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 overflow-hidden">
                <div className="bg-red-100 border-b border-red-200 px-5 py-4">
                  <p className="font-serif text-lg font-semibold text-red-900">Avoid eating</p>
                </div>
                <div className="px-5 py-4 space-y-2">
                  {[
                    "Local trains and subways - especially in cities",
                    "Rapid trains in urban areas",
                    "Any train without a tray table",
                    "Strong-smelling food on any train",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-red-800">
                      <span className="flex-shrink-0 mt-0.5">✗</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg leading-8 text-neutral-700">
              The practical indicator is simple: if your seat has a fold-down
              tray table, eating is expected and normal. If it does not, treat
              it like a metro and save your food for when you get off.
            </p>

            {/* Ekiben */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
              <p className="font-medium text-[var(--text)] mb-2">Ekiben - one of the genuinely great things about Japan rail travel</p>
              <p className="text-sm leading-7 text-neutral-700">
                Ekiben (駅弁) are station bento boxes sold specifically for train
                journeys. Every major station has them - regional varieties using
                local ingredients, beautifully packaged, designed to be eaten
                cold. Takayama had mountain vegetable boxes. Tokyo Station has
                an entire ekiben floor with dozens of regional varieties. Buy
                before you board, not on the train - food trolleys on Shinkansen
                are now limited to the Green Car service on the Tokaido line
                only. Most other Shinkansen services no longer have trolleys.
              </p>
            </div>

            <p className="text-sm text-[var(--muted)] italic">
              Source:{" "}
              <a href="https://www.japan-guide.com/e/e2230.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--text)]">
                Japan Guide - Train manners in Japan
              </a>
              {" "}and{" "}
              <a href="https://www.jrailpass.com/blog/japan-train-etiquette" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--text)]">
                JRailPass - Train etiquette guide
              </a>
            </p>
          </section>

          {/* Phone and noise */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Phone calls and noise - stricter than you expect
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Japan's trains are noticeably quiet by international standards.
              This is not an accident - it reflects a genuine cultural norm
              around not disturbing others in shared spaces (meiwaku).
            </p>

            <div className="space-y-3">
              {[
                {
                  rule: "No phone calls on trains",
                  detail: "This applies on all trains including Shinkansen. The only exception is the designated phone area at the end of some Shinkansen carriages. Step there to make a call.",
                  icon: "📵",
                },
                {
                  rule: "Headphones always, volume never",
                  detail: "Use headphones for music and videos. Even with headphones, keep the volume low enough that it cannot be heard by the person next to you.",
                  icon: "🎧",
                },
                {
                  rule: "Keep conversations quiet",
                  detail: "Talking in normal conversational volume with travel companions is fine but loud or animated conversation stands out. Japanese passengers generally speak very quietly or not at all on trains.",
                  icon: "🤫",
                },
                {
                  rule: "Priority seating near the doors",
                  detail: "Coloured seats near each door are reserved for elderly passengers, those with disabilities, pregnant women, and passengers with small children. Sit there if the train is empty, but be ready to give the seat up without being asked.",
                  icon: "💺",
                },
              ].map(item => (
                <div key={item.rule} className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-medium text-[var(--text)] text-sm">{item.rule}</p>
                    <p className="mt-1 text-sm leading-6 text-neutral-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WiFi luggage practical */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              WiFi, luggage, and a few practical things nobody mentions
            </h2>

            <div className="space-y-4">

              {/* WiFi */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">📶</span>
                  <p className="font-medium text-[var(--text)]">WiFi on Shinkansen - available but not seamless</p>
                </div>
                <p className="text-sm leading-7 text-neutral-700">
                  Most JR Shinkansen lines have free WiFi on board.
                  Connection drops in tunnels, which are frequent on some
                  routes.
                </p>
                <p className="mt-3 text-xs text-[var(--muted)]">
                  Official WiFi info:{" "}
                  <a href="https://www.jreast.co.jp/e/wifi/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--text)]">
                    JR East on-board WiFi
                  </a>
                </p>
              </div>

              {/* Oversized luggage */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">🧳</span>
                  <p className="font-medium text-amber-900">Oversized luggage on Shinkansen - reserve a seat or pay a fine</p>
                </div>
                <p className="text-sm leading-7 text-amber-800">
                  If your bag's total dimensions (height + width + depth)
                  exceed 160cm, you are required to reserve a specific seat
                  with a luggage space behind the last row of the carriage.
                  The reservation is free with a JR Pass or when buying a
                  Shinkansen ticket. Not reserving and bringing oversized
                  luggage anyway results in a ¥1,000 onboard fine. If you
                  are travelling with a large suitcase, mention it when
                  booking your seat.
                </p>
                <p className="mt-3 text-xs text-amber-700">
                  Official rule:{" "}
                  <a href="https://www.jreast.co.jp/e/train/shinkansen/baggage.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900">
                    JR East - Shinkansen oversized baggage
                  </a>
                </p>
              </div>

              {/* Women-only cars */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">🚃</span>
                  <p className="font-medium text-[var(--text)]">Women-only carriages on urban lines</p>
                </div>
                <p className="text-sm leading-7 text-neutral-700">
                  Many urban train lines in Tokyo and other cities have
                  women-only carriages during rush hours - typically weekday
                  mornings and evenings. They are clearly marked on the
                  platform (pink signs and floor markings) and on the
                  carriage doors. Male passengers who board these carriages
                  during designated hours will be asked to move. Outside
                  rush hours the carriages are open to everyone.
                </p>
              </div>

              {/* IC card wrong gate */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">⚠️</span>
                  <p className="font-medium text-amber-900">Tapping through the wrong company's gate</p>
                </div>
                <p className="text-sm leading-7 text-amber-800">
                  Many stations have gates from multiple companies in the
                  same building - JR East, Tokyo Metro, Toei Subway, and
                  private lines can all share a station. If you tap your
                  Suica through a JR gate when you need the Metro, you are
                  now inside the JR fare zone and cannot access the Metro
                  without exiting and paying again. Always confirm the
                  company name on the gate before tapping. When in doubt,
                  ask the station staff standing nearby.
                </p>
              </div>

            </div>
          </section>

          {/* Quick checklist */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
              Quick checklist
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Local and Rapid trains - base fare only, no extra ticket",
                "Limited Express and Shinkansen - two tickets, insert together at gate",
                "Nozomi Shinkansen is NOT covered by JR Pass - take Hikari or Kodama",
                "Allow 30 minutes minimum for transfers at major stations",
                "Buy your connecting ticket before you reach the transfer station",
                "Ask station staff for directions - not other tourists",
                "Check the company logo on the gate before tapping Suica",
                "Eat on Shinkansen and Limited Express (tray tables) - not on local trains",
                "Buy ekiben at the station before boarding - trolleys are mostly gone",
                "No phone calls on trains - use the designated area on Shinkansen",
                "Oversized bags (over 160cm total) need a reserved luggage seat",
                "Women-only carriages operate during rush hours on urban lines",
                "WiFi is available on most Shinkansen but drops in tunnels",
                "Use Google Maps transit mode for platform-level navigation inside stations",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Related guides */}
          <section>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
              Related Japan guides
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/travel/destinations/japan/train-tickets-explained",
                  icon: "🎫",
                  title: "Japan train tickets explained",
                  desc: "Why you get multiple tickets and exactly how to use them at the gate.",
                },
                {
                  href: "/travel/destinations/japan/jr-pass-mistakes",
                  icon: "🚫",
                  title: "JR Pass mistakes we made",
                  desc: "What went wrong collecting our JR East Pass - and what to do instead.",
                },
                {
                  href: "/travel/destinations/japan/suica-ic-card",
                  icon: "🚆",
                  title: "Suica IC card - complete setup guide",
                  desc: "Get your card at the airport, link it to Shinkansen tickets, top up anywhere.",
                },
                {
                  href: "/travel/destinations/japan/narita-arrival-guide",
                  icon: "✈️",
                  title: "Narita arrival guide",
                  desc: "Cash, Suica, JR Pass, and which train to Tokyo - in the right order.",
                },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:border-[var(--accent)]"
                >
                  <span className="text-2xl flex-shrink-0">{link.icon}</span>
                  <div>
                    <p className="font-medium text-[var(--text)] text-sm group-hover:text-[var(--accent)] transition-colors">{link.title}</p>
                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* Closing */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              Japan's trains run so well that the learning curve feels steep
              only at the start. After two or three journeys, the system clicks.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
      {children}
    </div>
  );
}