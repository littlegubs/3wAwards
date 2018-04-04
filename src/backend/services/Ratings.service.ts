import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Rating } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class RatingsService extends BackendService<Rating> {
  protected get resource() { return Rating._resource; }
  protected get class() { return Rating; }

}
