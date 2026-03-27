import PageShell from "@/components/page-shell";
import AboutHeroPhoto from "@/components/about-hero-photo";
import Image from "next/image";
import { photoUrl } from "@/lib/photo-url";

// ─── Photos ───────────────────────────────────────────────────────────────────
const HERO_PHOTO = photoUrl("About/Hero", "w_400,h_400,c_fill,q_auto,f_auto");
const TRAVEL_PHOTO = photoUrl("About/haga-sofia", "w_400,h_400,c_fill,q_auto,f_auto");
const HOME_PHOTO = photoUrl("About/home-feels-just-as-meaningful", "w_400,h_400,c_fill,q_auto,f_auto");

export default function AboutPage() {
  return (
    <PageShell>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Hero photo — circular, using Cloudinary */}
          <div className="flex-shrink-0">
            <AboutHeroPhoto src={HERO_PHOTO} alt="Dee in hanbok at a traditional Korean courtyard" />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs tracking-[.14em] uppercase text-[var(--accent)] font-medium mb-3">
              About Dee
            </p>
            <h1 className="font-editorial text-4xl md:text-5xl leading-tight text-[var(--text)] mb-5">
              I like living many lives in one.
            </h1>
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
              Hi, I'm Dee - a software test engineer by day, and a curious explorer of everything else.
              I travel, grow (a lot of) plants, dance, cook, write, and occasionally pick up new
              hobbies just to see where they take me.
            </p>
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mt-4">
              I don't really believe in choosing one thing and sticking to it forever. I'd rather
              be a little bit of everything - a work in progress, always.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK FACTS RIBBON
      ══════════════════════════════════════════ */}
      <section className="bg-[var(--card)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { emoji: "🌎", label: "Countries visited", value: "24" },
              { emoji: "🌿", label: "Plants at home", value: "~300" },
              { emoji: "💻", label: "Profession", value: "Software Engineer" },
              { emoji: "✈️", label: "Travel style", value: "Experience first" },
              { emoji: "🎲", label: "Also into", value: "Dance · Board Games" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-1 py-2">
                <span className="text-2xl">{f.emoji}</span>
                <span className="text-xs text-[var(--muted)] leading-snug">{f.label}</span>
                <span className="text-sm font-medium text-[var(--text)]">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20">

        {/* ── My Story ── */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <SectionLabel>My Story</SectionLabel>
            <h2 className="font-editorial text-3xl text-[var(--text)] leading-snug">
              Mysore to Fremont, with a lot in between.
            </h2>
            {/* Photo goes here when ready — same pattern as sections below */}
          </div>
          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>
              I grew up in Mysore, and now I live in Fremont, California. My days are structured
              around test and code - I work as a software test engineer at Cisco - but everything outside of
              that is intentionally unstructured.
              I met my husband Sunny in Niles, Fremont in 2017.
              Kutti, our cheweenie, came home in 2020 and has been our constant companion in all our adventures.
            </p>
            <p>
              Dee Unbound started very simply - I've always written things down. Thoughts,
              moments, random reflections. This is just an extension of that - a space to
              document, but also to make it useful, thoughtful, and maybe a little enjoyable
              for someone else reading it.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Travel Philosophy ── */}
        <section>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">

            {/* Left: label + photo only */}
            <div className="space-y-4">
              <SectionLabel>Travel Philosophy</SectionLabel>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={TRAVEL_PHOTO}
                  alt="Dee inside the Hagia Sophia, Istanbul, looking up in awe"
                  width={400}
                  height={400}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right: body text */}
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <h2 className="font-editorial text-3xl text-[var(--text)] leading-snug">
                I have a complicated relationship with travel.
              </h2>
              <p>
                There are moments - somewhere over an ocean, when turbulence hits - where I
                question everything. Why am I here? Why leave a life that already feels full -
                my plants, my family, my routines?
              </p>
              <p>
                And then there are moments that answer that question completely. A festival in a
                place I've never been. A conversation with a stranger that stays with me longer
                than expected. A quiet street that feels oddly familiar.
              </p>
              <p>
                I lean towards planning, but I won't wait for the perfect plan. If it's between a
                spontaneous trip and no trip - I'll go.
              </p>
            </div>
          </div>

          {/* Philosophy pillars */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Experience first", sub: "The memory outlasts the itinerary" },
              { label: "Efficiency next", sub: "Systems that make travel smoother" },
              { label: "Comfort optional", sub: "Stretch the edges when it matters" },
            ].map((p) => (
              <div
                key={p.label}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-xl px-6 py-5"
              >
                <p className="font-editorial text-lg text-[var(--text)]">{p.label}</p>
                <p className="text-sm text-[var(--muted)] mt-1 leading-snug">{p.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Beyond Travel ── */}
        <section>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">

            {/* Left: label + photo only */}
            <div className="space-y-4">
              <SectionLabel>Beyond Travel</SectionLabel>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={HOME_PHOTO}
                  alt="Kutti the chiweenie with paws on the steering wheel"
                  width={400}
                  height={400}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right: body text */}
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <h2 className="font-editorial text-3xl text-[var(--text)] leading-snug">
                Home feels just as meaningful.
              </h2>
              <p>
                When I'm not traveling, I'm usually at home - which, surprisingly, feels just as
                full. I live among a house full of plants - many of which have grown so much that
                we're honestly running out of space to stretch. I have a small dog - a chiweenie
                - who runs the house, and a life filled with little rituals I love.
              </p>
              <p>
                I practice Bharatanatyam, play board games (often with my Fremont board game community),
                cook and experiment in the kitchen, and occasionally paint. Some days are slow - lazy weekends
                spent watching TV with my husband, or beautiful evenings with neighbors who've become close friends.
              </p>
              <p>
                I like building a life that feels full - whether I'm in a new country or just at
                home watering plants.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Closing ── */}
        <section className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-8 py-10 text-center max-w-2xl mx-auto">
          <p className="font-editorial text-2xl md:text-3xl text-[var(--text)] leading-relaxed">
            "None of this is about doing everything perfectly. It's about trying things, changing
            your mind, and allowing different versions of yourself to exist."
          </p>
          <p className="mt-6 text-[var(--muted)] text-sm leading-relaxed">
            This space is just a reflection of that.
          </p>
          <p className="mt-4 font-editorial italic text-[var(--accent)] text-lg">- Dee</p>
        </section>

      </div>
    </PageShell>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[.14em] uppercase text-[var(--accent)] font-medium mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-[var(--border)]" />;
}