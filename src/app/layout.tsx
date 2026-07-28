import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ANZZZ STORE | Layanan Digital Premium",
    template: "%s | ANZZZ STORE",
  },
  description:
    "ANZZZ STORE menyediakan layanan digital premium seperti joki game, panel bot, script bot, APK premium, VPS, panel pterodactyl, top up game, dan website development.",
  keywords: ["anzzz store", "joki game", "panel bot", "apk premium", "vps", "website development", "tailwind", "framer motion"],
  openGraph: {
    title: "ANZZZ STORE | Layanan Digital Premium",
    description: "Landing page profesional untuk layanan digital ANZZZ STORE.",
    type: "website",
    url: "https://example.com",
    images: ["https://example.com/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANZZZ STORE | Layanan Digital Premium",
    description: "Landing page profesional untuk layanan digital ANZZZ STORE.",
    images: ["https://example.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
