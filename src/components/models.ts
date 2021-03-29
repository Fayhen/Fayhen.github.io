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

export interface StackData {
  key: string;
  ariaLabel: string;
  tooltip: string;
  icon: Devicon;
}

export type Stacks = { [name: string]: StackData }

export interface ProjectCardData {
  title: string;
  description: string;
  repositoryLink: string | null;
  productionLink: string | null;
  stacks: StackData[];
}
