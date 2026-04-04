"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [travelOpen, setTravelOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setTravelOpen(false);
  };

  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)] relative z-50">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-8 py-6">

        {/* ── Left: desktop nav ── */}
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <Link href="/about" className="hover:text-[var(--text)] transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-[var(--text)] transition-colors">
            Blog
          </Link>

          {/* Travel dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 py-2 hover:text-[var(--text)] transition-colors"
            >
              Travel
              <span className="text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[220px] rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-lg">
                <Link href="/travel/essentials" className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]">
                  Essentials
                </Link>
                <Link href="/travel/destinations" className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]">
                  Destinations
                </Link>
                <Link href="/travel/stories" className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]">
                  Stories
                </Link>
                <Link href="/travel/photos" className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]">
                  Photos
                </Link>
              </div>
            </div>
          </div>

          <a href="/#plants" className="hover:text-[var(--text)] transition-colors">
            Plants
          </a>
        </nav>

        {/* ── Left: mobile hamburger (only visible on mobile) ── */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden justify-self-start"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        {/* ── Centre: logo ── */}
        <Link
          href="/"
          onClick={closeAll}
          className="font-editorial text-3xl italic tracking-tight text-[var(--text)] justify-self-center"
        >
          Dee Unbound
        </Link>

        {/* ── Right: contact placeholder ── */}
        <div className="justify-self-end">
          <button
            type="button"
            className="hidden rounded-full border border-[var(--border)] px-5 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--text)] hover:text-[var(--text)] md:block"
          >
            Contact
          </button>
        </div>

      </div>

      {/* ── Mobile menu panel ── */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[var(--border)] bg-[var(--bg)] px-8 pb-6 pt-4 shadow-md md:hidden">
          <nav className="flex flex-col gap-1 text-sm text-[var(--muted)]">

            <Link href="/about" onClick={closeAll} className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]">
              About
            </Link>

            <Link href="/blog" onClick={closeAll} className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]">
              Blog
            </Link>

            {/* Travel expandable */}
            <button
              type="button"
              onClick={() => setTravelOpen((o) => !o)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-black/5 hover:text-[var(--text)]"
            >
              Travel
              <span className={`text-xs transition-transform duration-200 ${travelOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {travelOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l border-[var(--border)] pl-4">
                <Link href="/travel/essentials" onClick={closeAll} className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]">Essentials</Link>
                <Link href="/travel/destinations" onClick={closeAll} className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]">Destinations</Link>
                <Link href="/travel/stories" onClick={closeAll} className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]">Stories</Link>
                <Link href="/travel/photos" onClick={closeAll} className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]">Photos</Link>
              </div>
            )}

            <a href="/#plants" onClick={closeAll} className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]">
              Plants
            </a>

            {/* Contact in mobile menu too */}
            <div className="mt-2 border-t border-[var(--border)] pt-3">
              <button type="button" className="w-full rounded-xl px-4 py-3 text-left hover:bg-black/5 hover:text-[var(--text)]">
                Contact
              </button>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}