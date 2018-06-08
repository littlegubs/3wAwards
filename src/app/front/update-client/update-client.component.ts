import { Component, OnInit } from '@angular/core';
import {ClientsService, MembersService, TypeTagsService} from '../../../backend/services';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {Agency, Client, Member, Tag, TypeTag} from '../../../backend/model';
import {AuthService} from '../../auth.service';
import {MatChipInputEvent} from '@angular/material';
import {TokenInterface} from '../../tokenInterface';
import {Form, FormService} from '../../../backend/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html'
})
export class UpdateClientComponent implements OnInit {
    clients: Array<Client> = [];
    form: Form<Client>;
    client: Client;
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

    constructor(private clientsService: ClientsService, private formService: FormService, private typeTagService: TypeTagsService,
                private membersService: MembersService, private authService: AuthService, private route: ActivatedRoute) {
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
        if (this.form.group.dirty && this.form.group.valid) {
            const newClient = this.form.get();
            if (newClient.id) {
                this.clientsService.update(newClient).subscribe(client => console.log('yeah!'));
            } else {
                newClient.setProjectsatNull();
                newClient.tags = this.tags;
                newClient.image = null;
                newClient.setMember(this.userInfo.id);
                console.log(newClient);
                this.clientsService.add(newClient).subscribe(client => console.log('add'));
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
            for (let typeTag of this.typeTags) {
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
                for (let typeTag of this.typeTags) {
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
