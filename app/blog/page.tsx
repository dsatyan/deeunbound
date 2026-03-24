// app/blog/page.tsx
import Link from "next/link";
import PageShell from "@/components/page-shell";
import { allPosts, type Post } from "@/lib/posts";

// Sort newest first (falls back to original order if no dates set)
const posts = [...allPosts].sort((a, b) =>
  (b.date ?? "").localeCompare(a.date ?? "")
);

export default function BlogPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-5xl px-8 py-20">

        {/* Header */}
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
          Blog
        </p>
        <h1 className="mt-4 font-editorial text-5xl font-semibold leading-tight text-[var(--text)]">
          Writing, notes, and travel systems
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted)]">
          A home for travel notes, practical guides, reflections, plant logs,
          and the occasional rabbit hole.
        </p>

        {/* Post count */}
        <p className="mt-10 text-sm text-[var(--muted)]">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>

        {/* Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

      </main>
    </PageShell>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={post.slug}
      className="group flex flex-col rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md"
    >
      {/* Category eyebrow */}
      <p className="text-sm text-[var(--muted)]">{post.category}</p>

      {/* Title */}
      <h2 className="mt-3 font-editorial text-3xl font-semibold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
        {post.title}
      </h2>

      {/* Description */}
      <p className="mt-4 flex-1 text-base leading-7 text-[var(--muted)]">
        {post.description}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-0.5 text-xs text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
          {post.readingTime && <span>{post.readingTime} </span>}
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}