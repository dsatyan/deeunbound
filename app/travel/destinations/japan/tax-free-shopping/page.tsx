// app/travel/destinations/japan/tax-free-shopping/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Tax-Free Shopping in Japan — What Actually Happens Store by Store | Dee Unbound",
  description:
    "First-hand guide to tax-free shopping in Japan — how to use Visit Japan Web QR code, why you must carry your passport, minimum spend rules, and how different stores handle it differently.",
  openGraph: {
    title: "Tax-Free Shopping in Japan — What Actually Happens Store by Store",
    description:
      "Real experience from April 2026 — how the Visit Japan Web tax QR code works, passport rules, and why every store does it differently.",
    url: "https://www.deeunbound.com/travel/destinations/japan/tax-free-shopping",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/destinations/japan/tax-free-shopping",
  },
};

export default function JapanTaxFreeShoppingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Tax-free shopping" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Shopping
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Tax-free shopping in Japan — what actually happens, store by store
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          Japan saves you 10% on almost everything — electronics, clothing,
          cosmetics, souvenirs. But the process isn't as simple as showing a
          card. Here's exactly how it worked, from immigration stamp to
          checkout.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
        </div>

        {/* ── 2026 system change warning ── */}
        <div className="mt-14 rounded-2xl border border-amber-300 bg-amber-50 px-6 py-5">
          <p className="font-medium text-amber-900 mb-1">⚠️ Important: The system is changing in November 2026</p>
          <p className="text-sm leading-7 text-amber-800">
            Everything in this guide reflects the current system — tax is
            deducted instantly at checkout. From{" "}
            <strong>November 1, 2026</strong>, Japan is switching to a
            "pay first, refund at the airport" model. If you're travelling
            after that date, check the{" "}
            <a
              href="https://www.japan.travel/en/ca/news/changes-are-coming-to-tax-free-shopping-in-japan/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-amber-900"
            >
              official Japan Tax-Free Shop website
            </a>{" "}
            for updated procedures.
          </p>
        </div>

        <div className="mt-14 space-y-16">

          {/* ── Step 1: immigration stamp ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 1 — get the QR sticker at immigration
            </h2>
            <p>
              When you land in Japan and go through immigration, the officer
              stamps your passport and sticks a small QR code sticker next to
              the stamp. This QR code is your entry into the tax-free system —
              it links your passport to your Visit Japan Web account so the
              tax-free QR code can be generated.
            </p>
            <NoteBox>
              <strong>If you use the automated immigration gates:</strong> the
              automated gates may not give you a physical passport stamp or
              sticker. Without the entry stamp, you cannot generate the
              tax-free QR code on Visit Japan Web.{" "}
              <strong>
                If you use an automated gate, go to the immigration counter
                afterwards and ask for a manual entry stamp.
              </strong>{" "}
              Don't skip this — you'll need it every time you shop tax-free.
            </NoteBox>
          </section>

          {/* ── Step 2: Visit Japan Web tax QR ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 2 — generate your tax-free QR code on Visit Japan Web
            </h2>
            <p>
              Once you have your passport stamp and sticker, open Visit Japan
              Web on your phone, go to the tax-free shopping section, and take
              a photo of the QR sticker in your passport when prompted. The
              site then generates your personal tax-free shopping QR code.
            </p>
            <p>
              Keep a tab open in your browser for the Visit Japan Web site
              throughout your trip — you'll be logging in frequently. The
              tax-free QR code is dynamic, like an Amazon Prime in-store code.
              It changes and is timed, so you can't download it once and use
              it forever. Every time you shop, you log in and pull up a fresh
              code.
            </p>

            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-6 py-5">
              <p className="font-medium text-teal-900 mb-3">Official Visit Japan Web</p>
              <a
                href="https://services.digital.go.jp/en/visit-japan-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800 transition-colors"
              >
                Visit Japan Web — Open here ↗
              </a>
              <p className="mt-3 text-sm text-teal-800">
                WiFi is required to load the QR code at stores. Most large
                stores and shopping centres have free WiFi available.
              </p>
            </div>

            <NoteBox>
              <strong>Screenshots are not accepted.</strong> Stores scan the
              live QR code directly from the Visit Japan Web site on your
              phone. A screenshot will not work. You need an active internet
              connection to display it.
            </NoteBox>
          </section>

          {/* ── Step 3: At the store ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Step 3 — at the store (this is where it varies)
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Every store handles the tax-free process slightly differently.
              Some do it at the checkout counter, some have a dedicated
              tax-free desk. Some refund instantly, some take a few days.
              Here's exactly what happened at three stores I shopped at.
            </p>

            <div className="space-y-4">
              {[
                {
                  store: "Musashi (department store)",
                  method: "Pay tax now, refund in 2–5 days",
                  color: "border-purple-200 bg-purple-50",
                  headerColor: "bg-purple-100 border-purple-200",
                  titleColor: "text-purple-900",
                  steps: [
                    "Showed passport and tax-free QR code at the dedicated tax-free counter",
                    "Paid the full price including 10% tax at checkout",
                    "Tax refund credited back to the card used within 2–5 business days",
                  ],
                  note: "Common in department stores and larger malls. You pay more upfront but get it back automatically.",
                },
                {
                  store: "Zara Japan",
                  method: "Instant tax deduction at checkout",
                  color: "border-teal-200 bg-teal-50",
                  headerColor: "bg-[#dce7e6] border-teal-200",
                  titleColor: "text-teal-900",
                  steps: [
                    "Showed passport at the checkout counter",
                    "Tax deducted immediately — paid the lower price",
                    "No QR code required — passport was enough",
                  ],
                  note: "The simplest version. Common in clothing stores. Instant, no waiting.",
                },
                {
                  store: "Uniqlo",
                  method: "Visit Japan Web QR code only — no passport asked",
                  color: "border-amber-200 bg-amber-50",
                  headerColor: "bg-amber-100 border-amber-200",
                  titleColor: "text-amber-900",
                  steps: [
                    "Showed the tax-free QR code from Visit Japan Web",
                    "Staff scanned the QR code directly",
                    "Tax deducted immediately — no passport asked for",
                  ],
                  note: "Uniqlo is one of the most Visit Japan Web-compatible chains. Fast and smooth if you have the QR code ready.",
                },
              ].map(store => (
                <div key={store.store} className={`rounded-2xl border overflow-hidden ${store.color}`}>
                  <div className={`border-b px-6 py-4 flex items-center gap-3 ${store.headerColor}`}>
                    <span className="text-2xl">{store.icon}</span>
                    <div>
                      <p className={`font-serif text-lg font-semibold ${store.titleColor}`}>{store.store}</p>
                      <p className={`text-sm font-medium ${store.titleColor} opacity-80`}>{store.method}</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="space-y-2 mb-3">
                      {store.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-500">{i + 1}</span>
                          {step}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs leading-5 text-neutral-500 italic">{store.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Practical tips ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Practical tips from the trip
            </h2>
            <p>
                Carry your passport everywhere: Your passport is required for tax-free purchases, not a photo of it. I know it feels safer in the hotel safe, but you'll need it every time you shop. Keep it on you.
            </p>
            <p>
                Ask before you buy — confirm the store does tax-free. Not every store participates. Smaller independent shops often don't. If you're close to the ¥5,000 minimum, confirm they're tax-free eligible before deciding whether to buy.
            </p>
            <p>
                Consumables must stay sealed until you leave Japan. Cosmetics, food, medicine bought tax-free will be sealed in a bag. Don't open them in Japan — customs can check. General items like clothing and electronics can be used.
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
                  label: "Visit Japan Web — tax-free shopping section",
                  href: "https://services.digital.go.jp/en/visit-japan-web/",
                },
                {
                  label: "Japan Tax-Free Shop — official guide (MLIT)",
                  href: "https://www.japan.travel/en/plan/japans-tax-exemption/",
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
              10% back on everything adds up fast.
            </p>
            <p>Happy shopping ✈️</p>
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