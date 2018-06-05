import { ClientBase } from './base/ClientBase';
import {Project} from './Project';

export class Client extends ClientBase {
  id: number;

  setProjectsatNull(): Client {
    this.projects = new Project();
    this.projects['@id'] = [];
    return this;
  }
}
