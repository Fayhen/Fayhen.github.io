import type { Locale } from "../i18n/locales";
import type { Stack } from "./stacks";
import { stacks } from "./stacks";

import cesupa from "../assets/images/cesupa.png";
import fayhen  from "../assets/images/logo-light.svg";
import identicon from "../assets/images/identicon.png";

export interface Project {
  title: string
  slug: string
  category: "backend" | "frontend" | "fullstack"
  description: Record<Locale, string>
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
    description: {
      "en": "Led development of a university website and CMS platform using Elixir, Phoenix, and Strapi. A modern replacement for a decade-old system.",
      "pt-br": "Liderança no desenvolvimento de um site universitário e plataforma CMS com Elixir, Phoenix e Strapi, entregando um substituto moderno para um sistema com mais de uma década."
    },
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
    description: {
      "en": "This own website built from scratch using the Astro framework.",
      "pt-br": "Este próprio site, construído do zero com o framework Astro."
    },
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
    description: {
      "en": "Small Elixir application that generates identicon PNG images from user-provided strings (e.g., usernames).",
      "pt-br": "Pequena aplicação em Elixir que gera imagens identicon em PNG a partir de strings fornecidas pelo usuário (por exemplo, nomes de usuário)."
    },
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
    description: {
      "en": "A simple real-time chat application built with the Phoenix Framework",
      "pt-br": "Uma aplicação simples de chat em tempo real construída com o Phoenix Framework."
    },
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
    description: {
      "en": "A lightweight NPX package for generating Lorem Ipsum text with configurable output options.",
      "pt-br": "Um pacote NPX leve para geração de texto Lorem Ipsum com opções de saída configuráveis."
    },
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
    description: {
      "en": "Study project exploring pagination patterns in FastAPI by implementing paginated responses over a static dataset.",
      "pt-br": "Projeto de estudo explorando padrões de paginação no FastAPI por meio da implementação de respostas paginadas sobre um conjunto de dados estático."
    },
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
    description: {
      "en": "Microservice for handling notifications, built with NestJS and TypeScript as part of backend architecture studies.",
      "pt-br": "Microsserviço para tratamento de notificações, construído com NestJS e TypeScript como parte de estudos de arquitetura de backend."
    },
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
    description: {
      "en": "Early studies project recreating a simplified version of a RESTful API inspired by PokéAPI, using Python and Flask.",
      "pt-br": "Projeto que recria uma versão simplificada de uma API RESTful inspirada na PokéAPI, usando Python e Flask."
    },
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
    description: {
      "en": "Project exploring Vue 3 Composition and Reactivity APIs, built during their initial release. Also, a homage to a friend.",
      "pt-br": "Projeto explorando as APIs de Composition e Reactivity do Vue 3, construído durante seu lançamento inicial. Também é uma homenagem a uma amiga."
    },
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
    description: {
      "en": "Proof-of-concept integrating Cropper.js with the Quasar Framework.",
      "pt-br": "Prova de conceito integrando o Cropper.js ao Quasar Framework."
    },
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
    description: {
      "en": "A laboratory management platform built during my MSc, designed to support day-to-day operations in a biological oceanography lab. Initially developed as a fullstack Python application, it later evolved into a Vue/Quasar frontend with a Flask backend. The project is now deprecated and planned for a rebuild with a modern stack.",
      "pt-br": "Plataforma de gestão de laboratório construída durante meu mestrado, voltada a apoiar as operações do dia a dia em um laboratório de oceanografia biológica. Inicialmente desenvolvida como uma aplicação fullstack em Python, evoluiu posteriormente para um frontend em Vue/Quasar com backend em Flask. O projeto está atualmente descontinuado e com reconstrução planejada utilizando uma stack moderna."
    },
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
