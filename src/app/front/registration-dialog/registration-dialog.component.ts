import {Component} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent {

  registrationForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private dialog: MatDialog) {
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
    this.isLoading = true;
    this.authService.signUp(this.registrationForm, 'ROLE_USER');
  }
}
