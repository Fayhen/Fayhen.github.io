import { ProjectCardData } from 'components/models';
import { stacks } from 'assets/stacks';

export const backendProjects: ProjectCardData[] = [
  {
    title: 'backend.projectTitleElixirIdenticon',
    description: 'backend.projectDescriptionElixirIdenticon',
    repositoryLink: 'https://github.com/Fayhen/elixir-identicon',
    productionLink: null,
    stacks: [
      stacks.elixir
    ]
  },
  {
    title: 'backend.projectTitleQuickLorem',
    description: 'backend.projectDescriptionQuickLorem',
    repositoryLink: 'https://github.com/Fayhen/quick-lorem',
    productionLink: 'https://www.npmjs.com/package/quick-lorem',
    stacks: [
      stacks.nodejs
    ]
  },
  {
    title: 'backend.projectTitleFastApiPagination',
    description: 'backend.projectDescriptionFastApiPagination',
    repositoryLink: 'https://github.com/Fayhen/fastapi-list-pagination',
    productionLink: null,
    stacks: [
      stacks.python
    ]
  },

  {
    title: 'backend.projectTitleNestjsNotificationService',
    description: 'backend.projectDescriptionNestjsNotificationService',
    repositoryLink: 'https://github.com/Fayhen/notification-service',
    productionLink: null,
    stacks: [
      stacks.nodejs,
      stacks.nestjs,
      stacks.typescript
    ]
  },
  {
    title: 'backend.projectTitlePythondex',
    description: 'backend.projectDescriptionPythondex',
    repositoryLink: 'https://github.com/Fayhen/Pythondex',
    productionLink: null,
    stacks: [
      stacks.python,
      stacks.sqlalchemy,
      stacks.flask
    ]
  },
  {
    title: 'backend.projectTitleMariadbSqlaDockerSetup',
    description: 'backend.projectDescriptionMariadbSqlaDockerSetup',
    repositoryLink: 'https://github.com/Fayhen/mariadb-sqla-docker-setup',
    productionLink: null,
    stacks: [
      stacks.docker,
      stacks.mysql,
      stacks.python,
      stacks.sqlalchemy
    ]
  }
]
