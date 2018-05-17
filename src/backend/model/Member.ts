import { MemberBase } from './base/MemberBase';
import {Tag} from './Tag';
import {TagsService} from '../services';
import {Project} from './Project';

export class Member extends MemberBase {
  id: number;

  setFavoriteProjectsAtNull(): MemberBase {
    this.favoriteProjects['@id'] = [];
    return this;
  }

  setAgenciessAtNull(): MemberBase {
    this.agencies['@id'] = [];
    return this;
  }

  seClientsAtNull(): MemberBase {
    this.clients['@id'] = [];
    return this;
  }

  setProjectRatingMembersAtNull(): MemberBase {
    this.projectRatingMember['@id'] = [];
    return this;
  }

  setAllTags(tags): MemberBase {
    this.tags['@id'] = tags;
    return this;
  }
}
