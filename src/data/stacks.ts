import astroIcon from "devicon/icons/astro/astro-original.svg";
import bulmaIcon from "devicon/icons/bulma/bulma-plain.svg";
import cssIcon from "devicon/icons/css3/css3-original.svg";
import djangoIcon from "devicon/icons/django/django-plain.svg";
import dockerIcon from "devicon/icons/docker/docker-original.svg";
import ectoIcon from "devicon/icons/ecto/ecto-original.svg";
import elixirIcon from "devicon/icons/elixir/elixir-original.svg";
import firebaseIcon from "devicon/icons/firebase/firebase-original.svg";
import flaskIcon from "devicon/icons/flask/flask-original.svg";
import gitIcon from "devicon/icons/git/git-original.svg";
import htmlIcon from "devicon/icons/html5/html5-original.svg";
import jsIcon from "devicon/icons/javascript/javascript-original.svg";
import mariadbIcon from "devicon/icons/mariadb/mariadb-original.svg";
import nixosIcon from "devicon/icons/nixos/nixos-original.svg";
import nodeIcon from "devicon/icons/nodejs/nodejs-original.svg";
import phoenixIcon from "devicon/icons/phoenix/phoenix-original.svg";
import postgresIcon from "devicon/icons/postgresql/postgresql-original.svg";
import pythonIcon from "devicon/icons/python/python-original.svg";
import quasarIcon from "devicon/icons/quasar/quasar-plain.svg";
import reactIcon from "devicon/icons/react/react-original.svg";
import sassIcon from "devicon/icons/sass/sass-original.svg";
import sqlalchemyIcon from "devicon/icons/sqlalchemy/sqlalchemy-original.svg";
import sqliteIcon from "devicon/icons/sqlite/sqlite-original.svg";
import tailwindIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import tauriIcon from "devicon/icons/tauri/tauri-original.svg";
import tsIcon from "devicon/icons/typescript/typescript-original.svg";
import vueIcon from "devicon/icons/vuejs/vuejs-original.svg";

import nestjsIcon from "devicon/icons/nestjs/nestjs-original.svg";
import goIcon from "devicon/icons/go/go-original.svg";
import rustIcon from "devicon/icons/rust/rust-original.svg";

import type { ImageMetadata } from "astro";

/**
 * Technology stack data.
 */
export interface Stack {
  /**
   * Alt text to show when showing the icon through image tags.
   */
  alt: string
  /**
   * Icon asset data.
   */
  icon: ImageMetadata
  /**
   * Link to the stack website or repository.
   */
  link: string
  /**
   * Tooltip text.
   */
  tooltip: string
}

export function getKnownStacks(): Stack[] {
  return [
    {
      alt: "Astro icon",
      icon: astroIcon,
      link: "https://astro.build/",
      tooltip: "Astro"
    },
    {
      alt: "Bulma CSS icon",
      icon: bulmaIcon,
      link: "https://bulma.io/",
      tooltip: "Bulma CSS"
    },
    {
      alt: "CSS icon",
      icon: cssIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      tooltip: "CSS"
    },
    {
      alt: "Django framework icon",
      icon: djangoIcon,
      link: "https://www.djangoproject.com/",
      tooltip: "Django framework"
    },
    {
      alt: "Docker icon",
      icon: dockerIcon,
      link: "https://www.docker.com/",
      tooltip: "Docker"
    },
    {
      alt: "Ecto icon",
      icon: ectoIcon,
      link: "https://hexdocs.pm/ecto/Ecto.html",
      tooltip: "Ecto"
    },
    {
      alt: "Elixir icon",
      icon: elixirIcon,
      link: "https://elixir-lang.org/",
      tooltip: "Elixir"
    },
    {
      alt: "Firebase icon",
      icon: firebaseIcon,
      link: "https://firebase.google.com/",
      tooltip: "Firebase"
    },
    {
      alt: "Flask icon",
      icon: flaskIcon,
      link: "https://flask.palletsprojects.com/",
      tooltip: "Flask"
    },
    {
      alt: "Git icon",
      icon: gitIcon,
      link: "https://git-scm.com/",
      tooltip: "Git"
    },
    {
      alt: "HTML icon",
      icon: htmlIcon,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML",
      tooltip: "HTML"
    },
    {
      alt: "JavaScript icon",
      icon: jsIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      tooltip: "JavaScript"
    },
    {
      alt: "MariaDB icon",
      icon: mariadbIcon,
      link: "https://mariadb.org/",
      tooltip: "MariaDB"
    },
    {
      alt: "NixOS icon",
      icon: nixosIcon,
      link: "https://nixos.org/",
      tooltip: "NixOS"
    },
    {
      alt: "Node.js icon",
      icon: nodeIcon,
      link: "https://nodejs.org/en",
      tooltip: "Node.js"
    },
    {
      alt: "Phoenix framework icon",
      icon: phoenixIcon,
      link: "https://www.phoenixframework.org/",
      tooltip: "Phoenix framework"
    },
    {
      alt: "Postgres icon",
      icon: postgresIcon,
      link: "https://www.postgresql.org/",
      tooltip: "Postgres"
    },
    {
      alt: "Python icon",
      icon: pythonIcon,
      link: "https://www.python.org/",
      tooltip: "Python"
    },
    {
      alt: "Quasar framework icon",
      icon: quasarIcon,
      link: "https://quasar.dev/",
      tooltip: "Quasar framework"
    },
    {
      alt: "React icon",
      icon: reactIcon,
      link: "https://react.dev/",
      tooltip: "React"
    },
    {
      alt: "Sass icon",
      icon: sassIcon,
      link: "https://sass-lang.com/",
      tooltip: "Sass"
    },
    {
      alt: "SQLAlchemy icon",
      icon: sqlalchemyIcon,
      link: "https://www.sqlalchemy.org/",
      tooltip: "SQLAlchemy"
    },
    {
      alt: "SQLite icon",
      icon: sqliteIcon,
      link: "https://www.sqlite.org/",
      tooltip: "SQLite"
    },
    {
      alt: "Tailwind CSS icon",
      icon: tailwindIcon,
      link: "https://tailwindcss.com/",
      tooltip: "Tailwind CSS"
    },
    {
      alt: "TypeScript icon",
      icon: tsIcon,
      link: "https://www.typescriptlang.org/",
      tooltip: "TypeScript"
    },
    {
      alt: "Vue.js icon",
      icon: vueIcon,
      link: "https://vuejs.org/",
      tooltip: "Vue.js"
    }
  ]
}

export function getLearningStacks(): Stack[] {
  return [
    {
      alt: "NestJS icon",
      icon: nestjsIcon,
      link: "https://nestjs.com/",
      tooltip: "NestJS"
    },
    {
      alt: "Go icon",
      icon: goIcon,
      link: "https://go.dev/",
      tooltip: "Go"
    },
    {
      alt: "Rust icon",
      icon: rustIcon,
      link: "https://www.rust-lang.org/",
      tooltip: "Rust"
    },
    {
      alt: "Tauri icon",
      icon: tauriIcon,
      link: "https://tauri.app/",
      tooltip: "Tauri"
    }
  ]
}

