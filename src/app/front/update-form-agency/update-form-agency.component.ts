import {Component, OnInit} from '@angular/core';
import {MembersService, AgenciesService, TypeTagsService, TypeAgenciesService} from '../../../backend/services';
import {Agency, Member, TypeTag, Tag, TypeAgency, Image} from '../../../backend/model';
import {FormService, Form} from '../../../backend/forms';
import {MatChipInputEvent, MatSnackBar} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-update-form-agency',
  templateUrl: './update-form-agency.component.html',
})
export class UpdateFormAgencyComponent implements OnInit {
  agencies: Array<Agency> = [];
  form: Form<Agency>;
  member: Member;
  agency: Agency;
  typeTags: TypeTag[] = [];
  typeAgencies: TypeAgency[] = [];
  revenueTags: Tag;
  agencyTags: Tag[] = [];
  statusTags: Tag;
  effectifTags: Tag;
  idTypeAgency: number;
  customTags: Tag[] = [];
  addOnBlur = true;
  separatorKeysCodes = [ENTER, COMMA];
  file: File;
  url;
  isLoading = false;

  constructor(private agenciesService: AgenciesService, private formService: FormService, private typeTagService: TypeTagsService,
              private membersService: MembersService, private  typeAgenciesService: TypeAgenciesService,
              private route: ActivatedRoute, private http: HttpClient, private globals: GlobalsService, private router: Router, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // initialize the form with a whole new Agency
    this.typeAgenciesService.getAll().subscribe(
      res => {
        this.typeAgencies = res;
      },
      err => {
      }
    );
    this.typeTagService.getAll().subscribe(
      res => {
        this.typeTags = res;
        console.log(this.typeTags);
      },
      err => {
      }
    );
    this.createNewAgency();
    this.route.params.subscribe(params => {
      this.agenciesService.get(params.id).subscribe(
        res => {
          this.agency = res;
          this.form = this.formService.makeForm<Agency>(this.agency);
          this.agencyTags = this.agency.tags;
          this.refreshTagsArray();
          console.log(this.agency.tags);
          console.log(this.agencyTags);
        },
        err => {
        }
      );
    });
  }

  createNewAgency(): void {
    this.form = this.formService.makeForm<Agency>(new Agency());
  }

  commitAgency(): void {
      this.isLoading = true;
      if (this.form.group.valid) {
          const newAgency = this.form.get();
          const promise = new Promise(resolve => {
              if (this.file) {
                  const image = new Image();
                  const formData = new FormData();
                  formData.append('xd', this.file);
                  this.http.post(this.globals.url + 'xd', formData).subscribe((data: string) => {
                      image.path = data;
                      image.libelle = this.file.name;
                      newAgency.image = image;
                      resolve();
                  });
              } else {
                  resolve();
              }
          });
          Promise.resolve(promise).then(() => {
              if (newAgency.id) {
                  newAgency.tags = this.agencyTags;
                if (this.idTypeAgency === undefined) {
                  console.log(this.typeAgencies[0].id);
                  newAgency.setTypeAgency(this.typeAgencies[0].id);
                } else {
                  newAgency.setTypeAgency(this.idTypeAgency);
                }
                  this.agenciesService.update(newAgency).subscribe(agency => {
                      console.log('yeah!');
                      this.openSnackBar();
                      this.router.navigate(['/agency/' + agency.id]);
                  });
              }
          });
      } else {
          this.form.displayErrors();
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

    getTypeAgencies(value): void {
    this.idTypeAgency = value;
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
    console.log(this.agencyTags);
  }

  addTag(value: string, type: string): void {
    if (value === '') {
      for (let i = 0; i < this.agencyTags.length; i++) {
        if (this.agencyTags[i].type.libelle === type) {
          this.agencyTags.splice(i, 1);
        }
      }
    } else {
      let find = false;
      for (let i = 0; i < this.agencyTags.length; i++) {
        if (this.agencyTags[i].type.libelle === type) {
          this.agencyTags[i].libelle = value;
          find = true;
        }
      }
      if (find === false) {
        console.log('????');
        const tag = new Tag();
        for (const typeTag of this.typeTags) {
          console.log(typeTag);
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
    console.log(this.agencyTags);
    this.customTags = this.agencyTags.filter(tag => tag.type.libelle === 'custom');
    this.statusTags = this.agencyTags.find(tag => tag.type.libelle === 'agency_status');
    this.effectifTags = this.agencyTags.find(tag => tag.type.libelle === 'agency_effectif');
    this.revenueTags = this.agencyTags.find(tag => tag.type.libelle === 'agency_revenue');

  }

  removeTag(value: string): void {
    for (let i = 0; i < this.agencyTags.length; i++) {
      if (this.agencyTags[i].libelle === value) {
        this.agencyTags.splice(i, 1);
      }
    }
    this.refreshTagsArray();
  }

    openSnackBar(): void {
        this.snackBar.open('Agence modifiée', 'Ok', {
            duration: 2000
        });
    }
}
