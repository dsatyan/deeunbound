import PageShell from "@/components/page-shell";

export default function GateHabits() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "Gate Habits" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          What I Do at the Airport Gate That Saves Me Hours Later
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          The most underrated part of travel? The time you spend waiting at the
          gate. This is where I quietly set up my entire next 24 hours — so
          future-me can actually enjoy the trip.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>7 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Updated 2025</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          Before boarding, I treat gate time like a &quot;setup phase&quot;
          instead of dead time. Future-me always thanks me for this.
        </blockquote>

        <section className="mt-14 space-y-8">
          <StepCard number="1" color="teal">
            <StepHeader
              title="Download maps offline"
              tagline="Never get stuck searching for directions without signal"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
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
            </div>
          </StepCard>

          <StepCard number="2" color="gold">
            <StepHeader
              title="Get your eSIM ready"
              tagline="Land and get connected right away"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                This is the step that makes the biggest difference when you
                land. Instead of standing in arrivals and hunting for a SIM
                kiosk, you can have your data ready in seconds.
              </p>

              <p>
                Buy the eSIM before you fly, install it while waiting at the
                gate, and switch it on once you land.
              </p>

              <NoteBox>
                If you plan to buy a physical SIM or airport Wi-Fi router
                instead, do the comparison now while you still have reliable
                internet.
              </NoteBox>
            </div>
          </StepCard>

          <StepCard number="3" color="blue">
            <StepHeader
              title="Keep your itinerary offline"
              tagline="Do not rely on network everywhere — plan for it"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                I keep a dedicated Google drive folder for every trip. Before boarding, I
                make sure everything critical is available offline.
              </p>

              <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-neutral-700">
                <li>Day-by-day itinerary with accommodation addresses and contact details</li>
                <li>Hotel check-in instructions if any</li>
                <li>Tour tickets and QR codes</li>
                <li>Boarding passes</li>
                <li>Visa or entry documents</li>
              </ul>

              <HowToBox
                steps={[
                  <>
                    Open Google Drive → Click on ellipsis (...) 
                    of the files you wish to download 
                  </>,
                  <>
                    select <strong>Make Available Offline</strong>
                  </>,
                  <>
                    Toggle to airplane mode and verify if you have access to
                    the files
                  </>,
                ]}
              />
            </div>
          </StepCard>

          <StepCard number="4" color="orange">
            <StepHeader
              title="Plan your first day"
              tagline="Decision fatigue after travel is real"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
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
            </div>
          </StepCard>

          <StepCard number="5" color="purple">
            <StepHeader
              title="Save places in Google Maps"
              tagline="Helps to navigate efficiently"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Save places in Google Maps by searching for a location, 
                tapping <strong>Save</strong>, and adding it to a new or existing list eg: Paris-List
              </p>

              <p>
                Change the color and icon of saved lists to distinguish 
                between restaurants, hotels, and attractions.
              </p>

              <NoteBox>
                Google <strong>"My Maps"</strong>: 
                For more advanced planning, use Google My Maps to create custom maps with plotted points, 
                allowing you to draw lines and measure distances.
              </NoteBox>
            </div>
          </StepCard>

          <StepCard number="6" color="teal">
            <StepHeader title="Share your itinerary" tagline="Just in case" />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Always send your itinerary to at least one person who is not on
                the trip. Include flight details, accommodation addresses, and a
                way to reach you.
              </p>

              <p>
                Hopefully nobody ever needs it — but it gives everyone more
                peace of mind.
              </p>
            </div>
          </StepCard>

          <StepCard number="7" color="gold">
            <StepHeader
              title="Add world clocks"
              tagline="Especially useful if you’re working across time zones"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Add your home city and destination city to your world clock app.
                It saves you from doing tired timezone math after landing.
              </p>

              <p>
                If you are traveling while working, also add your
                teammates&apos; time zones so you do not accidentally schedule
                something at a ridiculous hour.
              </p>
            </div>
          </StepCard>
        </section>

        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              None of this takes more than 20–30 minutes. You&apos;re sitting at
              the gate anyway — might as well use it.
            </p>

            <p>
              The version of you that lands tired, hungry, and slightly
              disoriented will be genuinely grateful you did this.
            </p>

            <p>Safe travels ✈️</p>

            <p>— Dee</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

type Color = "teal" | "gold" | "blue" | "orange" | "purple" | "green";

const colorMap: Record<Color, { badge: string }> = {
  teal: { badge: "bg-[#dce7e6] text-teal-700" },
  gold: { badge: "bg-amber-100 text-amber-700" },
  blue: { badge: "bg-blue-100 text-blue-700" },
  orange: { badge: "bg-orange-100 text-orange-700" },
  purple: { badge: "bg-purple-100 text-purple-700" },
  green: { badge: "bg-green-100 text-green-700" },
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

function StepHeader({
  title,
  tagline,
}: {
  title: string;
  tagline: string;
}) {
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
