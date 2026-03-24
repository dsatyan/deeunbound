// app/travel/essentials/itinerary-system/page.tsx
import PageShell from "@/components/page-shell";

export const postMeta = {
  title: "How I Plan Every Trip - My Two-Tool System",
  description:
    "One Google Doc, one map app, zero scattered tabs. The exact folder structure and template I use for every trip.",
  emoji: "🗂️",
  readingTime: "8 min read",
  tags: ["planning", "systems", "tools"],
};

export default function ItinerarySystemPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials", href: "/travel/essentials" },
        { label: "Itinerary System" },
      ]}
    >
      <main className="mx-auto max-w-6xl px-8 py-20">

        {/* ── Hero ── */}
        <span className="mb-8 inline-block rounded-sm border border-amber-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-amber-700">
          Travel Essentials
        </span>

        <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] md:text-6xl">
          How I Plan Every Trip - My Two-Tool System
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-700">
          One Google Doc. One map app. Everything in one folder, available offline,
          shareable with one link. This is the exact system I use for every trip.
        </p>

        <div className="mt-10 flex items-center gap-6 border-b border-[var(--border)] pb-10 text-sm text-[var(--muted)]">
          <span>By Dee</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>8 min read</span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span>Updated 2025</span>
        </div>

        <blockquote className="mt-14 rounded-r-2xl border-l-4 border-amber-700 bg-[#efe7df] px-8 py-8 font-serif text-2xl italic leading-relaxed text-[#5b4031]">
          I used to start every trip with 40 open browser tabs, three different
          notes apps, and confirmation emails buried somewhere in my inbox. Now
          everything lives in two places - and I can find anything in under 10 seconds.
        </blockquote>

        <div className="mt-14 space-y-16">

          {/* ── Section 1: The Problem ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The problem with how most people plan trips
            </h2>
            <p>
              Research happens in browser tabs. Accommodation confirmations are in email.
              The itinerary is in a note somewhere. Tickets are in a different folder.
              The address of the hotel is in a WhatsApp message you sent yourself three weeks ago.
            </p>
            <p>
              And then you land. You have no signal. None of it is accessible.
            </p>
            <p>
              This isn't about being obsessively organized - it's about making the
              actual travel part easier. Good planning is what lets you be spontaneous,
              because the non-negotiables (where you're sleeping, how you're getting
              there, what time check-in closes) are already handled.
            </p>
          </section>

          {/* ── Section 2: The System Overview ── */}
          <section className="space-y-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The system - two tools, one folder
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Everything I do for trip planning runs through two tools:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  tool: "Wanderlog",
                  role: "The visual planning layer",
                  desc: "Used during the research and planning phase. Helps me see the route, check driving times, and figure out if my days are realistic before I commit to them.",
                  color: "bg-[#dce7e6] text-teal-700",
                },
                {
                  number: "02",
                  tool: "Google Drive Folder + Doc",
                  role: "The travel companion",
                  desc: "The actual itinerary I use on the trip. Offline, shareable, searchable, and flexible enough to hold everything from hotel addresses to half-formed thoughts about what to eat.",
                  color: "bg-amber-100 text-amber-700",
                },
              ].map((item) => (
                <div
                  key={item.tool}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${item.color}`}>
                    {item.number}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-[var(--text)]">
                    {item.tool}
                  </h3>
                  <p className="mt-1 text-sm italic text-[var(--muted)]">{item.role}</p>
                  <p className="mt-3 text-base leading-7 text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Phase 1 Wanderlog ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Phase 1: Planning the route in Wanderlog
            </h2>
            <p>
              Before I open a Google Doc, I open{" "}
              <a
                href="https://wanderlog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                Wanderlog
              </a>
              . It's free for most of what I need, and it solves a specific problem
              that no amount of document-writing can solve: seeing everything on a map at
              the same time.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-[var(--text)]">
              What I actually use it for
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Travel time between stops",
                  detail:
                    "Click any two pins and it shows driving time. You can also click through to Google Maps directly for public transport routes, which is exactly what I need when I'm deciding whether to rent a car or use trains.",
                },
                {
                  title: "Day-by-day map view",
                  detail:
                    "Each day gets a color. You can immediately see if Day 3 has you driving past somewhere you visited on Day 1, which means you should probably flip the order.",
                },
                {
                  title: "Notes on each place",
                  detail:
                    "Every pin has a notes field. I dump my research here - opening hours, price notes, 'locals say avoid weekends', links to AllTrails pages. It keeps everything attached to the place it belongs to.",
                },
                {
                  title: "Budget tracker",
                  detail:
                    "I add estimated costs as I plan. By the time I'm done, I have a rough total for accommodation, activities, and transport before I've spent a cent. The actual vs estimated comparison after the trip is genuinely useful.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
                >
                  <p className="font-medium text-[var(--text)]">✦ {item.title}</p>
                  <p className="mt-1 text-base leading-7 text-neutral-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-r-xl border-l-4 border-amber-700 bg-[#efe7df] px-5 py-4 text-base leading-7 text-[#5b4031]">
              <strong>A note on Google My Maps:</strong> You can absolutely use Google My Maps
              for the visual layer - I used it for years and it works well for dropping pins
              and color-coding by day. Wanderlog's advantage is that travel times populate
              automatically and the budget tracker is built in. If you're already deep in the
              Google ecosystem and don't want another tool, My Maps is a completely valid choice.
            </div>
          </section>

          {/* ── Section 4: The Google Drive Folder ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Phase 2: The Google Drive folder
            </h2>
            <p>
              Once the route is settled in Wanderlog, I open Google Drive and create
              a folder. The folder name could be country and year, eg: New Zealand 2025. 
            </p>

            <h3 className="font-serif text-2xl font-semibold text-[var(--text)]">
              What goes in the folder
            </h3>

            <div className="rounded-2xl border border-[var(--border)] bg-[#f0f3fb] p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#6370a0]">
                Folder structure
              </p>
              {[
                { icon: "📄", name: "Itinerary Doc", desc: "The main document - day by day, everything in one place" },
                { icon: "✈️", name: "Flights", desc: "Boarding passes, confirmation emails saved as PDF" },
                { icon: "🏨", name: "Accommodation", desc: "Booking confirmations, check-in instructions, addresses" },
                { icon: "🎫", name: "Tickets & Tours", desc: "QR codes, booking confirmations for activities" },
                { icon: "📋", name: "Visa / Entry docs", desc: "ETA approvals, travel insurance, any required forms" },
                { icon: "🗺️", name: "Offline Maps", desc: "Not stored here, but downloaded separately in Google Maps app" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-3 border-b border-[#e0e4f0] py-3 text-sm last:border-0"
                >
                  <span className="text-base">{item.icon}</span>
                  <div>
                    <span className="font-medium text-[#3a4470]">{item.name}</span>
                    <span className="text-[#6370a0]"> - {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Before I board, I make every file in this folder available offline on my phone.
              In Google Drive: tap the three-dot menu on each file → toggle{" "}
              <strong className="text-[var(--text)] font-medium">Make available offline</strong>.
              Takes two minutes at the gate, saves you from a lot of stress later.
            </p>
          </section>

          {/* ── Section 5: The Doc itself ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              The itinerary doc - how I actually structure it
            </h2>
            <p>
              I generally don't follow any itinerary templates as I find it very rigid.
            </p>
            <p>
              My doc is a Google Doc with just proper heading hierarchy. Heading 1 for each day.
              Heading 2 for each section within a day (Accommodation, Things to do, Restaurants).
              The reason this matters: Google Docs generates a navigation sidebar from your
              headings automatically. On a 12-day trip, being able to jump directly to
              "Jan 6 - Wanaka" from a sidebar is the difference between useful and useless.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-[var(--text)]">
              What each day entry contains
            </h3>

            <div className="space-y-3">
              {[
                {
                  label: "🚗 Transport",
                  content: "How you're getting there, departure time, any bookings. If driving, the route and any scenic stops worth planning around.",
                },
                {
                  label: "🏨 Accommodation",
                  content: "Full address (copy-pasteable into Google Maps), check-in time, any special instructions, confirmation number, and a contact number for the property.",
                },
                {
                  label: "📍 Things to do",
                  content: "Not a rigid schedule - a list with context. What's the backup if it rains? What needs a booking and what doesn't? What's worth the detour and what's a 'skip if tired'?",
                },
                {
                  label: "🍽️ Food",
                  content: "Two or three options per meal, not one - so you're not stranded if something is closed or full. For vegetarian-specific notes, I flag those clearly.",
                },
                {
                  label: "📝 Notes & research",
                  content: "The catch-all. Links to AllTrails pages, pro tips found in blog posts, things like 'the café is only open until 2pm' or 'book the water taxi in advance'.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
                >
                  <p className="font-medium text-[var(--text)]">{item.label}</p>
                  <p className="mt-1 text-base leading-7 text-neutral-600">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 6: Sharing ── */}
          <section className="space-y-5 text-lg leading-8 text-neutral-700">
            <h2 className="font-serif text-3xl font-semibold text-[var(--text)]">
              Sharing - one link, everyone knows where you are
            </h2>
            <p>
              Before every trip, I share the Google Drive folder (view-only) with at
              least one person who isn't on the trip. Parents, a close friend - someone
              who would know to check it if they couldn't reach me.
              They get the full itinerary, accommodation addresses, flight numbers, and
              contact details for every place I'm staying.
            </p>
          </section>

          {/* ── Section 7: Template CTA ── */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              Free template
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--text)]">
              Get the Google Doc template
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              I've turned my exact itinerary structure into a Google Doc template you
              can copy. It includes the heading hierarchy, all the sections I use for
              each day, a pre-trip checklist, and a folder structure guide. Open it,
              click "Make a copy", and it's yours to edit.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
              >
                Copy the template →
              </a>
              <p className="self-center text-sm text-[var(--muted)]">
                Google account required · Free forever
              </p>
            </div>
          </section>

        </div>

        {/* ── Closing ── */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <div className="max-w-3xl space-y-5 font-serif text-xl italic leading-relaxed text-[#554a43]">
            <p>
              The goal isn't a perfect itinerary - plans change the moment you land anyway.
              The goal is having the non-negotiables sorted so that everything else can be
              spontaneous.
            </p>
            <p>Safe travels ✈️</p>
            <p>- Dee</p>
          </div>
        </section>

      </main>
    </PageShell>
  );
}