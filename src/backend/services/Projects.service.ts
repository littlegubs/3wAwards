import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Project } from '../model';
import {Observable} from 'rxjs/Observable';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService extends BackendService<Project> {
  protected get resource() { return Project._resource; }
  protected get class() { return Project; }

  getAllProjectByName(projectName: string, criterias: Object = {},  pageNumber?: number): Observable<Project[]> {
   const getCriterias = this.makeCriteriasCopy(criterias);
    getCriterias['status'] = 'accepted';
    getCriterias['projectName'] = projectName;
    return this.getAll(pageNumber, getCriterias);
  }

}
