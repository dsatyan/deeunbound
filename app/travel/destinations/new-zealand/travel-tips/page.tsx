// app/travel/destinations/new-zealand/travel-tips/page.tsx
import PageShell from "@/components/page-shell";

export default function NZTravelTipsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "New Zealand", href: "/travel/destinations/new-zealand" },
        { label: "Travel Tips" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          New Zealand · Travel Tips
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          New Zealand Travel Tips — Things I Wish I'd Known Before Going
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          Practical, honest tips from a two-week South + North Island road trip.
          Not the obvious stuff — the things that actually caught me off guard,
          saved money, or made the trip smoother.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>10 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>December 2025 trip</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          New Zealand is one of those places where the planning pays off
          more than almost anywhere else — because the distances are real,
          the bookings fill up, and the small-town surprises are genuinely
          the best part.
        </blockquote>

        <div className="mt-14 space-y-6">

          {/* ── Before You Go ── */}
          <SectionHeader emoji="📋" title="Before you go" />

          <TipCard number="1" color="blue" title="Get your NZeTA sorted before you book anything else">
            <p>
              Indian passport holders need a New Zealand Electronic Travel
              Authority (NZeTA) to enter — it's not a visa, but it's required.
              Apply at{" "}
              <a href="https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta"
                target="_blank" rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2">
                immigration.govt.nz
              </a>{" "}
              online or through the NZeTA app. Processing is usually within 72
              hours but give it a week. It costs NZD ~$17 and is valid for two
              years once granted. Do this before you book flights — you don't
              want to discover you have an issue after you've already committed.
            </p>
          </TipCard>

          <TipCard number="2" color="orange" title="Book campervans as early as you possibly can">
            <p>
              If you're planning a campervan road trip — especially on the South
              Island in December/January — book as soon as your dates are fixed.
              Good campervans from reputable operators like Jucy, Britz, or
              Wilderness sell out months ahead in peak summer season. Waiting
              until a few weeks out means you'll either pay a premium or not find
              what you want. This is not like booking a hotel. Treat it like
              booking a flight.
            </p>
          </TipCard>

          {/* ── Getting Around ── */}
          <SectionHeader emoji="🚗" title="Getting around" />

          <TipCard number="3" color="teal" title="Drive on the left — and watch for one-lane bridges">
            <p>
              If you're coming from the US or India, you'll be driving on the
              left. Most people adapt within a day. The trickier adjustment is
              one-lane bridges, which are extremely common in NZ, especially on
              the South Island. There are signs at each end indicating which
              direction has right of way — always check before crossing, or you'll
              get honked at (or worse). Also add significant buffer to any Google
              Maps estimate: winding roads, photo stops, and sheep crossing add
              time.
            </p>
          </TipCard>

          <TipCard number="4" color="red" title="Speed cameras are automatic — and the fine follows you home">
            <p>
              New Zealand's speed cameras are everywhere and fully automated.
              From late 2025, fines are issued digitally within hours of the
              offence — no police stop, no warning. The camera reads the plate,
              the notice goes to the registered owner (your rental company), and
              they charge your credit card. On top of the speeding fine (which
              can reach NZD $1,000 for serious breaches), rental companies add
              an admin fee for processing the transfer.
            </p>
            <p className="mt-3">
              The tolerance is tight — fines can be issued for as little as 4
              km/h over the limit during holiday periods. The roads are scenic
              and beautiful. Drive slow enough to actually see them.
            </p>
            <NoteBox>
              The same applies to parking fines. Paid parking is enforced and
              fines are issued to the registered owner — again passed on by the
              rental company to your card. Always check meters and time limits.
            </NoteBox>
          </TipCard>

          <TipCard number="5" color="gold" title="Skip renting a car in central Auckland">
            <p>
              If you're staying in the CBD or Viaduct area, don't bother renting
              a car for Auckland itself. Parking is expensive, annoying to find,
              and parking buildings in the CBD charge significant overnight rates.
              Use public transport, rideshare, or walk — Auckland's waterfront
              area is very walkable. Pick up your rental car when you're actually
              leaving Auckland.
            </p>
          </TipCard>

          <TipCard number="6" color="orange" title="Taking your car on a ferry is expensive — plan for it">
            <p>
              The Interislander or Bluebridge ferry between Wellington and Picton
              (North to South Island or vice versa) costs roughly NZD $200+ per
              vehicle one way. If you're renting a car, check whether your rental
              company allows inter-island travel — not all do. Some require you
              to drop the car in Wellington and pick up a new one in Picton.
            </p>
            <p className="mt-3">
              Closer to home: the ferry from Auckland to Waiheke Island costs
              around NZD $200 one way per car. For a day trip, that's a lot. Consider
              going as a foot passenger and renting a car or e-bike on Waiheke
              instead — it works out cheaper and less stressful.
            </p>
          </TipCard>

          {/* ── Flights ── */}
          <SectionHeader emoji="✈️" title="Domestic flights" />

          <TipCard number="7" color="purple" title="Domestic carry-on is 7kg — and they weigh it at the gate">
            <p>
              Air New Zealand's economy carry-on allowance is 7kg including your
              personal item. On domestic flights especially, they weigh bags
              right before boarding at the gate. Not at check-in — at the gate.
              So you can't sweet-talk your way through with an overweight bag
              that slipped past check-in.
            </p>
            <p className="mt-3">
              The 7kg total includes everything you carry on — your backpack, your
              duty-free bag from the airport shops, your jacket stuffed with things.
              If you've been shopping and you're heading home via a domestic
              connection, be ruthless. Redistribute into your checked bag before
              the domestic leg.
            </p>
          </TipCard>

          {/* ── Money ── */}
          <SectionHeader emoji="💰" title="Money" />

          <TipCard number="8" color="teal" title="Don't tip — and don't feel awkward about it">
            <p>
              Tipping is not customary in New Zealand. Hospitality staff are paid
              a living wage — NZ's minimum wage is around NZD $23/hour — so they
              don't depend on tips the way US service workers do. Most Kiwis
              don't tip and won't expect you to.
            </p>
            <p className="mt-3">
              Some EFTPOS machines will offer a tip option, and some cafés have
              tip jars. You can leave something for exceptional service if you
              want to — it'll be genuinely appreciated. But don't budget for tips
              the way you would in the US, and don't feel rude for not leaving one.
            </p>
            <NoteBox>
              One exception: on public holidays, many cafes and restaurants add a
              10–15% surcharge to cover the higher wages legally required for
              holiday work. This is shown on your bill and is not a tip — it's
              mandatory for the business.
            </NoteBox>
          </TipCard>

          <TipCard number="9" color="blue" title="NZ is nearly cashless — card works almost everywhere">
            <p>
              New Zealand runs on EFTPOS (card payments) for almost everything.
              Most places — including small cafes, markets, and parking meters —
              accept card. You won't need much cash, but carry a small amount for
              farmers markets, roadside stalls, and DOC huts in very remote areas.
              Use a no-foreign-transaction-fee card and always pay in NZD (not USD)
              when given the choice.
            </p>
          </TipCard>

          {/* ── Food and Souvenirs ── */}
          <SectionHeader emoji="🛍️" title="Food, drink & souvenirs" />

          <TipCard number="10" color="gold" title="Don't buy souvenirs in Auckland — wait for the smaller towns">
            <p>
              Auckland's souvenir shops are tourist-priced and often generic.
              The best places to buy things that are actually made in New Zealand:
              Geraldine (South Island), Hokitika (greenstone and jade), Wānaka,
              and any small town market you pass through. You'll find better
              quality, more interesting pieces, and friendlier prices than the
              big Auckland tourist shops.
            </p>
            <p className="mt-3">
              Exception: Auckland Airport is genuinely good for last-minute
              shopping. Whittaker's chocolate (a NZ institution), merino wool
              products from Icebreaker or similar, and pounamu (greenstone/jade)
              jewelry are all well-represented and decent value compared to
              downtown Auckland shops.
            </p>
          </TipCard>

          <TipCard number="11" color="teal" title="Things you must try">
            <div className="space-y-3">
              {[
                {
                  item: "Real fruit ice cream",
                  note: "A NZ thing — fruit blended with ice cream in a soft serve style. Found at roadside stalls, especially on the South Island. Non-negotiable.",
                },
                {
                  item: "Marlborough wines",
                  note: "The Marlborough region produces some of the world's best Sauvignon Blanc. If you're not going to Marlborough, you can still find them at restaurants and bottle shops everywhere.",
                },
                {
                  item: "Vegetable pie",
                  note: "NZ is pie country. Most bakeries and dairies (corner shops) sell pies. As a vegetarian, the vegetable or pumpkin pie is your friend — genuinely good, and NZD $5–7. Miles Better Pies in Te Anau is excellent.",
                },
                {
                  item: "Flat white",
                  note: "NZ (and Australia) invented the flat white. Coffee culture is excellent even in small towns. Don't order a 'latte' if you want something strong.",
                },
                {
                  item: "Kapiti ice cream",
                  note: "A premium NZ ice cream brand sold in supermarkets and some cafes. The salted caramel and boysenberry flavors are worth seeking out.",
                },
              ].map((food) => (
                <div key={food.item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                  <div className="text-base leading-7 text-neutral-700">
                    <span className="font-medium text-[var(--text)]">{food.item}:</span>{" "}
                    {food.note}
                  </div>
                </div>
              ))}
            </div>
          </TipCard>

          {/* ── Culture and Quirks ── */}
          <SectionHeader emoji="🇳🇿" title="Culture & quirks" />

          <TipCard number="12" color="orange" title="Pedestrians do NOT have automatic right of way">
            <p>
              Unlike in the US where cars are generally expected to stop for
              pedestrians, New Zealand road rules do not give pedestrians
              automatic right of way at most crossings. Kiwi drivers will not
              automatically stop — especially when turning at intersections.
              Wait until cars have actually stopped or waved you through before
              crossing. On the plus side, at marked pedestrian crossings (the
              striped zebra crossings), cars are required to stop — look for the
              yellow beacons.
            </p>
          </TipCard>

          <TipCard number="13" color="blue" title="Haka Hostel is consistently reliable across NZ">
            <p>
              If you're doing a road trip and need accommodation in multiple towns,
              Haka Hostel is a reliable chain with locations in Auckland, Wellington,
              Queenstown, Christchurch, and elsewhere. Clean, social, well-run. Not
              the cheapest option but a notch above the average hostel and worth
              the small premium for consistency, especially when you're moving
              cities every couple of days.
            </p>
          </TipCard>

          <TipCard number="14" color="purple" title="If you're going to Hobbiton — lean in and dress the part">
            <p>
              Hobbiton in Matamata is genuinely well done — the attention to
              detail is remarkable and the tour is worth it even if you're not a
              Lord of the Rings obsessive. If you are a fan, dress for it.
              People do show up in cloaks and elvish gear and no one bats an eye.
              It's one of those places where committing to the bit makes the
              experience significantly better. Book in advance — it sells out,
              especially in summer.
            </p>
          </TipCard>

          {/* ── Practical Gear ── */}
          <SectionHeader emoji="🎒" title="Practical gear tips" />

          <TipCard number="15" color="teal" title="Bring a large thin towel — it earns its weight many times over">
            <p>
              A large, thin travel towel (a Turkish towel/peshtemal works
              perfectly) is one of the most useful things you can bring to NZ.
              Hostels charge for towel hire. Beaches are everywhere and you'll
              want to swim. Changing out of wet gear in a public car park or by
              a roadside waterfall is a real scenario. A thin towel doubles as a
              wrap for exactly this — change under it, dry off, pack it down to
              nothing in your daypack.
            </p>
          </TipCard>

          <TipCard number="16" color="gold" title="Sunscreen is non-negotiable — NZ UV is genuinely stronger">
            <p>
              New Zealand sits under a thinner part of the ozone layer. The UV
              index on a NZ summer day is significantly higher than what you're
              used to — you will burn faster than you expect, even on partly
              cloudy days. SPF 50+ is not overkill; it's correct. Reapply every
              two hours if you're outside. This is one of those tips that sounds
              like standard travel advice but is actually more important in NZ
              than almost anywhere else.
            </p>
          </TipCard>

          <TipCard number="17" color="red" title="Sandflies in Fiordland are relentless — cover up or use repellent">
            <p>
              Around Milford Sound, Doubtful Sound, Te Anau, and most of
              Fiordland: sandflies. They're tiny, silent, and their bites itch
              for days. DEET-based repellent works. Covering your ankles and
              arms when you're near water is also effective. Don't make the
              mistake of standing still in a beautiful spot by the water for too
              long without protection — you'll only notice the bites hours later.
            </p>
          </TipCard>

          <TipCard number="18" color="green" title="Tap water is safe to drink everywhere">
            <p>
              NZ tap water is clean and safe in all towns and cities. No need to
              buy bottled water. Carry a reusable bottle and refill it. The
              environmental ethos in NZ is strong — single-use plastic is frowned
              upon and many places actively encourage you to bring your own.
            </p>
          </TipCard>

        </div>

        {/* Quick reference summary */}
        <section className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
            Quick reference
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Tip at restaurants?", value: "No — not expected" },
              { label: "Carry-on weight limit (domestic)", value: "7kg economy — weighed at gate" },
              { label: "Speed cameras", value: "Automatic, instant fine, via rental company" },
              { label: "Pedestrian right of way", value: "Not automatic — wait for cars to stop" },
              { label: "Cash needed?", value: "Minimal — NZ is almost cashless" },
              { label: "Best souvenir towns", value: "Geraldine, Hokitika, Wānaka" },
              { label: "Auckland airport souvenirs", value: "Whittaker's, merino wool, pounamu" },
              { label: "Must-try food", value: "Real fruit ice cream, veggie pie, flat white" },
              { label: "Reliable hostel chain", value: "Haka Hostel" },
              { label: "UV levels", value: "High — SPF 50+ always" },
              { label: "NZeTA required?", value: "Yes — Indian passport holders must apply" },
              { label: "Driving side", value: "Left — and watch one-lane bridges" },
            ].map((item) => (
              <div key={item.label} className="flex items-start justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm">
                <span className="text-[var(--muted)]">{item.label}</span>
                <span className="font-medium text-[var(--text)] text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              New Zealand rewards the people who plan ahead and stay curious about
              the small towns. The big sights are spectacular — Milford Sound,
              Hobbiton, Roy's Peak — but the conversations at a roadside pie shop
              in Geraldine or a random pull-off with a view in the Mackenzie Country
              are what I actually remember.
            </p>
            <p>Safe travels ✈️</p>
            <p>— Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

type Color = "teal" | "gold" | "blue" | "orange" | "purple" | "green" | "red";
const colorMap: Record<Color, string> = {
  teal:   "bg-[#dce7e6] text-teal-700",
  gold:   "bg-amber-100 text-amber-700",
  blue:   "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-700",
  purple: "bg-purple-100 text-purple-700",
  green:  "bg-green-100 text-green-700",
  red:    "bg-red-100 text-red-700",
};

function SectionHeader({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-2">
      <span className="text-xl">{emoji}</span>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        {title}
      </p>
      <div className="flex-1 h-px bg-[var(--border)]" />
    </div>
  );
}

function TipCard({
  number,
  color,
  title,
  children,
}: {
  number: string | number;
  color: Color;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-7 py-7">
      <div className="flex items-start gap-5">
        <div className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-base font-medium ${colorMap[color]}`}>
          {number}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-xl font-semibold leading-snug text-[var(--text)] mb-4">
            {title}
          </h2>
          <div className="text-base leading-7 text-neutral-700 space-y-3">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
      {children}
    </div>
  );
}