import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {ConnectionDialogComponent} from './front/connection-dialog/connection-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  param = {value: 'world'};

  fileNameDialogRef: MatDialogRef<ConnectionDialogComponent>;

  constructor(translate: TranslateService, private dialog: MatDialog) {
    translate.setDefaultLang('en');

    translate.use('fr');
  }

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(ConnectionDialogComponent);
  }
}
