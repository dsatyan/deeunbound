"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { photoUrl } from "@/lib/photo-url";

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

const MOBILE_SLIDES = SLIDES.flat();
const DESKTOP_TOTAL = SLIDES.length;
const MOBILE_TOTAL = MOBILE_SLIDES.length;

const btnStyle: React.CSSProperties = {
  touchAction: "manipulation",
  WebkitTapHighlightColor: "transparent",
  // Ensure nothing can sit on top
  position: "absolute",
  zIndex: 30,
};

export default function HeroCarousel() {
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prevDesktop = () => setDesktopIdx((i) => (i - 1 + DESKTOP_TOTAL) % DESKTOP_TOTAL);
  const nextDesktop = () => setDesktopIdx((i) => (i + 1) % DESKTOP_TOTAL);
  const prevMobile = () => setMobileIdx((i) => (i - 1 + MOBILE_TOTAL) % MOBILE_TOTAL);
  const nextMobile = () => setMobileIdx((i) => (i + 1) % MOBILE_TOTAL);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent, onLeft: () => void, onRight: () => void) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? onRight() : onLeft();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const arrowClasses = "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)]/80 text-lg text-[var(--muted)] backdrop-blur-sm top-1/2 -translate-y-1/2";

  return (
    <div className="border-b border-[var(--border)]">

      {/* ── MOBILE (hidden on md+) ── */}
      {/* Outer wrapper is NOT overflow-hidden so absolute buttons aren't clipped */}
      <div
        className="relative md:hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={(e) => onTouchEnd(e, prevMobile, nextMobile)}
      >
        {/* The overflow-hidden is only on the track wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
          >
            {MOBILE_SLIDES.map((photo, i) => (
              <div key={i} className="relative h-[70vh] w-full flex-shrink-0 bg-[var(--surface)]">
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
        </div>

        {/* Arrows — outside overflow-hidden, inside relative parent */}
        <button
          type="button"
          onClick={prevMobile}
          style={{ ...btnStyle, left: "12px" }}
          className={arrowClasses}
          aria-label="Previous photo"
        >
          ←
        </button>
        <button
          type="button"
          onClick={nextMobile}
          style={{ ...btnStyle, right: "12px" }}
          className={arrowClasses}
          aria-label="Next photo"
        >
          →
        </button>

        {/* Dots */}
        <div
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5"
          style={{ zIndex: 30 }}
        >
          {MOBILE_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setMobileIdx(i)}
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === mobileIdx ? "w-5 bg-[var(--text)]" : "w-1.5 bg-[var(--border)]"}`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP (hidden below md) ── */}
      <div
        className="relative hidden md:block"
        onTouchStart={onTouchStart}
        onTouchEnd={(e) => onTouchEnd(e, prevDesktop, nextDesktop)}
      >
        <div className="overflow-hidden">
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
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prevDesktop}
          style={{ ...btnStyle, left: "16px" }}
          className={arrowClasses}
          aria-label="Previous photos"
        >
          ←
        </button>
        <button
          type="button"
          onClick={nextDesktop}
          style={{ ...btnStyle, right: "16px" }}
          className={arrowClasses}
          aria-label="Next photos"
        >
          →
        </button>

        {/* Dots */}
        <div
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"
          style={{ zIndex: 30 }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setDesktopIdx(i)}
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === desktopIdx ? "w-5 bg-[var(--text)]" : "w-1.5 bg-[var(--border)] hover:bg-[var(--muted)]"}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}