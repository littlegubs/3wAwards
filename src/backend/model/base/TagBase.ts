// This file should not be modified, as it can be overwritten by the generator.
// The 'Tag' class is here for customizations and will not be touched.

import { Agency } from '../Agency';
import { Client } from '../Client';
import { Project } from '../Project';
import { TypeTag } from '../TypeTag';

export class TagBase {
  public static readonly _resource: string = 'tags';
  get _resource(): string { return TagBase._resource; };

  libelle: string;
  agencies: Agency;
  clients: Client;
  projects: Project;
  type: TypeTag;

  setAgencies(id: number): TagBase {
    this.agencies = new Agency();
    this.agencies.id = id;
    this.agencies['@id'] = '/agencies/' + id;
    return this;
  }

  setClients(id: number): TagBase {
    this.clients = new Client();
    this.clients.id = id;
    this.clients['@id'] = '/clients/' + id;
    return this;
  }

  setProjects(id: number): TagBase {
    this.projects = new Project();
    this.projects.id = id;
    this.projects['@id'] = '/projects/' + id;
    return this;
  }

  setType(id: number): TagBase {
    this.type = new TypeTag();
    this.type.id = id;
    this.type['@id'] = '/type_tags/' + id;
    return this;
  }

}
