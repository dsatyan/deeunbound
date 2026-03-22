import Link from "next/link";

const posts = [
  {
    title: "What I Do at the Airport Gate That Saves Me Hours Later",
    slug: "gate-habits",
    description: "Turn waiting time into your biggest travel advantage.",
  },
];

export default function EssentialsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm text-teal-400 mb-2">TRAVEL</p>

      <h1 className="text-4xl font-bold mb-4">Essentials</h1>

      <p className="text-[var(--muted)] mb-10 max-w-2xl">
        Packing lists, planning systems, and tiny habits that make travel smoother.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            href={`/travel/essentials/${post.slug}`}
            className="rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">
              {post.title}
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}