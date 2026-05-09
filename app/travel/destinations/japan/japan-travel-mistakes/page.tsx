// app/travel/destinations/japan/things-we-got-wrong/page.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageShell from "@/components/page-shell";

const pageUrl =
  "https://www.deeunbound.com/travel/destinations/japan/things-we-got-wrong";

export const metadata: Metadata = {
  title:
    "Things We Got Wrong in Japan - Tourist Mistakes to Avoid | Dee Unbound",
  description:
    "Real Japan travel mistakes we learned the hard way, from luggage on buses and quiet train etiquette to cash-only temples, taxis in small cities, JR Pass safety, and trash rules.",
  keywords: [
    "Japan tourist mistakes",
    "things not to do in Japan",
    "Japan travel mistakes",
    "Japan etiquette for tourists",
    "Japan travel tips first time",
    "what not to do in Japan",
  ],
  openGraph: {
    title: "Things We Got Wrong in Japan - So You Don't Have To",
    description:
      "Practical Japan travel mistakes to avoid, based on our real April 2026 trip.",
    url: pageUrl,
    siteName: "Dee Unbound",
    type: "article",
  },
  alternates: {
    canonical: pageUrl,
  },
};

const faqs = [
  {
    q: "What should tourists avoid doing in Japan?",
    a: "Avoid talking loudly on public transport, taking phone calls while seated on trains, assuming cards work everywhere, carrying large luggage onto small buses, tipping, and relying only on free WiFi.",
  },
  {
    q: "Is it rude to talk on the phone on trains in Japan?",
    a: "Yes, phone calls on trains and buses are generally discouraged. Keep your phone on silent and move to the end of the car if you need to speak.",
  },
  {
    q: "Do I need cash in Japan?",
    a: "Yes. Cards are common, but temples, small restaurants, local shops, and some entrance counters may still require cash.",
  },
  {
    q: "Can I take large luggage on Japanese trains and buses?",
    a: "You can take luggage on many trains, but avoid large bags on small local buses and plan ahead for oversized luggage on some Shinkansen routes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Things We Got Wrong in Japan - So You Don't Have To",
      description: metadata.description,
      url: pageUrl,
      author: {
        "@type": "Person",
        name: "Dee",
      },
      publisher: {
        "@type": "Organization",
        name: "Dee Unbound",
        url: "https://www.deeunbound.com",
      },
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      mainEntityOfPage: pageUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Travel",
          item: "https://www.deeunbound.com/travel",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Destinations",
          item: "https://www.deeunbound.com/travel/destinations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Japan",
          item: "https://www.deeunbound.com/travel/destinations/japan",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Things We Got Wrong in Japan",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function ThingsWeGotWrongJapanPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Destinations", href: "/travel/destinations" },
        { label: "Japan", href: "/travel/destinations/japan" },
        { label: "Things we got wrong" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-5xl px-8 py-20">
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Japan · Travel mistakes
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          Things We Got Wrong in Japan - So You Don&apos;t Have To
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          Japan is one of the easiest countries to travel in - but only once you
          understand how things work. We read a lot before our trip, but still
          made a few mistakes that cost us time, effort, or unnecessary stress.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>April 2026</span>
        </div>

        <div className="mt-14 space-y-14">
          <NoteBox>
            None of these are strict rules. They are travel patterns we noticed
            after moving through airports, stations, buses, temples, small
            towns, and big cities across Japan.
          </NoteBox>

          <MistakeSection
            emoji="🚆"
            title="Don&apos;t treat public transport casually"
          >
            <p>
              Public transport in Japan is calm, quiet, and incredibly
              efficient. What stood out to us most was how quiet it was. Not
              silent, but close.
            </p>
            <p>
              People generally avoid loud conversations, keep phones on silent,
              and do not take calls while seated. If someone needs to speak,
              they usually move towards the end of the car.
            </p>
            <p>
              Another thing you&apos;ll quickly notice is how boarding works.
              People line up neatly and let passengers get off before boarding.
              It keeps everything moving smoothly, especially during peak hours.
            </p>
            <p>
              Eating is generally fine on long-distance trains like the
              Shinkansen, especially when there are tray tables. But on local
              trains, subways, and city buses, people usually do not eat.
            </p>
            <OfficialLink href="https://www.japan.travel/en/guide/understanding-and-mastering-japanese-manners-and-etiquette/">
              JNTO guide to Japanese manners and etiquette
            </OfficialLink>
          </MistakeSection>

          <MistakeSection emoji="🧳" title="Don't carry large luggage everywhere">
            <p>
              We made this mistake once, and that was enough. In Hirosaki, right
              after getting down from the train, we saw a city bus going towards
              our hotel area and hopped on with our check-in bags.
            </p>
            <p>
              A few minutes later, we heard a recorded message saying large or
              cumbersome luggage is not recommended on city buses. The driver
              did not say anything, but it was clear this was not ideal.
            </p>
            <p>
              In smaller buses and crowded spaces, luggage quickly becomes a
              problem. Use cabs when you have checkin sized bags. Use coin lockers when you are sightseeing between hotel
              check-ins, and consider luggage forwarding for longer routes.
            </p>
            <OfficialLink href="https://www.global-yamato.com/en/hands-free-travel/">
              Yamato Hands-Free Travel and luggage forwarding
            </OfficialLink>
          </MistakeSection>

          <MistakeSection
            emoji="🚄"
            title="Don&apos;t carry oversized luggage on Shinkansen without planning"
          >
            <p>
              On the Tokaido-Sanyo-Kyushu Shinkansen, oversized luggage needs
              planning. If your baggage is over 160 cm in total dimensions, you
              need to reserve a seat with oversized baggage space.
            </p>
            <p>
              This is easy to miss when you are focused only on train times. If
              you are traveling with large suitcases, check the luggage rule
              before booking your Shinkansen seat.
            </p>
            <OfficialLink href="https://global.jr-central.co.jp/en/info/oversized-baggage/">
              JR Central oversized baggage rules
            </OfficialLink>
          </MistakeSection>

          <MistakeSection
            emoji="🚕"
            title="Don&apos;t rely completely on taxis in small cities"
          >
            <p>
              This one caught us off guard. Our hotel in Hirosaki was about a
              mile from the station. We had an early morning train at 5:26 am,
              so we booked a taxi for 4:50 am the night before.
            </p>
            <p>
              The taxi never showed up. It was raining, the streets were empty,
              and we ended up walking with all our luggage.
            </p>
            <p>
              If you have an early train in a smaller city, stay closer to the
              station when possible. At minimum, have a backup plan that does
              not depend entirely on a taxi arriving.
            </p>
          </MistakeSection>

          <MistakeSection emoji="🛗" title="Don&apos;t assume every station has elevators nearby">
            <p>
              Stations in Japan are well designed, but elevator access is not
              always the fastest route. Sometimes you need to walk farther, take
              a different exit, or follow a longer path to avoid stairs.
            </p>
            <p>
              If you are carrying luggage, give yourself extra time and follow
              elevator signs instead of blindly taking the shortest route on the
              map.
            </p>
          </MistakeSection>

          <MistakeSection emoji="💰" title="Don&apos;t assume cards work everywhere">
            <p>
              Japan is modern, but cash is still very relevant. We ran into this
              multiple times: temples in Kyoto, a traditional restaurant in
              Tokyo, and small entrance counters where cards were not accepted.
            </p>
            <p>
              One time, we had to walk around 40 minutes in the rain just to
              find an ATM before entering a temple. After that, we always kept
              cash with us.
            </p>
            <p>
              My rule now: carry enough cash for food, temple entrances, local
              buses, coin lockers, and unexpected small purchases.
            </p>
          </MistakeSection>

          <MistakeSection emoji="🎟️" title="Don&apos;t lose your JR Pass">
            <p>
              If you are using a JR Pass or regional rail pass, treat it like
              cash. Our JR East Pass clearly said that it could not be reissued
              if lost.
              Keep it with your passport or in one fixed travel pouch. Do not
              casually slide it into random pockets during station transfers.
            </p>
            <OfficialLink href="https://www.jreast.co.jp/en/multi/pass/eastpass_terms.html">
              JR East Pass terms and conditions
            </OfficialLink>
          </MistakeSection>

          <MistakeSection emoji="📱" title="Don&apos;t depend only on free WiFi">
            <p>
              You will find WiFi in airports, stations, some trains, hotels,
              and cafes. But it is not something I would depend on completely.
            </p>
            <p>
              We used mobile data constantly for maps, translation, train
              platforms, exits, restaurant checks, and quick direction
              confirmations. An eSIM, local SIM, or pocket WiFi makes the trip
              much less stressful.
            </p>
          </MistakeSection>

          <MistakeSection emoji="🧭" title="Don&apos;t assume you&apos;re at the right platform">
            <p>
              Japan is extremely organized, but stations can still be
              overwhelming. At Ueno, we had limited time to collect our JR East
              Pass, move between sections, and catch the next train.
            </p>
            <p>
              Google Maps helped a lot, but we also confirmed with station
              staff whenever we were unsure. That combination saved us time and
              stress.
            </p>
            <p>
              This is one of the biggest lessons from our Japan train days:
              read the ticket email carefully, follow the platform details, and
              ask staff before guessing.
            </p>
          </MistakeSection>

          <MistakeSection emoji="🗑️" title="Don&apos;t expect trash cans everywhere">
            <p>
              Trash cans are not as common as you might expect. You can go a
              long stretch without seeing one, especially outside stations or
              convenience stores.
              Carry a small bag for wrappers or tissues and throw them away
              later at your hotel, station, or konbini.
            </p>
          </MistakeSection>

          <MistakeSection emoji="🍱" title="Don&apos;t eat and walk everywhere">
            <p>
              This is not a strict rule, but it is something you notice quickly.
              People generally do not snack casually while walking around.
              Instead, they eat near the shop, at a designated area, beside
              vending machines, or once they sit down somewhere. When in doubt,
              pause and eat instead of walking through a crowded street with
              food.
            </p>
          </MistakeSection>

          <MistakeSection emoji="💸" title="Don&apos;t tip in Japan">
            <p>
              Tipping is not part of the culture in Japan. It can confuse staff
              and may be politely refused.
            </p>
            <p>
              Good service is already expected and included, so a polite thank
              you is enough.
            </p>
            <OfficialLink href="https://www.japan.travel/en/plan/">
              JNTO Japan travel planning basics
            </OfficialLink>
          </MistakeSection>

          <MistakeSection emoji="🏙️" title="Don&apos;t expect small stations to have everything">
            <p>
              Some stations in Japan feel like a mini city, with restaurants,
              bakeries, bento counters, souvenir shops, and endless things to
              browse.
            </p>
            <p>
              Others are just a platform, a vending machine, and maybe one
              konbini. If you are traveling through smaller towns, buy snacks
              and water before you need them.
            </p>
          </MistakeSection>

          <section className="space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The pattern we noticed
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Most of these are not strict rules. They come down to one thing:
              being mindful of shared space and systems.
            </p>
            <p className="text-lg leading-8 text-neutral-700">
              Trains are quiet because everyone helps keep them that way.
              Stations work smoothly because people follow the flow. Public
              spaces stay clean because people carry their own responsibility
              with them.
            </p>
          </section>

          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Related Japan guides
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/travel/destinations/japan/what-to-do-after-landing",
                  icon: "✈️",
                  title: "What to do after landing in Japan",
                  desc: "Airport, cash, Suica, and transport steps after arrival.",
                },
                {
                  href: "/travel/destinations/japan/suica-ic-card",
                  icon: "💳",
                  title: "Japan IC Card / Suica setup guide",
                  desc: "How to buy, top up, use lockers, and link Suica to tickets.",
                },
                {
                  href: "/travel/destinations/japan/train-tickets-explained",
                  icon: "🎫",
                  title: "Japan train tickets explained",
                  desc: "Why you get multiple tickets and how to use them at gates.",
                },
                {
                  href: "/travel/destinations/japan/jr-pass-mistakes",
                  icon: "🚫",
                  title: "JR Pass mistakes we made",
                  desc: "What went wrong at Otsuki and how to collect the pass correctly.",
                },
                {
                  href: "/travel/destinations/japan/train-travel-tips",
                  icon: "🚆",
                  title: "Japan train travel tips",
                  desc: "Train types, transfers, etiquette, WiFi, and luggage rules.",
                },
                {
                  href: "/travel/destinations/japan/jr-pass-worth-it",
                  icon: "🧮",
                  title: "Is the JR Pass worth it?",
                  desc: "Real cost breakdown from our April 2026 Japan trip.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-white px-5 py-4 transition hover:border-[var(--accent)]"
                >
                  <span className="flex-shrink-0 text-2xl">{link.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                      {link.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                      {link.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[var(--border)] bg-white px-8 py-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Official resources
            </p>

            <div className="space-y-3">
              {[
                {
                  label: "JNTO manners and etiquette",
                  href: "https://www.japan.travel/en/guide/understanding-and-mastering-japanese-manners-and-etiquette/",
                },
                {
                  label: "JNTO credit cards and cash in Japan",
                  href: "https://www.japan.travel/en/plan/credit-cards/",
                },
                {
                  label: "JR Central oversized baggage rules",
                  href: "https://global.jr-central.co.jp/en/info/oversized-baggage/",
                },
                {
                  label: "JR East Pass terms",
                  href: "https://www.jreast.co.jp/en/multi/pass/eastpass_terms.html",
                },
                {
                  label: "Yamato Hands-Free Travel",
                  href: "https://www.global-yamato.com/en/hands-free-travel/",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-teal-700 transition-colors hover:border-teal-400"
                >
                  {link.label}
                  <span className="ml-2 flex-shrink-0">↗</span>
                </a>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              We didn&apos;t get everything right on our trip, but every small
              mistake helped us understand how Japan works a little better.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function MistakeSection({
  emoji,
  title,
  children,
}: {
  emoji: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-start gap-4">
        <span className="mt-1 text-3xl">{emoji}</span>
        <h2
          className="font-serif text-3xl font-semibold text-[var(--text)]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div className="space-y-4 text-lg leading-8 text-neutral-700">
        {children}
      </div>
    </section>
  );
}

function NoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
      {children}
    </div>
  );
}

function OfficialLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <p className="text-sm leading-6 text-[var(--muted)]">
      Official resource:{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-teal-700 underline underline-offset-2"
      >
        {children} ↗
      </a>
    </p>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-white px-5 py-5">
      <h3 className="font-medium text-[var(--text)]">{q}</h3>
      <p className="mt-2 text-sm leading-7 text-neutral-600">{a}</p>
    </div>
  );
}