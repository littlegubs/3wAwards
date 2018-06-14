import { Component, OnInit } from '@angular/core';
import {MembersService, ClientsService, TypeTagsService, TypeAgenciesService} from '../../../backend/services';
import {Client, Member, TypeTag, Tag, Image} from '../../../backend/model';
import {FormService, Form} from '../../../backend/forms';
import {TokenInterface} from '../../tokenInterface';
import {AuthService} from '../../auth.service';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
})
export class AddClientComponent implements OnInit {
  clients: Array<Client> = [];
  form: Form<Client>;
  tokenStorage = localStorage.getItem('user_token');
  userInfo: TokenInterface;
  member: Member;
  typeTags: TypeTag[] = [];
  tags: Tag[] = [];
  clientTags: Tag[] = [];
  idTypeClient: number;
  customTags: Tag[] = [];
  addOnBlur = true;
  separatorKeysCodes = [ENTER, COMMA];
  file: File;
  url;

  constructor(private clientService: ClientsService, private formService: FormService, private typeTagService: TypeTagsService,
              private membersService: MembersService, private authService: AuthService, private  typeAgenciesService: TypeAgenciesService,
              private http: HttpClient, private globals: GlobalsService, private route: Router) {
  }

  ngOnInit() {
      this.userInfo = this.authService.getUserInfo(this.tokenStorage);
      this.getAllTypeTag();
      // initialize the form with a whole new Client
      this.createNewClient();
  }

  createNewClient(): void {
      this.form = this.formService.makeForm<Client>(new Client());
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
  commitClient(): void {
      if (this.form.group.dirty && this.form.group.valid) {
          const newClient = this.form.get();
          newClient.image = null;
          if (this.file) {
              const image = new Image();
              const formData = new FormData();
              formData.append('xd', this.file);
              this.http.post(this.globals.url + 'xd', formData).subscribe((data: string) => {
                  image.path = data;
                  image.libelle = this.file.name;
                  newClient.image = image;
              });
          }
          if (newClient.id) {
              this.clientService.update(newClient).subscribe(client => console.log('yeah!'));
          } else {
              newClient.projects = [];
              newClient.tags = this.clientTags ;
              newClient.image = null;
              newClient.setMember(this.userInfo.id);
              console.log(newClient);
              this.clientService.add(newClient).subscribe(client => {
                  console.log('add');
                  this.route.navigate(['/client/' + client.id]);
              });
          }
      } else {
          // force invalid inputs state to display errors
          this.form.displayErrors();
      }
  }

  getAllTypeTag() {
      this.typeTagService.getAll().subscribe(
          res => {
              this.typeTags = res;
          },
          err => {
          }
      );
  }

  getTypeClient(value): void {
      this.idTypeClient = value;
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
          this.clientTags.push(tag);
      }
      // Reset the input value
      if (event.input) {
          event.input.value = '';
      }
      this.refreshTagsArray();
      console.log(this.typeTags);
  }

  addTag(value: string, type: string): void {
      if (value === '') {
          for (let i = 0; i < this.clientTags.length; i++) {
              if (this.clientTags[i].type.libelle === type) {
                  this.clientTags.splice(i, 1);
              }
          }
      }
      if (value !== '') {
          let find = false;
          for (let i = 0; i < this.clientTags.length; i++) {
              if (this.clientTags[i].type.libelle === type) {
                  this.clientTags[i].libelle = value;
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
              this.clientTags.push(tag);
          }
      }

  }

  refreshTagsArray() {
      this.customTags = this.clientTags.filter(tag => tag.type.libelle === 'custom');
  }

  removeTag(value: string): void {
      for (let i = 0; i < this.clientTags.length; i++) {
          if (this.clientTags[i].libelle === value) {
              this.clientTags.splice(i, 1);
          }
      }
      this.refreshTagsArray();
  }
}
