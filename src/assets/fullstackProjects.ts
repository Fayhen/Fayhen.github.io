import { ProjectCardData } from 'components/models';
import { stacks } from 'assets/stacks';

export const fullstackProjects: ProjectCardData[] = [
  {
    title: 'fullstack.projectAmazingAlbumsAdminTitle',
    description: 'fullstack.projectAmazingAlbumsAdminDescription',
    repositoryLink: 'https://github.com/Fayhen/Laborator.io',
    productionLink: null,
    stacks: [
      stacks.firebase,
      stacks.nodejs,
      stacks.nestjs,
      stacks.typescript,
      stacks.html5,
      stacks.css3,
    ]
  },
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
      stacks.vuejs,
      stacks.quasar
    ]
  }
]
