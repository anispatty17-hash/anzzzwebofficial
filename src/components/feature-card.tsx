import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.article>
  );
}
