import { Component, OnInit } from '@angular/core';
import {Agency, Client} from '../../../backend/model';
import {ActivatedRoute, Router} from '@angular/router';
import {AgenciesService} from '../../../backend/services';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
})
export class AgencyProfileComponent implements OnInit {
  agency: Agency;
  nominatedSites = 0;
  earnedAward = 0;

  constructor(private route: ActivatedRoute, private agenciesService: AgenciesService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.agenciesService.get(params.id).subscribe(
          res => {
              this.agency = res;
            this.nominatedSites = Object.keys(this.agency.projects).length;
            for (let i = 0; i < this.nominatedSites; i++) {
              this.earnedAward = this.earnedAward + Object.keys(this.agency.projects[i].awards).length;
            }
          },
          err => {
          }
      );

    });
  }

    deleteAgency(agency: Agency) {
        this.agenciesService.remove(agency).subscribe(
            res => {
                console.log('Sucess');
                this.router.navigate(['profile']);
            },
            err => {
                console.log('error');
            }
        );
    }
    gotoAddAgencyForm() {
        this.router.navigate(['addAgency']);
    }
    addAgency(agency: Agency) {
        this.agenciesService.add(agency).subscribe(
            res => {
                console.log('success');
            },
            err => {
                console.log('error');
            }
        );
    }
}
