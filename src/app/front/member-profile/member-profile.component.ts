import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../backend/services';
import {Member} from '../../../backend/model';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
})
export class MemberProfileComponent implements OnInit {
  member: Member;

  constructor(private route: ActivatedRoute, private membersService: MembersService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.membersService.get(params.id).subscribe(
        res => {
          this.member = res;
        },
        err => {
        }
      );
    });
  }

}
