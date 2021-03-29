import { ProjectCardData } from 'components/models';
import { stacks } from 'assets/stacks';

export const fullstackProjects: ProjectCardData[] = [
  {
    title: 'fullstack.projectLaboratorioTitle',
    description: 'fullstack.projectLaboratorioDescription',
    repositoryLink: 'https://github.com/Fayhen/Laborator.io',
    productionLink: null,
    stacks: [
      stacks.python,
      stacks.sqlalchemy,
      stacks.flask,
      stacks.html5,
      stacks.css3,
      stacks.javascript,
      stacks.vuejs,
      stacks.quasar
    ]
  }
]
