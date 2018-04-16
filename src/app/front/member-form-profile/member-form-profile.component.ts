import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-member-form-profile',
  templateUrl: './member-form-profile.component.html',
})
export class MemberFormProfileComponent implements OnInit {

  emailFormControl: any;
  passwordFormControl: any;
  pseudoFormControl: any;
  constructor() { }

  ngOnInit() {
      this.emailFormControl = new FormControl('', [
          Validators.required,
          Validators.email,
      ]);
      this.passwordFormControl = new FormControl('', [
          Validators.required,
      ]);
      this.pseudoFormControl = new FormControl('', [
          Validators.required,
      ]);
  }
}
