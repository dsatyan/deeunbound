"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { DEFAULT_CATEGORIES, type Item, type Category } from "@/lib/packing-list-data";

const STORAGE_KEY  = "dee_packing_v3";
const TRIP_KEY     = "dee_packing_trip";
const COLLAPSE_KEY = "dee_packing_collapsed";

// ── Stat helpers — qty-aware ──────────────────────────────────────────────────
function calcStats(data: Category[]) {
  let packed = 0, total = 0;
  data.forEach(cat =>
    cat.items.forEach(item => {
      if (item.skipped) return;
      const q = Math.max(1, item.qty);
      total  += q;
      if (item.packed) packed += q;
    })
  );
  const pct = total > 0 ? Math.round((packed / total) * 100) : 0;
  return { packed, remaining: Math.max(0, total - packed), pct };
}

function catStats(cat: Category) {
  let packed = 0, total = 0;
  cat.items.forEach(item => {
    if (item.skipped) return;
    const q = Math.max(1, item.qty);
    total += q;
    if (item.packed) packed += q;
  });
  return { packed, total };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function PackingListClient() {
  const [data, setData]           = useState<Category[]>(() => JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)));
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});
  const [tripName, setTripName]   = useState("");
  const [infoOpen, setInfoOpen]   = useState(true);
  const [hydrated, setHydrated]   = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

  const nameRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const qtyRefs  = useRef<Record<number, HTMLInputElement | null>>({});

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData(JSON.parse(saved));
      const trip = localStorage.getItem(TRIP_KEY);
      if (trip) setTripName(trip);
      const col = localStorage.getItem(COLLAPSE_KEY);
      if (col) setCollapsed(JSON.parse(col));
    } catch (_) {}
    setHydrated(true);
  }, []);

  // Save whenever data / tripName / collapsed changes
  const doSave = useCallback(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(TRIP_KEY, tripName);
      localStorage.setItem(COLLAPSE_KEY, JSON.stringify(collapsed));
      setLastSaved(new Date());
    } catch (_) {}
  }, [data, tripName, collapsed, hydrated]);

  useEffect(() => { doSave(); }, [doSave]);

  const stats = calcStats(data);

  // ── Mutators ──────────────────────────────────────────────────────────────
  const togglePacked = (ci: number, ii: number) =>
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n[ci].items[ii].packed = !n[ci].items[ii].packed;
      if (n[ci].items[ii].packed) n[ci].items[ii].skipped = false;
      return n; });

  const toggleSkip = (ci: number, ii: number) =>
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n[ci].items[ii].skipped = !n[ci].items[ii].skipped;
      if (n[ci].items[ii].skipped) n[ci].items[ii].packed = false;
      return n; });

  const updateQty = (ci: number, ii: number, val: string) => {
    const num = Math.max(1, parseInt(val) || 1);
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n[ci].items[ii].qty = num; return n; });
  };

  const deleteItem = (ci: number, ii: number) =>
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n[ci].items.splice(ii, 1); return n; });

  const addItem = (ci: number) => {
    const nameEl = nameRefs.current[ci];
    const qtyEl  = qtyRefs.current[ci];
    const name   = nameEl?.value.trim();
    if (!name) return;
    const qty = Math.max(1, parseInt(qtyEl?.value || "1") || 1);
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n[ci].items.push({ name, qty, packed: false, skipped: false, custom: true });
      return n; });
    if (nameEl) nameEl.value = "";
    if (qtyEl)  qtyEl.value  = "1";
    nameEl?.focus();
  };

  const packCategory = (ci: number) =>
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n[ci].items.forEach((i: Item) => { if (!i.skipped) i.packed = true; });
      return n; });

  const packAll = () =>
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n.forEach((c: Category) => c.items.forEach((i: Item) => { if (!i.skipped) i.packed = true; }));
      return n; });

  const unpackAll = () =>
    setData(d => { const n = JSON.parse(JSON.stringify(d));
      n.forEach((c: Category) => c.items.forEach((i: Item) => { i.packed = false; }));
      return n; });

  const resetAll = () => {
    if (!confirm("Reset to default list? All custom items and changes will be removed.")) return;
    setData(JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)));
    setCollapsed({});
    setTripName("");
  };

  const toggleCollapse = (ci: number) =>
    setCollapsed(c => ({ ...c, [ci]: !c[ci] }));

  // ── Copy to clipboard ─────────────────────────────────────────────────────
  const copyList = () => {
    const lines: string[] = [];
    if (tripName) lines.push(`🧳 ${tripName} — Packing List`, "");
    else lines.push("🧳 Travel Packing List", "");
    data.forEach(cat => {
      lines.push(`${cat.icon} ${cat.cat}`);
      cat.items.forEach(item => {
        if (item.skipped) return;
        const check = item.packed ? "✓" : "☐";
        const qty   = item.qty > 1 ? ` ×${item.qty}` : "";
        lines.push(`  ${check} ${item.name}${qty}`);
      });
      lines.push("");
    });
    lines.push("— deeunbound.com/travel/essentials/packing-list");
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 2500);
    });
  };

  const printList = () => window.print();

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @media print {
          header, nav, footer, .no-print { display: none !important; }
          body { background: white; color: black; font-size: 12px; }
        }
      `}</style>

      <div className="mx-auto max-w-2xl px-4 py-10 pb-20">

        {/* Page header */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
          Travel Essentials
        </p>
        <h1 className="font-editorial text-4xl font-semibold leading-tight text-[var(--text)] md:text-5xl">
          Complete Travel<br className="hidden sm:block" /> Packing Checklist
        </h1>
        <p className="mt-3 mb-6 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
          Check off what's packed · skip items you don't need · add your own.
          Everything saves automatically in your browser.
        </p>

        {/* How saving works */}
        <div className="no-print mb-7 overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
          <button
            type="button"
            onClick={() => setInfoOpen(o => !o)}
            style={{ touchAction: "manipulation" }}
            className="flex w-full items-center justify-between px-5 py-4"
          >
            <span className="flex items-center gap-3 text-sm font-semibold text-[var(--text)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fdf4ef] text-sm">💾</span>
              How saving works
            </span>
            <span className={`text-xs text-[var(--muted)] transition-transform duration-200 ${infoOpen ? "rotate-180" : ""}`}>▾</span>
          </button>
          {infoOpen && (
            <div className="border-t border-[var(--border)] px-5 py-4 flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <p className="text-xs leading-relaxed text-[var(--muted)]">
                  <strong className="text-[var(--text)]">Per device, per browser.</strong>{" "}
                  Changes on your phone stay on your phone. Opening on your laptop starts fresh.
                  Safari and Chrome on the same phone store separately.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <p className="text-xs leading-relaxed text-[var(--muted)]">
                  <strong className="text-[var(--text)]">Browser storage, not a database.</strong>{" "}
                  Persistent until you deliberately clear it.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {[
                  { yes: true,  label: "Page refresh" },
                  { yes: true,  label: "Closing the tab" },
                  { yes: true,  label: "Closing browser" },
                  { yes: true,  label: "Restarting phone" },
                  { yes: false, label: "Clearing browser data" },
                  { yes: false, label: "Private / incognito" },
                ].map(({ yes, label }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs ${
                      yes
                        ? "border-[#c0dd97] bg-[#f0f7ee] text-[#3b6d11]"
                        : "border-[#f5c4b3] bg-[#fdf4ef] text-[#854f0b]"
                    }`}
                  >
                    {yes ? "✓" : "✕"} {label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Trip name */}
        <div className="mb-4 flex items-center gap-3">
          <input
            type="text"
            value={tripName}
            onChange={e => setTripName(e.target.value)}
            placeholder="Name this trip  e.g. Peru 2025"
            className="flex-1 rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none transition-colors"
          />
          <span className="no-print shrink-0 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted)]">
            {lastSaved
              ? `💾 Saved ${lastSaved.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
              : "💾 Auto-saved"}
          </span>
        </div>

        {/* Stats */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          {[
            { label: "Items packed", value: stats.packed,    green: true  },
            { label: "Remaining",    value: stats.remaining, green: false },
          ].map(({ label, value, green }) => (
            <div key={label} className="rounded-xl border border-[var(--border)] bg-white py-3 text-center">
              <p className={`font-editorial text-3xl font-semibold ${green ? "text-[#3b6d11]" : "text-[var(--text)]"}`}>
                {value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="mb-1.5 flex justify-between text-xs text-[var(--muted)]">
            <span>Packing progress</span>
            <span className="font-medium text-[var(--text)]">{stats.pct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--border)]">
            <div
              className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
              style={{ width: `${stats.pct}%` }}
            />
          </div>
          {stats.pct === 100 && (
            <p className="mt-2 text-center text-xs font-medium text-[#3b6d11]">
              🎉 All packed — have an amazing trip!
            </p>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3">
          {data.map((cat, ci) => {
            const isCollapsed = !!collapsed[ci];
            const cs = catStats(cat);

            return (
              <div key={ci} className="overflow-hidden rounded-xl border border-[var(--border)]">
                {/* Category header */}
                <div className="flex items-center bg-[var(--card)]">
                  <button
                    type="button"
                    onClick={() => toggleCollapse(ci)}
                    style={{ touchAction: "manipulation" }}
                    className="flex flex-1 items-center gap-2 px-4 py-3 text-left"
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="flex-1 text-sm font-semibold text-[var(--text)]">{cat.cat}</span>
                    <span className="text-xs text-[var(--muted)]">{cs.packed}/{cs.total} packed</span>
                    <span className={`ml-1 text-xs text-[var(--muted)] transition-transform duration-200 ${isCollapsed ? "" : "rotate-180"}`}>▾</span>
                  </button>
                  {!isCollapsed && (
                    <button
                      type="button"
                      onClick={() => packCategory(ci)}
                      style={{ touchAction: "manipulation" }}
                      className="no-print mr-3 shrink-0 rounded-lg border border-[var(--border)] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[var(--muted)] transition hover:border-[#3b6d11] hover:text-[#3b6d11]"
                    >
                      Pack all
                    </button>
                  )}
                </div>

                {!isCollapsed && (
                  <>
                    {/* Column labels */}
                    <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[#faf8f5] px-4 py-1.5">
                      <div className="w-6 shrink-0" />
                      <div className="flex-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">Item</div>
                      <div className="w-10 text-center text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">Qty</div>
                      <div className="no-print w-[72px]" />
                      <div className="no-print w-6" />
                    </div>

                    {/* Items */}
                    {cat.items.map((item, ii) => (
                      <div
                        key={ii}
                        className={`flex items-center gap-3 border-b border-[var(--border)] px-4 py-3 last:border-b-0 transition-colors ${
                          item.packed  ? "bg-[#f5fbf2]"
                          : item.skipped ? "bg-[#fdf8f6] opacity-60"
                          : "bg-white"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => togglePacked(ci, ii)}
                          style={{ touchAction: "manipulation" }}
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-bold transition-all ${
                            item.packed
                              ? "border-[#3b6d11] bg-[#3b6d11] text-white"
                              : "border-[#c8c0b8] bg-white hover:border-[#3b6d11]"
                          }`}
                        >
                          {item.packed && "✓"}
                        </button>

                        <span className={`flex-1 text-sm leading-snug ${
                          item.skipped ? "text-[var(--muted)] line-through"
                          : item.packed  ? "text-[#3b6d11]"
                          : "text-[var(--text)]"
                        }`}>
                          {item.name}
                          {item.custom && (
                            <span className="ml-1.5 rounded-full bg-[#fdf4ef] px-1.5 py-0.5 text-[9px] text-[var(--accent)]">
                              custom
                            </span>
                          )}
                        </span>

                        <input
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={e => updateQty(ci, ii, e.target.value)}
                          className="w-10 rounded-md border border-[var(--border)] bg-white px-1 py-1 text-center text-xs text-[var(--text)] focus:border-[var(--accent)] focus:outline-none"
                        />

                        <button
                          type="button"
                          onClick={() => toggleSkip(ci, ii)}
                          style={{ touchAction: "manipulation" }}
                          className={`no-print w-[72px] shrink-0 rounded-lg border px-2 py-1.5 text-[10px] font-medium transition-all ${
                            item.skipped
                              ? "border-[var(--accent)] bg-[#fdf4ef] text-[var(--accent)]"
                              : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          }`}
                        >
                          {item.skipped ? "↺ restore" : "skip"}
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteItem(ci, ii)}
                          style={{ touchAction: "manipulation" }}
                          className="no-print flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs text-[#d4c8c0] transition hover:text-[var(--accent)]"
                          aria-label="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    ))}

                    {/* Add item row */}
                    <div className="no-print flex items-center gap-2 border-t border-[var(--border)] bg-[#faf8f5] px-4 py-2">
                      <input
                        ref={el => { nameRefs.current[ci] = el; }}
                        type="text"
                        placeholder="Add item…"
                        onKeyDown={e => e.key === "Enter" && addItem(ci)}
                        className="flex-1 rounded-lg border border-[var(--border)] bg-white px-3 py-2 text-xs text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
                      />
                      <input
                        ref={el => { qtyRefs.current[ci] = el; }}
                        type="number"
                        min={1}
                        defaultValue={1}
                        placeholder="qty"
                        onKeyDown={e => e.key === "Enter" && addItem(ci)}
                        className="w-14 rounded-lg border border-[var(--border)] bg-white px-2 py-2 text-center text-xs text-[var(--text)] focus:border-[var(--accent)] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => addItem(ci)}
                        style={{ touchAction: "manipulation" }}
                        className="shrink-0 rounded-lg bg-[var(--text)] px-3 py-2 text-xs font-medium text-[var(--bg)] transition hover:opacity-80"
                      >
                        + Add
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="no-print mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={packAll} style={{ touchAction: "manipulation" }}
            className="rounded-full bg-[var(--text)] px-4 py-2.5 text-xs font-medium text-[var(--bg)] transition hover:opacity-80">
            ✓ Mark all packed
          </button>
          <button type="button" onClick={unpackAll} style={{ touchAction: "manipulation" }}
            className="rounded-full border border-[var(--border)] bg-white px-4 py-2.5 text-xs text-[var(--muted)] transition hover:border-[var(--text)] hover:text-[var(--text)]">
            ↺ Unpack all
          </button>
          <button type="button" onClick={copyList} style={{ touchAction: "manipulation" }}
            className={`rounded-full border px-4 py-2.5 text-xs transition ${
              copyState === "copied"
                ? "border-[#3b6d11] bg-[#f0f7ee] text-[#3b6d11]"
                : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[var(--text)] hover:text-[var(--text)]"
            }`}>
            {copyState === "copied" ? "✓ Copied!" : "⎘ Copy list"}
          </button>
          <button type="button" onClick={printList} style={{ touchAction: "manipulation" }}
            className="rounded-full border border-[var(--border)] bg-white px-4 py-2.5 text-xs text-[var(--muted)] transition hover:border-[var(--text)] hover:text-[var(--text)]">
            🖨 Print / Save PDF
          </button>
          <button type="button" onClick={resetAll} style={{ touchAction: "manipulation" }}
            className="rounded-full border border-[var(--border)] bg-white px-4 py-2.5 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
            ✕ Reset to default
          </button>
        </div>

        <p className="no-print mt-4 text-xs text-[var(--muted)]">
          💡 Use <strong>Copy list</strong> to share over WhatsApp or email · <strong>Print</strong> to save as PDF
        </p>

      </div>
    </>
  );
}