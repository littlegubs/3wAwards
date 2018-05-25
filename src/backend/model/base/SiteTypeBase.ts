// This file should not be modified, as it can be overwritten by the generator.
// The 'SiteType' class is here for customizations and will not be touched.

import { Project } from '../Project';

export class SiteTypeBase {
  public static readonly _resource: string = 'site_types';
  get _resource(): string { return SiteTypeBase._resource; };

  libelle: string;
  projects: Project;

  setProjects(id: number): SiteTypeBase {
    this.projects = new Project();
    this.projects.id = id;
    this.projects['@id'] = '/projects/' + id;
    return this;
  }

}
