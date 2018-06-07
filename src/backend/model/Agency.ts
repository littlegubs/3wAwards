import { AgencyBase } from './base/AgencyBase';
import {Member} from './Member';
import {Project} from './Project';

export class Agency extends AgencyBase {
  id: number;

  setProjectsatNull(): Agency {
    this.projects = new Project();
    this.projects['@id'] = [];
    return this;
  }
}
