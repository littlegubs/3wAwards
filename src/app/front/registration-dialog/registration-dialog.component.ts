import { Component} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private dialog: MatDialog) {
    this.registrationForm = this.fb.group({
      fisrtName: ['', Validators],
      name: ['', Validators.required],
      mail: ['', [
        Validators.required,
        EmailValidator
      ]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.signUp(this.registrationForm);
  }
}
