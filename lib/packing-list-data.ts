// lib/packing-list-data.ts
// Shared between the server page (SEO/schema) and the client component (interactivity).
// No "use client" here — this is plain data, importable anywhere.

export interface Item {
  name: string;
  qty: number;
  packed: boolean;
  skipped: boolean;
  custom: boolean;
}

export interface Category {
  cat: string;
  icon: string;
  items: Item[];
}

export const DEFAULT_CATEGORIES: Category[] = [
  { cat: "Documents & money", icon: "📄", items: [
    { name: "Passport",              qty: 1, packed: false, skipped: false, custom: false },
    { name: "Travel insurance",      qty: 1, packed: false, skipped: false, custom: false },
    { name: "Copies of documents",   qty: 1, packed: false, skipped: false, custom: false },
    { name: "Local currency / cash", qty: 1, packed: false, skipped: false, custom: false },
    { name: "Credit / debit cards",  qty: 2, packed: false, skipped: false, custom: false },
    { name: "Visa documents",        qty: 1, packed: false, skipped: false, custom: false },
  ]},
  { cat: "Tech & connectivity", icon: "📱", items: [
    { name: "Phone + charger",       qty: 1, packed: false, skipped: false, custom: false },
    { name: "eSIM / local SIM",      qty: 1, packed: false, skipped: false, custom: false },
    { name: "Power bank",            qty: 1, packed: false, skipped: false, custom: false },
    { name: "Universal adapter",     qty: 1, packed: false, skipped: false, custom: false },
    { name: "Laptop + charger",      qty: 1, packed: false, skipped: false, custom: false },
    { name: "Earphones / AirPods",   qty: 1, packed: false, skipped: false, custom: false },
    { name: "Camera + memory cards", qty: 1, packed: false, skipped: false, custom: false },
  ]},
  { cat: "Clothing", icon: "👕", items: [
    { name: "T-shirts",                  qty: 5, packed: false, skipped: false, custom: false },
    { name: "Trousers / jeans",          qty: 2, packed: false, skipped: false, custom: false },
    { name: "Shorts",                    qty: 2, packed: false, skipped: false, custom: false },
    { name: "Underwear",                 qty: 7, packed: false, skipped: false, custom: false },
    { name: "Socks",                     qty: 7, packed: false, skipped: false, custom: false },
    { name: "Warm layer / fleece",       qty: 1, packed: false, skipped: false, custom: false },
    { name: "Rain jacket",               qty: 1, packed: false, skipped: false, custom: false },
    { name: "Comfortable walking shoes", qty: 1, packed: false, skipped: false, custom: false },
    { name: "Sandals / flip flops",      qty: 1, packed: false, skipped: false, custom: false },
    { name: "Swimwear",                  qty: 1, packed: false, skipped: false, custom: false },
  ]},
  { cat: "Toiletries", icon: "🪥", items: [
    { name: "Toothbrush + toothpaste", qty: 1, packed: false, skipped: false, custom: false },
    { name: "Shampoo + conditioner",   qty: 1, packed: false, skipped: false, custom: false },
    { name: "Deodorant",               qty: 1, packed: false, skipped: false, custom: false },
    { name: "Sunscreen SPF 50+",       qty: 1, packed: false, skipped: false, custom: false },
    { name: "Moisturiser",             qty: 1, packed: false, skipped: false, custom: false },
    { name: "Razor",                   qty: 1, packed: false, skipped: false, custom: false },
    { name: "Lip balm",                qty: 1, packed: false, skipped: false, custom: false },
  ]},
  { cat: "Health & safety", icon: "💊", items: [
    { name: "Prescription medication", qty: 1, packed: false, skipped: false, custom: false },
    { name: "Paracetamol / ibuprofen", qty: 1, packed: false, skipped: false, custom: false },
    { name: "Antihistamines",          qty: 1, packed: false, skipped: false, custom: false },
    { name: "Insect repellent",        qty: 1, packed: false, skipped: false, custom: false },
    { name: "Rehydration sachets",     qty: 1, packed: false, skipped: false, custom: false },
    { name: "Small first aid kit",     qty: 1, packed: false, skipped: false, custom: false },
  ]},
  { cat: "Bag & organisation", icon: "🎒", items: [
    { name: "Main travel bag / suitcase", qty: 1, packed: false, skipped: false, custom: false },
    { name: "Day backpack",               qty: 1, packed: false, skipped: false, custom: false },
    { name: "Packing cubes",              qty: 1, packed: false, skipped: false, custom: false },
    { name: "Reusable water bottle",      qty: 1, packed: false, skipped: false, custom: false },
    { name: "Padlock",                    qty: 1, packed: false, skipped: false, custom: false },
    { name: "Laundry bag",                qty: 1, packed: false, skipped: false, custom: false },
  ]},
];