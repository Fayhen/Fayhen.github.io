import type { Project } from "../data/projects";

export function resolveProjectLink(project: Project): string {
  const link = project.productionLink ?? project.repositoryLink;
  return link ?? "#";
}

export function resolveProjectAria(project: Project): string {
  return project.productionLink
    ? `View ${project.title} live demo`
    : `View ${project.title} source code`;
}

export function resolveProjectLinkLabel(project: Project): string {
  return project.productionLink
    ? "Click to see live ↗"
    : "Click to see code ↗";
}
