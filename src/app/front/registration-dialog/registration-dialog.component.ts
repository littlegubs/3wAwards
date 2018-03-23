import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConnectionDialogComponent} from '../connection-dialog/connection-dialog.component';

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
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const val = this.registrationForm.value;
  }
}
