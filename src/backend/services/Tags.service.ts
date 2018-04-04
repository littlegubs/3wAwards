import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Tag } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagsService extends BackendService<Tag> {
  protected get resource() { return Tag._resource; }
  protected get class() { return Tag; }

}
