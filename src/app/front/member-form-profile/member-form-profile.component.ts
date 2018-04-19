import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../../backend/model';
import {Form} from '../../../backend/forms';
import {FormService} from '../../../backend/forms';
import {MembersService} from '../../../backend/services';

@Component({
  selector: 'app-member-form-profile',
  templateUrl: './member-form-profile.component.html',
})
export class MemberFormProfileComponent implements OnInit {
  @Input() member: Member;
  form: Form<Member>;

  constructor(private formService: FormService, private memberService: MembersService) {
  }

  ngOnInit() {
    this.form = this.formService.makeForm<Member>(this.member);
  }
}
