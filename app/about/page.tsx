import PageShell from "@/components/page-shell";

export default function AboutPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-8 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          About
        </p>

        <h1 className="mt-4 font-editorial text-5xl font-semibold leading-tight">
          Hi, I’m Dee.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted)]">
          This is my personal space for writing about travel, plants, and
          projects I’m building along the way.
        </p>

        <div className="mt-12 rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-10">
          <p className="max-w-3xl text-lg leading-8 text-[var(--text)]">
            I wanted a site that feels less like a polished portfolio and more
            like a thoughtful notebook — a place for stories, systems, visual
            inspiration, and things I keep learning over time.
          </p>
        </div>
      </main>
    </PageShell>
  );
}