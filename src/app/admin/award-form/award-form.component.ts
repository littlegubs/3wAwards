import {Component, OnInit} from '@angular/core';
import {AwardsService, CategoriesService, ProjectsService} from '../../../backend/services';
import {Award, Category, Project} from '../../../backend/model';
import {FormService, Form} from '../../../backend/forms';

@Component({
  selector: 'app-award-form',
  templateUrl: './award-form.component.html'
})
export class AwardFormComponent implements OnInit {
  categories: Category[];
  projects: Project[];
  form: Form<Award>;
  projectId: number;
  categoryId: number;
  type: string;

  constructor(private categoriesService: CategoriesService, private projectsService: ProjectsService,
              private formService: FormService, private awardsService: AwardsService) {
  }

  ngOnInit() {
    this.categoriesService.getAll().subscribe(
      res => {
        this.categories = res;
        console.log(this.categories);
      },
      err => {

      }
    );
    this.projectsService.getAll().subscribe(
      res => {
        this.projects = res;
        console.log(this.projects);
      },
      err => {

      }
    );
    this.createNewAward();
  }

  createNewAward(): void {
    this.form = this.formService.makeForm<Award>(new Award());
  }

  commitAward(): void {
    if (this.form.group.dirty && this.form.group.valid) {
      const newAward = this.form.get();
      if (this.categoryId === undefined) {
        newAward.setCategory(this.categories[0].id);
      } else {
        newAward.setCategory(this.categoryId);
      }
      if (this.projectId === undefined) {
        newAward.setProject(this.projects[0].id);
      } else {
        newAward.setProject(this.projectId);
      }
      if (this.type === undefined) {
        newAward.type = 'day';
      } else {
        newAward.type = this.type;
      }
      this.awardsService.add(newAward).subscribe(res => console.log('yeah!'));
    } else {
      this.form.displayErrors();
    }
  }

  getProject(value): void {
    this.projectId = value;
  }

  getCategory(value): void {
    this.categoryId = value;
  }

  getTypes(value): void {
    this.type = value;
  }

}
