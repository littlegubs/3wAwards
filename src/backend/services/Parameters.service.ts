import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Parameter } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class ParametersService extends BackendService<Parameter> {
  protected get resource() { return Parameter._resource; }
  protected get class() { return Parameter; }

}
