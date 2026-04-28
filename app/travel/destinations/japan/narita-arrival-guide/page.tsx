// app/travel/destinations/japan/narita-arrival-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const metadata: Metadata = {
  title: "What to Do After Landing in Japan: Airport, Cash, Suica & Transport | Dee Unbound",
  description:
    "First-hand Narita arrival guide - immigration QR code, 7-Eleven ATM fees, getting your Suica, and choosing between the Keisei Skyliner vs Keisei Main Line to Tokyo. United Airlines Terminal 1.",
  keywords: [
    "what to do after landing in Japan",
    "Narita airport arrival guide",
    "Narita airport to Tokyo first time",
    "7-Eleven ATM Narita airport",
    "Suica card Narita airport",
    "Keisei Skyliner vs Keisei Main Line",
    "Japan airport arrival checklist",
  ],
  openGraph: {
    title: "What to Do After Landing in Japan: Airport, Cash, Suica & Transport",
    description:
      "We landed at 3pm and were on a train to Tokyo by 4:30pm. Here's exactly what we did, in order - immigration, ATM, Suica, train decision.",
    url: "https://www.deeunbound.com/travel/destinations/japan/narita-arrival-guide",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/destinations/japan/narita-arrival-guide",
  },
};

export default function NaritaArrivalGuidePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Narita arrival guide" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Arrival
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          What to do after landing in Japan - airport, cash, Suica & transport explained
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          We landed at Narita at 3pm on a United flight from the US and were on
          a train to Tokyo by around 4:30pm. Here's exactly what we did, in
          order - so you know what to expect and can move through the airport
          without losing time.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
        </div>

        {/* ── Quick context ── */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Airport", value: "Narita International (NRT)" },
            { label: "Airline / Terminal", value: "United Airlines - Terminal 1" },
            { label: "Landed", value: "3:00pm" },
            { label: "Cleared customs", value: "~4:10pm" },
            { label: "On train to Tokyo", value: "~4:30pm" },
            { label: "Train taken", value: "Keisei Main Line (not Skyliner)" },
          ].map(item => (
            <div key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-16">

          {/* ── Immigration ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 1 - immigration (expect a queue)
            </h2>
            <p>
              We landed at 3pm and the immigration line was long, probably because 
              multiple long-haul flights landed within the same hour.
              We were through baggage claim by 4:10pm, so the whole process
              from landing to exit took about an hour and ten minutes.
            </p>
            <p>
              At the immigration counter, have your passport and your Visit
              Japan Web QR code ready. The officer stamps your passport and
              sticks a Landing Permission sticker next to the stamp - this
              sticker has its own QR code on it. 
            </p>

            <NoteBox>
              <strong>Register on Visit Japan Web - can be done even before you fly:</strong> The immigration QR code is generated
              in advance. If you haven't done it yet, connect to airport wifi and you'll be doing it
              in the queue on your phone.{" "}
              <Link
                href="/travel/destinations/japan/japan-immigration-qr-code"
                className="font-medium text-amber-800 underline underline-offset-2"
              >
                Read the full Visit Japan Web registration guide →
              </Link>
            </NoteBox>
          </section>

          {/* ── eSIM ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 2 - get your eSIM
            </h2>
            <p>
              While waiting in the immigration line, you can register for an eSIM. I used airalo and it was super easy - 
              connect to airport wifi first and then just download their app, choose a plan, and activate it right from your phone. 
              You can do this even before you land if you want. I chose the unlimited 15-day plan for $45. 
            </p>
            <p>
              If you plan to buy a physical SIM card, you can explore them at the airport. Whether it is eSIM or physical SIM, 
              it's better to have it ready before you leave the airport.
            </p>

            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-5 py-5">
              <p className="font-medium text-teal-900 mb-2">
                Full eSIM guide - how to install and activate it
              </p>
              <Link
                href="/travel/essentials/esim"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800 transition-colors"
              >
                Read the eSIM installation guide →
              </Link>
            </div>
          </section>

          {/* ── Visitors Center + ATM ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 3 - Visitors Centre and the 7-Eleven ATM
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              After collecting your bags, head to the Visitors Centre on the
              arrival floor before going down to the train station. It's a
              useful stop for a few reasons: there's a cluster of ATMs right
              behind it, SIM counters, bathrooms, resting area and information desks if
              you have any questions.
            </p>

            {/* ATM section */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
              <p className="font-medium text-[var(--text)] mb-4">7-Eleven ATM - what we learned</p>
              <div className="space-y-3">
                {[
                  {
                    icon: "✅",
                    text: "7-Eleven ATMs reliably accept international debit and credit cards - use these",
                  },
                  {
                    icon: "✅",
                    text: "JP Bank ATMs at the airport also work with international cards",
                  },
                  {
                    icon: "❌",
                    text: "Other bank ATMs like Chiba Bank did not work with our international card at the airport",
                  },
                  {
                    icon: "💴",
                    text: "Transaction fee: ¥110 for withdrawals up to ¥20,000. ¥220 flat fee for anything above ¥20,000 - per transaction",
                  },
                  {
                    icon: "💡",
                    text: "Since Japan is very safe, withdraw a larger amount at once to reduce the number of transactions and fees.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg leading-8 text-neutral-700">
              You need cash for the Suica card deposit and initial top-up.
              We withdrew ¥10,000.
              You can always withdraw more later, 7-Eleven ATMs are
              everywhere in Japan.
            </p>
          </section>

          {/* ── Suica ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 4 - get your Suica IC card
            </h2>
            <p>
              After the ATM, head down to the train station area (basement
              level). The green JR ticket vending machines have an English
              option - select "Purchase new Suica card", insert cash, choose
              your load amount. We loaded ¥3,000 (¥500 is a refundable
              deposit, so ¥2,500 is usable balance).
            </p>
            <p>
              Do this before you board any train. You'll need it the moment
              you pass through the ticket gate.
            </p>

            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-5 py-5">
              <p className="font-medium text-teal-900 mb-2">
                Full Suica guide - green vs red card, topping up, Shinkansen e-ticket, losing it
              </p>
              <Link
                href="/travel/destinations/japan/suica-ic-card"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800 transition-colors"
              >
                Read the Suica IC card guide →
              </Link>
            </div>
          </section>

          {/* ── JR Pass note ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 5 - JR Pass collection (read this before you assume you can collect anywhere)
            </h2>
            <p>
              If you've pre-purchased a JR East Pass or JR Pass, there's a JR
              East Travel Service Center at Narita, so it's better to collect it there. 
              Passes like the JR East Pass can only be collected at major stations 
              like Narita Airport, Ueno, Shinjuku, Tokyo Station. 
            </p>

            <div className="space-y-3">
              {[
                {
                  warn: true,
                  title: "⚠️ Once collected, the pass cannot be reissued if lost",
                  detail: "This is why we didn't collect ours at the airport - we had several days before we needed it and didn't want to risk losing it. If you collect it early, keep it very safe.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border px-5 py-4 ${item.warn ? "border-amber-200 bg-amber-50" : "border-[var(--border)] bg-[var(--surface)]"}`}
                >
                  <p className={`font-medium text-sm mb-1 ${item.warn ? "text-amber-900" : "text-[var(--text)]"}`}>
                    {item.title}
                  </p>
                  <p className={`text-sm leading-6 ${item.warn ? "text-amber-800" : "text-neutral-600"}`}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Transport to Tokyo ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 6 - getting to Tokyo from Narita
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Narita is about 60km from central Tokyo. You have four realistic
              options. Here's the full comparison, then what we actually chose
              and why.
            </p>

            {/* Options comparison */}
            <div className="space-y-3">
              {[
                {
                  name: "Keisei Skyliner",
                  time: "~41 min to Ueno",
                  cost: "¥2,580 (¥2,310 online discount)",
                  icon: "⚡",
                  color: "border-teal-200 bg-teal-50",
                  titleColor: "text-teal-900",
                  pros: ["Fastest option", "All reserved seats", "Luggage racks, power outlets, WiFi", "Direct to Keisei Ueno - easy transfer to JR/Metro"],
                  cons: ["More expensive", "Not covered by JR Pass"],
                },
                {
                  name: "Keisei Main Line (Limited Express)",
                  time: "~80–90 min to Ueno",
                  cost: "¥1,060 (pay with Suica)",
                  icon: "🚃",
                  color: "border-[var(--border)] bg-[var(--surface)]",
                  titleColor: "text-[var(--text)]",
                  pros: ["Cheapest train option by far", "No advance booking - just tap Suica", "Same destination as Skyliner (Keisei Ueno)"],
                  cons: ["40–50 minutes longer", "No reserved seats", "Can get crowded at peak times", "No luggage racks"],
                },
                {
                  name: "N'EX (Narita Express)",
                  time: "~53 min to Tokyo Station",
                  cost: "¥3,070 one-way / ¥5,000 round-trip tourist ticket",
                  icon: "🚅",
                  color: "border-purple-200 bg-purple-50",
                  titleColor: "text-purple-900",
                  pros: ["Covered by JR Pass (if active from day 1)", "Direct to Tokyo Station, Shinjuku, Shibuya", "All reserved seats"],
                  cons: ["Most expensive if paying cash", "Not useful if JR Pass isn't active on arrival day"],
                },
                {
                  name: "Airport Limousine Bus",
                  time: "~90 min (up to 2 hrs in traffic)",
                  cost: "¥3,100",
                  icon: "🚌",
                  color: "border-amber-200 bg-amber-50",
                  titleColor: "text-amber-900",
                  pros: ["Drops at hotels and major stations directly", "Great if you have a lot of luggage", "No need to navigate train stations"],
                  cons: ["Slowest option - traffic-dependent", "Less frequent than trains"],
                },
              ].map(opt => (
                <div key={opt.name} className={`rounded-2xl border overflow-hidden ${opt.color}`}>
                  <div className={`px-5 py-4 border-b ${opt.color}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`font-serif text-lg font-semibold ${opt.titleColor}`}>
                          {opt.icon} {opt.name}
                        </p>
                        <div className="mt-1 flex gap-4 text-sm text-neutral-600">
                          <span>⏱ {opt.time}</span>
                          <span>💴 {opt.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 px-5 py-4 sm:grid-cols-2">
                    <div>
                      {opt.pros.map((p, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-neutral-700 mb-1">
                          <span className="text-teal-600 flex-shrink-0 mt-0.5">✓</span>{p}
                        </div>
                      ))}
                    </div>
                    <div>
                      {opt.cons.map((c, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-neutral-600 mb-1">
                          <span className="text-neutral-400 flex-shrink-0 mt-0.5">✗</span>{c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── What we chose ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Use Google Maps before you decide
            </h2>
            <p>
              We went with the <strong>Keisei Main Line</strong> - not the
              Skyliner.
            </p>
            <p>
              At the station we opened Google Maps and checked the next
              Skyliner departure time vs the next Keisei Main Line departure.
              The Skyliner was leaving a little later than the next regular
              Keisei Limited Express. Even accounting for the Skyliner being
              40 minutes faster in transit, the next available Skyliner would
              arrive at Ueno only a few minutes before the regular Keisei
              train. The time saving wasn't worth the extra cost. Also it was evening peak hour, so taking 
              bus would have been slower and more crowded.
            </p>


            <NoteBox>
              <strong>The Skyliner is still the better default choice</strong> if
              you're not checking departure times, have a lot of luggage, or
              just want the comfort of reserved seats and a smooth ride after a
              long flight. The Keisei Main Line is a regular commuter train with
              no luggage storage. We travelled light, which made the decision
              easier.
            </NoteBox>
          </section>

          {/* ── Quick checklist ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
              Narita arrival checklist - in order
            </p>
            <div className="space-y-2">
              {[
                { done: true,  text: "Have Visit Japan Web immigration QR code ready before landing" },
                { done: true,  text: "At immigration - get passport stamped + Landing Permission sticker (QR code for tax-free)" },
                { done: true,  text: "Collect bags" },
                { done: true,  text: "Visit the Visitors Centre - WiFi, eSIM, info desk" },
                { done: true,  text: "Withdraw cash from 7-Eleven ATM (¥110 fee up to ¥20k, ¥220 above)" },
                { done: true,  text: "Get Suica IC card from green JR vending machine - load at least ¥2,000" },
                { done: true,  text: "Collect JR Pass at airport if your trip starts here (check if your first station has a service center first)" },
                { done: true,  text: "Check Google Maps for next train departure times before choosing Skyliner vs regular Keisei" },
                { done: true,  text: "Board train - tap Suica at the gate" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-[var(--border)] bg-white text-xs text-teal-600">
                    ✓
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </section>

          {/* ── Related guides ── */}
          <section>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
              Related Japan guides
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/travel/destinations/japan/japan-immigration-qr-code",
                  icon: "📲",
                  title: "Visit Japan Web - immigration QR code guide",
                  desc: "Register before you board. Step-by-step guide to getting your immigration and customs QR code.",
                },
                {
                  href: "/travel/destinations/japan/suica-ic-card",
                  icon: "🚆",
                  title: "Suica IC card - complete setup guide",
                  desc: "Green vs red card, how to top up, Shinkansen e-ticket registration, and what happens if you lose it.",
                },
                {
                  href: "/travel/destinations/japan/tax-free-shopping",
                  icon: "🛍️",
                  title: "Tax-free shopping in Japan",
                  desc: "How the Landing Permission sticker QR code activates your tax-free shopping on Visit Japan Web.",
                },
                {
                  href: "/travel/destinations/japan/visa",
                  icon: "🗂️",
                  title: "Japan eVisa - Indian Passport, US Resident",
                  desc: "Complete visa process - documents, rejection reason, timeline, and step-by-step portal walkthrough.",
                },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:border-[var(--accent)]"
                >
                  <span className="text-2xl flex-shrink-0">{link.icon}</span>
                  <div>
                    <p className="font-medium text-[var(--text)] text-sm group-hover:text-[var(--accent)] transition-colors">
                      {link.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              The first hour in a new country sets the tone for the whole trip.
              Get these five things done in order and you'll be on a train to
              Tokyo before you know it.
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