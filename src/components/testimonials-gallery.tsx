"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { testimonials, type Testimonial } from "@/data/testimonials";

export default function TestimonialsGallery() {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  return (
    <section className="py-16">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Testimoni
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Bukti nyata dari hasil kerja yang cepat dan konsisten.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">
          Koleksi hasil kerja, chat pelanggan, dan bukti visual yang disajikan dengan tampilan modern dan aman untuk dilihat.
        </p>
        <div className="mt-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm text-cyan-100">
          <p className="font-semibold">Tips tambah testimoni cepat:</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-200">
            <li>Upload file JPG/PNG ke folder <code>public/testimonials</code>.</li>
            <li>Tambahkan entri baru di <code>src/data/testimonials.ts</code> dengan path <code>/testimonials/nama-file.jpg</code>.</li>
            <li>Isi nama, kategori, tanggal, dan deskripsi singkat.</li>
          </ol>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.01 }}
            onClick={() => setSelected(item)}
            className="group cursor-zoom-in rounded-[1.5rem] border border-white/10 bg-white/10 p-3 shadow-[0_20px_70px_rgba(15,23,42,0.3)] backdrop-blur-xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-900/70">
              <Image
                src={item.image}
                alt={`${item.name} testimonial`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                className="pointer-events-none object-cover transition duration-500 group-hover:scale-105 select-none"
                onContextMenu={(event) => event.preventDefault()}
                draggable={false}
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />
              <div className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
                {item.category}
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-slate-300">{item.date}</p>
              </div>
            </div>
            <div className="px-2 pb-2 pt-4">
              <p className="text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-3 shadow-[0_20px_90px_rgba(2,8,23,0.7)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200 backdrop-blur"
              >
                Tutup
              </button>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={selected.image}
                  alt={`${selected.name} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="pointer-events-none object-contain select-none"
                  onContextMenu={(event) => event.preventDefault()}
                  draggable={false}
                  style={{ userSelect: "none", WebkitUserSelect: "none" }}
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{selected.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{selected.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{selected.date}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
