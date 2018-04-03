import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConnectionDialogComponent} from '../connection-dialog/connection-dialog.component';
import {RegistrationDialogComponent} from '../registration-dialog/registration-dialog.component';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  token: string;
  tokenStorage = localStorage.getItem('user_token');
  isConnected = false;
  subscriptionConneted: Subscription;
  subscriptionToken: Subscription;
  fileLoginDialogRef: MatDialogRef<ConnectionDialogComponent>;
  fileRegistrationDialogRef: MatDialogRef<RegistrationDialogComponent>;
  userInfo: JSON;

  constructor(private dialog: MatDialog, private authService: AuthService) {
    if (typeof this.tokenStorage === 'string') {
      this.userInfo = this.authService.getUserInfo(this.tokenStorage);
      this.isConnected = true;
    }
    this.subscriptionConneted = authService.getIsConnected().subscribe(res => {
      this.isConnected = res;
    });
    this.subscriptionToken = authService.gettoken().subscribe(res => {
      this.token = res;
      this.userInfo = this.authService.getUserInfo(res);
    });
  }
  closeDialog(dialogName: string) {
    if (dialogName === 'login') {
      this.fileLoginDialogRef.close();
    } else {
      this.fileRegistrationDialogRef.close();
    }
  }
  openDialog(dialogName: string) {
    if (dialogName === 'login') {
      this.fileLoginDialogRef = this.dialog.open(ConnectionDialogComponent);
    } else {
      this.fileRegistrationDialogRef = this.dialog.open(RegistrationDialogComponent);
    }
  }
  submitWebsite() {
    if (typeof this.tokenStorage !== 'string') {
      this.fileLoginDialogRef = this.dialog.open(ConnectionDialogComponent);
    } else {
      console.log('SOUMETTRE UN SITE');
    }
  }
}
