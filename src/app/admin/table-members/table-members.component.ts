import { Component, OnInit } from '@angular/core';
import {Member} from '../../../backend/model/Member';
import {MembersService} from '../../../backend/services/Members.service';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-table-members',
  templateUrl: './table-members.component.html',
})
export class TableMembersComponent implements OnInit {

    members: Member[];
    pageNumber = 1;

    constructor(private membersServices: MembersService, private http: HttpClient, private globalsService: GlobalsService) {
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

    updateJudge(memberId: number, isJudge: string) {
        const body = new FormData();
        body.append('id', memberId.toString());
        body.append('isJudge', isJudge);
        this.http.post(this.globalsService.updateStatus, body).subscribe(
            res => {
            },
            err => {
            }
        );
    }
}
