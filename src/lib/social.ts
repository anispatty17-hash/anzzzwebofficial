export const socialLinks = {
  website: "https://example.com",
  whatsapp: "https://wa.me/6281234567890",
  discord: "https://discord.com/invite/example",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com/@4nzzz2003?si=suH8_B7SaugBYHoE",
  github: "https://github.com/anispatty17-hash",
  tiktok: "tiktok.com/@shiinamahiru10",
  facebook: "https://www.facebook.com/share/1CNJPN919t/",
  telegram: "https://t.me/anzzzsenpai",
} as const;

export type SocialKey = keyof typeof socialLinks;
