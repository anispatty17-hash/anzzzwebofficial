"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Apakah layanan bisa ditangani cepat?", 
    answer: "Ya, tim kami biasanya merespons dalam waktu singkat untuk kebutuhan prioritas dan order yang sedang aktif.",
  },
  {
    question: "Apakah semua layanan sudah terjamin?", 
    answer: "Kami menyediakan layanan dengan standar kualitas, transparansi, dan dukungan yang jelas sebelum dan sesudah proses.",
  },
  {
    question: "Apakah ada layanan custom?", 
    answer: "Tentu. Kami menerima request khusus sesuai kebutuhan Anda, termasuk kebutuhan digital yang belum tercantum.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">FAQ</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Pertanyaan yang sering ditanyakan</h2>
      </div>
      <div className="mx-auto mt-10 max-w-4xl space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[1.25rem] border border-white/10 bg-white/10 p-4 shadow-[0_20px_70px_rgba(15,23,42,0.25)] backdrop-blur-xl"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white">{item.question}</span>
                <ChevronDown className={`h-5 w-5 text-cyan-300 transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-sm leading-7 text-slate-300"
                >
                  {item.answer}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
