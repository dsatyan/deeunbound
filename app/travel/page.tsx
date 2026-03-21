export default function TravelPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-neutral-100">
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
        Travel
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Travel
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
        A home for travel planning, destination guides, stories, and photos.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <a
          href="/travel/essentials"
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
        >
          <h2 className="text-2xl font-semibold">Essentials</h2>
          <p className="mt-3 text-neutral-300">
            Packing lists, planning notes, visas, gear, and travel basics.
          </p>
        </a>

        <a
          href="/travel/destinations"
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
        >
          <h2 className="text-2xl font-semibold">Destinations</h2>
          <p className="mt-3 text-neutral-300">
            Country and city pages, itineraries, and place-based guides.
          </p>
        </a>

        <a
          href="/travel/stories"
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
        >
          <h2 className="text-2xl font-semibold">Stories</h2>
          <p className="mt-3 text-neutral-300">
            Personal travel moments, reflections, and narrative posts.
          </p>
        </a>

        <a
          href="/travel/photos"
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
        >
          <h2 className="text-2xl font-semibold">Photos</h2>
          <p className="mt-3 text-neutral-300">
            Photo collections, visual highlights, and travel galleries.
          </p>
        </a>
      </div>
    </main>
  );
}