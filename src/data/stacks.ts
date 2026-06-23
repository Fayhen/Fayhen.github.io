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
import postgres from "../assets/icons/devicons/postgresql-original.svg";
import prisma from "../assets/icons/devicons/prisma-original.svg";
import python from "../assets/icons/devicons/python-original.svg";
import quasar from "../assets/icons/devicons/quasar-plain.svg";
import sass from "../assets/icons/devicons/sass-original.svg";
import sqlalchemy from "../assets/icons/devicons/sqlalchemy-original.svg";
import sqlite from "../assets/icons/devicons/sqlite-original.svg";
import tailwind from "../assets/icons/devicons/tailwindcss-original.svg";
import typescript from "../assets/icons/devicons/typescript-original.svg";
import vue from "../assets/icons/devicons/vuejs-original.svg";

import astroPlain from "../assets/icons/devicons/themeable/astro-plain.svg";
import cssPlain from "../assets/icons/devicons/themeable/css3-plain.svg";
import djangoPlain from "../assets/icons/devicons/themeable/django-plain.svg";
import dockerPlain from "../assets/icons/devicons/themeable/docker-plain.svg";
import elixirPlain from "../assets/icons/devicons/themeable/elixir-plain.svg";
import fastapiPlain from "../assets/icons/devicons/themeable/fastapi-plain.svg";
import firebasePlain from "../assets/icons/devicons/themeable/firebase-plain.svg";
import flaskPlain from "../assets/icons/devicons/themeable/flask-plain.svg";
import gitPlain from "../assets/icons/devicons/themeable/git-plain.svg";
import html5Plain from "../assets/icons/devicons/themeable/html5-plain.svg";
import javascriptPlain from "../assets/icons/devicons/themeable/javascript-plain.svg";
import mysqlPlain from "../assets/icons/devicons/themeable/mysql-plain.svg";
import phoenixPlain from "../assets/icons/devicons/themeable/phoenix-plain.svg";
import postgresPlain from "../assets/icons/devicons/themeable/postgresql-plain.svg";
import prismaPlain from "../assets/icons/devicons/themeable/prisma-plain.svg";
import pythonPlain from "../assets/icons/devicons/themeable/python-plain.svg";
import quasarPlain from "../assets/icons/devicons/themeable/quasar-plain.svg";
import sassPlain from "../assets/icons/devicons/themeable/sass-plain.svg";
import sqlalchemyPlain from "../assets/icons/devicons/themeable/sqlalchemy-plain.svg";
import sqlitePlain from "../assets/icons/devicons/themeable/sqlite-plain.svg";
import tailwindPlain from "../assets/icons/devicons/themeable/tailwindcss-plain.svg";
import typescriptPlain from "../assets/icons/devicons/themeable/typescript-plain.svg";
import vuePlain from "../assets/icons/devicons/themeable/vuejs-plain.svg";

type AstroComponent = (_props: Record<string, unknown>) => unknown;

type Stacks = Record<string, Stack>

export interface Stack {
  shortName: string
  name: string
  slug: string
  link: string
  icon: AstroComponent
  iconThemeable: AstroComponent
}

export const stacks: Stacks = {
  elixir: {
    shortName: "Elixir",
    name: "Elixir",
    slug: "elixir",
    link: "https://elixir-lang.org/",
    icon: elixir,
    iconThemeable: elixirPlain
  },
  phoenix: {
    shortName: "Phoenix",
    name: "Phoenix Framework",
    slug: "phoenix",
    link: "https://www.phoenixframework.org/",
    icon: phoenix,
    iconThemeable: phoenixPlain
  },
  python: {
    shortName: "Python",
    name: "Python",
    slug: "python",
    link: "https://www.python.org/",
    icon: python,
    iconThemeable: pythonPlain
  },
  javascript: {
    shortName: "JavaScript",
    name: "JavaScript",
    slug: "javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: javascript,
    iconThemeable: javascriptPlain
  },
  typescript: {
    shortName: "TypeScript",
    name: "TypeScript",
    slug: "typescript",
    link: "https://www.typescriptlang.org/",
    icon: typescript,
    iconThemeable: typescriptPlain
  },
  firebase: {
    shortName: "Firebase",
    name: "Firebase",
    slug: "firebase",
    link: "https://firebase.google.com/",
    icon: firebase,
    iconThemeable: firebasePlain
  },
  prisma: {
    shortName: "Prisma",
    name: "Prisma",
    slug: "prisma",
    link: "https://www.prisma.io/",
    icon: prisma,
    iconThemeable: prismaPlain
  },
  vuejs: {
    shortName: "Vue.js",
    name: "Vue.js",
    slug: "vuejs",
    link: "https://vuejs.org/",
    icon: vue,
    iconThemeable: vuePlain
  },
  quasar: {
    shortName: "Quasar",
    name: "Quasar Framework",
    slug: "quasar",
    link: "https://quasar.dev/",
    icon: quasar,
    iconThemeable: quasarPlain
  },
  astro: {
    shortName: "Astro",
    name: "Astro",
    slug: "astro",
    link: "https://astro.build/",
    icon: astro,
    iconThemeable: astroPlain
  },
  html5: {
    shortName: "HTML5",
    name: "HTML5",
    slug: "html5",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    icon: html5,
    iconThemeable: html5Plain
  },
  css3: {
    shortName: "CSS3",
    name: "CSS3",
    slug: "css3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: css,
    iconThemeable: cssPlain
  },
  tailwind: {
    shortName: "Tailwind",
    name: "Tailwind",
    slug: "tailwindcss",
    link: "https://tailwindcss.com/",
    icon: tailwind,
    iconThemeable: tailwindPlain
  },
  sass: {
    shortName: "Sass",
    name: "Sass",
    slug: "sass",
    link: "https://sass-lang.com//",
    icon: sass,
    iconThemeable: sassPlain
  },
  fastapi: {
    shortName: "FastAPI",
    name: "FastAPI",
    slug: "fastapi",
    link: "https://fastapi.tiangolo.com/",
    icon: fastapi,
    iconThemeable: fastapiPlain
  },
  flask: {
    shortName: "Flask",
    name: "Flask",
    slug: "flask",
    link: "https://flask.palletsprojects.com/",
    icon: flask,
    iconThemeable: flaskPlain
  },
  django: {
    shortName: "Django",
    name: "Django",
    slug: "django",
    link: "https://www.djangoproject.com/",
    icon: django,
    iconThemeable: djangoPlain
  },
  postgres: {
    shortName: "Postgres",
    name: "Postgres",
    slug: "postgres",
    link: "https://www.postgresql.org/",
    icon: postgres,
    iconThemeable: postgresPlain
  },
  mysql: {
    shortName: "MySQL",
    name: "MySQL",
    slug: "mysql",
    link: "https://www.mysql.com/",
    icon: mysql,
    iconThemeable: mysqlPlain
  },
  sqlite: {
    shortName: "SQLite",
    name: "SQLite",
    slug: "sqlite",
    link: "https://sqlite.org/",
    icon: sqlite,
    iconThemeable: sqlitePlain
  },
  sqlalchemy: {
    shortName: "SQLAlchemy",
    name: "SQLAlchemy",
    slug: "sqlalchemy",
    link: "https://www.sqlalchemy.org/",
    icon: sqlalchemy,
    iconThemeable: sqlalchemyPlain
  },
  docker: {
    shortName: "Docker",
    name: "Docker",
    slug: "docker",
    link: "https://www.docker.com/",
    icon: docker,
    iconThemeable: dockerPlain
  },
  git: {
    shortName: "Git",
    name: "Git",
    slug: "git",
    link: "https://git-scm.com/",
    icon: git,
    iconThemeable: gitPlain
  }
};
