import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Credit } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreditsService extends BackendService<Credit> {
  protected get resource() { return Credit._resource; }
  protected get class() { return Credit; }

}
