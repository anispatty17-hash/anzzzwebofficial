import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Panel Bot",
  description: "Halaman panel bot frontend untuk melihat status koneksi bot dan sesi berjalan.",
};

const botStats = [
  { label: "Status Bot", value: "Connected" },
  { label: "Pairing Code", value: "A7K2-9QW1" },
  { label: "QR Code", value: "Tersedia" },
  { label: "Sesi Aktif", value: "3" },
];

const actions = ["Connected", "Disconnect", "Restart Session", "Delete Session"];

export default function BotPanelPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_25%),linear-gradient(135deg,_#020617_0%,_#050816_50%,_#0f172a_100%)] px-6 py-10 text-slate-100 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 shadow-[0_10px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div>
            <p className="text-sm font-semibold text-white">ANZZZ STORE</p>
            <p className="text-xs text-slate-400">Panel Bot</p>
          </div>
          <Link href="/" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/15">
            Kembali ke Beranda
          </Link>
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.3)] backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Panel Bot</p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Frontend panel untuk status bot yang terhubung ke API</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Halaman ini dibuat sebagai antarmuka frontend untuk memantau koneksi bot dan menjalankan action seperti pairing, restart, dan delete session.</p>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">Status</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Connected</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">QR Code</p>
                  <p className="mt-2 font-semibold text-white">Ready to Scan</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">Pairing Code</p>
                  <p className="mt-2 font-semibold text-white">A7K2-9QW1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {botStats.map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <button
                key={action}
                type="button"
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/15"
              >
                {action}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
