import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
