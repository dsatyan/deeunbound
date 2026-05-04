// app/travel/destinations/japan/train-tickets-explained/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Japan Train Tickets Explained: Why You Get Multiple Tickets & How to Use Them | Dee Unbound",
  description:
    "Confused by multiple train tickets in Japan? Here's exactly why you get a base fare ticket AND a limited express ticket, how to use them at the gate, and the real mistake we made at Nagoya Station.",
  keywords: [
    "japan train tickets explained",
    "why multiple train tickets japan",
    "base fare limited express ticket japan",
    "how to use japan train tickets gate",
    "japan train ticket gate multiple tickets",
    "takayama nagoya kyoto train tickets",
  ],
  openGraph: {
    title: "Japan Train Tickets Explained: Why You Get Multiple Tickets & How to Use Them",
    description:
      "The gate rejected us at Nagoya because we only inserted one of our three tickets. Here's why Japan gives you multiple tickets and exactly what to do with them.",
    url: "https://www.deeunbound.com/travel/destinations/japan/train-tickets-explained",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/destinations/japan/train-tickets-explained",
  },
};

export default function TrainTicketsExplainedPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Train tickets explained" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Getting around
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Japan Train Tickets Explained: Why You Get Multiple Tickets (And How to Use Them)
        </h1>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
        </div>

        <div className="mt-14 space-y-16">

          {/* ── Why multiple tickets ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Why You Get Multiple Train Tickets in Japan
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Japan's train system separates the cost of travel into two
              distinct charges, and each one gets its own ticket.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Base fare ticket",
                  subtitle: "基本運賃 (Kihon Unchin)",
                  icon: "🎫",
                  color: "border-teal-300 bg-[#dce7e6]",
                  titleColor: "text-teal-900",
                  description: "Covers the distance you're travelling - from your departure station to your arrival station. Think of it as your right to be on the train network for that distance.",
                  example: "Takayama → Nagoya: ¥2,310",
                  points: [
                    "Required for every journey",
                    "Printed as a separate card ticket for reserved express trains",
                  ],
                },
                {
                  title: "Limited express surcharge ticket",
                  subtitle: "特急券 (Tokkyu-ken)",
                  icon: "🎟️",
                  color: "border-purple-200 bg-purple-50",
                  titleColor: "text-purple-900",
                  description: "Pays for the privilege of travelling on a faster, more comfortable Limited Express or Shinkansen train - with reserved seating, luggage racks, and higher speed.",
                  example: "Express surcharge: ¥1,900",
                  points: [
                    "Only required for Limited Express and Shinkansen trains",
                    "Not needed for local, rapid, or regular express trains",
                    "Includes your seat reservation and car number",
                  ],
                },
              ].map(ticket => (
                <div key={ticket.title} className={`rounded-2xl border overflow-hidden ${ticket.color}`}>
                  <div className={`px-5 py-4 border-b ${ticket.color}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{ticket.icon}</span>
                      <div>
                        <p className={`font-serif text-lg font-semibold ${ticket.titleColor}`}>{ticket.title}</p>
                        <p className="text-xs text-neutral-500">{ticket.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-sm leading-6 text-neutral-700">{ticket.description}</p>
                    <p className="text-xs font-medium text-neutral-500 bg-white/60 rounded-lg px-3 py-2">
                      Example: {ticket.example}
                    </p>
                    <div className="space-y-1.5">
                      {ticket.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                          <span className="mt-0.5 flex-shrink-0 text-teal-600">✓</span>{pt}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <NoteBox>
              <strong>Simple rule:</strong> Local trains and subways - one
              ticket (or just tap Suica). Limited Express or Shinkansen - two
              tickets. Always. The gate will block you if you only insert one.
            </NoteBox>
          </section>

          {/* ── The Nagoya mistake ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What happens if you insert only one ticket? 
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Our route was Takayama → Nagoya → Kyoto. For the first leg
              (Takayama → Nagoya) we had two tickets - a base fare and a
              limited express surcharge. At Takayama we correctly inserted
              both to get through the gate. Fine.
            </p>
            <p className="text-lg leading-8 text-neutral-700">
              We arrived at Nagoya with couple of minutes until our connecting train
              to Kyoto. We walked to the gate and inserted just the Nagoya →
              Kyoto ticket. The gate blocked us immediately. Beep.
              Doors shut.
            </p>

            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5">
              <p className="font-medium text-red-900 mb-3">What the gate was actually asking for</p>
              <div className="space-y-2">
                {[
                  { ticket: "Ticket 1", desc: "Takayama → Nagoya base fare", status: "needed" },
                  { ticket: "Ticket 2", desc: "Takayama → Nagoya limited express surcharge", status: "needed" },
                  { ticket: "Ticket 3", desc: "Nagoya → Kyoto (Shinkansen)", status: "inserted" },
                ].map(item => (
                  <div key={item.ticket} className="flex items-center gap-3 text-sm">
                    <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${item.status === "inserted" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {item.status === "inserted" ? "✓ inserted" : "✗ missing"}
                    </span>
                    <span className="text-neutral-700"><strong>{item.ticket}:</strong> {item.desc}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-red-800">
                The gate calculates the total fare across your journey. Since
                we had entered at Takayama on those two tickets, the system
                expected us to exit through all three. Inserting only the
                Kyoto ticket meant the system thought we hadn't paid for the
                Takayama → Nagoya leg.
              </p>
            </div>

            <p className="text-lg leading-8 text-neutral-700">
              We immediately asked the station staff standing at the gate -
              they told us to insert all three together. Problem solved in
              seconds. 
              There is always a station staff member at the gate.
              The moment the gate blocks you, turn to them. Don't panic, don't
              keep trying. They handle this situation every day. Show them your
              tickets and they'll tell you exactly what to insert.
            </p>
          </section>

          {/* ── How to use multiple tickets at the gate ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How to use multiple tickets at the gate
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              This is the part nobody explains clearly. When you have two or
              three tickets for a journey, here's exactly what to do:
            </p>

            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Stack all your tickets together",
                  detail: "Place them directly on top of each other - all tickets for the current journey segment. Make sure they're aligned and flat.",
                  warn: false,
                },
                {
                  n: "2",
                  title: "Insert the stack into the slot at once",
                  detail: "Push all tickets into the ticket slot simultaneously as a single stack. The machine accepts multiple tickets at once - it's designed for this. Don't feed them one by one.",
                  warn: false,
                },
                {
                  n: "3",
                  title: "Collect them from the other end",
                  detail: "The machine processes all tickets together and ejects the required one from the slot on the other side of the gate. Collect them - you'll need them again at your destination to exit.",
                  warn: false,
                },
                {
                  n: "4",
                  title: "⚠️ Keep all tickets until your final exit",
                  detail: "Don't pocket just one ticket and discard the others. You need all of them to exit at your destination. The exit gate will check the full fare, same as the entry gate.",
                  warn: true,
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

          {/* ── Buy transfer tickets in advance ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Why You Should Buy Transfer Tickets Early
            </h2>
            <p>
              This is the most important practical lesson from our Nagoya
              experience. We had 12 minutes at Nagoya to catch our Kyoto train.
              That is not enough time to queue at a ticket machine or counter,
              buy a Shinkansen ticket, find the right platform, and board.
            </p>
            <p>
              We had bought our Nagoya → Kyoto ticket in advance at Takayama
              Station - before we boarded the first train. That's why we made
              it. If we'd planned to "just buy it at Nagoya", we would have
              missed the train.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { good: true,  text: "Buy connecting tickets at your departure station when you buy your first ticket" },
                { good: true,  text: "Check connection time - 30 minutes is a safe minimum at busy stations" },
                { good: true,  text: "If online booking: buy all legs at the same time and collect at one station" },
                { good: true,  text: "At small stations, the ticket counter is quick - use it" },
                { good: false, text: "Don't assume you can buy the next ticket at a busy transfer station in under 10 minutes" },
                { good: false, text: "Don't assume ticket machines at Shinkansen hubs are fast - they're often crowded" },
              ].map((pt, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${pt.good ? "border-teal-200 bg-teal-50 text-teal-800" : "border-red-200 bg-red-50 text-red-800"}`}>
                  <span className="flex-shrink-0 mt-0.5">{pt.good ? "✓" : "✗"}</span>
                  {pt.text}
                </div>
              ))}
            </div>
          </section>

          {/* ── Credit card ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Always carry the credit card you used to book
            </h2>
            <p>
              This applies specifically to JR Central trains (Nagoya area,
              Tokaido Shinkansen, Takayama line) and some other regional
              operators. When you book online, the ticket is tied to the credit
              card you paid with. To collect the physical ticket at the station
              machine, you insert that same card - it identifies
              your reservation.
              If you don't have it, go to the staffed JR Ticket Office (Midori-no-madoguchi) and explain the situation. They may be able to help with ID verification.
            </p>
            <p>
            If you chose "pay at station": you collect using your QR code or reservation number + the 4-digit ID you set when booking. No credit card needed.
Either way - carry your booking confirmation email and know your reservation number. That's your safety net.
            </p>

            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-5 py-4">
              <p className="font-medium text-teal-900 text-sm mb-2">Official JR Pass Site - How to Receive Your Ticket</p>
              <a
                href="https://www.westjr.co.jp/global/en/howto/train-reservation/receive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal-700 underline underline-offset-2 hover:text-teal-900"
              >
                www.westjr.co.jp/global/en/howto/train-reservation/receive/ ↗
              </a>
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
                  href: "/travel/destinations/japan/suica-ic-card",
                  icon: "🚆",
                  title: "Suica IC card - complete setup guide",
                  desc: "How to get your card, link to Shinkansen e-tickets, and what happens when you lose it.",
                },
                {
                  href: "/travel/destinations/japan/narita-arrival-guide",
                  icon: "✈️",
                  title: "Narita arrival guide - what to do first",
                  desc: "Cash, Suica, JR Pass collection, and choosing your train to Tokyo.",
                },
                {
                  href: "/travel/destinations/japan/visa",
                  icon: "🗂️",
                  title: "Japan eVisa - Indian Passport, US Resident",
                  desc: "Complete visa process, documents, and timeline.",
                },
                {
                  href: "/travel/destinations/japan/tax-free-shopping",
                  icon: "🛍️",
                  title: "Tax-free shopping in Japan",
                  desc: "How it works store by store - Uniqlo, Zara, department stores.",
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