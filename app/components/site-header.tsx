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
          <Link href="/projects" className="hover:text-[var(--text)]">
            Projects
          </Link>
          <Link href="/travel" className="hover:text-[var(--text)]">
            Travel
          </Link>
          <a href="/#plants" className="hover:text-[var(--text)]">
            Plants
          </a>
        </nav>
      </div>
    </header>
  );
}