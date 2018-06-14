import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../../backend/services';
import {AuthService} from '../../auth.service';
import {TokenInterface} from '../../tokenInterface';
import {Project} from '../../../backend/model';

@Component({
  selector: 'app-card-project-member',
  templateUrl: './card-project-member.component.html',
})
export class CardProjectMemberComponent implements OnInit {
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  projects: Project[];
  projectsAgency: Project[] = [];
  projectsClient: Project[] = [];
  positionTooltip = 'right';

  constructor(private projectsService: ProjectsService, private authService: AuthService) {
  }

  ngOnInit() {
   this.userInfo = this.authService.getUserInfo(this.tokenStorage);
   this.projectsService.getAllByFilter('agency.member.id', this.userInfo.id).subscribe(
     res => {
       this.projectsAgency = res;
     },
     err => {
     }
   );
   this.projectsService.getAllByFilter('client.member.id', this.userInfo.id).subscribe(
     res => {
       this.projectsClient = res;
       this.projects = this.projectsAgency.concat(this.projectsClient);
     },
     err => {
     }
   );
  }

}

