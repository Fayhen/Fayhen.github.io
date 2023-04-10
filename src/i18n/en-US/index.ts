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
      "I'm a Brazilian Junior programmer, building knowledge in several areas of FullStack development.",
    detail:
      'I graduated in Biological Sciences and became a developer along the way. I currently work as a Freelancer, dealing in both Backend and Frontend tasks.',
    techs: 'My current experience involves the following technologies:',
  },
  academic: {
    title: 'Academic',
    intro: "While I'm a Developer, my career began in the Sciences.",
    detail:
      "I am a B.Sc. in Biological Sciences, graduated at Federal University of Pará in 2015. Given it's location at Northern Brazil, I have had the opportunity to conduct field research in the Amazon Rainforest, one of the most ecologically and scientifically important regions on the planet.",
    expertise:
      'I have field and laboratory experience in the area of Coastal Ecology, researching Population Biology of benthic organisms in beach environments. I also worked with Entomology, having made taxonomic studies in local biological collections. Throughout University, I also participated in a myriad of field excursions from different areas of research in the region.',
    conclusion:
      'Fieldwork and learning about the Amazon Region, both in its science and cultures, remains as one of my passions.',
  },
  frontend: {
    title: 'Frontend',
    intro:
      'Besides the curriculum you are browsing right now, below follows a few more Frontend projects made by me, available on the Internet:',
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
    intro:
      "Most of my Backend work is in private repositories and unfortunately can't be showed.",
    detail:
      'Still, most of these projects revolves around RESTful APIs. I have and am actively working with API development using Python, with emphasis on the Django and Flask frameworks, usually integrated with databases. I have worked with MariaDB (MySQL) and SQLite, using ORMs.',
    conclusion:
      'I have a few Backend projects publicly available, which can be seen below:',
    projectPythondexTitle: 'Pythondex',
    projectPythondexDescription:
      'A simple Python API that simulates a Pokédex. It fetches data from PokéAPI and saves it in a local SQLite database. After, it can respond to several endpoints by querying this local database. It also has Swagger documentation.',
    projectMariadbSqlaDockerSetupTitle: 'mariadb-sqla-docker-setup',
    projectMariadbSqlaDockerSetupDescription:
      'A simple containerized MariaDB database setup, using SQLAlchemy, Alembic and docker-compose.',
  },
  fullstack: {
    title: 'FullStack',
    intro:
      'My personal FullStack projects have not yet advanced to public status, with one exception:',
    projectLaboratorioTitle: 'Laborator.io',
    projectLaboratorioDescription:
      "Laborator.io is a WIP FullStack application designed for managing scientific laboratories. It runs on a Flask server communicating with a Quasar frontend. This project is pending a great redesign process, intended to better modularize the application and fit it to the researchers' need.",
  },
};
