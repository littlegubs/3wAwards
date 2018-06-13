import {Component, Input, OnInit} from '@angular/core';
import {ClientsService, MembersService, TypeTagsService} from '../../../backend/services';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Client, Image, Member, Tag, TypeTag} from '../../../backend/model';
import {AuthService} from '../../auth.service';
import {MatChipInputEvent} from '@angular/material';
import {TokenInterface} from '../../tokenInterface';
import {Form, FormService} from '../../../backend/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html'
})
export class UpdateClientComponent implements OnInit {
    client: Client;
    clients: Array<Client> = [];
    form: Form<Client>;
    tokenStorage = localStorage.getItem('user_token');
    userInfo: TokenInterface;
    member: Member;
    sectorTags: Tag;
    sizeTags: Tag;
    revenueTags: Tag;
    typeTags: TypeTag[] = [];
    tags: Tag[] = [];
    clientTags: Tag[] = [];
    idTypeClient: number;
    customTags: Tag[] = [];
    addOnBlur = true;
    separatorKeysCodes = [ENTER, COMMA];
    file: File;
    fileReader;
    url;

    constructor(private clientsService: ClientsService, private formService: FormService, private typeTagService: TypeTagsService,
                private membersService: MembersService, private authService: AuthService, private route: ActivatedRoute,
                private http: HttpClient, private globals: GlobalsService, private router: Router) {
    }

    ngOnInit() {
        this.userInfo = this.authService.getUserInfo(this.tokenStorage);
        this.getAllTypeTag();
        // initialize the form with a whole new Client
        this.createNewClient();
        this.route.params.subscribe(params => {
            this.clientsService.get(params.id).subscribe(
                res => {
                    this.client = res;
                    this.form = this.formService.makeForm<Client>(this.client);
                    this.clientTags = this.client.tags;
                    this.refreshTagsArray();
                },
                err => {
                }
            );
        });
    }

    createNewClient(): void {
        this.form = this.formService.makeForm<Client>(new Client());
    }

    commitClient(): void {
        console.log('le btn marche');
        if (this.form.group.dirty && this.form.group.valid) {
            console.log('ca passe');
            const newClient = this.form.get();
            console.log(newClient);
            const promise = new Promise(resolve => {
                if (this.file) {
                    const image = new Image();
                    const formData = new FormData();
                    formData.append('xd', this.file);
                    this.http.post(this.globals.url + 'xd', formData).subscribe((data: string) => {
                        image.path = data;
                        image.libelle = this.file.name;
                        newClient.image = image;
                        resolve();
                    });
                } else {
                    resolve();
                }
            });
            Promise.resolve(promise).then(() => {
                if (newClient.id) {
                    this.clientsService.update(newClient).subscribe(client => {
                        console.log('yeah!');
                        this.router.navigate(['/client/' + this.client.id]);
                    });
                } else {
                    newClient.setProjectsatNull();
                    newClient.tags = this.clientTags;
                    newClient.image = null;
                    newClient.setMember(this.userInfo.id);
                    console.log(newClient);
                    this.clientsService.add(newClient).subscribe(client => console.log('add'));
                }
            });
        } else {
            // force invalid inputs state to display errors
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
        this.sectorTags = this.clientTags.find(tag => tag.type.libelle === 'client_size');
        this.sizeTags = this.clientTags.find(tag => tag.type.libelle === 'client_status');
        this.revenueTags = this.clientTags.find(tag => tag.type.libelle === 'client_revenue');
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
