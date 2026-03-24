"use client";

import PageShell from "@/components/page-shell";
import { useState } from "react";

// ─── Types reused from gate-habits ───────────────────────────────────────────
type Color = "teal" | "gold" | "blue" | "orange" | "purple" | "green";

// ─────────────────────────────────────────────────────────────────────────────
export default function EsimPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "eSIM Guide" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          eSIMs: The Easiest Way to Stay Connected When You Land
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          No more hunting for SIM kiosks in arrivals. No more overpriced airport
          data plans. An eSIM lets you land already connected - set up at the
          gate before you even board.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>6 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Updated 2025</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          I used to waste 20-30 minutes at baggage claim finding a SIM counter,
          comparing plans, and waiting in line. Now I walk off the plane, toggle
          one switch, and I&apos;m online.
        </blockquote>

        {/* ── What is an eSIM ── */}
        <section className="mt-14 space-y-8">
          <StepCard number="?" color="blue">
            <StepHeader
              title="What exactly is an eSIM?"
              tagline="Skip this if you already know - jump straight to Airalo setup"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                An eSIM (embedded SIM) is a digital SIM card built into your
                phone. Instead of physically swapping a plastic chip, you scan a
                QR code and a carrier profile is loaded onto your device. Your
                physical SIM slot stays untouched - both lines run at the same
                time.
              </p>
              <p>
                Most phones sold after 2020 support eSIM: iPhone XS and later,
                most Google Pixel phones, Samsung Galaxy S20 and later. Check
                your phone settings under{" "}
                <strong>Cellular → Add eSIM</strong> (iOS) or{" "}
                <strong>Connections → SIM Manager</strong> (Android).
              </p>

              {/* Comparison table */}
              <div className="overflow-x-auto">
                <table className="w-full rounded-xl border border-[var(--border)] text-sm">
                  <thead>
                    <tr className="bg-[var(--surface)] text-left text-xs uppercase tracking-widest text-[var(--muted)]">
                      <th className="px-5 py-3 font-medium">Option</th>
                      <th className="px-5 py-3 font-medium">Cost</th>
                      <th className="px-5 py-3 font-medium">Setup</th>
                      <th className="px-5 py-3 font-medium">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {[
                      {
                        option: "eSIM (Airalo)",
                        cost: "💰 Cheapest",
                        setup: "Buy before you fly",
                        best: "Most trips",
                        highlight: true,
                      },
                      {
                        option: "Local SIM card",
                        cost: "💰 Cheap",
                        setup: "Queue at airport counter",
                        best: "Long stays (1 month+)",
                        highlight: false,
                      },
                      {
                        option: "Pocket Wi-Fi",
                        cost: "💰💰 Moderate",
                        setup: "Pick up at airport",
                        best: "Groups traveling together",
                        highlight: false,
                      },
                      {
                        option: "Hotel/café Wi-Fi",
                        cost: "Free",
                        setup: "None",
                        best: "Absolute last resort",
                        highlight: false,
                      },
                    ].map((row) => (
                      <tr
                        key={row.option}
                        className={
                          row.highlight
                            ? "bg-[#dfe5e4] font-medium text-[var(--text)]"
                            : "text-neutral-700"
                        }
                      >
                        <td className="px-5 py-3">{row.option}</td>
                        <td className="px-5 py-3">{row.cost}</td>
                        <td className="px-5 py-3">{row.setup}</td>
                        <td className="px-5 py-3">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </StepCard>

          {/* ── Step 1: Buy on Airalo ── */}
          <StepCard number="1" color="teal">
            <StepHeader
              title="Buy your eSIM on Airalo"
              tagline="Do this at the gate, before you board"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                <a
                  href="https://www.airalo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  Airalo
                </a>{" "}
                is the largest eSIM marketplace - they aggregate plans from
                local carriers in 200+ countries. The prices are almost always
                cheaper than airport counters, and you can compare everything
                side by side before you commit.
              </p>

              <HowToBox
                steps={[
                  <>
                    Download the <strong>Airalo app</strong> and create a free
                    account before your travel day.
                  </>,
                  <>
                    Search for your destination country. You&apos;ll see
                    options sorted by data size and price - e.g.{" "}
                    <strong>1 GB / 7 days</strong> or{" "}
                    <strong>5 GB / 30 days</strong>.
                  </>,
                  <>
                    For short trips (under a week), 1–3 GB is usually plenty
                    unless you&apos;re streaming. For longer trips or if
                    you&apos;re working remotely, go 5 GB+.
                  </>,
                  <>
                    Purchase the plan. You&apos;ll immediately receive a{" "}
                    <strong>QR code</strong> in the app - this is your eSIM.
                    Don&apos;t activate it yet.
                  </>,
                ]}
              />

              <NoteBox>
                <strong>Regional vs. country packs:</strong> If you&apos;re
                visiting multiple countries (e.g. a Europe trip), look for
                regional eSIMs - one plan that covers 30+ countries. Often
                cheaper than buying separately per country. Airalo has Europe,
                Southeast Asia, and Middle East regional packs.
              </NoteBox>
            </div>
          </StepCard>

          {/* ── Step 2: Install ── */}
          <StepCard number="2" color="gold">
            <StepHeader
              title="Install the eSIM - still at the gate"
              tagline="Takes about 2 minutes on good Wi-Fi"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Install the eSIM while you&apos;re still at the gate with
                airport Wi-Fi. Once installed, it sits on your phone quietly -
                it doesn&apos;t activate or cost anything until you switch it
                on.
              </p>

              <HowToBox
                steps={[
                  <>
                    In the Airalo app, tap your purchased eSIM →{" "}
                    <strong>Install</strong>. This opens your phone&apos;s
                    camera to scan the QR code.
                  </>,
                  <>
                    <strong>iPhone:</strong> Settings → Cellular → Add eSIM →
                    Use QR Code. <strong>Android:</strong> Settings →
                    Connections → SIM Manager → Add eSIM.
                  </>,
                  <>
                    Your phone will download the carrier profile (takes 30–60
                    seconds on good Wi-Fi). You&apos;ll see it appear as a
                    second line - labelled with the carrier name.
                  </>,
                  <>
                    <strong>Do not turn it on yet.</strong> Leave it installed
                    but inactive. You&apos;ll activate it properly after
                    landing.
                  </>,
                ]}
              />

              <NoteBox>
                eSIM installation requires internet. If you try to install
                mid-flight or right when you land without Wi-Fi, it won&apos;t
                work. Always install before boarding.
              </NoteBox>
            </div>
          </StepCard>

          {/* ── Step 3: Activation stepper ── */}
          <StepCard number="3" color="orange">
            <StepHeader
              title="Activate on landing - order matters"
              tagline="Do these steps in sequence or you may get charged by your home carrier"
            />
            <div className="space-y-5 text-lg leading-8 text-neutral-700">
              <p>
                This is the step most people get wrong. The sequence below
                keeps your home carrier from auto-connecting and charging
                international roaming rates.
              </p>

              {/* Interactive stepper */}
              <ActivationStepper />

              <NoteBox>
                <strong>Still not working?</strong> Toggle airplane mode on,
                wait 10 seconds, then off again. This forces the phone to
                re-scan for networks and usually picks up the eSIM carrier
                immediately.
              </NoteBox>
            </div>
          </StepCard>

          {/* ── Step 4: Troubleshooting ── */}
          <StepCard number="4" color="purple">
            <StepHeader
              title="Troubleshooting common issues"
              tagline="Most problems have a 30-second fix"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <div className="space-y-3">
                {[
                  {
                    problem: "eSIM shows as active but no internet",
                    fix: 'Go to Settings → Cellular → your eSIM line → turn on "Data Roaming". This is off by default on most phones and is the #1 missed step.',
                  },
                  {
                    problem: "Airplane mode toggle not helping",
                    fix: "Remove the eSIM and re-add it. In Airalo, your QR code is still there - just scan it again. Your data balance is saved on the carrier side, not the QR code.",
                  },
                  {
                    problem: "eSIM plan shows in settings but won't connect",
                    fix: 'Check that you set the eSIM as your default data line. iPhone: Settings → Cellular → Cellular Data → select your eSIM. Android: Settings → Connections → SIM Manager → Mobile Data.',
                  },
                  {
                    problem: "Airalo app says 'installation failed'",
                    fix: "This is almost always a Wi-Fi issue - weak airport Wi-Fi drops the download halfway. Connect to a stronger network (a café, lounge, or your home Wi-Fi if you haven't left yet) and retry.",
                  },
                  {
                    problem: "Ran out of data mid-trip",
                    fix: "Airalo lets you top up without buying a new plan. In the app, find your active eSIM and tap 'Top Up'. The new data is added instantly.",
                  },
                ].map((item) => (
                  <div
                    key={item.problem}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
                  >
                    <p className="text-base font-medium text-[var(--text)]">
                      ⚠️ {item.problem}
                    </p>
                    <p className="mt-1 text-base leading-7 text-neutral-600">
                      → {item.fix}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </StepCard>

          {/* ── Step 5: Tips ── */}
          <StepCard number="5" color="green">
            <StepHeader
              title="Tips I've picked up from using eSIMs everywhere"
              tagline="Small things that make a difference"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <ul className="space-y-4">
                {[
                  {
                    tip: "Label your eSIM lines clearly",
                    detail:
                      'Rename them in Settings so you know which is which - "Home" and "Turkey 2025" is much easier to manage than "Primary" and "Unknown Carrier".',
                  },
                  {
                    tip: "Keep Wi-Fi Calling on your home line",
                    detail:
                      "You can still receive calls and texts on your regular number over Wi-Fi even while using the eSIM for data. Useful for 2FA codes or calls from home.",
                  },
                  {
                    tip: "Don't delete the eSIM after your trip",
                    detail:
                      "If you return to the same country, the old eSIM profile may still have data or let you top up cheaply. Delete only when you're sure you won't be back.",
                  },
                  {
                    tip: "Check the APN settings if data won't connect",
                    detail:
                      "Airalo's app shows the correct APN settings for each carrier. Copy them into Settings → Cellular → Cellular Data Network if the auto-configuration didn't work.",
                  },
                  {
                    tip: "Buy slightly more data than you think you need",
                    detail:
                      "Going from 1 GB to 3 GB usually costs only $2–3 more on Airalo. The stress of watching your data tick down isn't worth the saving.",
                  },
                ].map((item) => (
                  <li key={item.tip} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                    <div>
                      <span className="font-medium text-[var(--text)]">
                        {item.tip}:
                      </span>{" "}
                      {item.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </StepCard>
        </section>

        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              The first time I used an eSIM I couldn&apos;t believe I&apos;d
              ever done it any other way. No queue. No fumbling with a tiny
              plastic chip over an airport toilet. Just land, tap, done.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

// ─── Interactive Activation Stepper ─────────────────────────────────────────

const ACTIVATION_STEPS = [
  {
    label: "Turn off your primary line",
    icon: "📵",
    detail:
      "Before you remove airplane mode, go to Settings → Cellular and toggle OFF your home SIM / primary line. This stops your home carrier from auto-connecting and racking up international roaming charges the moment you land.",
    warning: "Do this first - before anything else.",
  },
  {
    label: "Remove airplane mode",
    icon: "✈️",
    detail:
      "Now toggle airplane mode off. Your phone will start scanning for networks - but because your primary line is off, it won't connect to it.",
    warning: null,
  },
  {
    label: "Connect to airport Wi-Fi",
    icon: "📶",
    detail:
      "Join any available Wi-Fi network. This isn't for browsing - it just lets your phone finalize the eSIM carrier registration in the background.",
    warning: null,
  },
  {
    label: "Enable Data Roaming on the eSIM line",
    icon: "🌐",
    detail:
      'Go to Settings → Cellular → tap your eSIM line → turn on "Data Roaming". This is off by default and is the step most people miss. Without it, the eSIM won\'t use mobile data even when it\'s active.',
    warning: "Most missed step - don't skip it.",
  },
  {
    label: "Set eSIM as your default data line",
    icon: "📱",
    detail:
      'iPhone: Settings → Cellular → Cellular Data → select your eSIM. Android: Settings → Connections → SIM Manager → Mobile Data → select eSIM. You should see signal bars appear within 30 seconds.',
    warning: null,
  },
  {
    label: "Test your connection",
    icon: "✅",
    detail:
      "Open a browser and load any page. If it works - you're done. If not, try the airplane mode toggle trick: flip it on for 10 seconds, then off. This forces a fresh network scan and fixes most remaining issues.",
    warning: null,
  },
];

function ActivationStepper() {
  const [active, setActive] = useState(0);
  const step = ACTIVATION_STEPS[active];

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
      {/* Step pills */}
      <div className="flex overflow-x-auto border-b border-[var(--border)] px-5 py-4 gap-2">
        {ACTIVATION_STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              i === active
                ? "bg-teal-700 text-white"
                : i < active
                ? "bg-[#dce7e6] text-teal-700"
                : "bg-[var(--card)] text-[var(--muted)]"
            }`}
          >
            <span>{i < active ? "✓" : i + 1}</span>
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Active step content */}
      <div className="px-7 py-7">
        <div className="flex items-start gap-5">
          <span className="text-4xl">{step.icon}</span>
          <div className="flex-1 space-y-3">
            <h3 className="font-serif text-xl font-semibold text-[var(--text)]">
              Step {active + 1}: {step.label}
            </h3>
            <p className="text-base leading-7 text-neutral-700">{step.detail}</p>
            {step.warning && (
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
                ⚠️ {step.warning}
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setActive((n) => Math.max(0, n - 1))}
            disabled={active === 0}
            className="rounded-lg border border-[var(--border)] px-5 py-2 text-sm text-[var(--muted)] disabled:opacity-30"
          >
            ← Previous
          </button>
          {active < ACTIVATION_STEPS.length - 1 ? (
            <button
              onClick={() => setActive((n) => n + 1)}
              className="rounded-lg bg-teal-700 px-5 py-2 text-sm font-medium text-white"
            >
              Next step →
            </button>
          ) : (
            <span className="rounded-lg bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
              ✓ All done!
            </span>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-[var(--border)]">
        <div
          className="h-1 bg-teal-600 transition-all duration-300"
          style={{ width: `${((active + 1) / ACTIVATION_STEPS.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ─── Shared components (identical to gate-habits) ────────────────────────────

const colorMap: Record<Color, { badge: string }> = {
  teal:   { badge: "bg-[#dce7e6] text-teal-700" },
  gold:   { badge: "bg-amber-100 text-amber-700" },
  blue:   { badge: "bg-blue-100 text-blue-700" },
  orange: { badge: "bg-orange-100 text-orange-700" },
  purple: { badge: "bg-purple-100 text-purple-700" },
  green:  { badge: "bg-green-100 text-green-700" },
};

function StepCard({
  number,
  color,
  children,
}: {
  number: string;
  color: Color;
  children: React.ReactNode;
}) {
  const c = colorMap[color];
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-7 py-7">
      <div className="flex items-start gap-5">
        <div
          className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-base font-medium ${c.badge}`}
        >
          {number}
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </article>
  );
}

function StepHeader({ title, tagline }: { title: string; tagline: string }) {
  return (
    <div className="mb-5">
      <h2 className="font-serif text-2xl font-semibold leading-snug text-[var(--text)]">
        {title}
      </h2>
      <p className="mt-1 text-base italic leading-relaxed text-[var(--muted)]">
        {tagline}
      </p>
    </div>
  );
}

function HowToBox({ steps }: { steps: React.ReactNode[] }) {
  return (
    <div className="rounded-xl border border-teal-200 bg-[#dfe5e4] px-6 py-6">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        How to do it
      </p>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#cfe2e0] text-sm font-medium text-teal-700">
              {index + 1}
            </span>
            <div className="text-lg leading-8 text-neutral-700">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
      {children}
    </div>
  );
}