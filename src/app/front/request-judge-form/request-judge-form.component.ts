import {Component, OnInit} from '@angular/core';
import {Form, FormService} from '../../../backend/forms';
import {RequestJudgesService} from '../../../backend/services';
import {Award, RequestJudge} from '../../../backend/model';
import {AuthService} from '../../auth.service';
import {TokenInterface} from '../../tokenInterface';
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-judge-form',
  templateUrl: './request-judge-form.component.html'
})
export class RequestJudgeFormComponent implements OnInit {

  form: Form<RequestJudge>;
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  isLoading = false;

  constructor(private formService: FormService, private requestJudgesService: RequestJudgesService, private authService: AuthService, public snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    this.createNewRequestJudge();
  }

  createNewRequestJudge(): void {
    this.form = this.formService.makeForm<RequestJudge>(new RequestJudge());
  }

  commitRequestJudge(): void {
    this.isLoading = true;
    if (this.form.group.dirty && this.form.group.valid) {
      const newRequestJudge = this.form.get();
      newRequestJudge.setMember(this.userInfo.id);
      this.requestJudgesService.add(newRequestJudge).subscribe(res => {
        this.openSnackBar();
        this.router.navigate(['/']);
      });
    } else {
      this.form.displayErrors();
    }
  }

    openSnackBar(): void {
        this.snackBar.open('Requête soumise', 'Ok', {
            duration: 2000
        });
    }

}
