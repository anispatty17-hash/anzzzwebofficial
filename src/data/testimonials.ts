export interface Testimonial {
  id: number;
  name: string;
  category: string;
  image: string;
  date: string;
  description: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rizky",
    category: "Joki Game",
    image: "/testimonials/testimonial-1.svg",
    date: "12 Juni 2026",
    description: "Hasil joki cepat, detail rapi, dan progress selalu aman sampai selesai.",
  },
  {
    id: 2,
    name: "Alya",
    category: "APK Premium",
    image: "/testimonials/testimonial-2.svg",
    date: "8 Juni 2026",
    description: "Aplikasi premium yang dikirim lengkap dengan tampilan yang bersih dan stabil.",
  },
  {
    id: 3,
    name: "Damar",
    category: "Joki Rank",
    image: "/testimonials/testimonial-3.svg",
    date: "1 Juni 2026",
    description: "Proses transparan dan hasil akhir sesuai target yang kami inginkan.",
  },
  {
    id: 4,
    name: "Nadia",
    category: "Premium Access",
    image: "/testimonials/testimonial-4.svg",
    date: "24 Mei 2026",
    description: "Menyediakan bukti hasil yang rapi dan mudah dikonfirmasi oleh tim kami.",
  },
];
