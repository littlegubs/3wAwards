import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SiteType } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class SiteTypesService extends BackendService<SiteType> {
  protected get resource() { return SiteType._resource; }
  protected get class() { return SiteType; }

}
