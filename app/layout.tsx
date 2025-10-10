import type { Metadata } from "next";
import { Header } from "@/features/layout/Header";
import { TailwindIndicator } from "@/components/utils/TailwindIndicator";
import "./globals.css";

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
      <body className="antialiased">
        <Header />
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
