import { ProjectCardData } from 'components/models';
import { stacks } from 'assets/stacks';

export const backendProjects: ProjectCardData[] = [
  {
    title: 'backend.projectElixirIdenticonTitle',
    description: 'backend.projectElixirIdenticonDescription',
    repositoryLink: 'https://github.com/Fayhen/elixir-identicon',
    productionLink: null,
    stacks: [
      stacks.elixir
    ]
  },
  {
    title: 'backend.projectQuickLoremTitle',
    description: 'backend.projectQuickLoremDescription',
    repositoryLink: 'https://github.com/Fayhen/quick-lorem',
    productionLink: 'https://www.npmjs.com/package/quick-lorem',
    stacks: [
      stacks.nodejs
    ]
  },
  {
    title: 'backend.projectFastApiPaginationTitle',
    description: 'backend.projectFastApiPaginationDescription',
    repositoryLink: 'https://github.com/Fayhen/fastapi-list-pagination',
    productionLink: null,
    stacks: [
      stacks.python
    ]
  },

  {
    title: 'backend.projectNestjsNotificationServiceTitle',
    description: 'backend.projectNestjsNotificationServiceDescription',
    repositoryLink: 'https://github.com/Fayhen/notification-service',
    productionLink: null,
    stacks: [
      stacks.nodejs,
      stacks.nestjs,
      stacks.typescript
    ]
  },
  {
    title: 'backend.projectPythondexTitle',
    description: 'backend.projectPythondexDescription',
    repositoryLink: 'https://github.com/Fayhen/Pythondex',
    productionLink: null,
    stacks: [
      stacks.python,
      stacks.sqlalchemy,
      stacks.flask
    ]
  },
  {
    title: 'backend.projectMariadbSqlaDockerSetupTitle',
    description: 'backend.projectMariadbSqlaDockerSetupDescription',
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
