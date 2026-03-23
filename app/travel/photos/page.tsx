import PageShell from "@/components/page-shell";

export default function TravelPhotosPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Photos" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16 text-neutral-100">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
          Travel
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Photos</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          A visual archive for travel galleries, favorite frames, and curated
          photo collections.
        </p>
      </main>
    </PageShell>
  );
}
