import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "contraception-app",
    title: "Logiciel de recommandation de contraception",
    description:
      "Application médicale en collaboration avec gynécologues du CHRU Nancy - Algorithme de recommandation",
    image: "/images/projects/contraception-app/main.webp",
    link: "https://medical-app-demo.vercel.app",
    tags: ["Next.js", "TypeScript", "Prisma", "Zod","Zustand","React"],
    year: "2025",
  },
  {
    id: "bretstad",
    title: "Bretstad Art",
    description: "Site WordPress avec animations SVG interactives",
    image: "/images/projects/bretstad/main.webp",
    link: "https://bretstad.art",
    tags: ["WordPress", "JavaScript", "SVG"],
    year: "2025",
    backgroundColor: "#000000",
  },
  {
    id: "cabinet-hdv",
    title: "Cabinet de l'Hôtel de Ville",
    description: "Site WordPress avec slider d'animation d'équipe en JavaScript vanilla",
    image: "/images/projects/cabinet-hdv/main.webp",
    link: "https://cabinet-kine-hdv.fr",
    tags: ["WordPress", "JavaScript", "SEO"],
    year: "2025",
  },
  {
    id: "gsap",
    title: "Projets Animations GSAP",
    description:
      "Expérimentations avec GSAP, Three.js et animations web avancées",
    image: "/images/projects/gsap/main.webp",
    link: "/projects/animations",
    tags: ["🔸Coming soon", "GSAP", "Three.js", "WebGL"],
    year: "2025",
  },
  {
    id: "three-js",
    title: "Projets Three.js",
    description: "Expérimentations 3D avec Three.js et WebGL",
    image: "/images/projects/three-js/main.webp",
    link: "/projects/three-js",
    tags: ["🔸Coming soon", "Three.js", "3D", "WebGL"],
    year: "2025",
  },
  {
    id: "cybersecurity-projects",
    title: "Projets de cybersécurité",
    description: "Expérimentations de cybersécurité avec Next.js et TypeScript",
    image: "/images/projects/cybersecurity/main.webp",
    link: "https://github.com/Pauldbg",
    tags: ["🔸Coming soon", "Next.js", "TypeScript", "Cybersec"],
    year: "2025",
  },
];
