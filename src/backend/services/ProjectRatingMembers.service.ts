import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ProjectRatingMember } from '../model';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectRatingMembersService extends BackendService<ProjectRatingMember> {
  protected get resource() { return ProjectRatingMember._resource; }
  protected get class() { return ProjectRatingMember; }

}
