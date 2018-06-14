import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../../backend/services';
import {Project} from '../../../backend/model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getAllByFilter('status', 'accepted', 1).subscribe(
      res => {
        this.projects = res;
      },
      err => {
      }
    );
  }

}
