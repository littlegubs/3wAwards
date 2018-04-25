import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../../../backend/services';
import { Agency } from '../../../backend/model';
import { FormService, Form } from '../../../backend/forms';
import {AgencyProfileComponent} from '../agency-profile/agency-profile.component';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.scss']
})
export class AddAgencyComponent implements OnInit {
    agencies: Array<Agency> = [];
    form: Form<Agency>;
  constructor( private agenciesService: AgenciesService, private formService: FormService) { }

  ngOnInit() {
      this.agenciesService.getAll().subscribe(agencies => {
          this.agencies = agencies;
      });
      // initialize the form with a whole new book
      this.createNewAgency();
  }

    createNewAgency(): void {
        this.form = this.formService.makeForm<Agency>(new Agency());
    }
    // used in the template, for example in a data table
    SelectAgency(agency: Agency): void {
        this.form = this.formService.makeForm<Agency>(agency);
    }

    commitAgency(): void {
        if (this.form.group.dirty && this.form.group.valid) {
            const newAgency = this.form.get();
            if (newAgency.id) {
                this.agenciesService.update(newAgency).subscribe(agency => console.log('yeah!'));
            } else {
                this.agenciesService.add(newAgency).subscribe(agency => console.log('yeah!'));
            }
        } else {
            // force invalid inputs state to display errors
            this.form.displayErrors();
        }
    }
}
