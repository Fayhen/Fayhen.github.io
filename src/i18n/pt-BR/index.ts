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
    ongoing:
      'Adicionalmente, estou ativamente desenvolvendo minhas habilidades nas seguintes tecnologias:',
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
      'Além deste currículo online, estes são alguns de meus projetos Frontend disponíveis publicamente:',
    projectTitleEmojiShift: 'Emoji-Shift',
    projectDescriptionEmojiShift:
      'Uma aplicação construída com Vue 3 e TypeScript, fazendo total uso das novas Composition e Reactivity APIs. Você poderá fazer e compartilhar cards que consistem de uma série de Emojis, e mensagens e cabeçalho e rodapé opcionais.',
    projectTitleQuasarCropper: 'Quasar Cropper',
    projectDescriptionQuasarCropper:
      'Um cortador de imagens dentro de uma SPA (Single Page Application) do Quasar Framework, utilizando Cropper.js.',
    projectTitleGroceryCart: 'grocery-cart',
    projectDescriptionGroceryCart:
      'Um conceito muito simples de carrinho de compras feito com uma antiga release candidate do Vue 3, para experimentar a nova Composition API.',
    projectTitleParsingHell: 'Parsing Hell',
    projectDescriptionParsingHell:
      'Webpage puramente em HTML e CSS que fiz no início de meu aprendizado em desenvolvimento Web. Também, uma das mais divertidas de fazer.',
  },
  backend: {
    title: 'Backend',
    intro: 'Estes sao alguns de meus projetos backend disponíveis publicamente.',
    projectTitleElixirIdenticon: 'elixir-identicon',
    projectDescriptionElixirIdenticon:
      'Pequena aplicação em Elixir para gerar identicons em formato PNG a partir de strings fornecidas pelo usuário, tais como usernames.',
    projectTitleFastApiPagination: 'fastapi-list-pagination',
    projectDescriptionFastApiPagination:
      'Uma prova de conceito para "paginar" uma lista de números codificados de forma estática através de solicitações REST para um servidor FastAPI. Feito como teste de hipótese para "paginar" dados de um serviço externo, enquanto o FastAPI atua como um gateway.',
    projectTitleNestjsNotificationService: 'NestJS Notification Service',
    projectDescriptionNestjsNotificationService:
      'Um microsserviço de notificações feito com NestJS e TypeScript. Criado durante aulas online.',
    projectTitlePythondex: 'Pythondex',
    projectDescriptionPythondex:
      'Uma simples API em Python que simula uma Pokédex. Ela busca dados da PokéAPI e os armazena em um baco de dados local em SQLite. Depois, ela é capaz de responder a vários endpoints através de queries neste banco local. Também possui documentação Swagger.',
    projectTitleQuickLorem: 'quick-lorem',
    projectDescriptionQuickLorem:
      'Um pacote NPX que gera textos Lorem Ipsum com várias opções de output.',
    projectTitleMariadbSqlaDockerSetup: 'mariadb-sqla-docker-setup',
    projectDescriptionMariadbSqlaDockerSetup:
      'Um simples setup de banco de dados MariaDB containerizado, usando SQLAlchemy, Alembic e docker-compose.',
  },
  fullstack: {
    title: 'FullStack',
    intro:
      'A maior parte de meu trabalho FullStack se encontra em repositórios privados e não pode ser compartilhado. Estas são algumas exceções.',
    projectTitleLaboratorio: 'Laborator.io',
    projectTitleAmazingAlbumsAdmin: 'amazing-albums-admin',
    projectDescriptionAmazingAlbumsAdmin:
      'Dashboard administrativa feita para outro de meus projetos, consistindo de um backend NestJS e frontend feito com o framework Astro. Em construção.',
    projectDescriptionLaboratorio:
      'Laborator.io é uma aplicação inacabada com backend Flask e frontend com o framework Quasar, originalmente desenhada para a administração de laboratórios de pesquisa científica. Concebida no início de minha transição de carreira, ela serviu de aprendizado e pode ser refeita no futuro.',
  },
};
