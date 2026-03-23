import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

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
      <body
        className={`${playfair.variable} flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]`}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
