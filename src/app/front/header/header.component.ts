import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConnectionDialogComponent} from '../connection-dialog/connection-dialog.component';
import {RegistrationDialogComponent} from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  fileLoginDialogRef: MatDialogRef<ConnectionDialogComponent>;
  fileRegistrationDialogRef: MatDialogRef<RegistrationDialogComponent>;

  constructor(private dialog: MatDialog) {

  }

  openLoginDialog() {
    this.fileLoginDialogRef = this.dialog.open(ConnectionDialogComponent);
  }

  openRegistrationDialog() {
    this.fileRegistrationDialogRef = this.dialog.open(RegistrationDialogComponent);
  }

  submitWebsite() {
    const token = localStorage.getItem('user_token');
    if (typeof token !== 'string') {
      this.fileLoginDialogRef = this.dialog.open(ConnectionDialogComponent);
    } else {
      console.log('SOUMETTRE UN SITE');
    }
  }
}
