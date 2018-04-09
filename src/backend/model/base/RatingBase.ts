// This file should not be modified, as it can be overwritten by the generator.
// The 'Rating' class is here for customizations and will not be touched.

import { Category } from '../Category';
import { ProjectRatingMember } from '../ProjectRatingMember';

export class RatingBase {
  public static readonly _resource: string = 'ratings';
  get _resource(): string { return RatingBase._resource; };

  value: number;
  category: Category;
  projectRatingMember: ProjectRatingMember;

  setCategory(id: number): RatingBase {
    this.category = new Category();
    this.category.id = id;
    this.category['@id'] = '/categories/' + id;
    return this;
  }

  setProjectRatingMember(id: number): RatingBase {
    this.projectRatingMember = new ProjectRatingMember();
    this.projectRatingMember.id = id;
    this.projectRatingMember['@id'] = '/project_rating_members/' + id;
    return this;
  }

}
