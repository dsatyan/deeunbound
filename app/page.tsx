export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Dee Unbound
          </a>

          <div className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#blog" className="transition hover:text-white">
              Blog
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#travel" className="transition hover:text-white">
              Travel
            </a>
            <a href="#plants" className="transition hover:text-white">
              Plants
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-emerald-400">
            Curious life, unbound
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Stories, projects, plants, and places I keep returning to.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Welcome to my corner of the internet. This is where I share what I
            build, where I go, and what I grow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#blog"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Read the blog
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium transition hover:border-white/40 hover:bg-white/5"
            >
              About me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-sky-500/10 p-8 shadow-2xl shadow-black/30">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-neutral-400">Current focus</p>
              <h3 className="mt-2 text-xl font-semibold">Travel + Plants</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                Building this space one thoughtful section at a time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-neutral-400">What lives here</p>
              <h3 className="mt-2 text-xl font-semibold">Blog + Projects</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                Notes, experiments, reflections, and a few rabbit holes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
              <p className="text-sm text-neutral-400">Vibe</p>
              <h3 className="mt-2 text-xl font-semibold">
                A little grounded, a little wandering
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                Equal parts calm and curiosity, with room to grow into more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Hi, I’m Dee.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
            I’m building a personal space on the web to document things that
            matter to me. For now, that means travel and plants. Over time,
            this will also grow into a place for writing, side projects, and
            whatever I’m learning along the way.
          </p>
        </div>
      </section>

      <section
        id="blog"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
              Blog
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Latest writing
            </h2>
          </div>
          <a href="#" className="text-sm text-neutral-300 hover:text-white">
            View all posts →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neutral-400">Travel</p>
            <h3 className="mt-3 text-xl font-semibold">
              A placeholder for your first travel post
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              Add your first story, itinerary, reflection, or travel journal
              entry here.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neutral-400">Plants</p>
            <h3 className="mt-3 text-xl font-semibold">
              A placeholder for your first plant post
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              This could be a plant diary, care note, experiment, or a favorite
              leafy find.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-neutral-400">Coming soon</p>
            <h3 className="mt-3 text-xl font-semibold">
              More stories are on the way
            </h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              This section will eventually pull real posts once your blog system
              is set up.
            </p>
          </article>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Things I’m building
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-xl font-semibold">This website</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              A fast personal site built with Next.js, GitHub, and Vercel.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-xl font-semibold">More coming soon</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              You can later add project writeups, tools, experiments, or code
              showcases here.
            </p>
          </div>
        </div>
      </section>

      <section
        id="travel"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
              Travel
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Places, plans, and stories
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-300">
              A section for itineraries, memorable moments, practical guides,
              and the kind of trips that stay with you long after you return.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <ul className="space-y-4 text-neutral-300">
              <li>• Trip ideas and destination notes</li>
              <li>• Itinerary planning and reflections</li>
              <li>• Practical travel tips and favorites</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="plants"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
              Plants
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Leafy things and growing experiments
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-300">
              A section for plant notes, care routines, experiments, wins,
              losses, and all the little things that come with growing a home
              jungle.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <ul className="space-y-4 text-neutral-300">
              <li>• Plant diaries and care observations</li>
              <li>• Soil, light, and watering experiments</li>
              <li>• Favorite plants and growing lessons</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dee Unbound. Built with curiosity.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#blog" className="hover:text-white">
              Blog
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
