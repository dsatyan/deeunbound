"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { photoUrl } from "@/lib/photo-url";

// On desktop: each inner array shows 3 photos side by side.
// On mobile:  every photo becomes its own individual slide.
const SLIDES: { publicId: string; alt: string }[][] = [
  [
    { publicId: "travel/switzerland/GimelwaldStanding", alt: "Swiss Alps" },
    { publicId: "travel/southkorea/NorthGyeongsang", alt: "South Korea" },
    { publicId: "travel/peru/MachiPichu", alt: "Machu Picchu" },
  ],
  [
    { publicId: "travel/france/Paris_Mall", alt: "Paris Mall" },
    { publicId: "travel/greece/Greece_yellow_jacket_sitting", alt: "Santorini sunset" },
    { publicId: "travel/france/Eiffel", alt: "Eiffel Tower" },
  ],
  [
    { publicId: "travel/Indonesia/LakeBeratanQueen", alt: "Lake Beratan Queen" },
    { publicId: "travel/new-zealand/MilfordFalls1", alt: "Milford Falls" },
    { publicId: "travel/Indonesia/LakeBeratanTemple", alt: "Lake Beratan Temple" },
  ],
  [
    { publicId: "travel/southkorea/Seoul_on_the_street", alt: "Seoul street" },
    { publicId: "travel/usa/california/ModestoAlmondBlossom", alt: "Almond blossoms" },
    { publicId: "travel/southkorea/Busan_Yellow_train_jump_2", alt: "Yellow train jump" },
  ],
  [
    { publicId: "travel/france/Louvre", alt: "Louvre" },
    { publicId: "travel/usa/california/LivermoreVineyard", alt: "Vineyard" },
    { publicId: "travel/hungary/BudhapestPalace", alt: "Budapest Palace" },
  ],
  [
    { publicId: "travel/turkey/Istanbul_making_coffee", alt: "Istanbul coffee" },
    { publicId: "travel/taiwan/WanshouTaiwan", alt: "Wanshou Temple" },
    { publicId: "travel/southkorea/AhopsanForestBusan", alt: "Ahopsan Forest" },
  ],
];

// Flatten for mobile — every photo is its own slide
const MOBILE_SLIDES = SLIDES.flat();
const DESKTOP_TOTAL = SLIDES.length;
const MOBILE_TOTAL = MOBILE_SLIDES.length;

// touch-action: manipulation removes the 300ms iOS tap delay without
// suppressing pointer events the way onPointerUp can be.
const tapStyle = { touchAction: "manipulation" } as const;

export default function HeroCarousel() {
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prevDesktop = () =>
    setDesktopIdx((i) => (i - 1 + DESKTOP_TOTAL) % DESKTOP_TOTAL);
  const nextDesktop = () =>
    setDesktopIdx((i) => (i + 1) % DESKTOP_TOTAL);

  const prevMobile = () =>
    setMobileIdx((i) => (i - 1 + MOBILE_TOTAL) % MOBILE_TOTAL);
  const nextMobile = () =>
    setMobileIdx((i) => (i + 1) % MOBILE_TOTAL);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (
    e: React.TouchEvent,
    onLeft: () => void,
    onRight: () => void
  ) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? onRight() : onLeft();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden border-b border-[var(--border)]">

      {/* ── MOBILE carousel (hidden on md+) ── */}
      <div
        className="relative md:hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={(e) => onTouchEnd(e, prevMobile, nextMobile)}
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
        >
          {MOBILE_SLIDES.map((photo, i) => (
            <div
              key={i}
              className="relative h-[70vh] w-full flex-shrink-0 bg-[var(--surface)]"
            >
              <Image
                src={photoUrl(photo.publicId, "w_800,h_1200,c_fill,q_auto,f_auto")}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Mobile arrows — z-20 so they sit above the image layer */}
        <button
          onClick={prevMobile}
          style={tapStyle}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg)]/80 text-lg text-[var(--muted)] backdrop-blur-sm"
        >
          ←
        </button>
        <button
          onClick={nextMobile}
          style={tapStyle}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg)]/80 text-lg text-[var(--muted)] backdrop-blur-sm"
        >
          →
        </button>

        {/* Mobile dots */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
          {MOBILE_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIdx(i)}
              style={tapStyle}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === mobileIdx
                  ? "w-5 bg-[var(--text)]"
                  : "w-1.5 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP carousel (hidden below md) ── */}
      <div
        className="relative hidden md:block"
        onTouchStart={onTouchStart}
        onTouchEnd={(e) => onTouchEnd(e, prevDesktop, nextDesktop)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${desktopIdx * 100}%)` }}
        >
          {SLIDES.map((group, si) => (
            <div key={si} className="flex w-full flex-shrink-0">
              {group.map((photo, pi) => (
                <div
                  key={pi}
                  className="relative h-[75vh] flex-1 border-r border-[var(--border)] last:border-r-0 bg-[var(--surface)]"
                >
                  <Image
                    src={photoUrl(photo.publicId, "w_900,h_1200,c_fill,q_auto,f_auto")}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="33vw"
                    priority={si === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop arrows */}
        <button
          onClick={prevDesktop}
          style={tapStyle}
          aria-label="Previous photos"
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg)]/80 text-lg text-[var(--muted)] backdrop-blur-sm transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
        >
          ←
        </button>
        <button
          onClick={nextDesktop}
          style={tapStyle}
          aria-label="Next photos"
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg)]/80 text-lg text-[var(--muted)] backdrop-blur-sm transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
        >
          →
        </button>

        {/* Desktop dots */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopIdx(i)}
              style={tapStyle}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === desktopIdx
                  ? "w-5 bg-[var(--text)]"
                  : "w-1.5 bg-[var(--border)] hover:bg-[var(--muted)]"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}