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
  @Input() projectRatingMemberId: number;
  @Input() idMember: number;

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
        this.projectsService.getAllByFilter(filterType, this.nameClient, 1).subscribe(
          res => {
            this.projects = res;
          },
          err => {
          }
        );
    }
    if (this.nameAgency) {
      const filterType = 'client.name';
      this.projectsService.getAllByFilter(filterType, this.nameAgency, 1).subscribe(
        res => {
          this.projects = res;
        },
        err => {
        }
      );
    }
    if (this.projectRatingMemberId) {
      const filterType = 'projectRatingMember.member.id';

      this.projectsService.getAllByFilter(filterType, this.projectRatingMemberId, 1).subscribe(
        res => {
          this.projects = res;
        },
        err => {
        }
      );
    }
    if (this.idMember) {
      const filterType = 'members.id';

      this.projectsService.getAllByFilter(filterType, this.idMember, 1).subscribe(
        res => {
          this.projects = res;
        },
        err => {
        }
      );
    }
  }
}
