import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ConnectionDialogComponent} from '../connection-dialog/connection-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  fileNameDialogRef: MatDialogRef<ConnectionDialogComponent>;

  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(ConnectionDialogComponent);
  }


}
