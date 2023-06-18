export default {
  menus: {
    langSwitchLabel: 'Mudar Idioma',
    menuNavigationLabel: 'Navegação',
    homeNavigationLabel: 'HOME',
    homeNavigationCaption: 'Voltar para a página inicial',
    stacksNavigationLabel: 'STACKS',
    stacksNavigationCaption: 'Stacks com as quais tenho experiência',
    academicNavigationLabel: 'ACADÊMICO',
    academicNavigationCaption: 'Meu background acadêmico',
    frontendNavigationLabel: 'FRONTEND',
    frontendNavigationCaption: 'Alguns de meus projetos Frontend',
    backendNavigationLabel: 'BACKEND',
    backendNavigationCaption: 'Alguns de meus projetos Backend',
    fullstackNavigationLabel: 'FULLSTACK',
    fullstackNavigationCaption: 'Alguns de meus projetos FullStack',
  },
  routes: {
    home: 'Home',
    stacks: 'Stacks',
    academic: 'Acadêmico',
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'FullStack',
  },
  main: {
    hello: 'Olá!',
    myName: 'Sou o Diego',
    myJob: 'Desenvolvedor FullStack',
  },
  stacks: {
    intro:
      'Sou um desenvolvedor de software com habilidades em várias áreas do desenvolvimento web FullStack.',
    detail:
      'Com formação acadêmica em Ciências Biológicas, tornei-me programador ao longo do caminho, acumulando mais de anos de experiência como freelancer e em contratos em tempo integral.',
      proficiency: 'Tenho proficiência nas seguintes tecnologias:',
  },
  academic: {
    title: 'Acadêmico',
    intro:
      'Embora atualmente atue como desenvolvedor, minha carreira teve início nas ciências naturais.',
    detail:
      'Sou graduado em Ciências Biológicas, com bacharelado concluído em 2015 pela <a href="https://www.ufpa.br/" target="_blank" rel="noopener noreferrer">Universidade Federal do Pará</a>. Dada a localização da universidade no norte do Brasil, tive a oportunidade de conduzir pesquisas de campo na Floresta Amazônica, uma das regiões mais ecologicamente e cientificamente importantes do planeta.',
    expertise:
      'Possuo experiência em trabalho de campo e laboratório na área de Ecologia Costeira, onde pesquisei a biologia populacional de organismos bênticos em ambientes de praia arenosa. Também atuei na área de Entomologia, realizando estudos taxonômicos em coleções biológicas locais. Ao longo da formação, também participei de diversas excursões de campo de outras áreas de pesquisa da região.',
    conclusion:
      'O aprendizado e as experiências inestimáveis na Região Amazônica, tanto em suas ciências quanto em suas culturas, permanecem como uma das minhas paixões.',
  },
  frontend: {
    title: 'Frontend',
    intro:
      'Além do currículo que você está visualizando neste momento, abaixo seguem mais alguns projetos Frontend feitos por mim, disponíveis na Internet:',
    projectEmojiShiftTitle: 'Emoji-Shift',
    projectEmojiShiftDescription:
      'Uma aplicação construída com Vue 3 e TypeScript, fazendo total uso das novas Composition e Reactivity APIs. Você poderá fazer e compartilhar cards que consistem de uma série de Emojis, e mensagens e cabeçalho e rodapé opcionais.',
    projectQuasarCropperTitle: 'Quasar Cropper',
    projectQuasarCropperDescription:
      'Um cortador de imagens dentro de uma SPA (Single Page Application) do Quasar Framework, utilizando Cropper.js.',
    projectGroceryCartTitle: 'grocery-cart',
    projectGroceryCartDescription:
      'Um conceito muito simples de carrinho de compras feito com uma antiga release candidate do Vue 3, para experimentar a nova Composition API.',
    projectParsingHellTitle: 'Parsing Hell',
    projectParsingHellDescription:
      'Webpage puramente em HTML e CSS que fiz no início de meu aprendizado em desenvolvimento Web. Também, uma das mais divertidas de fazer.',
  },
  backend: {
    title: 'Backend',
    intro:
      'A maior parte de meu trabalho com Backend se encontra em repositórios privados e infelizmente não pode ser compartilhado.',
    detail:
      'Ainda assim, a maioria desses projetos gira em torno de APIs RESTful. Trabalhei e trabalho ativamente com o desenvolvimento de APIs usando Python, em particular os frameworks Django e Flask, normalmente integradas com bancos de dados. Tenho experiência com MariaDB (MySQL) e SQLAlchemy, utilizando ORMs.',
    conclusion:
      'Tenho alguns projetos de Backend publicamente disponíveis, que podem ser conferidos abaixo:',
    projectPythondexTitle: 'Pythondex',
    projectPythondexDescription:
      'Uma simples API em Python que simula uma Pokédex. Ela busca dados da PokéAPI e os armazena em um baco de dados local em SQLite. Depois, ela é capaz de responder a vários endpoints através de queries neste banco local. Também possui documentação Swagger.',
    projectMariadbSqlaDockerSetupTitle: 'mariadb-sqla-docker-setup',
    projectMariadbSqlaDockerSetupDescription:
      'Um simples setup de banco de dados MariaDB containerizado, usando SQLAlchemy, Alembic e docker-compose.',
  },
  fullstack: {
    title: 'FullStack',
    intro:
      ' Meus projetos pessoais FullStack ainda não avançaram para fase de publicação, com uma exceção:',
    projectLaboratorioTitle: 'Laborator.io',
    projectLaboratorioDescription:
      'Laborator.io é uma aplicação FullStack ainda em desenvolvimento, desenhada para a administração de laboratórios de pesquisa científica. Ela funciona com um servidor Flask comunicando-se com um cliente em Quasar. Esse projeto está pendendo um grande processo de redesign, no intento de melhor modularizá-lo e ajustá-lo às demandas de pesquisadores.',
  },
};
