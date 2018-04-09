import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { TypeTag } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class TypeTagsService extends BackendService<TypeTag> {
  protected get resource() { return TypeTag._resource; }
  protected get class() { return TypeTag; }

}
