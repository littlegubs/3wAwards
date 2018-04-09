import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../backend/services';
import {Member} from '../../../backend/model';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
})
export class MemberProfileComponent implements OnInit {
  member: Member;
  memberId: number;

  constructor(private route: ActivatedRoute, private membersService: MembersService) { }

  ngOnInit() {
    this.membersService.getAll().subscribe(res => console.log(res));
    this.route.params.subscribe(params => {
      console.log(params.id);
        this.membersService.get(params.id).subscribe(
          res => {
            console.log('test');
            console.log(res);
            this.member = res;
            console.log(this.member);
          },
          err => {
          }
        );
    });
  }

}
