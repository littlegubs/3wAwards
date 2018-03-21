import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connection-dialog',
  templateUrl: './connection-dialog.component.html',
  styleUrls: ['./connection-dialog.component.scss']
})
export class ConnectionDialogComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router) {
    this.loginForm = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const val = this.loginForm.value;

    if (val.mail && val.password) {
      console.log('submit is send');
      this.authService.login(val.mail, val.password);
    }
  }

}
