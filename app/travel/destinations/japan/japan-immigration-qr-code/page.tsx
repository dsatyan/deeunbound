// /travel/destinations/japan/japan-immigration-qr-code/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/page-shell";
 
export const metadata: Metadata = {
  title: "Japan Immigration QR Code — Visit Japan Web Registration Guide | Dee Unbound",
  description:
    "Step-by-step guide to registering on Visit Japan Web before your trip. Complete immigration and customs clearance online and get your QR code before you land.",
  openGraph: {
    title: "Japan Immigration QR Code — Visit Japan Web Guide",
    description:
      "Do this at the gate, not after landing. How to register on Visit Japan Web and get your immigration QR code before you fly.",
    url: "https://www.deeunbound.com/travel/destinations/japan/japan-immigration-qr-code",
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: "https://www.deeunbound.com/travel/destinations/japan/japan-immigration-qr-code",
  },
};
 
export default function JapanImmigrationQRPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "Japan immigration QR code" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">
 
        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Travel tips
        </span>
 
        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Japan immigration QR code is a must — register before you fly
        </h1>
 
        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          At the United check-in counter, they had a QR code pointing to the
          Visit Japan Web service. Do not wait until you land. Do it at the
          gate. Here's exactly what to do and why each step matters.
        </p>
 
        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>5 min read</span>
        </div>
 
        <div className="mt-14 space-y-16">
 
          {/* ── What is Visit Japan Web ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What is Visit Japan Web?
            </h2>
            <p>
              Visit Japan Web is Japan's official online service that lets you
              complete arrival procedures — immigration and customs — before you
              land. You register your details in advance, and at the immigration
              counter all you show is a QR code on your phone and your passport.
              That's it.
            </p>
            <p>
              It also handles tax-free shopping registration, but the immigration
              QR code is the part you must not skip.
            </p>
 
            {/* CTA box */}
            <div className="rounded-2xl border border-teal-300 bg-[#dce7e6] px-6 py-5">
              <p className="font-medium text-teal-900 mb-2">Official registration link</p>
              <a
                href="https://services.digital.go.jp/en/visit-japan-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800 transition-colors"
              >
                Visit Japan Web — Register here ↗
              </a>
              <p className="mt-3 text-sm text-teal-800">
                You can fill in the information from a PC, but you must present
                the 2D QR code at immigration on your smartphone or tablet. Save
                the QR code to your phone before you board.
              </p>
            </div>
          </section>
 
          {/* ── What you need ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What you need before you start
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: "📘", label: "Passport", note: "You'll enter your passport number and expiry date" },
                { icon: "🗂️", label: "Visa issuance number", note: "From your Japan eVisa email — this is how they verify your entry eligibility" },
                { icon: "✈️", label: "Air ticket / booking confirmation", note: "Your flight number, departure date, and arrival date in Japan" },
              ].map(item => (
                <div key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-medium text-[var(--text)] text-sm">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{item.note}</p>
                </div>
              ))}
            </div>
          </section>
 
          {/* ── Steps ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              How to register — step by step
            </h2>
            <div className="space-y-3">
              {[
                {
                  n: "1",
                  title: "Create an account and fill in your information",
                  detail: "Register with your email on the Visit Japan Web site. Fill in your passport details, visa information, and flight itinerary. This section is straightforward.",
                  warn: false,
                },
                {
                  n: "2",
                  title: "Complete the tax-free shopping registration",
                  detail: "After your basic info, the site will ask if you want to register for tax-free shopping. Go through this section — it doesn't take long and is useful when shopping in Japan.",
                  warn: false,
                },
                {
                  n: "3",
                  title: "⚠️ Explicitly click on the Immigration section — it will not take you there automatically",
                  detail: "This is the part most people miss. After completing the main form, you have to manually click on the Immigration section and fill in the questionnaire there. The site does not redirect you automatically. If you skip this, you will not get the immigration QR code.",
                  warn: true,
                },
                {
                  n: "4",
                  title: "Complete all immigration questionnaires",
                  detail: "The immigration section asks standard arrival questions — purpose of visit, address in Japan, whether you're carrying restricted items, etc. Fill all of it in.",
                  warn: false,
                },
                {
                  n: "5",
                  title: "Save your QR code to your phone",
                  detail: "Once the immigration section is complete, you'll get your QR code for immigration clearance and customs declaration. Screenshot it or download it. You can always regenerate it from the Visit Japan Web site later by using wifi in Japan airports.",
                  warn: false,
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
 
          {/* ── At the airport ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              What happens at the airport
            </h2>
            <p>
              At immigration in Japan, the officer will ask for two things only:
              your QR code for immigration clearance, and your passport. They did
              not ask for the visa QR code — most likely because your visa
              issuance number was already entered during registration, and that's
              what generates the immigration QR code.
            </p>
            <p>
              After baggage claim, you'll pass through another gate where the
              same QR code is scanned again for customs clearance. Same code,
              second scan. That's it — you're through.
            </p>
 
            <NoteBox>
              <strong>Do this at the gate before you board, not after landing.</strong>{" "}
              You'll be tired after a long flight and the last thing you want is
              to be fumbling with registration in the immigration queue. The whole
              process takes about 10–15 minutes — do it while you're waiting to
              board.
            </NoteBox>
          </section>
 
          {/* ── Related link back to visa page ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
              Related guide
            </p>
            <Link
              href="/travel/destinations/japan/visa"
              className="group flex items-start gap-4"
            >
              <span className="text-2xl">🗂️</span>
              <div>
                <p className="font-serif text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  Japan eVisa — Indian Passport, US Resident (H1B)
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  The complete process — documents, rejection reason, step-by-step portal walkthrough, and full timeline.
                </p>
                <span className="mt-2 inline-block text-xs font-medium text-[var(--accent)]">
                  Read the visa guide →
                </span>
              </div>
            </Link>
          </section>
 
        </div>
 
        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>Ten minutes at the gate saves you a headache at immigration.</p>
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