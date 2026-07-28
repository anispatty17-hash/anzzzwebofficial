import { motion } from "framer-motion";

type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.45)]"
    >
      <p className="text-3xl font-semibold text-white sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">{label}</p>
    </motion.div>
  );
}
