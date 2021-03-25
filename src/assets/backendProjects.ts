import { ProjectCardData } from 'components/models';

export const backendProjects: ProjectCardData[] = [
  {
    title: 'backend.projectPythondexTitle',
    description: 'backend.projectPythondexDescription',
    repositoryLink: 'https://github.com/Fayhen/Pythondex',
    productionLink: null,
    stacks: [
      {
        id: 'python',
        filepath: 'img:devicons/python-original.svg'
      },
      {
        id: 'sqlalchemy',
        filepath: 'img:devicons/sqlalchemy-original.svg'
      },
      {
        id: 'flask',
        filepath: 'img:devicons/flask-original.svg'
      }
    ]
  }
]
