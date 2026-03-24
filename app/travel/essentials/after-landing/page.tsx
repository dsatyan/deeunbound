// app/travel/essentials/after-landing/page.tsx
import PageShell from "@/components/page-shell";

export const postMeta = {
  title: "The First 30 Minutes After Landing",
  description:
    "Connect, withdraw cash, activate your eSIM - in the right order. What I do every time I arrive somewhere new.",
  emoji: "🛬",
  readingTime: "4 min read",
  tags: ["arrival", "connectivity", "money"],
};

export default function AfterLandingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "After Landing" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          The First 30 Minutes After Landing
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          The arrivals hall is where most travel friction lives. Here's the
          exact sequence I follow - so I'm connected, cashed up, and moving
          within thirty minutes of landing anywhere.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>4 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Updated 2025</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          The goal is to walk out of arrivals already sorted - connected,
          with local cash, and not standing around wondering what to do next.
        </blockquote>

        <div className="mt-14 space-y-8">

          {/* Step 1 */}
          <StepCard number="1" color="teal">
            <StepHeader
              title="Connect to airport Wi-Fi first - before anything else"
              tagline="You need internet to activate your eSIM. Do this the moment you land."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                As soon as you're through the gate and have signal, connect to
                the airport Wi-Fi. Most international airports have free Wi-Fi
                in arrivals - find it and join it before you do anything else.
              </p>
              <p>
                You need this connection to activate your eSIM. If you try to
                activate your eSIM without internet, it won't work - and you'll
                be standing in arrivals trying to find Wi-Fi while your eSIM
                sits inert.
              </p>
              <NoteBox>
                If you followed the{" "}
                <a
                  href="/travel/essentials/esim"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  eSIM guide
                </a>
                {" "}and installed your eSIM at the gate before boarding, this
                step is just flipping the switch. Connect to Wi-Fi, open your
                phone settings, enable the eSIM data line, turn on data roaming.
                Done.
              </NoteBox>
            </div>
          </StepCard>

          {/* Step 2 */}
          <StepCard number="2" color="gold">
            <StepHeader
              title="Activate your eSIM on Wi-Fi"
              tagline="Takes under a minute if it's already installed."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Open{" "}
                <a
                  href="https://www.airalo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  Airalo
                </a>
                {" "}if you haven't installed yet, or go straight to Settings if
                you already installed at the gate. Switch your data line to the
                eSIM and enable data roaming. You should see signal bars appear
                within 30 seconds.
              </p>
              <p>
                Once the eSIM is active, you can turn off Wi-Fi - you're now
                running on local data. The whole arrival process from here gets
                easier because you have maps, messaging, and everything else
                working on mobile.
              </p>
              <p>
                If you haven't set up your eSIM yet, the{" "}
                <a
                  href="/travel/essentials/esim"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  full eSIM guide
                </a>
                {" "}covers the complete activation sequence including the
                critical step most people miss (enabling data roaming).
              </p>
            </div>
          </StepCard>

          {/* Step 3 */}
          <StepCard number="3" color="blue">
            <StepHeader
              title="Get cash from a bank ATM - not a currency exchange counter"
              tagline="The exchange counters in arrivals are the most expensive way to get local currency."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Once you're through immigration and in the main arrivals hall,
                find a bank-branded ATM - not a currency exchange kiosk, and
                not one of those standalone ATMs with no bank name on them.
                The difference in exchange rate can be 10–17%.
              </p>

              {/* NZ story */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  What happened in New Zealand
                </p>
                <p className="text-base leading-7 text-neutral-700">
                  At Auckland Airport, there's a Global Exchange counter right in
                  arrivals - very visible, very convenient. I tried to use it and
                  the rates were poor enough that I walked past it. Just outside
                  the main arrivals doors, there's an ANZ bank ATM. Same
                  location, completely different rates - much closer to the
                  actual exchange rate.
                </p>
                <p className="mt-3 text-base leading-7 text-neutral-700">
                  The rule: walk past the exchange counters, find the
                  bank-branded ATM, and use that. It's almost always just a
                  short walk further.
                </p>
              </div>

              <p>
                <strong className="font-medium text-[var(--text)]">
                  Don't immediately doubt your card if it doesn't work.
                </strong>{" "}
                The first failure is usually the ATM itself, not your card -
                especially with standalone or generic ATMs. Try a different
                bank's ATM before assuming your card is the problem. Cards
                from major banks with a Visa or Mastercard logo work in most
                countries without issue.
              </p>

              <NoteBox>
                <strong>Always pay in local currency at the ATM prompt.</strong>{" "}
                Some ATMs will offer to convert to your home currency for you
                (Dynamic Currency Conversion). Always decline - choose local
                currency. The ATM's conversion rate is far worse than what
                your bank charges. This applies at shops and restaurants too.
              </NoteBox>
            </div>
          </StepCard>

          {/* Step 4 */}
          <StepCard number="4" color="orange">
            <StepHeader
              title="Check your itinerary doc and head out"
              tagline="You should already know where you're going. This is just a confirmation."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                If you've been using the{" "}
                <a
                  href="/travel/essentials/itinerary-system"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  itinerary system
                </a>
                , your accommodation address, transport options, and first
                day plan are already written down and available offline. Open
                the doc, confirm where you're headed, drop the address into
                Google Maps, and go.
              </p>
              <p>
                The goal of the first 30 minutes isn't to figure out your
                plan - it's to execute a plan you already made. The arrivals
                hall is not the right place to start researching your first
                hotel or figuring out transport. That should have happened
                at the gate.
              </p>
            </div>
          </StepCard>

        </div>

        {/* Quick checklist */}
        <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Quick sequence
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-[var(--text)]">
            The arrivals checklist
          </h2>
          <ol className="mt-5 space-y-3">
            {[
              "Connect to airport Wi-Fi",
              "Activate eSIM - Settings → enable eSIM data line → enable data roaming",
              "Walk past the exchange counters",
              "Find a bank-branded ATM - withdraw local cash - choose local currency at the prompt",
              "Open itinerary doc - confirm accommodation address",
              "Navigate to accommodation",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-sm leading-7 text-neutral-700">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-xs font-medium text-teal-700">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* Closing */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              None of this is complicated - it's just a sequence. The same
              sequence, every time, every airport. After a few trips it
              becomes automatic and the arrivals experience stops being
              disorienting and starts feeling routine.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

// ── Shared components ─────────────────────────────────────────────────────────
type Color = "teal" | "gold" | "blue" | "orange" | "purple" | "green";
const colorMap: Record<Color, { badge: string }> = {
  teal:   { badge: "bg-[#dce7e6] text-teal-700" },
  gold:   { badge: "bg-amber-100 text-amber-700" },
  blue:   { badge: "bg-blue-100 text-blue-700" },
  orange: { badge: "bg-orange-100 text-orange-700" },
  purple: { badge: "bg-purple-100 text-purple-700" },
  green:  { badge: "bg-green-100 text-green-700" },
};
function StepCard({ number, color, children }: { number: string; color: Color; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-7 py-7">
      <div className="flex items-start gap-5">
        <div className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-base font-medium ${colorMap[color].badge}`}>
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
      <h2 className="font-serif text-2xl font-semibold leading-snug text-[var(--text)]">{title}</h2>
      <p className="mt-1 text-base italic leading-relaxed text-[var(--muted)]">{tagline}</p>
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