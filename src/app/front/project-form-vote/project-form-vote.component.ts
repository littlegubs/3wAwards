import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Category, ProjectRatingMember, Rating} from '../../../backend/model';
import {CategoryEnum} from '../../category.enum';
import {CategoriesService, ProjectRatingMembersService, RatingsService} from '../../../backend/services';

@Component({
  selector: 'app-project-form-vote',
  templateUrl: './project-form-vote.component.html',
})
export class ProjectFormVoteComponent implements OnInit {
  category: string;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  ratingsForProject: ProjectRatingMember[];
  categoryEnum = CategoryEnum;
  userOriginalityVote: number;
  userGraphismVote: number;
  userNavigationVote: number;
  userInteractivityVote: number;
  userContentQualityVote: number;
  userFunctionnalityVote: number;
  userReactivityyVote: number;
  loading = false;
  categories: Category[];
  votes = {};
  isVoteJudge = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }

  private _tickInterval = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ProjectFormVoteComponent>,
              private projectRatingMemberService: ProjectRatingMembersService,
              private ratingService: RatingsService,
              private categoryService: CategoriesService) {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res;
    });
    this.ratingsForProject = data.member.projectRatingMember.filter(
      projectRatingMemberToFind => projectRatingMemberToFind.project.id === data.project.id);
    console.log(this.ratingsForProject.length);
    for (const categ of Object.keys(CategoryEnum)) {
      this.votes[categ] = this.retrieveRatingsValue(CategoryEnum[categ]);
    }
  }

  sendVote() {
    for (const categ of Object.keys(CategoryEnum)) {
      this.loading = true;
      const projectRatingMember = new ProjectRatingMember();
      projectRatingMember.setMember(this.data.member.id);
      projectRatingMember.setProject(this.data.project.id);
      projectRatingMember.isVoteJudge = this.isVoteJudge;
      projectRatingMember.date = new Date();

      let categFound = false;
      let i = 0;
      let category: Category;
      while (categFound === false && i < this.categories.length) {
        if (this.categories[i].libelle === CategoryEnum[categ]) {
          categFound = true;
          category = this.categories[i];
        }
        i++;
      }
      const rating = new Rating();
      rating.setCategory(category.id);
      rating.value = this.votes[categ];
      projectRatingMember.rating = rating;

      if (this.ratingsForProject.length === 0) {
        this.projectRatingMemberService.add(projectRatingMember).subscribe(() => this.loading = false);
      } else {
        this.projectRatingMemberService.update(projectRatingMember).subscribe(() => this.loading = false);
      }
    }
  }

  ngOnInit() {
  }

  retrieveRatingsValue(category: string) {
    const projectRatingMember = this.ratingsForProject.find(
      projectRatingMemberToFind => projectRatingMemberToFind.rating.category.libelle === category);
    return projectRatingMember ? projectRatingMember.rating.value : 0;
  }
}
