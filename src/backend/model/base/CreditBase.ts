// This file should not be modified, as it can be overwritten by the generator.
// The 'Credit' class is here for customizations and will not be touched.

import { Project } from '../Project';

export class CreditBase {
  public static readonly _resource: string = 'credits';
  get _resource(): string { return CreditBase._resource; };

  lastname: string;
  firstname: string;
  function: string;
  projects: Project;

  setProjects(id: number): CreditBase {
    this.projects = new Project();
    this.projects.id = id;
    this.projects['@id'] = '/projects/' + id;
    return this;
  }

}
