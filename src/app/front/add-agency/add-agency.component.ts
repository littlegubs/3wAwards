import {Component, OnInit} from '@angular/core';
import {AgenciesService, MembersService, TypeAgenciesService, TypeTagsService} from '../../../backend/services';
import {Agency, Member, Tag, TypeAgency, TypeTag} from '../../../backend/model';
import {Form, FormService} from '../../../backend/forms';
import {TokenInterface} from '../../tokenInterface';
import {AuthService} from '../../auth.service';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
})
export class AddAgencyComponent implements OnInit {
  agencies: Array<Agency> = [];
  form: Form<Agency>;
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  member: Member;
  typeTags: TypeTag[] = [];
  typeAgencies: TypeAgency[] = [];
  agencyTags: Tag[] = [];
  idTypeAgency: number;
  customTags: Tag[] = [];
  addOnBlur = true;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private agenciesService: AgenciesService, private formService: FormService, private typeTagService: TypeTagsService,
              private membersService: MembersService, private authService: AuthService, private  typeAgenciesService: TypeAgenciesService) {
  }

  ngOnInit() {
    this.userInfo = this.authService.getUserInfo(this.tokenStorage);
    this.typeTagService.getAll().subscribe(
      res => {
        this.typeTags = res;
        console.log(this.typeTags);
      },
      err => {
      }
    );
    // initialize the form with a whole new Agency
    this.createNewAgency();
    this.typeAgenciesService.getAll().subscribe(
      res => {
        this.typeAgencies = res;
        console.log(this.typeAgencies);
      },
      err => {
      }
    );
  }

  createNewAgency(): void {
    this.form = this.formService.makeForm<Agency>(new Agency());
  }

  commitAgency(): void {
    if (this.form.group.dirty && this.form.group.valid) {
      const newAgency = this.form.get();
      if (newAgency.id) {
        this.agenciesService.update(newAgency).subscribe(agency => console.log('yeah!'));
      } else {
        newAgency.setProjectsatNull();
        newAgency.tags = this.agencyTags;
        newAgency.image = null;
        if (this.idTypeAgency === undefined) {
          console.log(this.typeAgencies[0].id);
          newAgency.setTypeAgency(this.typeAgencies[0].id);
        }
        newAgency.setTypeAgency(this.idTypeAgency);
        newAgency.setMember(this.userInfo.id);
        console.log(newAgency);
        this.agenciesService.add(newAgency).subscribe(agency => console.log('add'));
      }
    } else {
      // force invalid inputs state to display errors
      this.form.displayErrors();
    }
  }

  getTypeAgencies(value): void {
    this.idTypeAgency = value;
  }

  addTags(event: MatChipInputEvent, type: string): void {
    if ((event.value || '').trim()) {
      const tag = new Tag();
      for (let typeTag of this.typeTags) {
        if (typeTag.libelle === type) {
          tag.setType(typeTag.id);
          tag.type.libelle = type;
        }
      }
      tag.libelle = event.value;
      this.agencyTags.push(tag);
    }
    // Reset the input value
    if (event.input) {
      event.input.value = '';
    }
    this.refreshTagsArray();
    console.log(this.agencyTags);
  }

  addTag(value: string, type: string): void {
    if (value === '') {
      for (let i = 0; i < this.agencyTags.length; i++) {
        if (this.agencyTags[i].type.libelle === type) {
          this.agencyTags.splice(i, 1);
        }
      }
    }
    if (value !== '') {
      let find = false;
      for (let i = 0; i < this.agencyTags.length; i++) {
        if (this.agencyTags[i].type.libelle === type) {
          this.agencyTags[i].libelle = value;
          find = true;
        }
      }
      if (find === false) {
        const tag = new Tag();
        for (let typeTag of this.typeTags) {
          if (typeTag.libelle === type) {
            tag.setType(typeTag.id);
            tag.type.libelle = type;
          }
        }
        tag.libelle = value;
        this.agencyTags.push(tag);
        console.log(this.agencyTags);
      }
    }

  }

  refreshTagsArray() {
    this.customTags = this.agencyTags.filter(tag => tag.type.libelle === 'custom');
  }

  removeTag(value: string): void {
    for (let i = 0; i < this.agencyTags.length; i++) {
      if (this.agencyTags[i].libelle === value) {
        this.agencyTags.splice(i, 1);
      }
    }
    this.refreshTagsArray();
  }
}
