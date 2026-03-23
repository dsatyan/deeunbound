import Link from "next/link";
import PageShell from "@/components/page-shell";

export default function TravelPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Travel" }]}>
      <main className="mx-auto max-w-6xl px-8 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          Travel
        </p>

        <h1 className="mt-4 font-editorial text-5xl font-semibold leading-tight">
          Travel
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted)]">
          A home for travel planning, destination guides, stories, and photos.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/travel/essentials"
            className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 transition hover:bg-[var(--surface)]"
          >
            <h2 className="font-editorial text-3xl font-semibold">
              Essentials
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Packing lists, planning notes, visas, gear, and travel basics.
            </p>
          </Link>

          <Link
            href="/travel/destinations"
            className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 transition hover:bg-[var(--surface)]"
          >
            <h2 className="font-editorial text-3xl font-semibold">
              Destinations
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Country and city pages, itineraries, and place-based guides.
            </p>
          </Link>

          <Link
            href="/travel/stories"
            className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 transition hover:bg-[var(--surface)]"
          >
            <h2 className="font-editorial text-3xl font-semibold">
              Stories
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Personal travel moments, reflections, and narrative posts.
            </p>
          </Link>

          <Link
            href="/travel/photos"
            className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 transition hover:bg-[var(--surface)]"
          >
            <h2 className="font-editorial text-3xl font-semibold">
              Photos
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Photo collections, visual highlights, and travel galleries.
            </p>
          </Link>
        </div>
      </main>
    </PageShell>
  );
}