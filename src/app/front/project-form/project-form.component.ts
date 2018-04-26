import {Component, OnInit} from '@angular/core';
import {FormService, Form} from '../../../backend/forms';
import {Project} from '../../../backend/model';
import {ProjectsService} from "../../../backend/services";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  form: Form<Project>;

  constructor(private projectService: ProjectsService, private formService: FormService) {
  }

  ngOnInit() {
    this.createNewProject();
  }

  createNewProject(): void {
    this.form = this.formService.makeForm(new Project());
  }

  commitProject(): void {
    if (this.form.group.dirty && this.form.group.valid) {
      const newProject = this.form.get();
      if (newProject.id) {
        this.projectService.update(newProject).subscribe(res => console.log('yeah!'));
      } else {
        this.projectService.add(newProject).subscribe(res => console.log('yeah!'));
      }
    } else {
      this.form.displayErrors();
    }
  }

}
