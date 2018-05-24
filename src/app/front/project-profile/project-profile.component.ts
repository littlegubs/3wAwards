import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../backend/services/Projects.service';
import {Project} from '../../../backend/model/Project';
import {MatDialog} from '@angular/material';
import {ProjectFormVoteComponent} from '../project-form-vote/project-form-vote.component';
import {AuthService} from '../../auth.service';
import {MembersService} from '../../../backend/services';
import {TokenInterface} from '../../tokenInterface';
import {Member} from '../../../backend/model';
import {ConnectionDialogComponent} from '../connection-dialog/connection-dialog.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
})
export class ProjectProfileComponent implements OnInit {

  project: Project;
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  toggleAgency = false;
  toggleMain = false;
  toggleDev = false;
  member: Member;
  savedVoteEdition;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService, public dialog: MatDialog,
              private membersService: MembersService, private authService: AuthService, private http: HttpClient) {
    this.authService.gettoken().subscribe(res => {
      this.tokenStorage = res;
      console.log(this.tokenStorage);
      this.retrieveMember();
    });
    this.retrieveMember();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectsService.get(params.id).subscribe(
        res => {
          this.project = res;
        },
        err => {
        }
      );
    });
  }

  openDialog() {
    let dialogRef;
    console.log(this.member);
    if (this.member) {
      dialogRef = this.dialog.open(ProjectFormVoteComponent, {
        data: {
          member: this.member,
          project: this.project,
          savedVoteEdition: this.savedVoteEdition
        },
        width: '530px',
      });
      dialogRef.afterClosed().subscribe(result => {
        this.savedVoteEdition = result;
      });
    } else {
      dialogRef = this.dialog.open(ConnectionDialogComponent);
    }
  }

  retrieveMember() {
    console.log(this.tokenStorage);
    if (this.tokenStorage) {
      this.userInfo = this.authService.getUserInfo(this.tokenStorage);
      this.membersService.get(this.userInfo.id).subscribe(res => {
        this.member = res;
      });
    }
  }

}
