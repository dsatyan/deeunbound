"use client";

import Link from "next/link";
import { useState } from "react";

const tapStyle = { touchAction: "manipulation" } as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [travelOpen, setTravelOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setTravelOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-5 md:px-8 md:py-6">

        {/* ── Left: hamburger (mobile) / nav (desktop) ── */}
        <div className="flex items-center">

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <Link href="/about" className="transition-colors hover:text-[var(--text)]">
              About
            </Link>
            <Link href="/blog" className="transition-colors hover:text-[var(--text)]">
              Blog
            </Link>

            <div className="group relative">
              <button
                type="button"
                style={tapStyle}
                className="flex items-center gap-1 py-2 transition-colors hover:text-[var(--text)]"
              >
                Travel <span className="text-xs">▾</span>
              </button>
              <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="min-w-[220px] rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-lg">
                  {[
                    ["Essentials", "/travel/essentials"],
                    ["Destinations", "/travel/destinations"],
                    ["Stories", "/travel/stories"],
                    ["Photos", "/travel/photos"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-xl px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-black/5 hover:text-[var(--text)]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="/#plants" className="transition-colors hover:text-[var(--text)]">
              Plants
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            style={tapStyle}
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[var(--text)] transition-all duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* ── Centre: logo ── */}
        <Link
          href="/"
          onClick={closeAll}
          style={tapStyle}
          className="justify-self-center font-editorial text-2xl italic tracking-tight text-[var(--text)] md:text-3xl"
        >
          Dee Unbound
        </Link>

        {/* ── Right: Contact — visible on BOTH mobile and desktop ── */}
        <div className="justify-self-end">
          <button
            type="button"
            style={tapStyle}
            className="rounded-full border border-[var(--border)] px-4 py-1.5 text-xs text-[var(--muted)] transition hover:border-[var(--text)] hover:text-[var(--text)] md:px-5 md:py-2 md:text-sm"
          >
            Contact
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ── */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[var(--border)] bg-[var(--bg)] px-6 pb-6 pt-4 shadow-md md:hidden">
          <nav className="flex flex-col gap-1 text-sm text-[var(--muted)]">

            <Link
              href="/about"
              onClick={closeAll}
              style={tapStyle}
              className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]"
            >
              About
            </Link>

            <Link
              href="/blog"
              onClick={closeAll}
              style={tapStyle}
              className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]"
            >
              Blog
            </Link>

            <button
              type="button"
              onClick={() => setTravelOpen((o) => !o)}
              style={tapStyle}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-black/5 hover:text-[var(--text)]"
            >
              Travel
              <span className={`text-xs transition-transform duration-200 ${travelOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {travelOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l border-[var(--border)] pl-4">
                {[
                  ["Essentials", "/travel/essentials"],
                  ["Destinations", "/travel/destinations"],
                  ["Stories", "/travel/stories"],
                  ["Photos", "/travel/photos"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeAll}
                    style={tapStyle}
                    className="rounded-xl px-3 py-2.5 hover:bg-black/5 hover:text-[var(--text)]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <a
              href="/#plants"
              onClick={closeAll}
              style={tapStyle}
              className="rounded-xl px-4 py-3 hover:bg-black/5 hover:text-[var(--text)]"
            >
              Plants
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}