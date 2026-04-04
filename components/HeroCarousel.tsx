"use client";

import Image from "next/image";
import { useState } from "react";
import { photoUrl } from "@/lib/photo-url";

// ── Config: replace publicIds with your real Cloudinary public IDs ────────────
// Each inner array is one "slide" — three photos shown side by side.
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
    { publicId: "travel/peru/MeAndLlama", alt: "Llama" },
  ],
];

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIdx((i) => (i + 1) % SLIDES.length);

  return (
    // Full viewport width — breaks out of any max-w container
    <div className="relative w-full overflow-hidden border-b border-[var(--border)]">

      {/* Track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {SLIDES.map((group, si) => (
          <div key={si} className="flex w-full flex-shrink-0">
            {group.map((photo, pi) => (
              <div
                key={pi}
                // h-[75vh] gives a tall viewport-relative height like the reference site.
                // The dividing lines between panes match the border colour of the rest of the site.
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

      {/* Prev arrow — floats outside the frame on the left, matching the reference */}
      <button
        onClick={prev}
        aria-label="Previous photos"
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg)]/80 text-[var(--muted)] backdrop-blur-sm transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
      >
        ←
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next photos"
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg)]/80 text-[var(--muted)] backdrop-blur-sm transition hover:bg-[var(--bg)] hover:text-[var(--text)]"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx
                ? "w-5 bg-[var(--text)]"
                : "w-1.5 bg-[var(--border)] hover:bg-[var(--muted)]"
            }`}
          />
        ))}
      </div>

    </div>
  );
}