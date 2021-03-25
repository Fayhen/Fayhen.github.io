export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Devicon {
  id: string;
  filepath: string;
}

export interface StackItem {
  key: string;
  ariaLabel: string;
  tooltip: string;
  icon: Devicon;
}

export interface ProjectCardData {
  title: string;
  description: string;
  repositoryLink: string | null;
  productionLink: string | null;
  stacks: Devicon[];
}
