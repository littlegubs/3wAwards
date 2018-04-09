// This file should not be modified, as it can be overwritten by the generator.
// The 'Award' class is here for customizations and will not be touched.

import { Category } from '../Category';
import { Project } from '../Project';

export class AwardBase {
  public static readonly _resource: string = 'awards';
  get _resource(): string { return AwardBase._resource; };

  date: Date;
  category: Category;
  type: string;
  project: Project;

  setCategory(id: number): AwardBase {
    this.category = new Category();
    this.category.id = id;
    this.category['@id'] = '/categories/' + id;
    return this;
  }

  setProject(id: number): AwardBase {
    this.project = new Project();
    this.project.id = id;
    this.project['@id'] = '/projects/' + id;
    return this;
  }

}
