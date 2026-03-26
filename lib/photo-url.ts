// lib/photo-url.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for Cloudinary base URL.
// To migrate to a different CDN: change NEXT_PUBLIC_PHOTO_BASE_URL in .env
// Nothing else in the codebase needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export function photoUrl(publicId: string, transforms = "w_1200,q_auto,f_auto"): string {
  const base =
    process.env.NEXT_PUBLIC_PHOTO_BASE_URL ??
    "https://res.cloudinary.com/dq2owa4xv/image/upload";
  return `${base}/${transforms}/${publicId}`;
}

// Thumbnail — smaller, loads fast in the grid
export function photoThumb(publicId: string): string {
  return photoUrl(publicId, "w_600,h_400,c_fill,q_auto,f_auto");
}