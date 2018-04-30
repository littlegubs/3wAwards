import { ProjectBase } from './base/ProjectBase';
import {ProjectRatingMember} from './ProjectRatingMember';

export class Project extends ProjectBase {
  id: number;

  setProjectRatingMemberAtNull(): Project {
    this.projectRatingMember = new ProjectRatingMember();
    this.projectRatingMember['@id'] = [];
    return this;
  }
}
