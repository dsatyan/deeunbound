// app/travel/essentials/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// This page is fully automatic — just add a new folder under
// app/travel/essentials/ with a page.tsx that exports `postMeta`,
// and it will appear here on the next build. No config needed.
// ─────────────────────────────────────────────────────────────────────────────

import fs from "fs";
import path from "path";
import Link from "next/link";
import PageShell from "@/components/page-shell";

// ── Type every post must satisfy ─────────────────────────────────────────────
export type PostMeta = {
  title: string;
  description: string;
  emoji?: string;        // shown on the card, e.g. "✈️"
  readingTime?: string;  // e.g. "6 min read"
  tags?: string[];       // e.g. ["connectivity", "gear"]
};

// ── Discover posts at build time ─────────────────────────────────────────────
async function getPosts(): Promise<Array<PostMeta & { slug: string }>> {
  const essentialsDir = path.join(
    process.cwd(),
    "app",
    "travel",
    "essentials"
  );

  // Find every direct subfolder that contains a page.tsx
  const slugs = fs
    .readdirSync(essentialsDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(essentialsDir, entry.name, "page.tsx"))
    )
    .map((entry) => entry.name);

  // Dynamically import each post's metadata
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        // Next.js resolves these at build time via its module bundler
        const mod = await import(
          `@/app/travel/essentials/${slug}/page`
        );
        const meta: PostMeta = mod.postMeta ?? {
          title: slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c: string) => c.toUpperCase()),
          description: "",
        };
        return { slug, ...meta };
      } catch {
        // If a folder exists but has no postMeta, fall back gracefully
        return {
          slug,
          title: slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c: string) => c.toUpperCase()),
          description: "",
        };
      }
    })
  );

  return posts;
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function EssentialsPage() {
  const posts = await getPosts();

  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Essentials" },
      ]}
    >
      <main className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Travel · Essentials
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--text)]">
            Essentials
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Packing lists, planning systems, and tiny habits that make travel
            smoother.
          </p>
          <div className="mt-6 h-px w-16 bg-[var(--accent)]" />
        </div>

        {/* Post count */}
        <p className="mb-6 text-sm text-[var(--muted)]">
          {posts.length} {posts.length === 1 ? "guide" : "guides"}
        </p>

        {/* Grid */}
        {posts.length === 0 ? (
          <p className="text-[var(--muted)]">No posts yet.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
    </PageShell>
  );
}

// ── Card component ────────────────────────────────────────────────────────────
function PostCard({ post }: { post: PostMeta & { slug: string } }) {
  return (
    <Link
      href={`/travel/essentials/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-200 hover:border-[var(--accent)] hover:shadow-md"
    >
      {/* Emoji */}
      {post.emoji && (
        <span className="mb-4 text-3xl">{post.emoji}</span>
      )}

      {/* Title */}
      <h2 className="font-serif text-xl font-semibold leading-snug text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
        {post.title}
      </h2>

      {/* Description */}
      {post.description && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {post.description}
        </p>
      )}

      {/* Footer row */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--surface)] px-3 py-0.5 text-xs text-[var(--muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
          {post.readingTime && <span>{post.readingTime}</span>}
          <span className="translate-x-0 transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}