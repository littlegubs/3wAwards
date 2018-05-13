import {Component, OnInit} from '@angular/core';
import {FormService, Form} from '../../../backend/forms';
import {Member, Project, Tag, TypeTag} from '../../../backend/model';
import {MembersService, ProjectsService, TypeTagsService} from '../../../backend/services';
import {TokenInterface} from '../../tokenInterface';
import {AuthService} from '../../auth.service';

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
  idAgency: number;
  idClient: number;
  typeTags: TypeTag[] = [];
  projectTags: Tag[] = [];

  constructor(private projectsService: ProjectsService, private membersService: MembersService, private formService: FormService,
              private authService: AuthService, private typeTagsService: TypeTagsService) {
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
    this.getAllTypeTag();
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
      if (newProject.id) {
        this.projectsService.update(newProject).subscribe(res => console.log('update'));
      } else {
        this.idAgency = this.member.agencies[0].id;

        if (this.idClient !== undefined) {
          newProject.setAgencyAtNull();
          newProject.setClient(this.idClient);
        } else {
          newProject.setClientAtNull();
          newProject.setAgency(this.idAgency);
        }

        newProject.averageRating = null;
        newProject.SetMultipletTags(this.projectTags);
        newProject.setMembersatNull();
        newProject.setImagesAtNull();
        newProject.setAwardsAtNull();
        console.log(newProject);
        this.projectsService.add(newProject).subscribe(res => console.log('add'));
      }
    } else {
      this.form.displayErrors();
    }
  }

  getTheSelectedValue(value): void {
    const array = value.split(',');
    if (array[0] === 'agency') {
      this.idAgency = array[1];
      this.idClient = undefined;
    } else {
      this.idClient = array[1];
      this.idAgency = undefined;
    }
  }

  addTag(value: string, type: string): void {
    const tag = new Tag();
    for (let typeTag of this.typeTags) {
      if (typeTag.libelle === type) {
        tag.setType(typeTag.id);
      }
    }
    tag.libelle = value;
    this.projectTags.push(tag);
  }

  getAllTypeTag() {
    this.typeTagsService.getAll().subscribe(
      res => {
        this.typeTags = res;
      },
      err => {
      }
    );
  }
}
