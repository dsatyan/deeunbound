export default function GateHabits() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <span className="mb-5 inline-block rounded-sm border border-amber-700 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-700">
        Travel Essentials
      </span>

      <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] md:text-5xl">
        What I Do at the Airport Gate That Saves Me Hours Later
      </h1>

      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-neutral-700">
        The most underrated part of travel? Before boarding, I treat gate time
        like a &quot;setup phase&quot; instead of dead time. Future-me always
        thanks me for this.
      </p>

      <div className="flex items-center gap-4 border-b border-[var(--border)] pb-8 text-xs text-[var(--muted)]">
        <span>By Dee</span>
        <span className="h-1 w-1 rounded-full bg-neutral-400" />
        <span>7 min read</span>
        <span className="h-1 w-1 rounded-full bg-neutral-400" />
        <span>Updated Mar 22 2026</span>
      </div>

      <div className="mt-10 space-y-8">
        <StepCard number="1" color="teal">
          <StepHeader
            title="Download maps offline"
            tagline="Never get stuck searching for directions without signal"
          />
          <div className="space-y-3 px-7 pb-7 text-sm leading-relaxed text-neutral-700">
            <p>
              Google Maps offline is a lifesaver, especially when you land
              without signal or don&apos;t want to burn through roaming data.
              The key is to download by area, not just the country, so the file
              size stays manageable and searches stay fast.
            </p>

            <HowToBox
              color="teal"
              steps={[
                {
                  n: "1",
                  text: (
                    <span>
                      Open Google Maps → tap your profile photo →{" "}
                      <strong>Offline maps</strong> →{" "}
                      <strong>Select your own map</strong>.
                    </span>
                  ),
                },
                {
                  n: "2",
                  text: (
                    <span>
                      Zoom into the first city you&apos;ll visit. Download it
                      and name it clearly, for example <strong>Istanbul</strong>.
                    </span>
                  ),
                },
                {
                  n: "3",
                  text: (
                    <span>
                      If you&apos;re continuing to another region, repeat for
                      each one and name them separately.
                    </span>
                  ),
                },
                {
                  n: "4",
                  text: (
                    <span>
                      Offline maps expire after 30 days, so download them fresh
                      before every trip.
                    </span>
                  ),
                },
              ]}
            />
          </div>
        </StepCard>

        <StepCard number="2" color="gold">
          <StepHeader
            title="Get your eSIM ready"
            tagline="Land and get connected right away"
          />
          <div className="space-y-3 px-7 pb-7 text-sm leading-relaxed text-neutral-700">
            <p>
              This is the step that makes the biggest difference when you land.
              Instead of standing in arrivals hunting for a SIM kiosk, you can
              have data working in seconds.
            </p>
            <p>
              My go-to is{" "}
              <a
                href="https://www.airalo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-4"
              >
                Airalo
              </a>
              . Buy the pack before you fly, install the eSIM at the gate, and
              switch it on once you land.
            </p>
            <p>
              If you&apos;re planning to buy a physical SIM or Wi-Fi router at
              the airport, do the research now while you still have reliable
              internet. Compare providers, coverage, and prices before you land.
            </p>
          </div>
        </StepCard>

        <StepCard number="3" color="blue">
          <StepHeader
            title="Keep your itinerary offline"
            tagline="Airport Wi-Fi is chaos, plan for it"
          />
          <div className="space-y-3 px-7 pb-7 text-sm leading-relaxed text-neutral-700">
            <p>
              I keep a dedicated Google Drive folder for every trip. Before I
              board, I make sure everything critical is available offline, no
              internet needed.
            </p>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-700">
                My trip folder includes
              </p>
              <ul className="space-y-2 text-sm text-blue-900">
                <li>• Day-by-day itinerary with addresses</li>
                <li>• Hotel details and check-in instructions</li>
                <li>• Tour tickets and QR codes</li>
                <li>• Boarding passes</li>
                <li>• Visa or entry documents</li>
              </ul>
            </div>

            <p>
              In Google Drive, open each document, tap the three-dot menu, and
              toggle <strong>Make available offline</strong>. Do it before
              boarding, not while scrambling after landing.
            </p>
          </div>
        </StepCard>

        <StepCard number="4" color="orange">
          <StepHeader
            title="Plan your first day"
            tagline="Decision fatigue after travel is real"
          />
          <div className="space-y-3 px-7 pb-7 text-sm leading-relaxed text-neutral-700">
            <p>
              When you land tired and disoriented, even simple decisions can
              feel weirdly heavy. I try to decide three things before I board.
            </p>

            <HowToBox
              color="orange"
              steps={[
                {
                  n: "1",
                  text: (
                    <span>
                      <strong>First meal.</strong> Pick one place near your
                      accommodation and save it.
                    </span>
                  ),
                },
                {
                  n: "2",
                  text: (
                    <span>
                      <strong>Airport transport.</strong> Know whether you are
                      taking a train, bus, taxi, or rideshare.
                    </span>
                  ),
                },
                {
                  n: "3",
                  text: (
                    <span>
                      <strong>One first stop.</strong> If you have energy, know
                      where you want to go first.
                    </span>
                  ),
                },
              ]}
            />
          </div>
        </StepCard>

        <StepCard number="5" color="purple">
          <StepHeader
            title="Confirm stay details"
            tagline="Don’t assume — verify while you still have Wi-Fi"
          />
          <div className="space-y-3 px-7 pb-7 text-sm leading-relaxed text-neutral-700">
            <p>
              Pull up your booking confirmation and double-check the exact
              address, the check-in time, and any special instructions like a
              lockbox code or alternate entrance.
            </p>
            <p>
              Save the address in your offline map too, so you can navigate
              there even without signal.
            </p>

            <NoteBox color="green">
              <strong>Screenshot everything.</strong> Booking reference, host
              contact, address, and check-in instructions. Screenshots are ugly
              but reliable.
            </NoteBox>
          </div>
        </StepCard>

        <StepCard number="6" color="teal">
          <StepHeader title="Share your itinerary" tagline="Just in case" />
          <div className="space-y-3 px-7 pb-7 text-sm leading-relaxed text-neutral-700">
            <p>
              Always send your itinerary to at least one person who is not on
              the trip. Include your flight details, accommodation addresses,
              and a way to reach you.
            </p>
            <p>
              Hopefully nobody ever needs to use it, but it is one of those
              tiny things that gives everyone more peace of mind.
            </p>
          </div>
        </StepCard>

        <StepCard number="7" color="gold">
          <StepHeader
            title="Add world clocks"
            tagline="Especially useful if you're working across time zones"
          />
          <div className="space-y-3 px-7 pb-7 text-sm leading-relaxed text-neutral-700">
            <p>
              Add your home city and destination city to your world clock app.
              It saves you from doing tired timezone math when you land.
            </p>
            <p>
              If you are traveling while working, also add your teammates&apos;
              time zones so you don&apos;t accidentally schedule something at a
              ridiculous hour.
            </p>
          </div>
        </StepCard>
      </div>

      <div className="mt-14 space-y-4 border-t border-[var(--border)] pt-10">
        <p className="font-serif text-lg italic leading-relaxed text-neutral-700">
          None of this takes more than 20 to 30 minutes. You&apos;re sitting at
          the gate anyway — might as well use it well.
        </p>
        <p className="font-serif text-lg italic text-neutral-700">
          Safe travels. ✈️
        </p>
        <p className="text-sm text-[var(--muted)]">— Dee</p>
      </div>
    </main>
  );
}

type Color = "teal" | "gold" | "blue" | "orange" | "purple" | "green";

const colorMap: Record<Color, { badge: string }> = {
  teal: { badge: "bg-teal-100 text-teal-700" },
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
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start gap-4 px-7 pb-5 pt-6">
        <div
          className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium ${c.badge}`}
        >
          {number}
        </div>
        {children}
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
    <div className="flex-1">
      <h2 className="font-serif text-2xl font-semibold leading-snug text-[var(--text)]">
        {title}
      </h2>
      <p className="mt-1 text-sm italic text-[var(--muted)]">{tagline}</p>
    </div>
  );
}

const howToColorMap: Record<Color, string> = {
  teal: "bg-teal-50 border-teal-200",
  gold: "bg-amber-50 border-amber-200",
  blue: "bg-blue-50 border-blue-200",
  orange: "bg-orange-50 border-orange-200",
  purple: "bg-purple-50 border-purple-200",
  green: "bg-green-50 border-green-200",
};

const numBadgeMap: Record<Color, string> = {
  teal: "bg-teal-100 text-teal-700",
  gold: "bg-amber-100 text-amber-700",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-700",
  purple: "bg-purple-100 text-purple-700",
  green: "bg-green-100 text-green-700",
};

function HowToBox({
  color,
  steps,
}: {
  color: Color;
  steps: { n: string; text: React.ReactNode }[];
}) {
  return (
    <div className={`rounded-xl border p-5 ${howToColorMap[color]}`}>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
        How to do it
      </p>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium ${numBadgeMap[color]}`}
            >
              {step.n}
            </span>
            <span className="leading-relaxed text-neutral-700">
              {step.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const noteColorMap: Record<"gold" | "green", string> = {
  gold: "bg-amber-50 border-l-4 border-amber-500 text-amber-900",
  green: "bg-green-50 border-l-4 border-green-500 text-green-900",
};

function NoteBox({
  color,
  children,
}: {
  color: "gold" | "green";
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-r-xl px-4 py-3 text-sm leading-relaxed ${noteColorMap[color]}`}>
      {children}
    </div>
  );
}