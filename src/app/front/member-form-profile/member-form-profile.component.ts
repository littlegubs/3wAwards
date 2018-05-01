import {Component, Input, OnInit} from '@angular/core';
import {Member, Tag} from '../../../backend/model';
import {Form} from '../../../backend/forms';
import {FormService} from '../../../backend/forms';
import {MembersService} from '../../../backend/services';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-member-form-profile',
  templateUrl: './member-form-profile.component.html',
})
export class MemberFormProfileComponent implements OnInit {
  @Input() member: Member;
  form: Form<Member>;
  addOnBlur = true;

  // EVENTS_KEYBORDS
  separatorKeysCodes = [ENTER, COMMA];

  // SKILLS
  skills = [];

  // INTERRESTS
  interests = [];

  constructor(private formService: FormService, private memberService: MembersService) {
  }

  ngOnInit() {
    this.form = this.formService.makeForm<Member>(this.member);
  }

  addSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {

      const tag = new Tag();
      tag.libelle = event.value;
      this.skills.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSkill(skill: any): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  addInterest(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.interests.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeInterest(interest: any): void {
    const index = this.interests.indexOf(interest);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }
}
