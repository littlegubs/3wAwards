import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectRatingMember} from '../../../backend/model';
import {Category} from '../../category.enum';

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

  set tickInterval(v) {
    this._tickInterval = Number(v);
  }

  private _tickInterval = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ProjectFormVoteComponent>) {
    if (data.savedVoteEdition !== undefined) {
      this.userOriginalityVote = data.savedVoteEdition[0];
      this.userGraphismVote = data.savedVoteEdition[1];
      this.userNavigationVote = data.savedVoteEdition[2];
      this.userInteractivityVote = data.savedVoteEdition[3];
      this.userContentQualityVote = data.savedVoteEdition[4];
      this.userFunctionnalityVote = data.savedVoteEdition[5];
      this.userReactivityyVote = data.savedVoteEdition[6];
    } else {
      this.ratingsForProject = data.member.projectRatingMember.filter(
        projectRatingMemberToFind => projectRatingMemberToFind.project.id === data.project.id);
      this.userOriginalityVote = this.retrieveRatingsValue(Category.originality);
      this.userGraphismVote = this.retrieveRatingsValue(Category.graphism);
      this.userNavigationVote = this.retrieveRatingsValue(Category.navigation);
      this.userInteractivityVote = this.retrieveRatingsValue(Category.interactivity);
      this.userContentQualityVote = this.retrieveRatingsValue(Category.contentQuality);
      this.userFunctionnalityVote = this.retrieveRatingsValue(Category.functionnality);
      this.userReactivityyVote = this.retrieveRatingsValue(Category.reactivity);
    }
    this.dialogRef.backdropClick().subscribe(() => {
      this.savedVoteEdition = [
        this.userOriginalityVote,
        this.userGraphismVote,
        this.userNavigationVote,
        this.userInteractivityVote,
        this.userContentQualityVote,
        this.userFunctionnalityVote,
        this.userReactivityyVote
      ];
      console.log(this.savedVoteEdition);
      this.dialogRef.close(this.savedVoteEdition);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

  retrieveRatingsValue(category: string) {
    const projectRatingMember = this.ratingsForProject.find(
      projectRatingMemberToFind => projectRatingMemberToFind.rating.category.libelle === category);
    return projectRatingMember ? projectRatingMember.rating.value : 0;
  }
}
