import Link from "next/link";
import TestimonialsGallery from "@/components/testimonials-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimoni",
  description: "Galeri testimoni layanan digital ANZZZ STORE dengan watermark, modal preview, dan desain modern.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_25%),linear-gradient(135deg,_#020617_0%,_#050816_50%,_#0f172a_100%)] px-6 py-10 text-slate-100 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 shadow-[0_10px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div>
            <p className="text-sm font-semibold text-white">ANZZZ STORE</p>
            <p className="text-xs text-slate-400">Testimoni & Bukti Hasil</p>
          </div>
          <Link href="/" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/15">
            Kembali ke Beranda
          </Link>
        </div>

        <TestimonialsGallery />
      </div>
    </main>
  );
}
