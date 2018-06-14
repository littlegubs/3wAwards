import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { RequestJudge } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestJudgesService extends BackendService<RequestJudge> {
  protected get resource() { return RequestJudge._resource; }
  protected get class() { return RequestJudge; }

}
