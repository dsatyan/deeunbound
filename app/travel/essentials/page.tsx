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

      <p className="text-neutral-400 mb-10 max-w-2xl">
        Packing lists, planning systems, and tiny habits that make travel smoother.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/travel/essentials/${post.slug}`}
            className="rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-neutral-400 text-sm">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}