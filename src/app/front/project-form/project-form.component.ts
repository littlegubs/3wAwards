import {Component, OnInit} from '@angular/core';
import {FormService, Form} from '../../../backend/forms';
import {Member, Project} from '../../../backend/model';
import {MembersService, ProjectsService} from '../../../backend/services';
import {TokenInterface} from '../../tokenInterface';
import {AuthService} from '../../auth.service';
import {log} from "util";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  form: Form<Project>;
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  member: Member;

  constructor(private projectsService: ProjectsService, private membersService: MembersService, private formService: FormService, private authService: AuthService) {
  }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    this.membersService.get(this.userInfo.id).subscribe(
      res => {
        this.member = res;
      },
      err => {
      }
    );
    this.createNewProject();
  }

  createNewProject(): void {
    this.form = this.formService.makeForm(new Project());
  }

  commitProject(): void {
    if (this.form.group.dirty && this.form.group.valid) {
      const newProject = this.form.get();
      newProject.setProjectRatingMemberAtNull();
      newProject.status = 'pending';
      console.log(newProject);
      if (newProject.id) {
        this.projectsService.update(newProject).subscribe(res => console.log('update'));
      } else {
        newProject.averageRating = null;
        this.projectsService.add(newProject).subscribe(res => console.log('add'));
      }
    } else {
      this.form.displayErrors();
    }
  }
}
