import Link from "next/link";

export default function Home() {
  return (
    <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-8 py-20 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
              Curious life, unbound
            </p>

            <h1 className="font-editorial max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
              Stories, projects, plants, and places I keep returning to.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--muted)]">
              Welcome to my corner of the internet. This is where I share what I
              build, where I go, and what I grow.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
              >
                Read the blog
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition hover:bg-[var(--surface)]"
              >
                About me
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm text-[var(--muted)]">Current focus</p>
                <h3 className="mt-3 font-editorial text-2xl font-semibold">
                  Travel + Plants
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  Building this space one thoughtful section at a time.
                </p>
              </div>

              <div className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm text-[var(--muted)]">What lives here</p>
                <h3 className="mt-3 font-editorial text-2xl font-semibold">
                  Blog + Projects
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  Notes, experiments, reflections, and a few rabbit holes.
                </p>
              </div>

              <div className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6 sm:col-span-2">
                <p className="text-sm text-[var(--muted)]">Vibe</p>
                <h3 className="mt-3 font-editorial text-2xl font-semibold">
                  A little grounded, a little wandering
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  Equal parts calm and curiosity, with room to grow into more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-14">
          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              About
            </p>
            <h2 className="mt-4 font-editorial text-4xl font-semibold">
              Hi, I’m Dee.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--muted)]">
              I’m building a personal space on the web to document things that
              matter to me. For now, that means travel and plants. Over time,
              this will grow into a place for writing, side projects, and
              whatever I’m learning along the way.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                Blog
              </p>
              <h2 className="mt-4 font-editorial text-4xl font-semibold">
                Latest writing
              </h2>
            </div>
            <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">
              View all posts →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm text-[var(--muted)]">Travel</p>
              <h3 className="mt-3 font-editorial text-2xl font-semibold">
                A placeholder for your first travel post
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                Add your first story, itinerary, reflection, or travel journal entry here.
              </p>
            </article>

            <article className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm text-[var(--muted)]">Plants</p>
              <h3 className="mt-3 font-editorial text-2xl font-semibold">
                A placeholder for your first plant post
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                This could be a plant diary, care note, experiment, or a favorite leafy find.
              </p>
            </article>

            <article className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-sm text-[var(--muted)]">Coming soon</p>
              <h3 className="mt-3 font-editorial text-2xl font-semibold">
                More stories are on the way
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                This section will eventually pull real posts once your blog system is set up.
              </p>
            </article>
          </div>
        </section>
    </main>
  );
}
