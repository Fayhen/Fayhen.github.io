import { ProjectCardData } from 'components/models';
import { stacks } from 'assets/stacks';

export const backendProjects: ProjectCardData[] = [
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
