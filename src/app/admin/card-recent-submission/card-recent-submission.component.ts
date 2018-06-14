import { Component, OnInit } from '@angular/core';
import {MembersService} from '../../../backend/services/Members.service';
import {Member} from '../../../backend/model/Member';

@Component({
  selector: 'app-card-recent-submission',
  templateUrl: './card-recent-submission.component.html',
})
export class CardRecentSubmissionComponent implements OnInit {
    members: Member[];
    pageNumber = 1;

    constructor(private membersServices: MembersService) {
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

}
