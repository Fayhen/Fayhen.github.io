import astro from "../assets/icons/devicons/astro-original.svg";
import css from "../assets/icons/devicons/css3-original.svg";
import django from "../assets/icons/devicons/django-original.svg";
import docker from "../assets/icons/devicons/docker-original.svg";
import elixir from "../assets/icons/devicons/elixir-original.svg";
import fastapi from "../assets/icons/devicons/fastapi-original.svg";
import firebase from "../assets/icons/devicons/firebase-plain.svg";
import flask from "../assets/icons/devicons/flask-original.svg";
import git from "../assets/icons/devicons/git-original.svg";
import html5 from "../assets/icons/devicons/html5-original.svg";
import javascript from "../assets/icons/devicons/javascript-original.svg";
import mysql from "../assets/icons/devicons/mysql-original.svg";
import phoenix from "../assets/icons/devicons/phoenix-original.svg";
import postgres from "../assets/icons/devicons/postgres-original.svg";
import python from "../assets/icons/devicons/python-original.svg";
import quasar from "../assets/icons/devicons/quasar-plain.svg";
import sass from "../assets/icons/devicons/sass-original.svg";
import sqlalchemy from "../assets/icons/devicons/sqlalchemy-original.svg";
import sqlite from "../assets/icons/devicons/sqlite-original.svg";
import tailwind from "../assets/icons/devicons/tailwindcss-original.svg";
import typescript from "../assets/icons/devicons/typescript-original.svg";
import vue from "../assets/icons/devicons/vuejs-original.svg";

type Stacks = Record<string, Stack>

export interface Stack {
  shortName: string
  name: string
  slug: string
  link: string
  icon: ImageMetadata
}

export const stacks: Stacks = {
  elixir: {
    shortName: "Elixir",
    name: "Elixir",
    slug: "elixir",
    link: "https://elixir-lang.org/",
    icon: elixir
  },
  phoenix: {
    shortName: "Phoenix",
    name: "Phoenix Framework",
    slug: "phoenix",
    link: "https://www.phoenixframework.org/",
    icon: phoenix
  },
  python: {
    shortName: "Python",
    name: "Python",
    slug: "python",
    link: "https://www.python.org/",
    icon: python
  },
  javascript: {
    shortName: "JavaScript",
    name: "JavaScript",
    slug: "javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: javascript
  },
  typescript: {
    shortName: "TypeScript",
    name: "TypeScript",
    slug: "typescript",
    link: "https://www.typescriptlang.org/",
    icon: typescript
  },
  firebase: {
    shortName: "Firebase",
    name: "Firebase",
    slug: "firebase",
    link: "https://firebase.google.com/",
    icon: firebase
  },
  vuejs: {
    shortName: "Vue.js",
    name: "Vue.js",
    slug: "vuejs",
    link: "https://vuejs.org/",
    icon: vue
  },
  quasar: {
    shortName: "Quasar",
    name: "Quasar Framework",
    slug: "quasar",
    link: "https://quasar.dev/",
    icon: quasar
  },
  astro: {
    shortName: "Astro",
    name: "Astro",
    slug: "astro",
    link: "https://astro.build/",
    icon: astro
  },
  html5: {
    shortName: "HTML5",
    name: "HTML5",
    slug: "html5",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    icon: html5
  },
  css3: {
    shortName: "CSS3",
    name: "CSS3",
    slug: "css3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: css
  },
  tailwind: {
    shortName: "Tailwind",
    name: "Tailwind",
    slug: "tawilwindcss",
    link: "https://tailwindcss.com/",
    icon: tailwind
  },
  sass: {
    shortName: "Sass",
    name: "Sass",
    slug: "sass",
    link: "https://sass-lang.com//",
    icon: sass
  },
  fastapi: {
    shortName: "FastAPI",
    name: "FastAPI",
    slug: "fastapi",
    link: "https://fastapi.tiangolo.com/",
    icon: fastapi
  },
  flask: {
    shortName: "Flask",
    name: "Flask",
    slug: "flask",
    link: "https://flask.palletsprojects.com/",
    icon: flask
  },
  django: {
    shortName: "Django",
    name: "Django",
    slug: "django",
    link: "https://www.djangoproject.com/",
    icon: django
  },
  postgres: {
    shortName: "Postgres",
    name: "Postgres",
    slug: "postgres",
    link: "https://www.postgresql.org/",
    icon: postgres
  },
  mysql: {
    shortName: "MySQL",
    name: "MySQL",
    slug: "mysql",
    link: "https://www.mysql.com/",
    icon: mysql
  },
  sqlite: {
    shortName: "SQLite",
    name: "SQLite",
    slug: "sqlite",
    link: "https://sqlite.org/",
    icon: sqlite
  },
  sqlalchemy: {
    shortName: "SQLAlchemy",
    name: "SQLAlchemy",
    slug: "sqlalchmey",
    link: "https://www.sqlalchemy.org/",
    icon: sqlalchemy
  },
  docker: {
    shortName: "Docker",
    name: "Docker",
    slug: "docker",
    link: "https://www.docker.com/",
    icon: docker
  },
  git: {
    shortName: "Git",
    name: "Git",
    slug: "git",
    link: "https://git-scm.com/",
    icon: git
  }
};
