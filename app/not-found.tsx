import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      {/* Spacer pour descendre le contenu (comme sur la home) */}
      <div className="h-32 md:h-40"></div>

      <div className="flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center space-y-6 max-w-2xl">
          {/* Code d'erreur */}
          <h1 className="text-xl md:text-2xl font-mono">404</h1>

          {/* Message */}
          <p className="text-lg md:text-xl">Page introuvable</p>

          {/* Description avec mention construction */}
          <div className="space-y-3">
            <p className="text-sm md:text-base opacity-70">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <p className="text-sm md:text-base opacity-60 italic">
              Cette page est peut-être en construction.
            </p>
          </div>

          {/* Lien de retour */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
