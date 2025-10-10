export function AboutContent() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row pt-24 md:pt-35">
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
              Développeur full stack et juriste en
              droit du numérique basé à Paris.
            </p>
            <p>
              J&apos;explore l&apos;intersection entre le droit, la technologie
              et le design. À travers des projets web innovants, je cherche à
              créer des solutions qui allient esthétique, fonctionnalité et
              conformité juridique.
            </p>
            <p>
              Passionné par le développement moderne avec Next.js, TypeScript et
              React, je conçois des applications performantes, accessibles et
              évolutives.
            </p>
          </div>

          {/* Bio en anglais */}
          <div className="mb-12 space-y-4">
            <p>
              Full stack developer and digital law
              specialist based in Paris.
            </p>
            <p>
              My work explores the intersection between law, technology, and
              design. Through innovative web projects, I seek to create
              solutions that combine aesthetics, functionality, and legal
              compliance.
            </p>
            <p>
              Passionate about modern development with Next.js, TypeScript, and
              React, I design performant, accessible, and scalable
              applications.
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
              <li>Next.js / React</li>
              <li>TypeScript / JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
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
              <li>Maitrise de droit pénal</li>
              <li>Maitrise de droit du numérique</li>
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
