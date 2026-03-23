import PageShell from "@/components/page-shell";

export default function AboutPage() {
  return (
    <PageShell>
      <main className="mx-auto max-w-4xl px-6 py-16">

        {/* HERO */}
        <h1 className="font-editorial text-5xl leading-tight">
          I like living many lives in one.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          Hi, I’m Dee — a software engineer by day, and a curious explorer of everything else.
          I travel, grow plants, dance, cook, write, and pick up hobbies just to see where they take me.
        </p>

        {/* STORY */}
        <section className="mt-16 space-y-6">
          <h2 className="font-editorial text-3xl">My Story</h2>
          <p>
            I grew up in Mysore and now live in Fremont, California...
          </p>
          <p>
            Dee Unbound started as a place to document thoughts — now it’s a space to share them.
          </p>
        </section>

        {/* TRAVEL PHILOSOPHY */}
        <section className="mt-16 space-y-6">
          <h2 className="font-editorial text-3xl">Travel Philosophy</h2>
          <p>
            I have a complicated relationship with travel...
          </p>
        </section>

        {/* WHAT YOU’LL FIND */}
        <section className="mt-16 space-y-6">
          <h2 className="font-editorial text-3xl">What You’ll Find Here</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Practical travel systems</li>
            <li>Story-driven posts</li>
            <li>Honest reflections</li>
          </ul>
        </section>

        {/* BEYOND TRAVEL */}
        <section className="mt-16 space-y-6">
          <h2 className="font-editorial text-3xl">Beyond Travel</h2>
          <p>
            I have around 300 plants, a chiweenie, and a tendency to explore many interests...
          </p>
        </section>

        {/* QUICK FACTS */}
        <section className="mt-16 space-y-4">
          <h2 className="font-editorial text-3xl">Quick Facts</h2>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>🌎 Countries visited: [placeholder]</li>
            <li>🌿 Plants: ~300</li>
            <li>🐶 Dog: chiweenie</li>
          </ul>
        </section>

      </main>
    </PageShell>
  );
}