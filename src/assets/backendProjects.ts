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
  }
]
