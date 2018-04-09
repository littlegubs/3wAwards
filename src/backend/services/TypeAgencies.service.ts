import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { TypeAgency } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class TypeAgenciesService extends BackendService<TypeAgency> {
  protected get resource() { return TypeAgency._resource; }
  protected get class() { return TypeAgency; }

}
