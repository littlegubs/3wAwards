// This file should not be modified, as it can be overwritten by the generator.
// The 'Project' class is here for customizations and will not be touched.

import { ProjectRatingMember } from '../ProjectRatingMember';
import { Client } from '../Client';
import { Agency } from '../Agency';
import { Target } from '../Target';
import { SiteType } from '../SiteType';
import { Tag } from '../Tag';
import { Credit } from '../Credit';
import { Member } from '../Member';
import { Image } from '../Image';
import { Award } from '../Award';

export class ProjectBase {
  public static readonly _resource: string = 'projects';
  get _resource(): string { return ProjectBase._resource; };

  projectName: string;
  projectDescription: string;
  publicationDate: Date;
  averageRating: number;
  averageOriginalityRatingsJudge: number;
  averageOriginalityRatingsMember: number;
  averageReadabilityRatingsJudge: number;
  averageReadabilityRatingsMember: number;
  averageNavigationRatingsJudge: number;
  averageNavigationRatingsMember: number;
  averageInteractivityRatingsJudge: number;
  averageInteractivityRatingsMember: number;
  averageQualityContentRatingsJudge: number;
  averageQualityContentRatingsMember: number;
  averageWeatlhFunctionalityRatingsJudge: number;
  averageWeatlhFunctionalityRatingsMember: number;
  averageReactivityRatingsMember: number;
  averageReactivityRatingsJudge: number;
  averageUsersRatings: number;
  averageJudgeRatings: number;
  noticableDescription: string;
  status: string;
  projectRatingMember: ProjectRatingMember[];
  client: Client;
  agency: Agency;
  target: Target;
  siteType: SiteType;
  tags: Tag[];
  credits: Credit[];
  members: Member;
  images: Image;
  awards: Award;
  projectUrl: string;

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

  setTarget(id: number): ProjectBase {
    this.target = new Target();
    this.target.id = id;
    this.target['@id'] = '/targets/' + id;
    return this;
  }

  setSiteType(id: number): ProjectBase {
    this.siteType = new SiteType();
    this.siteType.id = id;
    this.siteType['@id'] = '/site_types/' + id;
    return this;
  }

  setMembers(id: number): ProjectBase {
    this.members = new Member();
    this.members.id = id;
    this.members['@id'] = '/members/' + id;
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
