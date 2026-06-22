# Fayhen's Portfolio (fayhen-github-io)

This is my online portfolio, built by hand with the [Astro Framework](https://astro.build/). It features:

- I18n (en + pt-br)
- Up-to-date projects, experience and contacts
- Sitemap, JSON-LD and Open Graph assets

## Setup and running

Ensure you have Node 22.12+ and [pnpm](https://pnpm.io/) available on your machine. A `.tool-versions` file is available if you use [asdf](https://asdf-vm.com/).

Next, install dependencies with pnpm:

```sh
pnpm install
```

Then run any of the commands below:

| Command                   | Action                                                                   |
| :------------------------ | :----------------------------------------------------------------------- |
| `pnpm dev`                | Build local assets and spin local dev server                             |
| `pnpm dev:host`           | Build local assets and spin local dev server, listening on all addresses |
| `pnpm build`              | Build local assets and build the application for production at `./dist/` |
| `pnpm build:assets`       | Build local assets                                                       |
| `pnpm preview`            | Preview your build locally, before deploying                             |
| `pnpm lint`               | Lint files                                                               |
| `pnpm lint:style`         | Lint CSS files                                                           |

Astro commands are also available:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## Deployment

(TODO)
