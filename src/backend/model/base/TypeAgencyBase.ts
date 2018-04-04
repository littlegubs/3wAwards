// This file should not be modified, as it can be overwritten by the generator.
// The 'TypeAgency' class is here for customizations and will not be touched.

import { Agency } from '../Agency';

export class TypeAgencyBase {
  public static readonly _resource: string = 'type_agencies';
  get _resource(): string { return TypeAgencyBase._resource; };

  libelle: string;
  agencies: Agency;

  setAgencies(id: number): TypeAgencyBase {
    this.agencies = new Agency();
    this.agencies.id = id;
    this.agencies['@id'] = '/agencies/' + id;
    return this;
  }

}
