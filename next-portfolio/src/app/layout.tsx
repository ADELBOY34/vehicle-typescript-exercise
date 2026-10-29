import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/Site";

export const metadata: Metadata = {
  title: { default: "Noor — Designer & Developer", template: "%s — Noor" },
  description: "The portfolio of Noor, an independent designer and developer creating thoughtful digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
