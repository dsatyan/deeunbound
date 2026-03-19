import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dee Unbound",
  description: "A space for travel, plants, projects, and stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
