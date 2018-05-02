import {ProjectBase} from './base/ProjectBase';
import {ProjectRatingMember} from './ProjectRatingMember';
import {Client} from './Client';
import {Agency} from './Agency';

export class Project extends ProjectBase {
  id: number;

  setProjectRatingMemberAtNull(): Project {
    this.projectRatingMember = new ProjectRatingMember();
    this.projectRatingMember['@id'] = [];
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
