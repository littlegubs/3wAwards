import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Category, Member, ProjectRatingMember, Rating} from '../../../backend/model';
import {CategoryEnum} from '../../category.enum';
import {
  CategoriesService,
  MembersService,
  ProjectRatingMembersService,
  RatingsService
} from '../../../backend/services';
import {TokenInterface} from '../../tokenInterface';
import {AuthService} from '../../auth.service';

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

  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  ratingsForProject: ProjectRatingMember[];
  categoryEnum = CategoryEnum;
  loading = false;
  categories: Category[];
  votes = {};
  votesEdit = {};
  votesLength = Object.keys(this.votes);
  isVoteJudge = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }

  private _tickInterval = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ProjectFormVoteComponent>,
              private projectRatingMemberService: ProjectRatingMembersService,
              private ratingService: RatingsService,
              private categoryService: CategoriesService,
              private memberService: MembersService,
              private authService: AuthService) {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    this.memberService.get(this.userInfo.id).subscribe(
      member => {
        this.categoryService.getAll().subscribe(res => {
          this.categories = res;
          this.ratingsForProject = member.projectRatingMember.filter(
            projectRatingMemberToFind => projectRatingMemberToFind.project.id === data.project.id);
          for (const categ of Object.keys(CategoryEnum)) {
            this.votes[categ] = this.retrieveRatingsValue(CategoryEnum[categ]);
            this.votesEdit[categ] = this.votes[categ].rating.value;
          }
          this.votesLength = Object.keys(this.votes);
        });
      });
  }

  sendVote() {
    const [last] = Object.keys(CategoryEnum).reverse();
    Object.keys(CategoryEnum).forEach(categ => {
      this.loading = true;
      if (this.votes[categ].rating.id) {
        this.ratingService.update(this.votes[categ].rating).subscribe(() => {
          if (last === categ) {
            this.dialogRef.close();
          }
        });
      } else {
        this.ratingService.add(this.votes[categ].rating).subscribe(rating => {
          this.votes[categ].rating = rating;
          this.projectRatingMemberService[this.votes[categ].id ? 'update' : 'add'](this.votes[categ])
            .subscribe(() => last === categ && this.dialogRef.close());
        });
      }
    });
  }

  ngOnInit() {
  }

  retrieveRatingsValue(category: string) {
    let projectRatingMember = this.ratingsForProject.find(
      projectRatingMemberToFind => projectRatingMemberToFind.rating.category.libelle === category);
    if (!projectRatingMember) {
      projectRatingMember = new ProjectRatingMember();
      projectRatingMember.setMember(this.data.member.id);
      projectRatingMember.setProject(this.data.project.id);
      projectRatingMember.voteJudge = this.isVoteJudge;
      projectRatingMember.date = new Date();

      let categFound = false;
      let i = 0;
      let categ: Category;
      while (categFound === false && i < this.categories.length) {
        if (this.categories[i].libelle === category) {
          categFound = true;
          categ = this.categories[i];
        }
        i++;
      }
      const rating = new Rating();
      rating.setCategory(categ.id);
      rating.value = 0;
      projectRatingMember.rating = rating;
    }
    console.log(projectRatingMember);
    return projectRatingMember;
  }


}
