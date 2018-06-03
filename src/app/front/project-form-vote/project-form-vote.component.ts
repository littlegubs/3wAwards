import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectRatingMember} from '../../../backend/model';
import {Category} from '../../category.enum';
import {ProjectRatingMembersService} from '../../../backend/services';

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

  userOriginalityVote: number;
  userGraphismVote: number;
  userNavigationVote: number;
  userInteractivityVote: number;
  userContentQualityVote: number;
  userFunctionnalityVote: number;
  userReactivityyVote: number;

  savedVoteEdition;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  private _tickInterval = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ProjectFormVoteComponent>, private projectRatingMemberService: ProjectRatingMembersService) {
      this.ratingsForProject = data.member.projectRatingMember.filter(
        projectRatingMemberToFind => projectRatingMemberToFind.project.id === data.project.id);
    if (this.ratingsForProject !== undefined) {
        this.userOriginalityVote = this.retrieveRatingsValue(Category.originality);
        this.userGraphismVote = this.retrieveRatingsValue(Category.graphism);
        this.userNavigationVote = this.retrieveRatingsValue(Category.navigation);
        this.userInteractivityVote = this.retrieveRatingsValue(Category.interactivity);
        this.userContentQualityVote = this.retrieveRatingsValue(Category.contentQuality);
        this.userFunctionnalityVote = this.retrieveRatingsValue(Category.functionnality);
        this.userReactivityyVote = this.retrieveRatingsValue(Category.reactivity);
      }
  }

  sendVote() {
    if (this.ratingsForProject === undefined) {
      for (const category in Category) {
        console.log(category, Category[category])
        const projectRatingMember = new ProjectRatingMember();
        projectRatingMember.setMember(this.data.member.id);
        projectRatingMember.setProject(this.data.project.id);
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
