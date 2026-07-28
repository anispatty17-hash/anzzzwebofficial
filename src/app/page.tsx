"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Gamepad2,
  MessageCircleMore,
  PackageOpen,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Webhook,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ServiceCard } from "@/components/service-card";
import { socialLinks } from "@/lib/social";
import type { FeatureItem, StatItem } from "@/types";

const services: FeatureItem[] = [
  { title: "Joki Game", description: "Bantu capai target rank, event, dan progres game favoritmu dengan cepat." },
  { title: "Panel Bot WhatsApp", description: "Kelola bot otomatis dengan panel sederhana dan sinkronisasi yang stabil." },
  { title: "APK Premium", description: "Akses aplikasi premium dengan proses yang aman dan terorganisir." },
  { title: "Script Bot", description: "Dapatkan script bot custom untuk kebutuhan bisnis atau komunitas Anda." },
  { title: "Panel Pterodactyl", description: "Pantau server dan hosting Anda dengan dashboard yang modern dan cepat." },
  { title: "VPS", description: "Sewa VPS performa tinggi dengan dukungan teknis yang siap membantu." },
  { title: "Top Up Game", description: "Isi saldo atau item game dengan proses yang cepat dan terpercaya." },
  { title: "Website Development", description: "Bangun website modern, cepat, dan siap digunakan untuk brand Anda." },
  { title: "Custom Request", description: "Butuh layanan khusus? Kami siap menyesuaikan kebutuhan digital Anda." },
];

const whyUs = [
  { title: "Fast Response", description: "Respon cepat dan komunikasi yang jelas di setiap order." },
  { title: "Trusted", description: "Dipercaya oleh banyak pelanggan karena standar layanan yang konsisten." },
  { title: "Harga Terjangkau", description: "Solusi digital premium dengan harga yang tetap masuk akal." },
  { title: "Bergaransi", description: "Layanan yang dijamin kualitas dan hasilnya sesuai kebutuhan." },
  { title: "Support 24 Jam", description: "Tim dukungan siap membantu kapan pun Anda butuh." },
  { title: "Ribuan Pelanggan", description: "Komunitas besar yang terus mempercayai layanan kami." },
];

const stats: StatItem[] = [
  { value: "5000+", label: "Customer" },
  { value: "15000+", label: "Order" },
  { value: "99%", label: "Kepuasan" },
  { value: "24/7", label: "Support" },
];

const serviceIcons = [Gamepad2, Bot, PackageOpen, Code2, Cpu, Cloud, Zap, Webhook, Sparkles];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_25%),radial-gradient(circle_at_80%_20%,_rgba(192,132,252,0.2),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#050816_50%,_#0f172a_100%)] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:22px_22px] opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-20 mb-8 rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 shadow-[0_10px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/20">
                <Store className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">ANZZZ STORE</p>
                <p className="text-xs text-slate-400">Digital Services</p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <Link href="#services" className="transition hover:text-white">Layanan</Link>
              <Link href="/testimonials" className="transition hover:text-white">Testimoni</Link>
              <Link href="/bot-panel" className="transition hover:text-white">Panel Bot</Link>
              <Link href="#faq" className="transition hover:text-white">FAQ</Link>
            </nav>
          </div>
        </header>

        <section className="grid items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Premium Digital Services
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Semua kebutuhan digital dalam satu tempat
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Anzzz Store menyediakan berbagai layanan digital berkualitas seperti Joki Game, Panel Bot WhatsApp, Script Bot, APK Premium, VPS, Panel Pterodactyl, Top Up Game, Website Development, dan layanan digital lainnya.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={socialLinks.whatsapp || socialLinks.discord} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
                <Rocket className="h-4 w-4" />
                Order Sekarang
              </a>
              <a href={socialLinks.discord} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/15">
                <MessageCircleMore className="h-4 w-4" />
                Hubungi Admin
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-1">⚡ Cepat</span>
              <span className="rounded-full border border-white/10 px-3 py-1">🛡 Aman</span>
              <span className="rounded-full border border-white/10 px-3 py-1">💼 Profesional</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_30px_120px_rgba(2,8,23,0.65)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Layanan Unggulan</p>
                    <p className="text-lg font-semibold text-white">Joki Game & Bot Automation</p>
                  </div>
                  <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">Ready</div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-white/10 p-2"><ShieldCheck className="h-5 w-5 text-cyan-300" /></div>
                      <div>
                        <p className="text-sm text-cyan-200">Trusted Service</p>
                        <p className="text-base font-semibold text-white">Bergaransi dan profesional</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Response Time</p>
                      <p className="mt-2 font-semibold text-white">≤ 5 Menit</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Support</p>
                      <p className="mt-2 font-semibold text-white">24/7 Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Layanan</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Solusi digital lengkap untuk kebutuhan Anda</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Semua layanan kami disusun untuk membantu Anda berkembang lebih cepat, aman, dan profesional.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return <ServiceCard key={service.title} icon={Icon} title={service.title} description={service.description} />;
            })}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Mengapa Memilih Kami</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Kenapa pelanggan terus mempercayai Anzzz Store</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyUs.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Statistik</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Pertumbuhan dan kepercayaan yang terus meningkat</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.06 }} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.35)]">
                <p className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="py-16">
          <FaqSection />
        </section>

        <section className="py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.3)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Sosial Media</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ikuti update terbaru dari ANZZZ STORE</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {Object.entries(socialLinks).map(([key, value]) => (
                  <a key={key} href={value} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/15">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/60 px-6 py-8 shadow-[0_20px_70px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">ANZZZ STORE</p>
              <p className="mt-2 max-w-sm text-sm leading-7 text-slate-400">Platform layanan digital modern untuk kebutuhan joki game, bot, VPS, website, dan solusi digital lainnya.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Quick Links</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li><Link href="#services" className="transition hover:text-white">Services</Link></li>
                  <li><Link href="/testimonials" className="transition hover:text-white">Testimoni</Link></li>
                  <li><Link href="/bot-panel" className="transition hover:text-white">Panel Bot</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Social Media</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li><a href={socialLinks.discord} target="_blank" rel="noreferrer" className="transition hover:text-white">Discord</a></li>
                  <li><a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a></li>
                  <li><a href={socialLinks.tiktok} target="_blank" rel="noreferrer" className="transition hover:text-white">TikTok</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Legal</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li><a href="#" className="transition hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="transition hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-slate-500">© 2026 ANZZZ STORE. All rights reserved.</div>
        </footer>
      </div>
    </main>
  );
}
