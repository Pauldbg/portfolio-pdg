import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'bretstad',
    title: 'Bretstad Art',
    description: 'Site WordPress avec animations SVG interactives',
    image: '/images/projects/bretstad/main.webp',
    link: 'https://bretstad.art',
    tags: ['WordPress', 'JavaScript', 'SVG'],
    year: '2024',
    backgroundColor: '#000000'
  },
  {
    id: 'contraception-app',
    title: 'Application Contraception',
    description: 'Application médicale CHRU Nancy - Algorithme de recommandation',
    image: '/images/projects/contraception-app/main.webp',
    link: 'https://medical-app-demo.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    year: '2024'
  },
  {
    id: 'cabinet-hdv',
    title: 'Cabinet de l\'Hôtel de Ville',
    description: 'Site WordPress avec slider d\'équipe en JavaScript pur',
    image: '/images/projects/cabinet-hdv/main.webp',
    link: 'https://cabinet-kine-hdv.fr',
    tags: ['WordPress', 'JavaScript'],
    year: '2024',
  },
  {
    id: 'gsap',
    title: 'Projets Animations GSAP',
    description: 'Expérimentations avec GSAP, Three.js et animations web avancées',
    image: '/images/projects/gsap/main.webp',
    link: '/projects/animations',
    tags: ['GSAP', 'Three.js', 'WebGL'],
    year: '2024',
  },
  {
    id: 'three-js',
    title: 'Projets Three.js',
    description: 'Expérimentations 3D avec Three.js et WebGL',
    image: '/images/projects/three-js/main.webp',
    link: '/projects/three-js',
    tags: ['Three.js', '3D', 'WebGL'],
    year: '2024',
  }
];
