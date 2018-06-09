import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../../backend/services/Projects.service';
import {Project} from '../../../backend/model/Project';

@Component({
  selector: 'app-card-recent-project',
  templateUrl: './card-recent-project.component.html',
})
export class CardRecentProjectComponent implements OnInit {
  projects: Project[];
  pageNumber = 1;


  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
      this.projectsService.getAll(this.pageNumber).subscribe(
          res => {
              this.projects = res;
          },
          err => {
          }
      );
  }


}
