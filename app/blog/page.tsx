import PageShell from "@/components/page-shell";

export default function BlogPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-8 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          Blog
        </p>

        <h1 className="mt-4 font-editorial text-5xl font-semibold leading-tight">
          Writing, notes, and travel systems
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted)]">
          A home for travel notes, practical guides, reflections, plant logs,
          and the occasional rabbit hole.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8">
            <p className="text-sm text-[var(--muted)]">Travel Essentials</p>
            <h2 className="mt-3 font-editorial text-3xl font-semibold">
              What I Do at the Airport Gate That Saves Me Hours Later
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              A practical pre-boarding ritual that saves time, energy, and bad
              decisions after landing.
            </p>
          </article>

          <article className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8">
            <p className="text-sm text-[var(--muted)]">Coming soon</p>
            <h2 className="mt-3 font-editorial text-3xl font-semibold">
              More posts on the way
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              This page will grow into a proper archive as you add more travel
              and plant writing.
            </p>
          </article>
        </div>
      </main>
    </PageShell>
  );
}