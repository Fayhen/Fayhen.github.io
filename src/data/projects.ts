import type { Stack } from "./stacks";
import { stacks } from "./stacks";

import cesupa from "../assets/images/cesupa.png";
import fayhen  from "../assets/images/logo-light.svg";
import identicon from "../assets/images/identicon.png";

export interface Project {
  title: string
  slug: string
  category: "backend" | "frontend" | "fullstack"
  description: string
  picture: ImageMetadata | null
  productionLink: string | null
  repositoryLink: string | null
  featured: boolean
  stacks: Stack[]
}

export const projects: Project[] = [
  {
    title: "Cesupa",
    slug: "cesupa",
    category: "fullstack",
    description: "Led development of a university website and CMS platform using Elixir, Phoenix, and Strapi. Delivered a modern replacement for a decade-old system, improving content management and overall platform maintainability.",
    picture: cesupa,
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
    title: "fayhen.github.io",
    slug: "fayhen-github-io",
    category: "frontend",
    description: "This own website built from scratch using the Astro framework. Have you found all the themes yet?",
    picture: fayhen,
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/Fayhen.github.io",
    featured: true,
    stacks: [
      stacks.astro,
      stacks.typescript
    ],
  },
  {
    title: "elixir-identicon",
    slug: "elixir-identicon",
    description: "Small Elixir application that generates identicon PNG images from user-provided strings (e.g., usernames).",
    category: "backend",
    picture: identicon,
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/elixir-identicon",
    featured: true,
    stacks: [
      stacks.elixir
    ]
  },
  {
    title: "Phoenix Chat",
    slug: "phoenix-chat",
    description: "A simple real-time chat application built with the Phoenix Framework",
    category: "fullstack",
    picture: null,
    productionLink: "https://twilight-butterfly-5129.fly.dev/",
    repositoryLink: "https://github.com/Fayhen/phoenix-chat",
    featured: false,
    stacks: [
      stacks.elixir,
      stacks.phoenix
    ]
  },
  {
    title: "quick-lorem",
    slug: "quick-lorem",
    description: "A lightweight NPX package for generating Lorem Ipsum text with configurable output options.",
    category: "backend",
    picture: null,
    productionLink: "https://www.npmjs.com/package/quick-lorem",
    repositoryLink: "https://github.com/Fayhen/quick-lorem",
    featured: false,
    stacks: [
      stacks.javascript
    ],
  },
  {
    title: "fastapi-list-pagination",
    slug: "fastapi-list-pagination",
    description: "Study project exploring pagination patterns in FastAPI by implementing paginated responses over a static dataset.",
    category: "backend",
    picture: null,
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
    category: "backend",
    picture: null,
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
    category: "backend",
    picture: null,
    productionLink: null,
    repositoryLink: "https://github.com/Fayhen/Pythondex",
    featured: false,
    stacks: [
      stacks.python,
      stacks.sqlalchemy,
      stacks.flask
    ],
  },
  {
    title: "Emoji Shift",
    slug: "emoji-shift",
    category: "frontend",
    description: "Project exploring Vue 3 Composition and Reactivity APIs, built during their initial release. Also, a homage to a friend.",
    picture: null,
    productionLink: "https://fayhen.github.io/emoji-shift/",
    repositoryLink: "https://github.com/Fayhen/emoji-shift",
    featured: false,
    stacks: [
      stacks.html5,
      stacks.css3,
      stacks.typescript,
      stacks.vuejs
    ]
  },
  {
    title: "Quasar Cropper",
    slug: "quasar-cropper",
    category: "frontend",
    description: "Proof-of-concept integrating Cropper.js with the Quasar Framework.",
    picture: null,
    productionLink: "https://5e93b3e6396d24fc3cf6807f--brave-jepsen-8fd015.netlify.app/",
    repositoryLink: "https://github.com/Fayhen/Quasar-Cropper",
    featured: false,
    stacks: [
      stacks.html5,
      stacks.css3,
      stacks.javascript,
      stacks.vuejs,
      stacks.quasar
    ]
  },
  {
    title: "Laborator.io",
    slug: "laboratorio",
    category: "fullstack",
    description: "A laboratory management platform built during my MSc, designed to support day-to-day operations in a biological oceanography lab. Initially developed as a fullstack Python application, it later evolved into a Vue/Quasar frontend with a Flask backend. The project is now deprecated and planned for a rebuild with a modern stack.",
    picture: null,
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
