"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, RefreshCcw, ShieldCheck, Trash2, Zap } from "lucide-react";
import Link from "next/link";
import { getBotStatus, performBotAction, type BotStatusResponse } from "@/lib/api";

function formatStatus(status?: boolean) {
  if (status === undefined) return "Unknown";
  return status ? "Connected" : "Disconnected";
}

export default function BotPanelClient() {
  const [status, setStatus] = useState<BotStatusResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeSessionId = useMemo(
    () => status?.sessions?.[0]?.id,
    [status?.sessions],
  );

  const loadStatus = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getBotStatus();
      setStatus(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal memuat status bot.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStatus();
  }, []);

  const handleAction = async (action: "refresh" | "restart" | "disconnect" | "delete") => {
    setLoading(true);
    setError(null);

    try {
      await performBotAction(action, activeSessionId);
      await loadStatus();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal memproses action.");
      setLoading(false);
    }
  };

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
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Halaman ini memuat status bot dari API secara langsung dan memungkinkan action dasar untuk sesi aktif.</p>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">Status Koneksi</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{formatStatus(status?.connected)}</p>
                </div>
                <div className={`h-3 w-3 rounded-full ${status?.connected ? "bg-emerald-400" : "bg-rose-500"}`} />
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">Pairing Code</p>
                  <p className="mt-2 font-semibold text-white">{status?.pairingCode ?? "Tidak tersedia"}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">QR Code</p>
                  <p className="mt-2 font-semibold text-white">{status?.qrAvailable ? "Tersedia" : "Tidak tersedia"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Sesi Aktif</p>
              <p className="mt-2 text-xl font-semibold text-white">{status?.activeSessions ?? 0}</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Pesan API</p>
              <p className="mt-2 text-xl font-semibold text-white">{status?.message ?? "-"}</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Sesi Pertama</p>
              <p className="mt-2 text-xl font-semibold text-white">{activeSessionId ?? "Belum ada"}</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Status Fetch</p>
              <p className="mt-2 text-xl font-semibold text-white">{loading ? "Memuat..." : "Siap"}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleAction("refresh")}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCcw className="h-4 w-4" />
              Refresh Status
            </button>
            <button
              type="button"
              onClick={() => handleAction("restart")}
              disabled={loading || !activeSessionId}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Zap className="h-4 w-4" />
              Restart Session
            </button>
            <button
              type="button"
              onClick={() => handleAction("disconnect")}
              disabled={loading || !activeSessionId}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ShieldCheck className="h-4 w-4" />
              Disconnect Session
            </button>
            <button
              type="button"
              onClick={() => handleAction("delete")}
              disabled={loading || !activeSessionId}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" />
              Delete Session
            </button>
          </div>

          {error ? (
            <div className="mt-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">
              {error}
            </div>
          ) : null}

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Detail Sesi</p>
              {loading ? <Loader2 className="h-4 w-4 animate-spin text-cyan-300" /> : null}
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {status?.sessions?.length ? (
                status.sessions.map((session) => (
                  <div key={session.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="font-semibold text-white">ID: {session.id}</p>
                    <p>Status: {session.status}</p>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl border border-dashed border-slate-600 bg-slate-950/70 p-4 text-slate-500">Belum ada sesi yang tersedia.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
