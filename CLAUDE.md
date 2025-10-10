# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Portfolio personnel de Paul Dubois Gance - Développeur full stack & Juriste en droit du numérique.

## Stack technique

- **Framework**: Next.js 15.5.4 avec App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript (strict mode activé)
- **Styling**: Tailwind CSS v4
- **Package Manager**: PNPM (avec node-linker=hoisted)
- **Build**: Turbopack activé par défaut

## Commandes principales

```bash
# Développement avec Turbopack
pnpm dev

# Build de production avec Turbopack
pnpm build

# Démarrer le serveur de production
pnpm start

# Linting
pnpm lint
```

## Architecture du code

### Structure des dossiers

```
app/                    # Next.js App Router (routes et layouts)
├── layout.tsx         # Layout principal (metadata, lang="fr")
├── page.tsx           # Page d'accueil
└── globals.css        # Styles globaux

src/
├── components/        # Composants réutilisables
│   ├── layout/       # Composants de structure (Header, Footer, etc.)
│   └── ui/           # Composants UI atomiques
├── features/          # Fonctionnalités métier
│   ├── navigation/   # Logique de navigation
│   └── portfolio/    # Logique du portfolio
├── data/             # Données statiques et configuration
├── hooks/            # Custom React hooks
├── lib/              # Utilitaires et helpers
└── types/            # Définitions TypeScript globales

public/               # Assets statiques
├── images/          # Images du site
└── *.svg            # Icônes SVG
```

### Organisation fonctionnelle

- **App Router**: Toutes les routes sont définies dans le dossier `app/`
- **Feature-based**: Les fonctionnalités métier sont isolées dans `src/features/` (navigation, portfolio)
- **Composants**: Séparation entre composants de layout et composants UI réutilisables
- **Path mapping**: `@/*` pointe vers `./src/*` (configuré dans tsconfig.json)

### Configuration TypeScript

- **Target**: ES2017
- **Mode strict**: Activé
- **JSX**: preserve (géré par Next.js)
- **Module resolution**: bundler

## Particularités du projet

### Design & Inspiration

- **Style**: Minimaliste, épuré, inspiré de [gregoire-borach.com](https://www.gregoire-borach.com)
- **Typographie**: Courier New (monospace système) pour tout le texte
- **Logo**: "PAUL DUBOIS GANCE" sera un fichier image (SVG/PNG) à placer dans `/public/images/`
- **Palette**: Noir/blanc/gris (simple et épuré)
- **Pas de dark mode** pour l'instant

### Philosophie de développement

**Keep It Simple** - On commence simple, on ajoute la complexité progressivement :
- ❌ Pas de GSAP pour l'instant (on pourra l'ajouter plus tard)
- ✅ CSS/Tailwind natif pour les transitions et animations simples
- ✅ Composants Server Components par défaut (minimiser `'use client'`)
- ✅ Performance et simplicité avant tout

### Configuration technique

- **Langue**: Français (`lang="fr"` dans layout.tsx)
- **Turbopack**: Activé pour dev et build (performance optimale)
- **PNPM**: Configuré avec `node-linker=hoisted` (compatibilité)
- **Import alias**: `@/*` → `./src/*` (très important pour les imports propres)

### Structure /app vs /src

**Séparation claire des responsabilités** :
- **`/app`** : Routing Next.js uniquement (layout, pages, API routes si besoin)
- **`/src`** : Tout le code applicatif (components, features, hooks, logic métier)

Cette séparation est **la pratique recommandée Next.js 2025**. Elle permet :
- Clarté : on sait où chercher le routing vs la logique
- Scalabilité : le projet peut grandir proprement
- Maintenance : imports propres via `@/*` depuis n'importe où
