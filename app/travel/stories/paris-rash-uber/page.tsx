// app/travel/stories/paris-rash-uber/page.tsx
import Link from "next/link";
import PageShell from "@/components/page-shell";

export const storyMeta = {
  title: "The Paris Morning I Was Late - And What It Changed",
  description:
    "A solo trip, a disgruntled Uber driver, heavy Monday morning traffic, and ten minutes that taught me to always leave thirty minutes early.",
  emoji: "🗼",
  readingTime: "5 min read",
  location: "Paris, France",
  tags: ["solo travel", "Paris", "lessons"],
};

export default function ParisRashUberPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Stories", href: "/travel/stories" },
        { label: "Paris - The Morning I Was Late" },
      ]}
    >
      <main className="mx-auto max-w-3xl px-8 py-20">

        {/* ── Header ── */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              Travel Stories
            </span>
            <span className="h-px flex-1 bg-[var(--border)]" />
            <span className="text-xs text-[var(--muted)]">Paris, France</span>
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)]">
            The Paris Morning I Was Late - And What It Changed
          </h1>

          <p className="mt-6 text-xl leading-9 text-neutral-600 font-serif italic">
            A solo trip, a disgruntled Uber driver, heavy Monday morning
            traffic, and 15 minutes that quietly rearranged how I plan trip since.
          </p>

          <div className="mt-8 flex items-center gap-5 text-sm text-[var(--muted)]">
            <span>By Dee</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>3 min read</span>
          </div>
        </div>

        <div className="h-px bg-[var(--border)] mb-12" />

        {/* ── The story ── */}
        <article className="prose-custom space-y-6 text-lg leading-9 text-neutral-700">

          <p>
            I was in Paris on a solo trip, and I had booked an Airbnb city
            tour - one of those morning walking tours where a local guide
            takes a small group through the parts of the city that tourists
            usually miss. The meeting point was at{" "}
            <span className="font-medium text-[var(--text)]">
              Au Vieux Paris d'Arcole
            </span>
            , a restaurant tucked on the Île de la Cité, the island in the
            middle of the Seine where Notre-Dame sits.
          </p>

          <p>
            The tour started at 9am. I had checked the route the night
            before, calculated the Uber time, and felt confident. I should
            admit something here: I was never someone who arrived early. I
            found it inefficient - wasted time, standing around waiting when
            I could have had those extra minutes. There was actually a small
            thrill in cutting it close, arriving exactly on the dot. It felt
            like a challenge I was setting for myself and winning. I was
            proud of it. What I had not calculated was that it was a Monday
            morning in Paris.
          </p>

          <p>
            I didn't think about that. I was a tourist. In my head, Paris
            was a beautiful city I was visiting - not a city of two million
            people where millions more were commuting to work and school on
            a weekday morning at 9am. The roads were completely locked. My
            driver weaved through side streets I couldn't find on a map,
            leaning on the horn, shouting at other drivers in French, taking
            corners faster than I was comfortable with. I sat in the back
            completely silent, gripping the door handle, too unsettled to
            ask him to slow down. He didn't say a word to me the entire
            ride - just drove, and raged, and drove.
          </p>

          <p>
            I arrived at Île de la Cité fifteen minutes late.
          </p>

          <p>
            The group hadn't waited. The tour doesn't
            pause for one person. I stood at the meeting point for a moment, a little
            breathless, trying to figure out where they'd gone. I messaged
            the guide, and she responded quickly and warmly - gave me the
            address of the next stop and told me to meet them there. I ran to that address, 
            she was
            genuinely kind about it. The group was lovely. The tour
            itself was wonderful.
          </p>

          <p>
            But I spent the first twenty minutes of that morning running
            through one of the most beautiful neighbourhoods in Paris,
            flustered and embarrassed, not seeing anything, just
            navigating. And I thought about that for a long time afterward.
          </p>

          {/* ── Pull quote ── */}
          <blockquote className="my-10 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-7 font-serif text-2xl italic leading-relaxed text-[#5b4031] not-prose">
            You can research a city for weeks. You still don't know it. You
            are always, on the first day, a stranger.
          </blockquote>

          {/* ── The shift ── */}
          <h2 className="font-serif text-3xl font-semibold text-[var(--text)] mt-12 not-prose">
            What I do differently now
          </h2>

          <p>
            I leave thirty to forty minutes earlier than I think I need to.
          </p>

          <p>
            This sounds simple, and it is. But the real change wasn't the
            thirty minutes - it was the reason behind it. I used to calculate
            travel time as a logistics problem: distance divided by estimated
            speed equals arrival time. Now I think of it as a humility
            problem. I am always, in any new city, operating with incomplete
            information. I don't know the traffic patterns. I don't know
            which metro line is delayed on which day. I don't know that the
            entrance to the museum is on the side street, not the main
            facade. I don't know any of this until I'm there. This is not a failure of research. This is just what cities are.
            They are alive. They don't hold still for your itinerary.
          </p>

          <p>
            The thirty minutes is not for the commute. It is for everything
            I don't know yet.
          </p>

          <p>
            And what I've found - every single time since - is that arriving
            early is quietly one of the best things about a trip. You get to
            the meeting point and you stand there and you actually look at
            the street. You find a café and sit with a coffee. You notice
            the building, the light, the way people move. You are present
            instead of rushing.
          </p>

          {/* ── Pull quote ── */}
          <blockquote className="my-10 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-7 font-serif text-2xl italic leading-relaxed text-[#5b4031] not-prose">
            <em>flâner</em>: to wander without purpose, to
            simply be somewhere with no agenda.
          </blockquote>

          <p>
            A new city takes time to know. There is no shortcut for that.
            The first day you are figuring out how the metro works and where
            the good coffee is and which direction you instinctively get
            wrong. By day three you feel like a local. That progression is
            one of the best things about travel. But you have to let it
            happen at its own pace, and build your plans around the fact
            that day one is always day one.
          </p>

          {/* ── Closing ── */}
          <p>
            Mozart said the music lives
            not in the notes but in the silence between them. A trip needs
            that silence too. Not every hour accounted for. Not every moment
            optimised. Just you, a street you don't know yet, and enough time
            to let it become familiar.
          </p>

        </article>

        {/* ── Sign off ── */}
        <div className="mt-16 border-t border-[var(--border)] pt-10">
        <p>"C’est la vie" - That’s life.</p>
          <p className="font-serif text-xl italic leading-relaxed text-[#554a43]">
            - Dee
          </p>
        </div>

        {/* ── Back to stories ── */}
        <div className="mt-10">
          <Link
            href="/travel/stories"
            className="text-sm font-medium text-teal-700 underline underline-offset-2 hover:text-teal-900"
          >
            ← Back to Stories
          </Link>
        </div>

      </main>
    </PageShell>
  );
}