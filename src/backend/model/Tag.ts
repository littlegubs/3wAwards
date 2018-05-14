import { TagBase } from './base/TagBase';
import {TypeTag} from './TypeTag';

export class Tag extends TagBase {
  id: number;

  setTypeLibelle(string): TagBase {
    this.type = new TypeTag();
    this.type.libelle = string
    return this;
  }
}
