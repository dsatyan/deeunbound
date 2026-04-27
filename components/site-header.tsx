"use client";

import Link from "next/link";
import { useState } from "react";
import { COUNTRIES } from "@/lib/destinations-data";

const tapStyle: React.CSSProperties = {
  touchAction: "manipulation",
  WebkitTapHighlightColor: "transparent",
};

export default function SiteHeader() {
  const [menuOpen, setMenuOpen]           = useState(false);
  const [travelOpen, setTravelOpen]       = useState(false);
  const [destinationsOpen, setDestOpen]   = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setTravelOpen(false);
    setDestOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-[var(--border)] bg-[var(--bg)]">

      {/* ── MOBILE header bar ── */}
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          style={tapStyle}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <Link
          href="/"
          onClick={closeAll}
          style={tapStyle}
          className="absolute left-1/2 -translate-x-1/2 font-editorial text-2xl italic tracking-tight text-[var(--text)]"
        >
          Dee Unbound
        </Link>

        <Link
          href="/contact"
          style={tapStyle}
          className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
        >
          Contact
        </Link>
      </div>

      {/* ── DESKTOP header bar ── */}
      <div className="mx-auto hidden max-w-7xl grid-cols-3 items-center px-8 py-6 md:grid">

        {/* Left: nav */}
        <nav className="flex items-center gap-8 text-sm text-[var(--muted)]">
          <Link href="/about" className="transition-colors hover:text-[var(--text)]">About</Link>
          <Link href="/blog"  className="transition-colors hover:text-[var(--text)]">Blog</Link>

          {/* Travel dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 py-2 transition-colors hover:text-[var(--text)]"
            >
              Travel <span className="text-xs">▾</span>
            </button>

            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[220px] rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-lg">

                <Link
                  href="/travel/essentials"
                  className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                >
                  Essentials
                </Link>

                {/* Destinations — has its own hover sub-panel */}
                <div className="group/dest relative">
                  <div className="flex items-center justify-between rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)] cursor-default">
                    <Link
                      href="/travel/destinations"
                      className="flex-1 transition-colors hover:text-[var(--text)]"
                    >
                      Destinations
                    </Link>
                    <span className="text-xs -rotate-90">▾</span>
                  </div>

                  {/* Country sub-panel — appears to the right */}
                  <div className="invisible absolute left-full top-0 z-50 pl-1 opacity-0 transition-all duration-150 group-hover/dest:visible group-hover/dest:opacity-100">
                    <div className="min-w-[200px] rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-lg">
                      <p className="px-3 pb-1.5 pt-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                        Countries
                      </p>
                      {COUNTRIES.map((country) => (
                        <Link
                          key={country.slug}
                          href={`/travel/destinations/${country.slug}`}
                          className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                        >
                          <span className="text-base">{country.emoji}</span>
                          <span>{country.name}</span>
                        </Link>
                      ))}
                      <div className="mt-1 border-t border-[var(--border)] pt-1">
                        <Link
                          href="/travel/destinations"
                          className="block rounded-xl px-3 py-2 text-xs text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                        >
                          View all destinations →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

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

          <a href="/#plants" className="transition-colors hover:text-[var(--text)]">Plants</a>
        </nav>

        {/* Centre: logo */}
        <Link
          href="/"
          className="justify-self-center font-editorial text-3xl italic tracking-tight text-[var(--text)]"
        >
          Dee Unbound
        </Link>

        {/* Right: contact */}
        <Link
          href="/contact"
          className="justify-self-end rounded-full border border-[var(--border)] px-5 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--text)] hover:text-[var(--text)]"
        >
          Contact
        </Link>
      </div>

      {/* ── Mobile menu panel ── */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-[var(--border)] bg-[var(--bg)] px-6 pb-6 pt-4 shadow-md md:hidden">
          <nav className="flex flex-col gap-1 text-sm text-[var(--muted)]">

            <Link href="/about" onClick={closeAll} style={tapStyle} className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]">
              About
            </Link>
            <Link href="/blog" onClick={closeAll} style={tapStyle} className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]">
              Blog
            </Link>

            {/* Travel expandable */}
            <button
              type="button"
              onClick={() => setTravelOpen((o) => !o)}
              style={tapStyle}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-black/5 hover:text-[var(--text)]"
            >
              Travel
              <span className={`text-xs transition-transform duration-200 ${travelOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {travelOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l border-[var(--border)] pl-4">
                <Link href="/travel/essentials" onClick={closeAll} style={tapStyle} className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]">
                  Essentials
                </Link>

                {/* Destinations — expandable on mobile to show countries */}
                <button
                  type="button"
                  onClick={() => setDestOpen((o) => !o)}
                  style={tapStyle}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-left hover:bg-black/5 hover:text-[var(--text)]"
                >
                  Destinations
                  <span className={`text-xs transition-transform duration-200 ${destinationsOpen ? "rotate-180" : ""}`}>▾</span>
                </button>

                {destinationsOpen && (
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-[var(--border)] pl-3">
                    {COUNTRIES.map((country) => (
                      <Link
                        key={country.slug}
                        href={`/travel/destinations/${country.slug}`}
                        onClick={closeAll}
                        style={tapStyle}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-black/5 hover:text-[var(--text)]"
                      >
                        <span>{country.emoji}</span>
                        <span>{country.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/travel/destinations"
                      onClick={closeAll}
                      style={tapStyle}
                      className="rounded-lg px-3 py-2 text-xs hover:bg-black/5 hover:text-[var(--text)]"
                    >
                      View all →
                    </Link>
                  </div>
                )}

                <Link href="/travel/stories" onClick={closeAll} style={tapStyle} className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]">
                  Stories
                </Link>
                <Link href="/travel/photos" onClick={closeAll} style={tapStyle} className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]">
                  Photos
                </Link>
              </div>
            )}

            <a href="/#plants" onClick={closeAll} style={tapStyle} className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]">
              Plants
            </a>

            <div className="mt-2 border-t border-[var(--border)] pt-3">
              <Link href="/contact" onClick={closeAll} style={tapStyle} className="block rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}