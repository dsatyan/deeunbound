// app/travel/destinations/japan/jr-pass-mistakes/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const metadata: Metadata = {
  title: "JR Pass Mistakes We Made - And What You Should Do Instead | Dee Unbound",
  description:
    "We tried to collect our JR East Pass at Otsuki Station. It wasn't possible. Here are the mistakes we made - collection stations, activation timing, reserved tickets, and the JR East vs JR Central difference.",
  keywords: [
    "JR pass mistakes",
    "JR East pass collection stations",
    "where to collect JR East pass",
    "JR pass Otsuki",
    "JR East pass guide 2026",
    "is JR pass worth it",
    "JR East pass vs JR pass",
  ],
  openGraph: {
    title: "JR Pass Mistakes We Made - And What You Should Do Instead",
    description:
      "We assumed we could collect our JR East Pass at Otsuki. We were wrong. Here's what we learned - and what you should do differently.",
    url: "https://www.deeunbound.com/travel/destinations/japan/jr-pass-mistakes",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/destinations/japan/jr-pass-mistakes",
  },
};

export default function JRPassMistakesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "JR Pass mistakes" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Rail passes
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          JR Pass mistakes we made - and what you should do instead
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          We bought the JR East Pass, and then showed up at Otsuki Station expecting to collect it.
          Otsuki doesn't issue the pass. Here's everything we got wrong - and
          what you should do instead.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
        </div>

        <div className="mt-14 space-y-16">

          {/* ── Our plan ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Our plan - what we thought would work
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              We were in Japan for about 10 days. For the first six days we
              travelled by paying for each ticket separately as
              needed. For the last four days our itinerary was long-distance
              and heavy on JR East routes:
            </p>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">Our JR East Pass itinerary</p>
              <div className="space-y-2">
                {[
                  { route: "Otsuki → Ueno", note: "First train using the pass" },
                  { route: "Ueno → Aomori", note: "Tohoku Shinkansen" },
                  { route: "Aomori → Hirosaki", note: "Local JR East line" },
                  { route: "Hirosaki → Aomori", note: "Return after 2 days" },
                  { route: "Aomori → Tokyo", note: "Final leg back to Tokyo" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-xs font-medium text-teal-700">{i + 1}</span>
                    <span className="font-medium text-[var(--text)]">{item.route}</span>
                    <span className="text-[var(--muted)]">- {item.note}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-600 bg-white/60 rounded-lg px-4 py-3">
                We had pre-booked reserved seats for all these trains online
                using the JR East reservation system, with the plan to collect
                the physical pass and all tickets at Otsuki - the station where
                our JR East Pass journey would begin.
              </p>
            </div>

            <p className="text-lg leading-8 text-neutral-700">
              On paper, this made sense. In practice, we had made two
              assumptions that were both wrong.
            </p>
          </section>

          {/* ── Mistake 1 ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Mistake #1 - trying to collect the JR East Pass at Otsuki Station
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              The day before we reached Otsuki, we checked with an AI assistant
              whether we could collect the pass and tickets there. The answer
              was yes - insert your passport at the green vending machine, show
              the QR code, collect the pass and reserved tickets.
            </p>
            <p className="text-lg leading-8 text-neutral-700">
              We arrived at Otsuki Station. There was no JR East Travel Service
              Center. No green machine capable of issuing a new pass. The
              station staff confirmed: you cannot collect the JR East Pass here.
            </p>

            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5">
              <p className="font-medium text-red-900 mb-3">
                JR East Travel Service Centers - the only places to collect the JR East Pass
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Narita Airport Terminal 1",
                  "Narita Airport Terminal 2·3",
                  "Haneda Airport Terminal 3",
                  "Tokyo Station",
                  "Shinjuku Station",
                  "Shibuya Station",
                  "Ikebukuro Station",
                  "Ueno Station",
                  "Yokohama Station",
                  "Sendai Station",
                ].map(station => (
                  <div key={station} className="flex items-center gap-2 text-sm text-red-800">
                    <span className="flex-shrink-0">✓</span>{station}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-red-700 font-medium">
                Otsuki is not on this list. Neither are most small and
                medium-sized stations across Japan.
              </p>
            </div>

            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-5 py-4">
              <p className="font-medium text-teal-900 text-sm mb-2">Official JR Pass Center locations</p>
              <a
                href="https://japanrailpass.net/en/exchange/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-700 underline underline-offset-2 hover:text-teal-900"
              >
                japanrailpass.net/en/exchange/ - full list with opening hours ↗
              </a>
            </div>

            <NoteBox>
              <strong>2026 update - machine collection is now available.</strong>{" "}
              From April 1, 2026, if you bought your JR Pass through the
              official JR website, you can collect it at reserved-seat ticket
              machines with passport readers at Tokyo, Shinjuku, Shibuya,
              Ikebukuro, Ueno, Shinagawa, Hamamatsucho, Haneda Terminal 3,
              Narita Terminals 1 and 2, and Sendai. No queue at the counter
              needed. However, if you bought through an overseas travel agency
              with a physical voucher, you still need the manned counter.
            </NoteBox>
          </section>

          {/* ── Mistake 2 ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Mistake #2 - assuming reserved tickets could be collected without the physical pass
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Even if Otsuki had a green ticket machine, there was a second
              problem. We had pre-booked reserved seats using the JR East Pass
              reservation system. To collect those reserved seat tickets, you
              first need to have the physical pass in hand.
            </p>
            <p className="text-lg leading-8 text-neutral-700">
              At Otsuki, we tried to at least get the reserved tickets using
              the machine. The machine requires you to insert the physical pass
              to issue the corresponding seat tickets. No pass, no tickets.
              There is no workaround at a small station.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4">
                <p className="font-medium text-red-900 text-sm mb-2">What we assumed</p>
                <p className="text-sm leading-6 text-red-800">
                  Show QR code from confirmation email at machine → get reserved seat tickets
                </p>
              </div>
              <div className="rounded-xl border border-teal-200 bg-teal-50 px-5 py-4">
                <p className="font-medium text-teal-900 text-sm mb-2">What actually happens</p>
                <p className="text-sm leading-6 text-teal-800">
                  Collect physical pass first at a major station → then insert pass into machine to get reserved seat tickets
                </p>
              </div>
            </div>

            <NoteBox>
              <strong>The correct order:</strong> Collect pass → then collect
              reserved tickets. You cannot get the tickets before you have the
              pass. Plan to collect everything at the same major station in one
              visit.
            </NoteBox>
          </section>

          {/* ── What it cost ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What it cost us
            </h2>
            <p>
              We had to buy a separate individual ticket from Otsuki to Ueno.
              At Ueno - which does have a JR East Travel Service Center - we
              collected the pass and all our reserved seat tickets.
            </p>
            <p>
              The extra Otsuki → Ueno ticket wasn't catastrophically expensive,
              but it was money we hadn't planned for. More than that, it added
              stress and uncertainty at a station where we were counting on a
              smooth start to four days of pre-planned JR East travel.
            </p>
            <p>
              We had 50 minutes at Ueno to: collect the pass, collect all
              reserved tickets, transfer terminals, and get to the right
              platform for the Tohoku Shinkansen. We used AI for step-by-step
              navigation inside the station - without that we would have lost
              significant time.
            </p>
          </section>

          {/* ── What to do instead ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What you should do instead
            </h2>
            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Collect the pass as early as possible - ideally at the airport",
                  detail: "Both Narita and Haneda have JR East Travel Service Centers. If you're buying the JR East Pass, collect it the moment you land - before you leave the airport. You don't have to activate it on the same day.",
                  warn: false,
                },
                {
                  n: "2",
                  title: "Collection date and activation date are different things",
                  detail: "You can collect the pass up to 30 days before you want to activate it. Collect it at the airport, put it safely away, and activate it on the day your pass-covered travel begins. No pressure.",
                  warn: false,
                },
                {
                  n: "3",
                  title: "⚠️ Once lost, the pass cannot be reissued",
                  detail: "This is why we delayed collecting ours - we were nervous about losing it. That logic is valid if you're collecting weeks in advance. But if you're collecting a few days before use, collect early and keep it safe. A lost pass means buying individual tickets for everything.",
                  warn: true,
                },
                {
                  n: "4",
                  title: "Collect all reserved seat tickets at the same time as the pass",
                  detail: "Once you have the physical pass, go straight to the green ticket machine and collect all your pre-booked reserved seats in one go. You'll insert the pass, it reads your reservations, and prints all tickets. Do this at a major station with time to spare.",
                  warn: false,
                },
                {
                  n: "5",
                  title: "Read the instructions in your confirmation email - to the letter",
                  detail: "JR East's confirmation email has specific instructions for your pass type and how to collect. Follow them exactly. Japan's systems work precisely as documented - if the email says to go to a specific counter type, go to that specific counter type.",
                  warn: false,
                },
                {
                  n: "6",
                  title: "⚠️ Check which stations have JR East Travel Service Centers before you travel",
                  detail: "Not every station has one. Smaller stations only have basic ticket counters or machines - neither can issue the pass. Check the official list before you plan any collection stop.",
                  warn: true,
                },
              ].map(step => (
                <div
                  key={step.n}
                  className={`rounded-xl border px-5 py-5 ${step.warn ? "border-amber-200 bg-amber-50" : "border-[var(--border)] bg-[var(--surface)]"}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium ${step.warn ? "bg-amber-200 text-amber-900" : "bg-[#dce7e6] text-teal-700"}`}>
                      {step.n}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--text)]">{step.title}</p>
                      <p className="mt-1 text-base leading-7 text-neutral-600">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Was JR East Pass worth it ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Was the JR East Pass worth it for us?
            </h2>
            <p>
              Yes - for our specific itinerary. The Tohoku routes (Ueno →
              Aomori → Hirosaki → Tokyo) are long and expensive individually.
              A round-trip between Tokyo and Aomori alone costs around ¥36,000.
              The 5-day JR East Pass was cheaper than paying for those tickets
              individually, and it covered all the local JR East trains within
              Tohoku as well.
            </p>
            <p>
              But this only works if your itinerary is heavy on JR East routes.
              If you're doing the classic Tokyo → Kyoto → Osaka circuit, the
              JR East Pass covers almost none of it. 
            </p>
          </section>

          {/* ── Official resources ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
              Official resources
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Japan Rail Pass exchange offices - full list all regions",
                  href: "https://japanrailpass.net/en/exchange/",
                },
                {
                  label: "JR East official pass page",
                  href: "https://www.jreast.co.jp/en/multi/",
                },
                {
                  label: "JR East Rail Pass search tool - find the right pass for your itinerary",
                  href: "https://pass-search.jre-maas.com/",
                },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-teal-700 hover:border-teal-400 transition-colors"
                >
                  {link.label}
                  <span className="ml-2 flex-shrink-0">↗</span>
                </a>
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
                  href: "/travel/destinations/japan/train-tickets-explained",
                  icon: "🎫",
                  title: "Japan train tickets explained - base fare + express surcharge",
                  desc: "Why you get multiple tickets and how to use them at the gate.",
                },
                {
                  href: "/travel/destinations/japan/suica-ic-card",
                  icon: "🚆",
                  title: "Suica IC card - complete setup guide",
                  desc: "How to link Suica to JR East e-tickets for tap-and-go boarding.",
                },
                {
                  href: "/travel/destinations/japan/narita-arrival-guide",
                  icon: "✈️",
                  title: "Narita arrival guide - what to do first",
                  desc: "Cash, Suica, JR Pass collection - the right order at the airport.",
                },
                {
                  href: "/travel/destinations/japan/visa",
                  icon: "🗂️",
                  title: "Japan eVisa - Indian Passport, US Resident",
                  desc: "Complete visa process, documents, rejection reason, and timeline.",
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

        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              The JR East Pass is excellent value for the right itinerary.
              Just collect it before you need it.
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