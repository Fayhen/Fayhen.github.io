type Stacks = Record<string, Stack>

export interface Stack {
  name: string
  slug: string
  link: string
  icon: string
}

export const stacks: Stacks = {
  elixir: {
    name: "Elixir",
    slug: "elixir",
    link: "https://elixir-lang.org/",
    icon: "/devicons/elixir-original.svg"
  },
  phoenix: {
    name: "Phoenix Framework",
    slug: "phoenix",
    link: "https://www.phoenixframework.org/",
    icon: "/devicons/phoenix-original.svg"
  },
  python: {
    name: "Python",
    slug: "python",
    link: "https://www.python.org/",
    icon: "/devicons/python-original.svg"
  },
  javascript: {
    name: "JavaScript",
    slug: "javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/devicons/javascript-original.svg"
  },
  typescript: {
    name: "TypeScript",
    slug: "typescript",
    link: "https://www.typescriptlang.org/",
    icon: "/devicons/typescript-original.svg"
  },
  firebase: {
    name: "Firebase",
    slug: "firebase",
    link: "https://firebase.google.com/",
    icon: "/devicons/firebase-plain.svg"
  },
  vuejs: {
    name: "Vue.js",
    slug: "vuejs",
    link: "https://vuejs.org/",
    icon: "/devicons/vuejs-original.svg"
  },
  quasar: {
    name: "Quasar Framework",
    slug: "quasar",
    link: "https://quasar.dev/",
    icon: "/devicons/quasar-plain.svg"
  },
  html5: {
    name: "HTML5",
    slug: "html5",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    icon: "/devicons/html5-original.svg"
  },
  css3: {
    name: "CSS3",
    slug: "css3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "/devicons/css3-original.svg"
  },
  tailwind: {
    name: "Tailwind",
    slug: "tawilwindcss",
    link: "https://tailwindcss.com/",
    icon: "/devicons/tailwindcss-original.svg"
  },
  sass: {
    name: "Sass",
    slug: "sass",
    link: "https://sass-lang.com//",
    icon: "/devicons/sass-original.svg"
  },
  fastapi: {
    name: "FastAPI",
    slug: "fastapi",
    link: "https://fastapi.tiangolo.com/",
    icon: "/devicons/fastapi-original.svg"
  },
  flask: {
    name: "Flask",
    slug: "flask",
    link: "https://flask.palletsprojects.com/",
    icon: "/devicons/flask-original.svg"
  },
  django: {
    name: "Django",
    slug: "django",
    link: "https://www.djangoproject.com/",
    icon: "/devicons/django-original.svg"
  },
  postgres: {
    name: "Postgres",
    slug: "postgres",
    link: "https://www.postgresql.org/",
    icon: "/devicons/postgres-original.svg"
  },
  mysql: {
    name: "MySQL",
    slug: "mysql",
    link: "https://www.mysql.com/",
    icon: "/devicons/mysql-original.svg"
  },
  sqlite: {
    name: "SQLite",
    slug: "sqlite",
    link: "https://sqlite.org/",
    icon: "/devicons/sqlite-original.svg"
  },
  sqlalchemy: {
    name: "SQLAlchemy",
    slug: "sqlalchmey",
    link: "https://www.sqlalchemy.org/",
    icon: "/devicons/sqlalchemy-original.svg"
  },
  docker: {
    name: "Docker",
    slug: "docker",
    link: "https://www.docker.com/",
    icon: "/devicons/docker-original.svg"
  },
  git: {
    name: "Git",
    slug: "git",
    link: "https://git-scm.com/",
    icon: "/devicons/git-original.svg"
  }
};
