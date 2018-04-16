import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MembersService} from '../../../backend/services';
import {Member} from '../../../backend/model';
import {AuthService} from '../../auth.service';
import {TokenInterface} from '../../tokenInterface';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
})
export class MemberProfileComponent implements OnInit {
  member: Member;
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;

  constructor(private route: ActivatedRoute, private membersService: MembersService, private authService: AuthService) {
  }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    this.membersService.get(this.userInfo.id).subscribe(
        res => {
          this.member = res;
        },
        err => {
        }
      );
  }

}
