export default {
  menus: {
    langSwitchLabel: 'Change Language',
    menuNavigationLabel: 'Navigation',
    homeNavigationLabel: 'HOME',
    homeNavigationCaption: 'Return to homepage',
    stacksNavigationLabel: 'STACKS',
    stacksNavigationCaption: "The stacks I'm experienced with",
    academicNavigationLabel: 'ACADEMIC',
    academicNavigationCaption: 'My Academic background',
    frontendNavigationLabel: 'FRONTEND',
    frontendNavigationCaption: 'Some of my Frontend projects',
    backendNavigationLabel: 'BACKEND',
    backendNavigationCaption: 'Some of my Backend projects',
    fullstackNavigationLabel: 'FULLSTACK',
    fullstackNavigationCaption: 'Some of my FullStack projects',
  },
  routes: {
    home: 'Home',
    stacks: 'Stacks',
    academic: 'Academic',
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'FullStack',
  },
  main: {
    hello: 'Hello!',
    myName: "I'm Diego",
    myJob: 'FullStack Developer',
  },
  stacks: {
    intro:
      "I'm a software developer with expertise in various aspects of FullStack web development.",
    detail:
      'Having an academic background in Biological Sciences, I transitioned into the field and accumulated over two years of experience in freelancing and full-time employment.',
    proficiency: 'I\'m proficient in the following technologies:',
    ongoing:
      'Additionally, I\'m actively developing my skills in the following technologies:',
  },
  academic: {
    title: 'Academic',
    intro: 'While currently pursuing a career in software development, my journey began in the field of Natural Sciences.',
    detail:
      'I hold a B.Sc. degree in Biological Sciences, which I completed in 2015 at the <a href="https://www.ufpa.br/" target="_blank" rel="noopener noreferrer">Federal University of Pará</a>. Being situated in Northern Brazil, the university provided me the unique opportunity to engage in field research in the Amazon Rainforest, one of the most ecologically and scientifically significant regions on Earth.',
    expertise:
      'This academic background includes hands-on experience in both fieldwork and laboratory settings, primarily focusing on Coastal Ecology. Specifically, I conducted research on the Population Biology of benthic organisms in sandy beach environments. Additionally, I worked in the field of Entomology, where I conducted taxonomic studies within local biological collections. Throughout my time at University, I also participated in various field excursions from diverse research areas of research within the region.',
    conclusion:
      'The invaluable experiences of immersing myself in the science and cultures of the Amazon region continue to fuel my passion to this day.',
  },
  frontend: {
    title: 'Frontend',
    intro:
      'Besides this online curriculum, these are a few of my Frontend projects available publicly:',
    projectEmojiShiftTitle: 'Emoji-Shift',
    projectEmojiShiftDescription:
      'An application built with Vue 3 and TypeScript, making full use of the new Composition and Reactivity APIs. You can make and share cards composed of an array of Emojis and optional header and footer messages.',
    projectQuasarCropperTitle: 'Quasar Cropper',
    projectQuasarCropperDescription:
      'An image cropper within a Quasar Framework SPA (Single Page Application), using Cropper.js.',
    projectGroceryCartTitle: 'grocery-cart',
    projectGroceryCartDescription:
      'A very simple shopping cart concept, made back on an early release candidate of Vue 3, to experiment with the new Composition API.',
    projectParsingHellTitle: 'Parsing Hell',
    projectParsingHellDescription:
      'Purely HTML and CSS webpage I made back when first learning Web Development. Also, one of that I had most fun making.',
  },
  backend: {
    title: 'Backend',
    intro: 'These are some of my backend work available publicly.',
    projectElixirIdenticonTitle: 'elixir-identicon',
    projectElixirIdenticonDescription:
      'A small Elixir application to generate identicon PNG images from user-provided strings, such as usernames.',
    projectFastApiPaginationTitle: 'fastapi-list-pagination',
    projectFastApiPaginationDescription:
      'This is a POC to "paginate" a hardcoded number list through REST requests to a FastAPI server. Made while testing an hypothesis for "paginating" data from an external service while FastAPI serves as a gateway.',
    projectNestjsNotificationServiceTitle: 'NestJS Notification Service',
    projectNestjsNotificationServiceDescription:
      'A notification microservice application written NestJS and TypeScript. Created during online classes.',
    projectPythondexTitle: 'Pythondex',
    projectPythondexDescription:
      'A simple Python API that simulates a Pokédex. It fetches data from PokéAPI and saves it in a local SQLite database. After, it can respond to several endpoints by querying this local database. It also has Swagger documentation.',
    projectQuickLoremTitle: 'quick-lorem',
    projectQuickLoremDescription:
      'A simple NPX package that generates Lorem Ipsum text with several output options.',
    projectMariadbSqlaDockerSetupTitle: 'mariadb-sqla-docker-setup',
    projectMariadbSqlaDockerSetupDescription:
      'A simple containerized MariaDB database setup, using SQLAlchemy, Alembic and docker-compose.',
  },
  fullstack: {
    title: 'FullStack',
    intro:
      "Most of my FullStack work is in private repositories and can't be shown. These are a few exceptions.",
    projectLaboratorioTitle: 'Laborator.io',
    projectAmazingAlbumsAdminTitle: 'amazing-albums-admin',
    projectAmazingAlbumsAdminDescription:
      'An administrative dashboard for another of my projects, consisting of a NestJS backend and Astro frontend. Currently a work-in-progress.',
    projectLaboratorioDescription:
      'Laborator.io is an unfinished application with a Flask backend and Quasar frontend, originally designed for the administration of scientific laboratories. Conceived during my career transition, it served as a learning experience and may be redone on the future.',
  },
};
