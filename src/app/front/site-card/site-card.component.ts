import {Component, OnInit, Input} from '@angular/core';
import {Project} from '../../../backend/model/Project';
import {ProjectsService} from '../../../backend/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
})
export class SiteCardComponent implements OnInit {

  projects: Project[];
  @Input() nameClient: string;
  @Input() nameAgency: string;

  constructor(private projectsService: ProjectsService, private router: Router) {
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.projectsService.getAllByFilter('status', 'accepted', 1).subscribe(
        res => {
          this.projects = res;
        },
        err => {
        }
      );
    } else {
      let filterType = 'client.name';
      let name = this.nameClient;

      if (this.nameClient === undefined) {
        filterType = 'agency.name';
        name = this.nameAgency;
      }
      this.projectsService.getAllByFilter(filterType, name, 1).subscribe(
        res => {
          this.projects = res;
        },
        err => {
        }
      );
    }
  }
}
