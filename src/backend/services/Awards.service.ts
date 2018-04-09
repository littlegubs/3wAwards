import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Award } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class AwardsService extends BackendService<Award> {
  protected get resource() { return Award._resource; }
  protected get class() { return Award; }

}
