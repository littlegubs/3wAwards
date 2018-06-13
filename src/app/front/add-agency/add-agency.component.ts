import { Component, OnInit } from '@angular/core';
import {MembersService, AgenciesService, TypeTagsService } from '../../../backend/services';
import { Agency, Member, TypeTag, Tag } from '../../../backend/model';
import { FormService, Form } from '../../../backend/forms';
import {TokenInterface} from '../../tokenInterface';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.scss']
})
export class AddAgencyComponent implements OnInit {
    agencies: Array<Agency> = [];
    form: Form<Agency>;
    tokenStorage = localStorage.getItem('user_token');
    userInfo: TokenInterface;
    member: Member;
    typeTags: TypeTag[] = [];
  constructor( private agenciesService: AgenciesService, private formService: FormService, private typeTagService: TypeTagsService, private membersService: MembersService, private authService: AuthService) { }

  ngOnInit() {
      this.agenciesService.getAll().subscribe(agencies => {
          this.agencies = agencies;
      });
      this.userInfo = this.authService.getUserInfo(this.tokenStorage);
      this.membersService.get(this.userInfo.id).subscribe(
          res => {
              this.member = res;
          },
          err => {
          }
      );
      this.getAllTypeTag();
      // initialize the form with a whole new Agency
      this.createNewAgency();
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
                newAgency.projects = [];
                newAgency.setTags(null);
                newAgency.setImage(null);
                this.agenciesService.add(newAgency).subscribe(agency => console.log('yeah!'));
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
}
