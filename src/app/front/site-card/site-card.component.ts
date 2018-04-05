import {Component, OnInit} from '@angular/core';
import {Project} from '../../../backend/model/Project';
import {ProjectsService} from '../../../backend/services';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
})
export class SiteCardComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getAllByFilter('status', 'accepted', 1).subscribe(
      res => {
        this.projects = res;
        console.log(this.projects);
      },
      err => {
      }
    );
  }
}
