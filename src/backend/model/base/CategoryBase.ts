// This file should not be modified, as it can be overwritten by the generator.
// The 'Category' class is here for customizations and will not be touched.

import { Award } from '../Award';
import { Rating } from '../Rating';

export class CategoryBase {
  public static readonly _resource: string = 'categories';
  get _resource(): string { return CategoryBase._resource; };

  libelle: string;
  awards: Award;
  ratings: Rating;

  setAwards(id: number): CategoryBase {
    this.awards = new Award();
    this.awards.id = id;
    this.awards['@id'] = '/awards/' + id;
    return this;
  }

  setRatings(id: number): CategoryBase {
    this.ratings = new Rating();
    this.ratings.id = id;
    this.ratings['@id'] = '/ratings/' + id;
    return this;
  }

}
