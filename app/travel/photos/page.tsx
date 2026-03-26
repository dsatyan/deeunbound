"use client";

// app/travel/photos/page.tsx
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import PageShell from "@/components/page-shell";
import { PHOTOS, COUNTRIES, type Photo } from "@/lib/photos-data";
import { photoUrl, photoThumb } from "@/lib/photo-url";

export default function TravelPhotosPage() {
  const [activeCountry, setActiveCountry] = useState<string>("All");
  const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);
  const [modalIndex, setModalIndex] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Filtered photos based on active country
  const filtered =
    activeCountry === "All"
      ? PHOTOS
      : PHOTOS.filter((p) => p.country === activeCountry);

  // Open modal
  const openModal = useCallback(
    (photo: Photo) => {
      const idx = filtered.findIndex((p) => p.publicId === photo.publicId);
      setModalPhoto(photo);
      setModalIndex(idx);
      setImageLoaded(false);
      document.body.style.overflow = "hidden";
    },
    [filtered]
  );

  // Close modal
  const closeModal = useCallback(() => {
    setModalPhoto(null);
    document.body.style.overflow = "";
  }, []);

  // Arrow navigation
  const goNext = useCallback(() => {
    if (modalIndex === null) return;
    if (modalIndex === filtered.length - 1) {
      closeModal();
    } else {
      setModalIndex(modalIndex + 1);
      setImageLoaded(false);
    }
  }, [modalIndex, filtered.length, closeModal]);

  const goPrev = useCallback(() => {
    if (modalIndex === null) return;
    if (modalIndex === 0) {
      closeModal();
    } else {
      setModalIndex(modalIndex - 1);
      setImageLoaded(false);
    }
  }, [modalIndex, closeModal]);

  // Keyboard navigation
  useEffect(() => {
    if (!modalPhoto) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalPhoto, closeModal, goNext, goPrev]);

  // Close modal when filter changes
  useEffect(() => {
    closeModal();
  }, [activeCountry, closeModal]);

  // Countries that actually have photos (don't show empty filters)
  const activeCountries = COUNTRIES.filter(
    (c) => c === "All" || PHOTOS.some((p) => p.country === c)
  );

  return (
    <PageShell
      breadcrumbs={[
        { label: "Travel", href: "/travel" },
        { label: "Photos" },
      ]}
    >
      <main className="mx-auto max-w-7xl px-6 py-16">

        {/* ── Header ── */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Travel · Photos
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-[var(--text)]">
            Photos
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-[var(--muted)]">
            {PHOTOS.length} photos across {activeCountries.length - 1} countries.
          </p>
        </div>

        {/* ── Filter bar ── */}
        <div
          ref={filterRef}
          className="sticky top-0 z-10 -mx-6 mb-10 overflow-x-auto bg-[var(--bg)]/90 px-6 py-3 backdrop-blur-sm border-b border-[var(--border)]"
        >
          <div className="flex gap-2 min-w-max">
            {activeCountries.map((country) => (
              <button
                key={country}
                onClick={() => setActiveCountry(country)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 whitespace-nowrap ${
                  activeCountry === country
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {country}
                {country !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    {PHOTOS.filter((p) => p.country === country).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Photo grid ── */}
        {filtered.length === 0 ? (
          <div className="flex items-center justify-center py-32 text-[var(--muted)]">
            <p>No photos yet for {activeCountry}.</p>
          </div>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((photo) => (
              <PhotoCard
                key={photo.publicId}
                photo={photo}
                onClick={() => openModal(photo)}
              />
            ))}
          </div>
        )}
      </main>

      {/* ── Modal ── */}
      {modalPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Modal content — stop click propagation so clicking inside doesn't close */}
          <div
            className="relative mx-4 flex w-full max-w-5xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1.5 z-10"
            >
              <span>Close</span>
              <span className="text-xs opacity-60">ESC</span>
            </button>

            {/* Counter */}
            <div className="absolute -top-10 left-0 text-white/50 text-sm">
              {modalIndex + 1} / {filtered.length}
            </div>

            {/* Image area */}
            <div className="relative flex items-center justify-center">

              {/* Prev arrow */}
              <button
                onClick={goPrev}
                className="absolute left-0 z-10 flex h-12 w-12 -translate-x-16 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 transition-all"
                aria-label="Previous photo"
              >
                ←
              </button>

              {/* Photo */}
              <div className="relative max-h-[75vh] w-full overflow-hidden rounded-2xl bg-neutral-900">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/70" />
                  </div>
                )}
                <Image
                  key={modalPhoto.publicId}
                  src={photoUrl(modalPhoto.publicId)}
                  alt={modalPhoto.location}
                  width={1200}
                  height={800}
                  className={`max-h-[75vh] w-full object-contain transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  priority
                  unoptimized
                />
              </div>

              {/* Next arrow */}
              <button
                onClick={goNext}
                className="absolute right-0 z-10 flex h-12 w-12 translate-x-16 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 transition-all"
                aria-label="Next photo"
              >
                →
              </button>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="font-medium text-white">{modalPhoto.location}</p>
              {modalPhoto.caption && (
                <p className="mt-1 text-sm text-white/60">{modalPhoto.caption}</p>
              )}
              <p className="mt-1 text-xs text-white/30">
                ← → arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}

// ── Photo card ────────────────────────────────────────────────────────────────
function PhotoCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <div
      className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
      onClick={onClick}
    >
      {/* Thumbnail image */}
      <Image
        src={photoThumb(photo.publicId)}
        alt={photo.location}
        width={600}
        height={400}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        unoptimized
      />

      {/* Hover overlay — location shown on hover */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="w-full p-4">
          <p className="text-sm font-medium text-white">{photo.location}</p>
          {photo.caption && (
            <p className="mt-0.5 text-xs text-white/70 line-clamp-1">
              {photo.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}