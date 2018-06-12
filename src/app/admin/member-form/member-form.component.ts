import {Component} from '@angular/core';
import {AuthService} from '../../auth.service';
import {EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html'
})
export class MemberFormComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, private router: Router) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators],
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        EmailValidator
      ]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.signUp(this.registrationForm, 'ROLE_ADMIN');
    this.openSnackBar();
  }

  openSnackBar(): void {
      this.snackBar.open('Utilisateur créé', 'Ok', {
          duration: 2000
      });
  }
}
