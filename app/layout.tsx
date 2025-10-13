import type { Metadata } from "next";
import { Nixie_One } from "next/font/google";
import { Header } from "@/features/layout/Header";
import { TailwindIndicator } from "@/components/utils/TailwindIndicator";
import "./globals.css";

const nixieOne = Nixie_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nixie",
});

export const metadata: Metadata = {
  title: "Paul Dubois Gance | Portfolio",
  description: "Portfolio de développeur full stack & Juriste en droit du numérique - JavaScript, TypeScript, Next.js, React -",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${nixieOne.variable} antialiased`}>
        <Header />
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
