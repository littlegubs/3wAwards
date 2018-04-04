// This file should not be modified, as it can be overwritten by the generator.
// The 'Project' class is here for customizations and will not be touched.

import { ProjectRatingMember } from '../ProjectRatingMember';
import { Client } from '../Client';
import { Agency } from '../Agency';
import { Tag } from '../Tag';
import { Image } from '../Image';
import { Award } from '../Award';

export class ProjectBase {
  public static readonly _resource: string = 'projects';
  get _resource(): string { return ProjectBase._resource; };

  projectName: string;
  projectDescription: string;
  publicationDate: Date;
  averageRating: number;
  noticableDescription: string;
  status: string;
  projectRatingMember: ProjectRatingMember;
  client: Client;
  agency: Agency;
  tags: Tag;
  images: Image;
  awards: Award;

  setProjectRatingMember(id: number): ProjectBase {
    this.projectRatingMember = new ProjectRatingMember();
    this.projectRatingMember.id = id;
    this.projectRatingMember['@id'] = '/project_rating_members/' + id;
    return this;
  }

  setClient(id: number): ProjectBase {
    this.client = new Client();
    this.client.id = id;
    this.client['@id'] = '/clients/' + id;
    return this;
  }

  setAgency(id: number): ProjectBase {
    this.agency = new Agency();
    this.agency.id = id;
    this.agency['@id'] = '/agencies/' + id;
    return this;
  }

  setTags(id: number): ProjectBase {
    this.tags = new Tag();
    this.tags.id = id;
    this.tags['@id'] = '/tags/' + id;
    return this;
  }

  setImages(id: number): ProjectBase {
    this.images = new Image();
    this.images.id = id;
    this.images['@id'] = '/images/' + id;
    return this;
  }

  setAwards(id: number): ProjectBase {
    this.awards = new Award();
    this.awards.id = id;
    this.awards['@id'] = '/awards/' + id;
    return this;
  }

}
