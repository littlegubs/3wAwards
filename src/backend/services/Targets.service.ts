import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Target } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class TargetsService extends BackendService<Target> {
  protected get resource() { return Target._resource; }
  protected get class() { return Target; }

}
