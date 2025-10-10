import Image from "next/image";
import Link from "next/link";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const CardWrapper = project.link ? Link : "div";

  return (
    <CardWrapper
      href={project.link || "#"}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      className="group cursor-pointer block h-full"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Image avec effet noir et blanc */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:grayscale"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Overlay avec informations au hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
          <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-white/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.year && (
              <p className="text-xs text-gray-400">{project.year}</p>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
