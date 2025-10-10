import Image from "next/image";
import { ProjectCard } from "@/features/portfolio/components/ProjectCard";
import { projects } from "@/features/portfolio/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nom complet à côté du logo (scrolle avec la page) - Responsive */}
      <div className="absolute top-6 left-25 pt-2 md:left-40">
        <Image
          src="/images/PAUL-DUBOIS-GANCE.svg"
          alt="Paul Dubois Gance"
          width={80}
          height={32}
          priority
          className="w-15 h-auto md:w-[100px]"
        />
      </div>

      {/* Spacer pour éviter le logo */}
      <div className="h-32 md:h-40"></div>

      {/* Grid des projets - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-1">
        {projects.map((project) => (
          <div key={project.id} className="w-full aspect-[456/600]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  );
}
