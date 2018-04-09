import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Agency } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class AgenciesService extends BackendService<Agency> {
  protected get resource() { return Agency._resource; }
  protected get class() { return Agency; }

}
