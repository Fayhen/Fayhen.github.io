import type { Stack } from "./stacks";
import { stacks } from "./stacks";

export interface Project {
  title: string
  slug: string
  description: string
  productionLink: string | null
  repositoryLink: string | null
  featured: boolean
  stacks: Stack[]
}

export const backend: Project[] = [
  {
    title: "elixir-identicon",
    slug: "elixir-identicon",
    description: "Small Elixir application that generates identicon PNG images from user-provided strings (e.g., usernames).",
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/elixir-identicon",
    featured: true,
    stacks: [
      stacks.elixir
    ]
  },
  {
    title: "quick-lorem",
    slug: "quick-lorem",
    description: "A lightweight NPX package for generating Lorem Ipsum text with configurable output options.",
    productionLink: "https://www.npmjs.com/package/quick-lorem",
    repositoryLink: "https://github.com/Fayhen/quick-lorem",
    featured: false,
    stacks: [
      stacks. javascript
    ],
  },
  {
    title: "fastapi-list-pagination",
    slug: "fastapi-list-pagination",
    description: "Study project exploring pagination patterns in FastAPI by implementing paginated responses over a static dataset.",
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/fastapi-list-pagination",
    featured: false,
    stacks: [
      stacks.python,
      stacks.fastapi
    ],
  },
  {
    title: "NestJS Notification Service",
    slug: "nestjs-notifications",
    description: "Microservice for handling notifications, built with NestJS and TypeScript as part of backend architecture studies.",
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/notification-service",
    featured: false,
    stacks: [
      stacks.typescript
    ],
  },
  {
    title: "Pythondex",
    slug: "Pythondex",
    description: "Early project recreating a simplified version of a RESTful API inspired by PokéAPI, using Python and Flask.",
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/Pythondex",
    featured: false,
    stacks: [
      stacks.python,
      stacks.sqlalchemy,
      stacks.flask
    ],
  }
];


export const frontend: Project[] = [
  {
    title: "fayhen.github.io",
    slug: "fayhen-github-io",
    description: "This own website built from scratch using the Astro framework. Have you found all the themes yet?",
    productionLink: "#",
    repositoryLink: "https://github.com/Fayhen/Fayhen.github.io",
    featured: true,
    stacks: [
      stacks.astro,
      stacks.typescript
    ],
  },
  {
    title: "Emoji Shift",
    slug: "emoji-shift",
    description: "Project exploring Vue 3 Composition and Reactivity APIs, built during their initial release. Also, a homage to a friend.",
    productionLink: "https://fayhen.github.io/emoji-shift/",
    repositoryLink: "https://github.com/Fayhen/emoji-shift",
    featured: false,
    stacks: [
      stacks.typescript,
      stacks.html5,
      stacks.css3,
      stacks.vuejs
    ]
  },
  {
    title: "Quasar Cropper",
    slug: "quasar-cropper",
    description: "Proof-of-concept integrating Cropper.js with the Quasar Framework.",
    productionLink: "https://5e93b3e6396d24fc3cf6807f--brave-jepsen-8fd015.netlify.app/",
    repositoryLink: "https://github.com/Fayhen/Quasar-Cropper",
    featured: false,
    stacks: [
      stacks.html5,
      stacks.css3,
      stacks.vuejs,
      stacks.quasar
    ]
  }
];

export const fullstack: Project[] = [
  {
    title: "Cesupa",
    slug: "cesupa",
    description: "Led development of a university website and CMS platform using Elixir, Phoenix, and Strapi. Delivered a modern replacement for a decade-old system, improving content management and overall platform maintainability.",
    productionLink: "https://www.cesupa.br/",
    repositoryLink: null,
    featured: true,
    stacks: [
      stacks.elixir,
      stacks.phoenix,
      stacks.javascript
    ]
  },
  {
    title: "Laborator.io",
    slug: "laboratorio",
    description: "A laboratory management platform built during my MSc, designed to support day-to-day operations in a biological oceanography lab. Initially developed as a fullstack Python application, it later evolved into a Vue/Quasar frontend with a Flask backend. The project is now deprecated and planned for a rebuild with a modern stack.",
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/Laborator.io",
    featured: false,
    stacks: [
      stacks.python,
      stacks.sqlalchemy,
      stacks.flask,
      stacks.html5,
      stacks.css3,
      stacks.vuejs,
      stacks.quasar
    ]
  }
];
