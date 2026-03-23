import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        <Link
          href="/"
          className="font-editorial text-3xl italic tracking-tight text-[var(--text)]"
        >
          Dee Unbound
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <Link href="/about" className="hover:text-[var(--text)]">
            About
          </Link>
          <Link href="/blog" className="hover:text-[var(--text)]">
            Blog
          </Link>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 py-2 hover:text-[var(--text)]"
            >
              Travel
              <span className="text-xs">▾</span>
            </button>

            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[220px] rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-lg">
                <Link
                  href="/travel/essentials"
                  className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                >
                  Essentials
                </Link>
                <Link
                  href="/travel/destinations"
                  className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                >
                  Destinations
                </Link>
                <Link
                  href="/travel/stories"
                  className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                >
                  Stories
                </Link>
                <Link
                  href="/travel/photos"
                  className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                >
                  Photos
                </Link>
              </div>
            </div>
          </div>

          <a href="/#plants" className="hover:text-[var(--text)]">
            Plants
          </a>
        </nav>
      </div>
    </header>
  );
}