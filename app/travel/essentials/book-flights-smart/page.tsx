// app/travel/essentials/book-flights-smart/page.tsx
import PageShell from "@/components/page-shell";

export const postMeta = {
  title: "How to Book Flights Smart (Save $1000+ Without Stress)",
  description:
    "Seven things I do every time I book a flight - from price locks to seat strategy to the LATAM pricing trick that still works.",
  emoji: "✈️",
  readingTime: "9 min read",
  tags: ["flights", "planning", "money"],
};

export default function BookFlightsSmartPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "Book Flights Smart" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          How to Book Flights Smart (Save $1000+ Without Stress)
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          Flight booking is one of those things where knowing a handful of non-obvious
          things makes a real difference. Not hacks, not loopholes - just the kind of
          information you accumulate after booking dozens of international flights and
          occasionally getting burned.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>9 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Updated 2025</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          Most of these things take under five minutes. The one about checking two
          different airline websites for the same flight once saved me over $400.
          None of it requires a points obsession or a spreadsheet.
        </blockquote>

        <div className="mt-14 space-y-8">

          {/* ── Step 1: Google Flights Date Grid ── */}
          <StepCard number="1" color="teal">
            <StepHeader
              title="Start with Google Flights - use the date grid"
              tagline="Most people search one date. The date grid shows you everything at once."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Before you go anywhere near an airline website, open{" "}
                <a
                  href="https://flights.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  Google Flights
                </a>{" "}
                and enter your route. Then click the calendar icon to switch to the{" "}
                <strong className="text-[var(--text)] font-medium">date grid view</strong>.
                You'll see a full month of prices at a glance - the cheapest days are
                highlighted in green.
              </p>
              <p>
                Flying Tuesday or Wednesday instead of Friday on the same route
                can save $100–300 on international flights. The grid makes this
                obvious in seconds instead of you having to check dates one by one.
              </p>
              <NoteBox>
                Google Flights is a search tool, not a booking site. Use it to find
                the best fare and the best airline - then take that information
                directly to the airline's website to actually book. More on why below.
              </NoteBox>
            </div>
          </StepCard>

          {/* ── Step 2: Price Lock ── */}
          <StepCard number="2" color="gold">
            <StepHeader
              title="Use price lock when you're not ready to commit"
              tagline="Around holidays, prices can spike by hundreds of dollars overnight."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Found a good fare but need a day or two to confirm plans, check
                with travel companions, or just think? Most people either book
                immediately out of fear or wait and watch the price jump. There's
                a third option: price lock.
              </p>
              <p>
                Several airlines let you hold a fare for a small fee - typically
                $5–15 - while you decide. You're paying for the insurance that
                the price won't change on you.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full rounded-xl border border-[var(--border)] text-sm">
                  <thead>
                    <tr className="bg-[var(--surface)] text-left text-xs uppercase tracking-widest text-[var(--muted)]">
                      <th className="px-5 py-3 font-medium">Airline / Service</th>
                      <th className="px-5 py-3 font-medium">Hold period</th>
                      <th className="px-5 py-3 font-medium">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {[
                      ["United FareLock", "3, 7, or 14 days", "~$10–20"],
                      ["Qatar Airways", "72 hours", "Small fee"],
                      ["Copa Airlines", "3 or 7 days", "Small fee"],
                      ["Aer Lingus", "24 hours", "Small deposit"],
                      ["Any airline (US flights)", "24 hours FREE", "No charge - US law"],
                      ["Hopper / Kiwi.com", "Up to 72 hours", "~10% of ticket"],
                    ].map(([airline, period, fee]) => (
                      <tr key={airline} className="text-neutral-700">
                        <td className="px-5 py-3 font-medium text-[var(--text)]">{airline}</td>
                        <td className="px-5 py-3">{period}</td>
                        <td className="px-5 py-3">{fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <NoteBox>
                <strong>US law protects you for free:</strong> For any flight
                booked at least 7 days in advance, US airlines must either let
                you hold the fare for 24 hours at no charge, or allow free
                cancellation within 24 hours of purchase. Most people don't
                know this. If you see a good fare, book it - you have 24 hours
                to change your mind at no cost.
              </NoteBox>
            </div>
          </StepCard>

          {/* ── Step 3: Book Directly ── */}
          <StepCard number="3" color="blue">
            <StepHeader
              title="Always book directly on the airline's website"
              tagline="When something goes wrong, the difference is enormous."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Use Expedia, Kayak, Skyscanner to compare and find the fare.
                Then go directly to the airline's website to actually book it.
                Prices are almost always identical - but what happens when
                things go wrong is completely different.
              </p>

              {/* Personal story */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  What happened to me
                </p>
                <p className="text-base leading-7 text-neutral-700">
                  I once booked a flight to Peru directly on the airline's website.
                  We got to the airport and found out the flight had been cancelled -
                  no prior notice. Because we'd booked directly, the airline's own
                  staff were right there to deal with it. They pulled up our
                  booking, apologized, and moved us onto an American Airlines
                  flight leaving a few hours later. Sorted within 20 minutes.
                </p>
                <p className="mt-3 text-base leading-7 text-neutral-700">
                  Others at the same counter had booked through a third-party app.
                  The airline wouldn't touch their reservations - "you need to call
                  Expedia." Expedia's hold times were over an hour. The airline
                  staff couldn't override anything for them. Some of them missed
                  their rebooked flight while they were still on hold.
                </p>
                <p className="mt-3 text-sm italic text-[var(--muted)]">
                  The price was the same. The direct booking cost nothing extra
                  and saved us an entire travel day.
                </p>
              </div>

              <p>
                Beyond emergencies, direct booking also means: easier seat changes,
                direct communication about schedule changes, full access to your
                loyalty account, and no OTA-imposed change fees on top of airline fees.
              </p>
            </div>
          </StepCard>

          {/* ── Step 4: Seat Selection ── */}
          <StepCard number="4" color="orange">
            <StepHeader
              title="Seat selection matters more than most people realize"
              tagline="Two tools make this easy: SeatGuru and windowseat.aero"
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                A bad seat can make a long flight genuinely miserable. The difference
                between knowing where to sit and just accepting whatever the system
                assigns you is real.
              </p>

              <h3 className="font-serif text-xl font-semibold text-[var(--text)]">
                Avoid the toilet and galley
              </h3>
              <p>
                Seats near the bathrooms and galleys are consistently the noisiest
                on any aircraft - constant foot traffic, doors banging, crew
                activity. Before you pick a seat, go to{" "}
                <a
                  href="https://www.seatguru.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  SeatGuru.com
                </a>
                , enter your flight number, and it shows the exact seat map with
                color-coded warnings: yellow and red seats mark problem spots -
                no recline, blocked windows, proximity to toilets, narrower than
                standard. Free, takes 90 seconds.
              </p>

              <h3 className="font-serif text-xl font-semibold text-[var(--text)]">
                Front third of the cabin is quieter
              </h3>
              <p>
                On most aircraft, engines are under the wings. Sitting in front
                of the wings means you're in front of the engine noise. The rear
                of the cabin - especially just behind the wings - is noticeably
                louder. Front third of economy + away from the galley is the
                sweet spot for noise.
              </p>

              <h3 className="font-serif text-xl font-semibold text-[var(--text)]">
                Pick your side based on the scenery
              </h3>
              <p>
                This is the tip most people never think about. The side of the
                plane you sit on determines what you see out the window - and on
                certain routes, one side is dramatically better than the other.
                Flying into Queenstown? The left side faces The Remarkables. Flying
                into San Francisco from the east? The right side gets the bay.
              </p>
              <p>
                Use{" "}
                <a
                  href="https://windowseat.aero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  windowseat.aero
                </a>{" "}
                - enter your route and it tells you exactly which side to sit on
                and what you'll see. Takes 30 seconds and it's one of my favourite
                small pleasures of flight planning.
              </p>
            </div>
          </StepCard>

          {/* ── Step 5: Points ── */}
          <StepCard number="5" color="purple">
            <StepHeader
              title="Create an account and collect points - even if you fly rarely"
              tagline="Points don't expire as long as you have activity. They add up slowly and then suddenly."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Every time you fly without a frequent flyer number attached to your
                booking, you're leaving miles on the table permanently. Even if you
                only fly an airline once a year, create the account. It costs nothing
                and takes two minutes.
              </p>
              <p>
                On most programs, points stay active as long as you have any
                qualifying activity (a flight, a hotel stay with a partner, even
                a credit card purchase) within 18–24 months. You don't need to be
                a frequent flyer for this to matter.
              </p>
              <NoteBox>
                <strong>Where points are most valuable:</strong> Redeem miles for
                international business or first class when possible - that's where
                the value per point is highest. Using miles to save $80 on a
                domestic economy ticket is usually a poor trade. Save them for
                the long-haul redemption where a business class seat would otherwise
                cost $4,000–8,000 in cash.
              </NoteBox>
              <p>
                If you have a travel credit card with a signup bonus, check whether
                those points transfer to your airline's program. Many do. A single
                credit card signup bonus is often enough for a free international
                flight - which is a separate rabbit hole worth exploring when you're
                ready for it.
              </p>
            </div>
          </StepCard>

          {/* ── Step 6: LATAM ── */}
          <StepCard number="6" color="teal">
            <StepHeader
              title="Check the airline's local-market website - the price can be dramatically different"
              tagline="I found this while booking SFO → Lima. The same flight, the same airline, nearly twice the price."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Airlines use regional pricing - they show different fares depending
                on which country version of their website you're on. I discovered
                this firsthand while booking a flight from San Francisco to Lima on
                LATAM. On LATAM's US site (latam.com/us), the fares were
                significantly higher than what appeared on their Peru-facing site
                for the exact same flights.
              </p>
              <p>
                This isn't a secret or a hack - it's just how airline pricing works
                across markets. The same mechanism explains why a domestic flight
                within Peru or Chile booked on the local site can be 40–60% cheaper
                than the same flight booked from the US site. The price difference
                for international routes is usually smaller but still worth checking.
              </p>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5">
                <p className="mb-3 font-medium text-[var(--text)]">How to check LATAM specifically</p>
                <ol className="space-y-2 text-base leading-7 text-neutral-700">
                  {[
                    "Go to latamairlines.com - it'll default to the US version.",
                    "In the top right corner, change the country to your destination (e.g. Peru, Chile, Brazil).",
                    "Search the same route. Compare the price you see now to what the US site showed.",
                    "If the local site is cheaper and your credit card can process it without a foreign transaction fee - book there.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#dce7e6] text-xs font-medium text-teal-700">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <NoteBox>
                <strong>Important caveats:</strong> Some local fares on LATAM's Peru
                site are designated "resident only" - booking these as a non-resident
                can result in a penalty fee at the airport ($177+ in some reported
                cases). The non-resident fares on the local site are still usually
                cheaper than the US site and are fine to book. If you're unsure
                whether a fare is resident-only, call LATAM's local customer service
                line to confirm before buying. Also: US credit cards sometimes get
                declined on local Latin American airline sites - use a card with no
                foreign transaction fees and try a few times if the first attempt fails.
              </NoteBox>

              <p>
                This principle applies beyond LATAM - it's worth trying the local-market
                site for any airline based in the country you're flying to or within.
                The savings are most dramatic for domestic routes within that country,
                but also worth checking for international routes.
              </p>
            </div>
          </StepCard>

          {/* ── Step 7: Currency ── */}
          <StepCard number="7" color="gold">
            <StepHeader
              title="Pay in local currency - never let the airline convert for you"
              tagline="Dynamic Currency Conversion is a quiet way to lose money."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                When you're at the checkout page of a foreign airline's website
                and it offers to show you the price in USD - decline it. That
                offer is called Dynamic Currency Conversion, and the exchange rate
                the airline uses is almost always worse than what your credit card
                will charge.
              </p>
              <p>
                Always pay in the airline's local currency. Your card's network
                (Visa/Mastercard) applies a much better conversion rate than the
                airline's. The difference is typically 2–4%, which on a $1,000
                ticket is $20–40 you're handing over for nothing.
              </p>
              <p>
                The prerequisite: use a credit card with no foreign transaction
                fee. Most travel cards qualify - Chase Sapphire, Amex Platinum,
                Capital One Venture, and Charles Schwab's debit card all work.
                A foreign transaction fee (usually 3%) wipes out the local
                currency benefit entirely.
              </p>
            </div>
          </StepCard>

          {/* ── Step 8: Use your points ── */}
          <StepCard number="8" color="green">
            <StepHeader
              title="Check your credit card points before booking anything"
              tagline="Easy to forget. Occasionally covers the whole flight."
            />
            <div className="space-y-4 text-lg leading-8 text-neutral-700">
              <p>
                Before you enter your credit card details on the airline's website,
                check your points balance. Credit card travel portals (Chase, Amex,
                Capital One) let you book flights directly using accumulated points.
                If you've been putting regular spending on a travel card, the
                balance adds up faster than you realize.
              </p>
              <p>
                Also check whether your airline has a credit card partnership -
                most major airlines have co-branded cards with signup bonuses that
                are worth checking when you're planning a big trip. The signup
                bonus alone on many travel cards covers a round-trip international
                economy flight.
              </p>
              <NoteBox>
                If you have airline miles sitting in a loyalty account from past
                flights, log in and check the balance before booking. Miles don't
                earn interest - unused points are just value sitting idle.
              </NoteBox>
            </div>
          </StepCard>

        </div>

        {/* ── Quick Summary ── */}
        <section className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            The short version
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-[var(--text)]">
            What I actually do every time I book a flight
          </h2>
          <ol className="mt-5 space-y-3">
            {[
              "Open Google Flights, use the date grid to find the cheapest window around my dates.",
              "Check both the airline's US site and its local-market site for the destination country.",
              "Use a no-foreign-transaction-fee card. Pay in local currency. Decline DCC.",
              "Book directly on the airline's website - not a third-party app.",
              "If I'm not ready to commit, use the 24-hour free hold (US law) or pay for a price lock.",
              "Check SeatGuru for my flight's seat map. Pick a seat in the front third, away from toilets.",
              "Check windowseat.aero for which side has better views on my route.",
              "Add my frequent flyer number to the booking.",
              "Check my credit card points balance before paying.",
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

        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              None of this takes long. The date grid check is a minute. SeatGuru
              is 90 seconds. The local site comparison is two minutes. The total
              overhead on a flight booking, done properly, is maybe 15 minutes
              more than just searching and clicking buy - and it's a very good
              use of 15 minutes.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

// ── Shared components (matching gate-habits pattern) ─────────────────────────
type Color = "teal" | "gold" | "blue" | "orange" | "purple" | "green";

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

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
      {children}
    </div>
  );
}