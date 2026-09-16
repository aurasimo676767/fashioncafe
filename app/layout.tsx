import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { locale } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${locale.nome} — bar e caffetteria`,
  description: locale.descrizione,
  // Il link gira su WhatsApp e Instagram: serve l'anteprima.
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: locale.nome,
    title: locale.nome,
    description: locale.descrizione,
    images: [
      { url: "/foto/locale.jpg", width: 1278, height: 720, alt: `La sala del ${locale.nome}` },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fffbfc",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${bricolage.variable} ${figtree.variable}`}>{children}</body>
    </html>
  );
}
