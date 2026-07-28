import type { Metadata } from "next";
import BotPanelClient from "@/components/bot-panel-client";

export const metadata: Metadata = {
  title: "Panel Bot",
  description: "Halaman panel bot frontend untuk melihat status koneksi bot dan sesi berjalan.",
};

export default function BotPanelPage() {
  return <BotPanelClient />;
}
