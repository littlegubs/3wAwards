import {Component, Input, OnInit} from '@angular/core';
import {Member, Tag} from '../../../backend/model';
import {Form} from '../../../backend/forms';
import {FormService} from '../../../backend/forms';
import {MembersService, TagsService} from '../../../backend/services';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-member-form-profile',
  templateUrl: './member-form-profile.component.html',
})
export class MemberFormProfileComponent implements OnInit {
  @Input() member: Member;
  form: Form<Member>;
  addOnBlur = true;
  file: File;
  url;
  // EVENTS_KEYBORDS
  separatorKeysCodes = [ENTER, COMMA];

  // SKILLS
  skills: Tag[];

  // INTERRESTS
  interests = [];

  constructor(private formService: FormService, private memberService: MembersService, private tagService: TagsService, private http: HttpClient, private globals: GlobalsService) {
  }

  ngOnInit() {
    this.skills = this.member.tags.filter(tag => tag.type.libelle === 'skills');
    this.interests = this.member.tags.filter(tag => tag.type.libelle === 'interests');
    this.form = this.formService.makeForm<Member>(this.member);
  }

  addSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {

      const tag = new Tag();
      tag.libelle = event.value;
      tag.setTypeLibelle('skills');

      this.skills.push(tag);
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
      const tag = new Tag();
      this.interests.push(tag);
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

  fileUpload($event: any) {
    const fileList: FileList = $event.target.files;
    if (fileList.length > 0) {
      this.file = $event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (event: any) => {
        this.url = event.target.result;
      };
      fileReader.readAsDataURL(this.file);
    }
  }

  submitForm() {
    const updateMember = this.form.get();
    updateMember.isJudge = this.member.isJudge;
    updateMember.setFavoriteProjectsAtNull();
    updateMember.setAgenciessAtNull();
    updateMember.setProjectRatingMembersAtNull();
    updateMember.seClientsAtNull();
    updateMember.setAllTags(this.skills);
    if (this.file) {
      const formData = new FormData();
      formData.append('xd', this.file);
      this.http.post(this.globals.url + 'xd', formData).subscribe((data: string ) => {
        updateMember.profilePicture.path = data;
      });
    } else {
      updateMember.profilePicture = this.member.profilePicture;
    }
    this.memberService.update(updateMember);
  }
}
