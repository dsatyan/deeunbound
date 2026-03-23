import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] px-6 py-8 text-sm text-[var(--muted)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 md:flex-row md:justify-between">
        
        {/* Left: Copyright */}
        <p className="tracking-wide">
          © {new Date().getFullYear()} Dee Unbound
        </p>

        {/* Right: Navigation */}
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-[var(--text)]">
            About
          </Link>
          <Link href="/blog" className="hover:text-[var(--text)]">
            Blog
          </Link>
          <Link href="/travel" className="hover:text-[var(--text)]">
            Travel
          </Link>
          <Link href="/plants" className="hover:text-[var(--text)]">
            Plants
          </Link>
        </div>
      </div>
    </footer>
  );
}