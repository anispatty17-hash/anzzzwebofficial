export const socialLinks = {
  website: "https://example.com",
  whatsapp: "https://wa.me/6281234567890",
  discord: "https://discord.com/invite/example",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  github: "https://github.com",
  tiktok: "https://tiktok.com",
  facebook: "https://facebook.com",
  telegram: "https://t.me/example",
} as const;

export type SocialKey = keyof typeof socialLinks;
