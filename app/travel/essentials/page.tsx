import Link from "next/link";
import PageShell from "@/components/page-shell";

const posts = [
  {
    title: "What I Do at the Airport Gate That Saves Me Hours Later",
    slug: "gate-habits",
    description: "Turn waiting time into your biggest travel advantage.",
  },
];

export default function EssentialsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="mb-4 text-4xl font-bold">Essentials</h1>

        <p className="mb-10 max-w-2xl text-[var(--muted)]">
          Packing lists, planning systems, and tiny habits that make travel
          smoother.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/travel/essentials/${post.slug}`}
              className="rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>

              <p className="mt-2 text-sm text-[var(--muted)]">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
