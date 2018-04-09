import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Category } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriesService extends BackendService<Category> {
  protected get resource() { return Category._resource; }
  protected get class() { return Category; }

}
