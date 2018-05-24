// This file should not be modified, as it can be overwritten by the generator.
// The 'Target' class is here for customizations and will not be touched.

import { Project } from '../Project';

export class TargetBase {
  public static readonly _resource: string = 'targets';
  get _resource(): string { return TargetBase._resource; };

  libelle: string;
  projects: Project;

  setProjects(id: number): TargetBase {
    this.projects = new Project();
    this.projects.id = id;
    this.projects['@id'] = '/projects/' + id;
    return this;
  }

}
