// This file should not be modified, as it can be overwritten by the generator.
// The 'Client' class is here for customizations and will not be touched.

import { Tag } from '../Tag';
import { Member } from '../Member';
import { Image } from '../Image';
import { Project } from '../Project';

export class ClientBase {
  public static readonly _resource: string = 'clients';
  get _resource(): string { return ClientBase._resource; };

  name: string;
  country: string;
  address: string;
  addressComplement: string;
  zipcode: string;
  phone: string;
  fax: string;
  city: string;
  description: string;
  internalNotice: string;
  creationDate: Date;
  websiteUrl: string;
  tva: string;
  duns: string;
  tags: Tag[];
  member: Member;
  image: Image;
  projects: Project;

  setMember(id: number): ClientBase {
    this.member = new Member();
    this.member.id = id;
    this.member['@id'] = '/members/' + id;
    return this;
  }

  setImage(id: number): ClientBase {
    this.image = new Image();
    this.image.id = id;
    this.image['@id'] = '/images/' + id;
    return this;
  }

  setProjects(id: number): ClientBase {
    this.projects = new Project();
    this.projects.id = id;
    this.projects['@id'] = '/projects/' + id;
    return this;
  }

}
