// This file should not be modified, as it can be overwritten by the generator.
// The 'ProjectRatingMember' class is here for customizations and will not be touched.

import { Member } from '../Member';
import { Project } from '../Project';
import { Rating } from '../Rating';

export class ProjectRatingMemberBase {
  public static readonly _resource: string = 'project_rating_members';
  get _resource(): string { return ProjectRatingMemberBase._resource; };

  date: Date;
  voteJudge: boolean;
  member: Member;
  project: Project;
  rating: Rating;

  setMember(id: number): ProjectRatingMemberBase {
    this.member = new Member();
    this.member.id = id;
    this.member['@id'] = '/members/' + id;
    return this;
  }

  setProject(id: number): ProjectRatingMemberBase {
    this.project = new Project();
    this.project.id = id;
    this.project['@id'] = '/projects/' + id;
    return this;
  }

  setRating(id: number): ProjectRatingMemberBase {
    this.rating = new Rating();
    this.rating.id = id;
    this.rating['@id'] = '/ratings/' + id;
    return this;
  }

}
