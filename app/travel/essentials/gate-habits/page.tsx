export default function GateHabits() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">

      {/* ── Hero ── */}
      <span className="inline-block text-xs tracking-widest uppercase text-amber-700 border border-amber-700 rounded-sm px-2 py-0.5 mb-5 font-medium">
        Travel essentials
      </span>

      <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 mb-5">
        What I Do at the Airport Gate That Saves Me Hours Later
      </h1>

      <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-xl mb-8">
        The most underrated part of travel? Before boarding, I treat gate time like a "setup phase" instead of dead time. Future-me always thanks me for this.
      </p>

      <div className="flex items-center gap-4 pb-8 border-b border-neutral-200 dark:border-neutral-800 text-xs text-neutral-400">
        <span>By Dee</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span>7 min read</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span>Updated Mar 22 2026</span>
      </div>

      {/* ── Step cards ── */}
      <div className="flex flex-col gap-8">

        {/* 1. Maps */}
        <StepCard number="1" color="teal">
          <StepHeader title="Download maps offline" tagline="Never get stuck searching for directions without signal" />
          <div className="px-7 pb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-3">
            <p>
              Google Maps offline is a lifesaver, especially when you land without signal or don't
              want to burn through roaming data. The key is to download by area — not just the
              country — so the file size stays manageable and searches stay fast.
            </p>
            <HowToBox color="teal" steps={[
              { n: "1", text: <span>Open Google Maps → tap your profile photo → <strong className="text-neutral-700 dark:text-neutral-300 font-medium">Offline maps</strong> → <strong className="text-neutral-700 dark:text-neutral-300 font-medium">Select your own map</strong>.</span> },
              { n: "2", text: <span>Zoom into the first city you'll visit. Download it and name it clearly — e.g. <strong className="text-neutral-700 dark:text-neutral-300 font-medium">"Istanbul"</strong>.</span> },
              { n: "3", text: <span>If you're continuing to another region (Cappadocia, Antalya), repeat for each and name them separately. No hunting mid-trip.</span> },
              { n: "4", text: <span>Offline maps expire after 30 days — download fresh before every trip (Also note that large files take time on slow airport Wi-Fi).</span> },
            ]} />
          </div>
        </StepCard>

        {/* 2. eSIM */}
        <StepCard number="2" color="gold">
          <StepHeader title="Get your eSIM ready" tagline="Land and get connected right away" />
          <div className="px-7 pb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-3">
            <p>
              This is the step that makes the biggest difference when you land. Instead of
              standing in arrivals hunting for a SIM kiosk, you activate your data in seconds.
            </p>
            <p>
              My go-to is{" "}
              <a
                href="https://www.airalo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 font-medium border-b border-teal-200 dark:border-teal-800 hover:border-teal-500 transition-colors"
              >
                Airalo ↗
              </a>{" "}
              — buy the pack before you fly, install the eSIM at the gate, then toggle it on
              when you land. Most of the time Airalo works out cheaper than airport SIM counters
              or renting a pocket Wi-Fi router.
            </p>
            <p>
              If you're buying a physical SIM or Wi-Fi router at the airport:
              Do the research now, while you have reliable Wi-Fi. Check which provider has
              the best coverage and compare data rates.
            </p>
          </div>
        </StepCard>

        {/* 3. Itinerary */}
        <StepCard number="3" color="blue">
          <StepHeader title="Keep your itinerary offline" tagline="Airport Wi-Fi is chaos — plan for it" />
          <div className="px-7 pb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-3">
            <p>
              I keep a dedicated Google Drive folder for every trip. Before I board, I make
              sure everything critical is available offline — no internet needed.
            </p>
            <p>
              My trip folder includes:
            </p>
            <p>
              Itinerary doc (day-by-day plan with addresses of the accommodations and activities)
            </p>
            <p>
              Tour tickets & QR codes
            </p>
            <p>
              Boarding passes (downloaded to Wallet too)
            </p>
            <p>
              Visa / entry docs if required
            </p>
            <p>
              In Google Drive, open each doc → tap the three-dot menu → toggle{" "}
              <strong className="text-neutral-700 dark:text-neutral-300 font-medium">Make available offline</strong>.
              Do this on your phone <em>before</em> you board, not in the air.
            </p>
          </div>
        </StepCard>

        {/* 4. First day */}
        <StepCard number="4" color="orange">
          <StepHeader title="Plan your first day" tagline="Decision fatigue after travel is real" />
          <div className="px-7 pb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-3">
            <p>
              When you land jet-lagged and disoriented, even "where should we eat?" can feel
              overwhelming. Decide three things before you board:
            </p>
            <p>
              <strong>First meal.</strong> Look up one place near your accommodation, save it to Google Maps. Done.
            </p>
            <p>
              <strong>Airport transport.</strong> Train, bus, taxi, or rideshare? Know the route and rough cost — scammers target people who look lost.
            </p>
            <p>
              <strong>One afternoon stop.</strong> If you have energy, where will you go first? Leaving it open usually means doing nothing.
            </p>
          </div>
        </StepCard>

        {/* 5. Stay details */}
        <StepCard number="5" color="purple">
          <StepHeader title="Confirm stay details" tagline="Don't assume — verify while you still have Wi-Fi" />
          <div className="px-7 pb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-3">
            <p>
              Pull up your booking confirmation and double-check three things:{" "}
              <strong className="text-neutral-700 dark:text-neutral-300 font-medium">the exact address</strong>,{" "}
              <strong className="text-neutral-700 dark:text-neutral-300 font-medium">check-in time</strong>, and{" "}
              <strong className="text-neutral-700 dark:text-neutral-300 font-medium">special instructions</strong>{" "}
              like a lockbox code or specific entrance.
            </p>
            <p>Save the address as a pin in your offline map so you can navigate there with no signal.</p>
            <NoteBox color="green">
              <strong className="font-medium text-green-800 dark:text-green-300">Screenshot it all.</strong>{" "}
              Booking reference, host/reception contact number, and the address. A screenshot
              costs nothing and has saved me from real stress more than once.
            </NoteBox>
          </div>
        </StepCard>

        {/* 6. Share itinerary */}
        <StepCard number="6" color="teal">
          <StepHeader title="Share your itinerary" tagline="Just in case" />
          <div className="px-7 pb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-3">
            <p>
              Always send a copy to someone who isn't on the trip — a parent, a close friend,
              a partner staying home. Flight details, accommodation addresses, a contact number
              for your accommodations.
            </p>
            <p>
              You'll hopefully never need them to use it. But knowing someone has it gives
              you (and them) real peace of mind.
            </p>
          </div>
        </StepCard>

        {/* 7. World clocks */}
        <StepCard number="7" color="gold">
          <StepHeader title="Add world clocks" tagline="Especially useful if you're working across time zones" />
          <div className="px-7 pb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-3">
            <p>
              On iPhone: <strong className="text-neutral-700 dark:text-neutral-300 font-medium">Clock app → World Clock → "+"</strong>.
              On Android: <strong className="text-neutral-700 dark:text-neutral-300 font-medium">Clock app → Add city</strong>.
              Add your home city and destination — check at a glance without mental arithmetic at 6am.
            </p>
            <p>
              If you're on calls or working remotely, also add your colleagues' time zones.
              You don't want to accidentally schedule a meeting at 11pm local time.
            </p>
          </div>
        </StepCard>

      </div>

      {/* ── Closing ── */}
      <div className="mt-14 pt-10 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
        <p className="font-serif italic text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          None of this takes more than 20–30 minutes. You're sitting at the gate anyway —
          might as well use it. The version of you that lands tired, hungry, and slightly
          disoriented will be genuinely grateful you did this.
        </p>
        <p className="font-serif italic text-lg text-neutral-600 dark:text-neutral-400">Safe travels. ✈️</p>
        <p className="text-sm text-neutral-400">— Dee</p>
      </div>

    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

type Color = "teal" | "gold" | "blue" | "orange" | "purple" | "green";

const colorMap: Record<Color, { card: string; number: string }> = {
  teal:   { card: "hover:shadow-teal-100 dark:hover:shadow-none",   number: "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400" },
  gold:   { card: "hover:shadow-amber-100 dark:hover:shadow-none",  number: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400" },
  blue:   { card: "hover:shadow-blue-100 dark:hover:shadow-none",   number: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400" },
  orange: { card: "hover:shadow-orange-100 dark:hover:shadow-none", number: "bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400" },
  purple: { card: "hover:shadow-purple-100 dark:hover:shadow-none", number: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400" },
  green:  { card: "hover:shadow-green-100 dark:hover:shadow-none",  number: "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400" },
};

function StepCard({ number, color, children }: { number: string; color: Color; children: React.ReactNode }) {
  const c = colorMap[color];
  return (
    <article className={`border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 overflow-hidden transition-shadow duration-200 hover:shadow-lg ${c.card}`}>
      <div className="flex items-start gap-4 pt-6 px-7 pb-5">
        <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium mt-0.5 ${c.number}`}>
          {number}
        </div>
        {children}
      </div>
    </article>
  );
}

function StepHeader({ icon, title, tagline }: { icon?: string; title: string; tagline: string }) {
  return (
    <div className="flex-1 -mt-1">
      {icon ? <div className="text-lg mb-0.5">{icon}</div> : null}
      <h2 className="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">{title}</h2>
      <p className="text-xs italic text-neutral-400 mt-0.5">{tagline}</p>
    </div>
  );
}

const howToColorMap: Record<Color, string> = {
  teal:   "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800",
  gold:   "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
  blue:   "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
  orange: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
  purple: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
  green:  "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
};

const numBadgeMap: Record<Color, string> = {
  teal:   "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
  gold:   "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
  blue:   "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
  orange: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
  purple: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
  green:  "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300",
};

function HowToBox({ color, steps }: { color: Color; steps: { n: string; text: React.ReactNode }[] }) {
  return (
    <div className={`rounded-lg border p-4 ${howToColorMap[color]}`}>
      <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-3">How to do it</p>
      <div className="space-y-2.5">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center mt-0.5 ${numBadgeMap[color]}`}>
              {s.n}
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const noteColorMap: Record<string, string> = {
  gold:  "bg-amber-50 dark:bg-amber-950/30 border-l-amber-500 text-amber-800 dark:text-amber-200",
  green: "bg-green-50 dark:bg-green-950/30 border-l-green-500 text-green-800 dark:text-green-200",
};

function NoteBox({ color, children }: { color: "gold" | "green"; children: React.ReactNode }) {
  return (
    <div className={`border-l-4 rounded-r-lg px-4 py-3 text-sm leading-relaxed ${noteColorMap[color]}`}>
      {children}
    </div>
  );
}

function TipChip({ text }: { text: string }) {
  return (
    <div className="inline-flex items-start gap-2 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-xs font-medium px-3 py-2 rounded-full leading-relaxed">
      <span className="mt-px">💡</span>
      <span>{text}</span>
    </div>
  );
}
