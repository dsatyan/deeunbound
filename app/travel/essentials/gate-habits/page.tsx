import Link from "next/link";

export default function GateHabits() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
          <Link
            href="/"
            className="font-serif text-3xl italic tracking-tight text-[var(--text)]"
          >
            Dee Unbound
          </Link>

          <nav className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:text-sm">
            <Link href="/travel" className="hover:text-[var(--text)]">
              Travel
            </Link>
            <span>/</span>
            <Link href="/travel/essentials" className="hover:text-[var(--text)]">
              Essentials
            </Link>
            <span>/</span>
            <span className="text-[var(--text)]">Gate Habits</span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-8 py-20">
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--text)] md:text-7xl">
          What I Do at the Airport Gate That Saves Me Hours Later
        </h1>

        <p className="mt-10 max-w-5xl text-2xl leading-[1.7] text-neutral-700">
          The most underrated part of travel? The time you spend waiting at the
          gate. This is where I quietly set up my entire next 24 hours — so
          future-me can actually enjoy the trip.
        </p>

        <div className="mt-12 flex items-center gap-6 border-b border-[var(--border)] pb-12 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>7 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Updated 2025</span>
        </div>

        <blockquote className="mt-16 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-10 font-serif text-3xl italic leading-[1.6] text-[#5b4031]">
          Before boarding, I treat gate time like a &quot;setup phase&quot;
          instead of dead time. Future-me always thanks me for this.
        </blockquote>

        <section className="mt-14 space-y-10">
          <StepCard number="1" title="Download maps offline" tagline="Never get stuck searching for directions without signal">
            <p>
              Google Maps offline is a lifesaver, especially when you land
              without signal or don&apos;t want to burn through roaming data.
              The key is to download by area — not just the country — so the
              file stays manageable and searches stay fast.
            </p>

            <HowToBox
              steps={[
                <>
                  Open Google Maps → tap your profile photo →{" "}
                  <strong>Offline maps</strong> →{" "}
                  <strong>Select your own map</strong>.
                </>,
                <>
                  Zoom into the first city or region you&apos;ll visit.
                  Download it and give it a clear name — e.g.{" "}
                  <strong>&quot;Istanbul&quot;</strong>.
                </>,
                <>
                  If you&apos;re continuing to another region, repeat for each
                  one separately.
                </>,
                <>
                  Refresh these downloads before every trip so they do not
                  expire.
                </>,
              ]}
            />
          </StepCard>

          <StepCard number="2" title="Get your eSIM ready" tagline="Land and get connected right away">
            <p>
              This is the step that makes the biggest difference when you land.
              Instead of standing in arrivals and hunting for a SIM kiosk, you
              can have your data ready in seconds.
            </p>

            <p>
              Buy the eSIM before you fly, install it while waiting at the gate,
              and switch it on once you land.
            </p>

            <NoteBox>
              If you plan to buy a physical SIM or airport Wi-Fi router instead,
              do the comparison now while you still have reliable internet.
            </NoteBox>
          </StepCard>

          <StepCard number="3" title="Keep your itinerary offline" tagline="Airport Wi-Fi is chaos — plan for it">
            <p>
              I keep a dedicated folder for every trip. Before boarding, I make
              sure everything critical is available offline.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Day-by-day itinerary with addresses</li>
              <li>Hotel details and check-in instructions</li>
              <li>Tour tickets and QR codes</li>
              <li>Boarding passes</li>
              <li>Visa or entry documents</li>
            </ul>

            <p>
              Do this on your phone before boarding, not while scrambling after
              landing.
            </p>
          </StepCard>

          <StepCard number="4" title="Plan your first day" tagline="Decision fatigue after travel is real">
            <p>
              When you land tired and disoriented, even simple decisions can
              feel heavier than they should.
            </p>

            <HowToBox
              steps={[
                <>
                  <strong>First meal.</strong> Pick one place near your
                  accommodation and save it.
                </>,
                <>
                  <strong>Airport transport.</strong> Know whether you are
                  taking a train, bus, taxi, or rideshare.
                </>,
                <>
                  <strong>One first stop.</strong> If you have energy, know
                  where you want to go first.
                </>,
              ]}
            />
          </StepCard>

          <StepCard number="5" title="Confirm stay details" tagline="Don’t assume — verify while you still have Wi-Fi">
            <p>
              Double-check the exact address, check-in time, and any special
              instructions like a lockbox code or alternate entrance.
            </p>

            <p>
              Save the address in your offline map too, so you can navigate
              there even without signal.
            </p>

            <NoteBox>
              Screenshot everything: the booking reference, host contact,
              address, and check-in instructions.
            </NoteBox>
          </StepCard>

          <StepCard number="6" title="Share your itinerary" tagline="Just in case">
            <p>
              Always send your itinerary to at least one person who is not on
              the trip. Include flight details, accommodation addresses, and a
              way to reach you.
            </p>

            <p>
              Hopefully nobody ever needs it — but it gives everyone more peace
              of mind.
            </p>
          </StepCard>

          <StepCard number="7" title="Add world clocks" tagline="Especially useful if you’re working across time zones">
            <p>
              Add your home city and destination city to your world clock app.
              It saves you from doing tired timezone math after landing.
            </p>

            <p>
              If you are traveling while working, also add your teammates&apos;
              time zones so you do not accidentally schedule something at a
              ridiculous hour.
            </p>
          </StepCard>
        </section>

        <section className="mt-20 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-6 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              None of this takes more than 20-30 minutes. You&apos;re sitting at
              the gate anyway — might as well use it.
            </p>

            <p>
              The version of you that lands tired, hungry, and slightly
              disoriented will be genuinely grateful you did this.
            </p>

            <p className="mt-6">Safe travels ✈️</p>

            <p className="mt-2">— Dee</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-8 py-8 text-sm text-[var(--muted)]">
          <span>© Dee Unbound</span>
          <span>·</span>
          <Link href="/travel" className="underline hover:text-[var(--text)]">
            Travel
          </Link>
          <span>·</span>
          <Link
            href="/travel/essentials"
            className="underline hover:text-[var(--text)]"
          >
            Essentials
          </Link>
        </div>
      </footer>
    </div>
  );
}

function StepCard({
  number,
  title,
  tagline,
  children,
}: {
  number: string;
  title: string;
  tagline: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] px-10 py-10">
      <div className="flex items-start gap-6">
        <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-3xl font-medium text-teal-700">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[var(--text)]">
            {title}
          </h2>
          <p className="mt-2 text-2xl italic leading-relaxed text-[var(--muted)]">
            {tagline}
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-6 pl-[98px] text-[clamp(1.45rem,1.75vw,1.85rem)] leading-[1.8] text-neutral-700">
        {children}
      </div>
    </article>
  );
}

function HowToBox({ steps }: { steps: React.ReactNode[] }) {
  return (
    <div className="rounded-2xl border border-teal-700/60 bg-[#dfe5e4] px-8 py-8">
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
        How to do it
      </p>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-5">
            <span className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#cfe2e0] text-xl font-medium text-teal-700">
              {index + 1}
            </span>
            <div className="text-[clamp(1.35rem,1.6vw,1.6rem)] leading-[1.7] text-neutral-700">
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-6 py-5 text-[clamp(1.2rem,1.4vw,1.35rem)] leading-[1.7] text-[#5b4031]">
      {children}
    </div>
  );
}