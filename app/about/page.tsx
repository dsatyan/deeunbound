import PageShell from "@/components/page-shell";
import AboutHeroPhoto from "@/components/about-hero-photo";

// ─── Photo placeholder — swap src with your real image path ───────────────
const HERO_PHOTO = "/images/dee-about.jpg"; // replace with your actual photo

export default function AboutPage() {
  return (
    <PageShell>

      {/* ══════════════════════════════════════════
          HERO — full-width warm band
      ══════════════════════════════════════════ */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Photo */}
          <div className="flex-shrink-0">
            <AboutHeroPhoto src={HERO_PHOTO} alt="Dee" />
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
              Hi, I'm Dee — a software test engineer by day, and a curious explorer of everything else.
              I travel, grow (a lot of) plants, dance, cook, write, and occasionally pick up new
              hobbies just to see where they take me.
            </p>
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mt-4">
              I don't really believe in choosing one thing and sticking to it forever. I'd rather
              be a little bit of everything — a work in progress, always.
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
              { emoji: "🌎", label: "Countries visited", value: "—" },
              { emoji: "🌿", label: "Plants at home", value: "~300" },
              { emoji: "🐶", label: "Dog", value: "1 chiweenie" },
              { emoji: "💻", label: "Profession", value: "Software Engineer" },
              { emoji: "✈️", label: "Travel style", value: "Experience first" },
              { emoji: "🎲", label: "Also into", value: "Dance · Games · Food" },
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
          </div>
          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>
              I grew up in Mysore, and now I live in Fremont, California. My days are structured
              around test and code — I work as a software test engineer at Cisco — but everything outside of
              that is intentionally unstructured. I met my husband Sunny in Niles, Fremont in 2017 and Kutti, our cheweenie,
              came home in 2020 and has been our constant companion in all our adventures.
            </p>
            <p>
              Travel, for me, started with curiosity. I've always been drawn to how people
              live — their food, their languages, their small daily rituals. I like observing,
              listening, and sometimes just existing quietly in a place that's completely
              unfamiliar.
            </p>
            <p>
              Dee Unbound started very simply — I've always written things down. Thoughts,
              moments, random reflections. This is just an extension of that — a space to
              document, but also to make it useful, thoughtful, and maybe a little enjoyable
              for someone else reading it.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Travel Philosophy ── */}
        <section>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <SectionLabel>Travel Philosophy</SectionLabel>
              <h2 className="font-editorial text-3xl text-[var(--text)] leading-snug">
                I have a complicated relationship with travel.
              </h2>
            </div>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                There are moments — somewhere over an ocean, when turbulence hits — where I
                question everything. Why am I here? Why leave a life that already feels full —
                my plants, my family, my routines?
              </p>
              <p>
                And then there are moments that answer that question completely. A festival in a
                place I've never been. A conversation with a stranger that stays with me longer
                than expected. A quiet street that feels oddly familiar.
              </p>
              <p>
                I lean toward planning, but I won't wait for the perfect plan. If it's between a
                spontaneous trip and no trip — I'll go.
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

          <div className="mt-6 bg-[var(--card)] border border-[var(--border)] rounded-xl px-6 py-5">
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              <span className="font-medium text-[var(--text)]">I'm also vegetarian</span> — which
              quietly shapes how I travel. What I eat, where I go, how I experience places. It's
              less a constraint and more a lens.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── What You'll Find Here ── */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <SectionLabel>What You'll Find Here</SectionLabel>
            <h2 className="font-editorial text-3xl text-[var(--text)] leading-snug">
              This isn't a typical travel blog.
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                icon: "🗂️",
                title: "Practical things that actually help",
                desc: "Like how I prepare at the airport gate, or how I find vegetarian food anywhere.",
              },
              {
                icon: "📖",
                title: "Stories that feel real",
                desc: "Not curated perfection — just what actually happened and what I made of it.",
              },
              {
                icon: "⚙️",
                title: "Small systems that make travel smoother",
                desc: "The kind of stuff I wish someone had written down for me.",
              },
              {
                icon: "💭",
                title: "Observations that don't fit neat categories",
                desc: "Thoughts about place, people, and what it means to keep moving.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start bg-[var(--surface)] border border-[var(--border)] rounded-xl px-5 py-4"
              >
                <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-medium text-[var(--text)] text-sm">{item.title}</p>
                  <p className="text-sm text-[var(--muted)] mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
            <p className="text-sm text-[var(--muted)] pt-2 leading-relaxed italic">
              I'm not trying to sell a version of travel. I'm just trying to document mine — honestly.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Beyond Travel ── */}
        <section>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <SectionLabel>Beyond Travel</SectionLabel>
              <h2 className="font-editorial text-3xl text-[var(--text)] leading-snug">
                Home feels just as meaningful.
              </h2>
            </div>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                When I'm not traveling, I'm usually at home — which, surprisingly, feels just as
                full. I have around 300 plants (yes, really 🌿). I have a small dog — a chiweenie
                — who runs the house. I practice Bharatanatyam. I play board games. I cook,
                experiment, and occasionally paint.
              </p>
              <p>
                I like building a life that feels full — whether I'm in a new country or just at
                home watering plants.
              </p>
            </div>
          </div>

          {/* Interest chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["🌱 Plants (×300)", "🐾 Chiweenie", "💃 Bharatanatyam", "🎲 Board games", "🍳 Cooking", "✍️ Writing", "🎨 Painting", "💻 Engineering"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-sm bg-[var(--card)] border border-[var(--border)] text-[var(--text)] px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </section>

        <Divider />

        {/* ── How I Travel ── */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <SectionLabel>How I Travel</SectionLabel>
            <h2 className="font-editorial text-3xl text-[var(--text)] leading-snug">
              Things I care about on the road.
            </h2>
          </div>
          <ul className="space-y-3">
            {[
              "Using less plastic where I can",
              "Eating fresh, simple, vegetarian food",
              "Buying groceries and cooking occasionally instead of eating out all the time",
              "Moving slower, even when the itinerary is full",
              "Leaving places a little better than I found them",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--muted)] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
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
          <p className="mt-4 font-editorial italic text-[var(--accent)] text-lg">— Dee</p>
        </section>

      </div>
    </PageShell>
  );
}

// ─── Small shared sub-components ────────────────────────────────────────────

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
