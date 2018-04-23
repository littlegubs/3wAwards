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
  @Input() idMember: string;

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
    }
    if (this.nameClient) {
      const filterType = 'client.name';
      const name = this.nameClient;

      this.projectsService.getAllByFilter(filterType, name, 1).subscribe(
        res => {
          this.projects = res;
        },
        err => {
        }
      );
    }
    if (this.nameAgency) {
      const filterType = 'client.name';
      const name = this.nameClient;

      this.projectsService.getAllByFilter(filterType, name, 1).subscribe(
        res => {
          this.projects = res;
        },
        err => {
        }
      );
    }
      if (this.idMember) {
          const filterType = 'project.project_favorite_member';
          const id = this.idMember;

          this.projectsService.getAllByFilter(filterType, id, 1).subscribe(
              res => {
                  this.projects = res;
              },
              err => {
              }
          );
      }
  }
}
