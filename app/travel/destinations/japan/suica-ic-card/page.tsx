// app/travel/destinations/japan/suica-ic-card/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import Image from "next/image";
import { photoUrl } from "@/lib/photo-url";


export const metadata: Metadata = {
  title: "Japan IC Card / Suica Setup Guide for Tourists (2026) | Dee Unbound",
  description:
    "Everything you need to know about getting and using a Suica IC card in Japan — green vs red card explained, how to top up, using it for Shinkansen e-tickets, coin lockers, konbini, and what happens when you lose it.",
  keywords: [
    "suica card japan tourists",
    "japan IC card guide",
    "welcome suica vs regular suica",
    "suica card 2026",
    "how to get suica card japan",
    "suica shinkansen e-ticket",
  ],
  openGraph: {
    title: "Japan IC Card / Suica Setup Guide for Tourists (2026)",
    description:
      "Green vs red Suica explained, how to top up, Shinkansen e-ticket registration, coin lockers — and what actually happens when you lose the card.",
    url: "https://www.deeunbound.com/travel/destinations/japan/suica-ic-card",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/destinations/japan/suica-ic-card",
  },
};

export default function SuicaICCardPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Suica / IC card guide" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Getting around
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Japan IC card / Suica setup guide for tourists
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          The Suica card is the single most useful thing you'll set up in Japan.
          Get it as soon as you land. Here's everything — green vs red card,
          topping up, Shinkansen e-ticket registration, coin lockers, and what
          actually happens when you lose one.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>8 min read</span>
        </div>

        <div className="mt-14 space-y-16">

          {/* ── What is a Suica ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What is a Suica / IC card?
            </h2>
            <p>
              A Suica is a prepaid contactless smart card issued by JR East.
              You tap it at train gates, bus readers, and store terminals — the
              correct amount is deducted automatically. No calculating fares,
              no buying paper tickets, no fumbling for exact change.
            </p>
            <p>
              Japan has several IC cards (Suica, PASMO, ICOCA) issued by
              different railway companies, but they all work interchangeably
              across the country. If you're arriving in Tokyo, get a Suica.
              It's the most widely recognised and works everywhere.
            </p>

            {/* Uses grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🚆", label: "JR trains", note: "All local JR lines in Tokyo and beyond" },
                { icon: "🚇", label: "Subways & private lines", note: "Tokyo Metro, Toei, Keio, Tokyu, and more" },
                { icon: "🚌", label: "Buses", note: "Most city and regional buses with IC logo" },
                { icon: "🏪", label: "Convenience stores", note: "7-Eleven, Lawson, FamilyMart — tap to pay" },
                { icon: "🎰", label: "Vending machines", note: "Almost every vending machine in Japan" },
                { icon: "🧳", label: "Coin lockers", note: "Tap to lock / unlock — no coins or keys needed" },
              ].map(item => (
                <div key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-medium text-[var(--text)] text-sm">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{item.note}</p>
                </div>
              ))}
            </div>

            <NoteBox>
              <strong>Suica does NOT work for Shinkansen or long-distance express
              trains on its own.</strong> For bullet trains you need a separate
              ticket (or a JR Pass). However, you CAN link your Suica to a
              Shinkansen e-ticket for tap-and-go boarding — more on this below.
            </NoteBox>

            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-5 py-4">
              <p className="font-medium text-teal-900 text-sm mb-1">Official JR East Suica page</p>
              <a href="https://www.jreast.co.jp/e/pass/suica.html" target="_blank" rel="noopener noreferrer"
                className="text-sm text-teal-700 underline underline-offset-2 hover:text-teal-900">
                jreast.co.jp/e/pass/suica.html ↗
              </a>
            </div>
          </section>

          {/* ── When and where to get it ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Do this right after landing — step by step
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              The ideal order when you land at Narita or Haneda:
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Clear immigration and customs",
                  detail: "Get your passport stamped and collect your bags. Make sure you get a physical entry stamp — you'll need it for tax-free shopping later.",
                  warn: false,
                },
                {
                  n: "2",
                  title: "Withdraw cash from the 7-Eleven ATM",
                  detail: "The visitor centre floor at both Narita and Haneda has 7-Eleven ATMs that reliably accept international cards. Withdraw ¥10,000–¥20,000. You'll need cash to buy and top up your IC card.",
                  warn: false,
                },
                {
                  n: "3",
                  title: "Head to the train station area (usually basement level)",
                  detail: "Follow signs for trains. At both major airports the JR and private railway ticket areas are clearly signposted in English.",
                  warn: false,
                },
                {
                  n: "4",
                  title: "Buy your Suica card at the ticket vending machine",
                  detail: "Green machines at JR stations have an English option. Select 'Purchase new Suica card', insert cash, and choose how much to load. Load at least ¥2,000 (¥500 of which is a refundable deposit on a regular Suica, so ¥1,500 is your usable starting balance).",
                  warn: false,
                },
              ].map(step => (
                <div key={step.n} className={`rounded-xl border px-5 py-5 ${step.warn ? "border-amber-200 bg-amber-50" : "border-[var(--border)] bg-[var(--surface)]"}`}>
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

          {/* ── Green vs Red ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Green vs red Suica — what the staff was actually explaining
            </h2>
            
            {/* Photo + text float layout */}
            <div className="overflow-hidden">
            {/* Photo — floats right on desktop, sits above on mobile */}
            <div className="mb-4 ml-6 overflow-hidden rounded-xl border border-[var(--border)] shadow-sm float-right w-48 sm:w-56 md:w-64 clear-right">
                <div className="relative aspect-[3/4] w-full">
                <Image
                    src={photoUrl(
                    "travel/japan/Suica", // ← replace with your Cloudinary public ID
                    "w_400,h_533,c_fill,q_auto,f_auto"
                    )}
                    alt="Dee holding her green Suica card at the hotel in Japan"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                />
                </div>
                <p className="bg-[var(--surface)] px-3 py-2 text-[10px] italic leading-4 text-[var(--muted)]">
                Our green Suica — name printed, penguin and all.
                </p>
            </div>

            {/* Text wraps around the photo */}
            <p className="text-lg leading-8 text-neutral-700">
                When we arrived Narita Airport, the JR staff in front of the counter steered us
                towards the green card. So we got our Suica card from the
                green machine. You can select to purchase a new Suica card, and then
                can select between Blank Suica or Name-Inscribed Suica. Name-Inscribed
                Suica can be reissued if lost. We preferred the Name-Inscribed Suica,
                a good souvenir to remember our trip.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
                Green and Red Suica are functionally identical. Both cards work on
                exactly the same trains, subways, buses, stores, and vending
                machines. The difference is purely about validity period,
                deposit, and refundability. For a trip under 28 days, either
                works. For repeat visitors to Japan or longer stays, the regular
                green Suica is the better long-term choice.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
                Here's the real difference — and why green was good advice for us.
            </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Regular Suica",
                  color: "green",
                  badge: "We got this",
                  badgeBg: "bg-teal-700",
                  border: "border-teal-300",
                  bg: "bg-[#dce7e6]",
                  headerColor: "text-teal-900",
                  points: [
                    { good: true,  text: "Valid for 10 years from last use — great if you revisit Japan" },
                    { good: true,  text: "¥500 deposit refunded when you return the card (minus small fee)" },
                    { good: true,  text: "Can be registered in your name — balance recoverable if lost" },
                    { good: true,  text: "Can be personalised with your name printed on the card" },
                    { good: false, text: "Requires ¥500 deposit, so initial usable balance is load minus ¥500" },
                  ],
                },
                {
                  title: "Welcome Suica (red)",
                  color: "red",
                  badge: "Tourist card",
                  badgeBg: "bg-amber-600",
                  border: "border-amber-200",
                  bg: "bg-amber-50",
                  headerColor: "text-amber-900",
                  points: [
                    { good: true,  text: "No deposit — every yen you load is usable balance" },
                    { good: true,  text: "Simpler to get, no name registration needed" },
                    { good: false, text: "Expires 28 days from first use — no extension possible" },
                    { good: false, text: "Cannot be refunded — any remaining balance is lost when it expires" },
                    { good: false, text: "If lost, balance is gone — no recovery option" },
                  ],
                },
              ].map(card => (
                <div key={card.title} className={`rounded-2xl border overflow-hidden ${card.border}`}>
                  <div className={`px-5 py-4 ${card.bg}`}>
                    <div className="flex items-center justify-between mb-1">
                      <p className={`font-serif text-lg font-semibold ${card.headerColor}`}>{card.title}</p>
                      <span className={`text-xs text-white px-2 py-0.5 rounded-full ${card.badgeBg}`}>{card.badge}</span>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    {card.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className={`mt-0.5 flex-shrink-0 ${pt.good ? "text-teal-600" : "text-red-400"}`}>{pt.good ? "✓" : "✗"}</span>
                        {pt.text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── iPhone option ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              iPhone users — consider skipping the physical card entirely
            </h2>
            <p>
              JR East launched the Welcome Suica Mobile app in 2025, and it's
              genuinely the best option if you have an iPhone or Apple Watch.
              You set it up before you leave home, top up via Apple Pay, and
              tap your phone at every gate. No queuing at the airport, no
              physical card to lose. Go to your Wallet app, tap on '+' icon on the 
              top right corner, select Transit Card, select Suica and follow the instructions to pay, and
              you're good to go.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { good: true,  text: "Set up before you leave home — works from the moment you land" },
                { good: true,  text: "180-day validity vs 28 days for physical Welcome Suica" },
                { good: true,  text: "Top up via Apple Pay with your credit card — no cash needed" },
                { good: true,  text: "If you lose your phone, balance is recoverable on a new device" },
                { good: false, text: "iPhone and Apple Watch only — Android users with non-Japanese phones still need a physical card" },
                { good: false, text: "Some foreign Visa cards have issues — Mastercard and Amex generally work fine" },
              ].map((pt, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${pt.good ? "border-teal-200 bg-teal-50 text-teal-800" : "border-amber-200 bg-amber-50 text-amber-800"}`}>
                  <span className="flex-shrink-0 mt-0.5">{pt.good ? "✓" : "⚠"}</span>
                  {pt.text}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-5 py-4">
              <p className="font-medium text-teal-900 text-sm mb-1">Welcome Suica Mobile — official JR East page</p>
              <a href="https://www.jreast.co.jp/en/multi/wsmlp/" target="_blank" rel="noopener noreferrer"
                className="text-sm text-teal-700 underline underline-offset-2 hover:text-teal-900">
                jreast.co.jp/e/welcomesuica ↗
              </a>
            </div>
          </section>

          {/* ── Topping up ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How to top up your Suica
            </h2>
            <div className="space-y-3">
              {[
                {
                  method: "Ticket vending machines at any station",
                  detail: "The most common method. Look for machines with the IC card symbol. Insert your card, select 'Charge', choose an amount (¥1,000 / ¥2,000 / ¥3,000 / ¥5,000 / ¥10,000), and insert cash.",
                  tag: "Most common",
                  tagColor: "bg-teal-100 text-teal-800",
                },
                {
                  method: "Convenience stores (7-Eleven, Lawson, FamilyMart)",
                  detail: "Tell the cashier you want to charge your Suica. Place your card on the reader, hand over cash, and they'll add the amount. Available 24 hours — useful if you run low late at night.",
                  tag: "24 hrs",
                  tagColor: "bg-blue-100 text-blue-800",
                },
                {
                  method: "Apple Pay / Suica app (iPhone only)",
                  detail: "If you're using Mobile Suica, open the app or Wallet and top up with your linked credit or debit card. No need to visit a machine. Fastest method.",
                  tag: "iPhone only",
                  tagColor: "bg-purple-100 text-purple-800",
                },
                {
                  method: "Buses",
                  detail: "Tell the driver you want to charge your Suica, place the card on the reader and insert money.",
                  tag: "",
                  tagColor: "bg-purple-100 text-purple-800",
                },
              ].map(item => (
                <div key={item.method} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-medium text-[var(--text)] text-sm flex-1">{item.method}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <p className="text-sm leading-6 text-neutral-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <NoteBox>
              Keep at least
              ¥2,000–¥3,000 on the card at all times. Some rural stations don't
              have top-up machines, so running low between towns can be
              stressful. If you run out mid-journey, look for a fare adjustment
              machine inside the gates — you can top up there before exiting.
            </NoteBox>
          </section>

          {/* ── Shinkansen e-ticket ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Linking your Suica to a Shinkansen e-ticket — tap and go
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              You can associate your card with a Shinkansen e-ticket
              booked on the Eki-Net system, then just tap your card at the
              Shinkansen gate. No paper ticket, no stopping at a counter.
            </p>

            {/* Screenshot from user */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)] mb-3">How IC card registration works (from JR East)</p>
              <div className="space-y-4 text-sm leading-7 text-neutral-700">
                <p>
                  <strong className="text-[var(--text)]">Option 1 — register at the same time as booking.</strong>{" "}
                  On the application completion screen, select "Specify IC card"
                  and enter your IC card number. If you pre-register your card in
                  your Eki-Net membership, it appears as a dropdown — no need to
                  type the number each time.
                </p>
                <p>
                  <strong className="text-[var(--text)]">Option 2 — register after purchase.</strong>{" "}
                  Go to your purchase history on Eki-Net and use the
                  "Register/Change IC Card" section. Do this before you arrive
                  at the boarding station.
                </p>
                <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                  ⚠️ <strong>Important:</strong> You must register your IC card
                  number before passing through the Shinkansen automatic ticket
                  gate. You need one IC card registered per passenger.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-5 py-4">
              <p className="font-medium text-teal-900 text-sm mb-1">Eki-Net — JR East online ticket booking- IC registration guide</p>
              <a href="https://www.eki-net.com/top/tr/guide/registration/" target="_blank" rel="noopener noreferrer"
                className="text-sm text-teal-700 underline underline-offset-2 hover:text-teal-900">
                eki-net.com (English) ↗
              </a>
            </div>

          </section>

          {/* ── Coin lockers ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Coin lockers — one of the best Suica use cases
            </h2>
            <p>
              Japanese train stations are full of coin lockers in various sizes
              (small ¥400, medium ¥500–¥600, large ¥700–¥900). Most modern
              lockers no longer use physical keys or coins at all — you tap your
              Suica to lock the locker, and tap again to open it. The fee is
              deducted from your card balance when you retrieve your bags.
            </p>
            <p>
              This is incredibly useful when you arrive in a city before your
              hotel check-in time, or when you want to explore a city without
              dragging your luggage around. Just tap, drop your bags, go explore,
              tap again to retrieve.
            </p>
          </section>

          {/* ── Losing the card ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What happens if you lose your Suica — our actual experience
            </h2>
            <p>
              We lost our Suica card mid-trip. Here's what happened and what
              your options are depending on the type of card you have.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Unregistered / anonymous card",
                  icon: "😬",
                  bg: "bg-red-50",
                  border: "border-red-200",
                  steps: [
                    "Balance is gone — no recovery possible",
                    "Just buy a new card at any major station",
                    "We bought ours at Otsuki Station — no problem at all",
                    "Any JR East station will have them",
                  ],
                },
                {
                  title: "Registered card (name printed)",
                  icon: "✅",
                  bg: "bg-teal-50",
                  border: "border-teal-200",
                  steps: [
                    "Report to any JR East station immediately, carry your passport",
                    "Card is suspended — no one else can use your balance",
                    "Balance transferred to a new card (minus processing fee of approximately 1000 JPY)",
                    "You will only be able to receive your new card from the next day."
                  ],
                },
              ].map(card => (
                <div key={card.title} className={`rounded-2xl border overflow-hidden ${card.border}`}>
                  <div className={`px-5 py-4 border-b ${card.border} ${card.bg}`}>
                    <p className="font-medium text-[var(--text)]">{card.icon} {card.title}</p>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    {card.steps.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p>
              We did not have time to find the nearest JR East station to report our 
              lost card, also we never overloaded the card with too much money, 
              so we just bought a new one.
            </p>

            <NoteBox>
              <strong>Screenshot your card number when you first get it.</strong>{" "}
              The number is printed on the back. If you have it saved somewhere,
              it helps station staff with recovery for a registered card.
            </NoteBox>
          </section>

          {/* ── What Suica can't do ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What Suica cannot do
            </h2>
            <div className="space-y-3">
              {[
                {
                  limit: "Long-distance travel between regions",
                  detail: "You can't tap in at Tokyo Station and tap out at Kyoto. Suica only covers local and regional transit within each IC zone. Crossing zone boundaries will lock your card and trigger an alarm at the gate — you'll need to speak to a station attendant.",
                },
                {
                  limit: "Shinkansen (bullet train) on its own",
                  detail: "Suica doesn't cover Shinkansen fares by default. You need a separate Shinkansen ticket (paper or e-ticket) or a JR Pass. You can however link your Suica to an e-ticket for tap-and-go boarding as described above.",
                },
                {
                  limit: "Narita Express (N'EX) without a ticket",
                  detail: "The Narita Express requires a reserved seat ticket on top of the IC card fare. You can't just tap your Suica and board — you need to book the express ticket separately.",
                },
              ].map(item => (
                <div key={item.limit} className="rounded-xl border border-red-200 bg-red-50 px-5 py-4">
                  <p className="font-medium text-red-900 text-sm mb-1">✗ {item.limit}</p>
                  <p className="text-sm leading-6 text-red-800">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Official resources ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
              Official resources
            </p>
            <div className="space-y-3">
              {[
                { label: "JR East — Suica official page", href: "https://www.jreast.co.jp/e/pass/suica.html" },
                { label: "JR East — Welcome Suica Mobile app", href: "https://www.jreast.co.jp/e/welcomesuica/welcomesuica.html" },
                { label: "Eki-Net — JR East online Shinkansen booking (English)", href: "https://www.eki-net.com/en/jreast-train-reservation/Top/Index" },
              ].map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-teal-700 hover:border-teal-400 transition-colors">
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
                  href: "/travel/destinations/japan/visa",
                  icon: "🗂️",
                  title: "Japan eVisa — Indian Passport, US Resident (H1B)",
                  desc: "Complete process, documents, rejection reason, and full timeline.",
                },
                {
                  href: "/travel/destinations/japan/japan-immigration-qr-code",
                  icon: "📲",
                  title: "Japan immigration QR code — register before you fly",
                  desc: "How to use Visit Japan Web for immigration and customs clearance.",
                },
                {
                  href: "/travel/destinations/japan/tax-free-shopping",
                  icon: "🛍️",
                  title: "Tax-free shopping in Japan",
                  desc: "How the Visit Japan Web tax QR code works, store by store.",
                },
              ].map(link => (
                <Link key={link.href} href={link.href}
                  className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition hover:border-[var(--accent)]">
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
              Get the card, keep it topped up, and Japan's transit network
              becomes genuinely effortless.
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