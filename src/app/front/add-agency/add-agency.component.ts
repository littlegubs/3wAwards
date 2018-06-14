import {Component, OnInit} from '@angular/core';
import {MembersService, AgenciesService, TypeTagsService, TypeAgenciesService} from '../../../backend/services';
import {Agency, Member, TypeTag, Tag, TypeAgency, Image} from '../../../backend/model';
import {FormService, Form} from '../../../backend/forms';
import {TokenInterface} from '../../tokenInterface';
import {AuthService} from '../../auth.service';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';
import {Router} from '@angular/router';

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
  file: File;
  url;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private agenciesService: AgenciesService, private formService: FormService, private typeTagService: TypeTagsService,
              private membersService: MembersService, private authService: AuthService,
              private  typeAgenciesService: TypeAgenciesService, private http: HttpClient,
              private globals: GlobalsService, private route: Router) {
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
      newAgency.image = null;
        if (this.file) {
            const image = new Image();
            const formData = new FormData();
            formData.append('xd', this.file);
            this.http.post(this.globals.url + 'xd', formData).subscribe((data: string) => {
                image.path = data;
                image.libelle = this.file.name;
                newAgency.image = image;
            });
        }
      if (newAgency.id) {
        this.agenciesService.update(newAgency).subscribe(agency => console.log('yeah!'));
      } else {
        newAgency.projects = [];
        newAgency.tags = this.agencyTags;
        if (this.idTypeAgency === undefined) {
          console.log(this.typeAgencies[0].id);
          newAgency.setTypeAgency(this.typeAgencies[0].id);
        } else {
            newAgency.setTypeAgency(this.idTypeAgency);
        }
        newAgency.setMember(this.userInfo.id);
        console.log(newAgency);
        this.agenciesService.add(newAgency).subscribe(agency => {
              console.log('add');
              this.route.navigate(['/agency/' + agency.id]);
      }
        );
      }
    } else {
      // force invalid inputs state to display errors
      this.form.displayErrors();
    }

  }

  getTypeAgencies(value): void {
    this.idTypeAgency = value;
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
  addTags(event: MatChipInputEvent, type: string): void {
    if ((event.value || '').trim()) {
      const tag = new Tag();
      for (const typeTag of this.typeTags) {
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
        for (const typeTag of this.typeTags) {
          if (typeTag.libelle === type) {
            tag.setType(typeTag.id);
            tag.type.libelle = type;
          }
        }
        tag.libelle = value;
        this.agencyTags.push(tag);
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
