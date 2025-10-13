export function AboutContent() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row pt-24 md:pt-36">
      {/* Colonne gauche - Fond noir */}
      <div className="w-full md:w-1/2 bg-black text-white p-8 md:p-12 lg:p-16">
        <div className="max-w-xl">
          {/* Contact */}
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 break-words">
              paul.duboisgance(at)gmail.com
            </h1>
            <p className="text-xl break-words">
              <a
                href="https://github.com/Pauldbg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                GitHub
              </a>
              {" / "}
              <a
                href="https://www.linkedin.com/in/paul-dubois-gance-b4378b180/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* Bio en français */}
          <div className="mb-12 space-y-4 font-bold">
            <p>
            Développeur Full Stack spécialisé en TypeScript/Next.js et juriste de formation en droit du numérique basé à Paris.
            </p>
            <p>
            Je transforme des besoins métier complexes en solutions web sécurisées
            et conformes. Ma double compétence me permet d&apos;anticiper les implications
            juridiques dès la conception tout en architecturant des solutions techniques
            performantes, où rigueur du code et respect des contraintes légales
            ne font qu&apos;un.
            </p>
            <p>
            Mon projet principal : une application médicale de recommandation
            contraceptive (TypeScript/Next.js/Prisma) développée avec des
            professionnels de santé, intégrant un algorithme complexe
            d&apos;évaluation de contre-indications et une gestion stricte des données
            sensibles.
            </p>
          </div>

          {/* Bio en anglais */}
          <div className="mb-12 space-y-4">
            <p>
            Full Stack Developer specializing in TypeScript/Next.js with a 
            background in digital law, based in Paris.
            </p>
            <p>
            I transform complex business requirements into secure and compliant 
            web solutions. My dual expertise enables me to anticipate legal 
            implications from the design phase while architecting high-performance 
            technical solutions, where code rigor and regulatory compliance 
            seamlessly merge.
            </p>
            <p>
            Current focus: a medical contraception recommendation app 
            (TypeScript/Next.js/Prisma) developed in collaboration with healthcare 
            professionals from Nancy University Hospital, featuring a complex 
            contraindication assessment algorithm and rigorous handling of 
            sensitive health data.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-20 space-y-4 text-sm">
            <p>
              Copyright 2025. 
              Design and development by Paul Dubois Gance.
            </p>
          </div>
        </div>
      </div>

      {/* Colonne droite - Fond beige */}
      <div className="w-full md:w-1/2 bg-[#e8e1d7] text-black p-8 md:p-12 lg:p-16">
        <div className="max-w-xl">
          {/* Projets notables */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4 uppercase">
              Projets Notables / Selected Projects
            </h2>
            <ul className="space-y-1">
              <li>Contraception App - Application santé</li>
              <li>Cabinet HDV - Site kinésithérapie</li>
              <li>Bretstad - Site vitrine artistes</li>
              <li>GSAP Animations - Expérimentations 🔸 Coming soon</li>
              <li>Three.js Projects - 3D Web 🔸 Coming soon</li>
            </ul>
          </div>

          {/* Compétences techniques */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4 uppercase">
              Stack Technique / Tech Stack
            </h2>
            <ul className="space-y-1">
            <li>TypeScript / JavaScript</li>
              <li>Next.js / React</li>
              <li>Node.js, Express</li>
              <li>Git / GitHub</li>
              <li>GSAP / Three.js</li>
              <li>Prisma / PostgreSQL</li>
            </ul>
          </div>

          {/* Formation */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4 uppercase">
              Formation / Education
            </h2>
            <ul className="space-y-1">
              <li>Master 2 Cyberjustice</li>
              <li>Maîtrise de droit pénal</li>
              <li>Maîtrise de droit du numérique</li>
              <li>Titre RNCP niveau 6 - Développement Web Full Stack</li>
            </ul>
          </div>

          {/* Centres d'intérêt */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-4 uppercase">
              Centres d&apos;intérêt / Interests
            </h2>
            <ul className="space-y-1">
              <li>Web Design & UX/UI</li>
              <li>Animations & Interactions</li>
              <li>Open Source</li>
              <li>Legal Tech</li>
              <li>Privacy & RGPD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
