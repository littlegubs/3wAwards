// This file should not be modified, as it can be overwritten by the generator.
// The 'Agency' class is here for customizations and will not be touched.

import { TypeAgency } from '../TypeAgency';
import { Member } from '../Member';
import { Project } from '../Project';
import { Tag } from '../Tag';
import { Image } from '../Image';

export class AgencyBase {
  public static readonly _resource: string = 'agencies';
  get _resource(): string { return AgencyBase._resource; };

  typeAgency: TypeAgency;
  member: Member;
  projects: Project;
  tags: Tag;
  image: Image;

  setTypeAgency(id: number): AgencyBase {
    this.typeAgency = new TypeAgency();
    this.typeAgency.id = id;
    this.typeAgency['@id'] = '/type_agencies/' + id;
    return this;
  }

  setMember(id: number): AgencyBase {
    this.member = new Member();
    this.member.id = id;
    this.member['@id'] = '/members/' + id;
    return this;
  }

  setProjects(id: number): AgencyBase {
    this.projects = new Project();
    this.projects.id = id;
    this.projects['@id'] = '/projects/' + id;
    return this;
  }

  setTags(id: number): AgencyBase {
    this.tags = new Tag();
    this.tags.id = id;
    this.tags['@id'] = '/tags/' + id;
    return this;
  }

  setImage(id: number): AgencyBase {
    this.image = new Image();
    this.image.id = id;
    this.image['@id'] = '/images/' + id;
    return this;
  }

}
