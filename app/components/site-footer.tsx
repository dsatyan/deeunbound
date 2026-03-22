import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-8 py-8 text-sm text-[var(--muted)]">
        <span>© 2026 Dee Unbound</span>
        <span>·</span>
        <Link href="/travel" className="underline hover:text-[var(--text)]">
          Travel
        </Link>
        <span>·</span>
        <Link href="/travel/essentials" className="underline hover:text-[var(--text)]">
          Essentials
        </Link>
      </div>
    </footer>
  );
}