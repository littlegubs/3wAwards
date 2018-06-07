import {ProjectBase} from './base/ProjectBase';
import {ProjectRatingMember} from './ProjectRatingMember';
import {Client} from './Client';
import {Agency} from './Agency';
import {Member} from './Member';
import {Image} from './Image';
import {Tag} from './Tag';
import {Award} from './Award';

export class Project extends ProjectBase {
  id: number;

  setMembersatNull(): Project {
    this.members = new Member();
    this.members['@id'] = [];
    return this;
  }

  setImagesAtNull(): Project {
    this.images = new Image();
    this.images['@id'] = [];
    return this;
  }

  setAwardsAtNull(): Project {
    this.awards = new Award();
    this.awards['@id'] = [];
    return this;
  }

  setClientAtNull(): Project {
    this.client = new Client();
    this.client = null;
    return this;
  }

  setAgencyAtNull(): Project {
    this.agency = new Agency();
    this.agency = null;
    return this;
  }
}
