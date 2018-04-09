// This file should not be modified, as it can be overwritten by the generator.
// The 'TypeTag' class is here for customizations and will not be touched.

import { Tag } from '../Tag';

export class TypeTagBase {
  public static readonly _resource: string = 'type_tags';
  get _resource(): string { return TypeTagBase._resource; };

  libelle: string;
  tags: Tag;

  setTags(id: number): TypeTagBase {
    this.tags = new Tag();
    this.tags.id = id;
    this.tags['@id'] = '/tags/' + id;
    return this;
  }

}
