import {Component, Input, OnInit} from '@angular/core';
import {Image, Member, Tag, TypeTag} from '../../../backend/model';
import {Form, FormService} from '../../../backend/forms';
import {MembersService, TagsService, TypeTagsService} from '../../../backend/services';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
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

  // TYPE TAG
  typeTags: TypeTag[];

  // SKILLS
  skills: Tag[];

  // INTERRESTS
  interests: Tag[];

  constructor(private formService: FormService, private memberService: MembersService, private tagService: TagsService,
              private http: HttpClient, private globals: GlobalsService, private typeTagsService: TypeTagsService) {
  }

  ngOnInit() {
    this.skills = this.member.tags.filter(tag => tag.type.libelle === 'skills');
    this.interests = this.member.tags.filter(tag => tag.type.libelle === 'interests');
    this.form = this.formService.makeForm<Member>(this.member);
    this.typeTagsService.getAll().subscribe(res => this.typeTags = res);
  }

  addSkill(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {

      const tag = new Tag();
      tag.libelle = event.value;
      tag.type = this.typeTags.find(type => type.libelle === 'skills');

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
      tag.libelle = event.value;
      tag.type = this.typeTags.find(type => type.libelle === 'interests');
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
      const promise = new Promise(resolve => {
          if (this.file) {
              const image = new Image();
              const formData = new FormData();
              formData.append('xd', this.file);
              console.log(this.file.name);
              image.libelle = this.file.name;
              this.http.post(this.globals.url + 'xd', formData).subscribe((data: string) => {
                  image.path = data;
                  image.libelle = this.file.name;
                  updateMember.profilePicture = image;
                  resolve();
              });
          } else {
              updateMember.profilePicture = this.member.profilePicture;
              resolve();
          }
      });
      Promise.resolve(promise).then(() => {
          if (updateMember.id) {
              this.memberService.update(updateMember).subscribe(agency => {
                  console.log('yeah!');
              });
          }
      });
  }
}


