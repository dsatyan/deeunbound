"use client";

import { useState } from "react";

export default function AboutHeroPhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <div
      className={`h-52 w-52 overflow-hidden rounded-full border-4 border-[var(--card)] shadow-lg ring-1 ring-[var(--border)] md:h-64 md:w-64 ${
        imageMissing ? "placeholder-photo" : ""
      }`}
    >
      {!imageMissing ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImageMissing(true)}
        />
      ) : null}

      <style jsx>{`
        .placeholder-photo {
          background: var(--card);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 64px;
        }
      `}</style>
    </div>
  );
}
