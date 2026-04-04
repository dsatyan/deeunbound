import { allPosts } from "@/lib/posts";
import HeroCarousel from "@/components/HeroCarousel";
import BlogSlider from "@/components/BlogSlider";

// All posts sorted newest-first, passed to the blog slider
const sortedPosts = [...allPosts].sort((a, b) =>
  (b.date ?? "").localeCompare(a.date ?? "")
);

export default function Home() {
  return (
    <main>

      {/* ── 1. Photo carousel ── */}
      <HeroCarousel />

      {/* ── 2. Hero text — centred, generous padding, eyebrow label above ── */}
      <section className="border-b border-[var(--border)] px-8 py-20 text-center md:py-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
          Travel · Plants · Stories
        </p>
        <h1 className="font-editorial mx-auto max-w-3xl text-4xl font-semibold leading-[1.2] tracking-tight md:text-5xl lg:text-6xl">
          Honest travel guides and plant tips, from someone who does both.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
          Hi, I'm Dee. I write about the places I go and the plants I grow —
          with more curiosity than expertise, and no sponsored posts.
        </p>
      </section>

      {/* ── 3. Blog slider ── */}
      <BlogSlider posts={sortedPosts} />

    </main>
  );
}