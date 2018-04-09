import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Member } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class MembersService extends BackendService<Member> {
  protected get resource() { return Member._resource; }
  protected get class() { return Member; }

}
