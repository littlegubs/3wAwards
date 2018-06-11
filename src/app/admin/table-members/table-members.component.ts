import { Component, OnInit } from '@angular/core';
import {Member} from '../../../backend/model/Member';
import {MembersService} from '../../../backend/services/Members.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-table-members',
  templateUrl: './table-members.component.html',
})
export class TableMembersComponent implements OnInit {

    members: Member[];
    pageNumber = 1;

    constructor(private membersServices: MembersService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.membersServices.getAll(this.pageNumber).subscribe(
            res => {
                this.members = res;
            },
            err => {
            }
        );
    }

    pagination(value: number): void {
        this.members = undefined;
        this.pageNumber = this.pageNumber + value;
        this.membersServices.getAll(this.pageNumber).subscribe(
            res => {
                this.members = res;
            },
            err => {
            }
        );
    }

    openDialog(member: Member) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                member: member
            },
            width: '530px',
        });
         dialogRef.afterClosed().subscribe(result => {
           console.log(result);
         });
    }
}

