import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Member} from '../../../backend/model/Member';
import {MembersService} from '../../../backend/services/Members.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
    member = new Member;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ConfirmDialogComponent>, public snackBar: MatSnackBar, private membersService: MembersService) {
        this.member = data.member;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    confirmClick(): void {
        // this.membersService.remove(this.member);
        this.openSnackBar();
        this.onNoClick();
    }

    openSnackBar(): void {
        this.snackBar.open('Utilisateur supprimé', 'Ok', {
            duration: 2000
        });
    }

}
