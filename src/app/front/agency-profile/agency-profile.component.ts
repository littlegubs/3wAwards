import { Component, OnInit } from '@angular/core';
import {Agency} from '../../../backend/model';
import {ActivatedRoute} from '@angular/router';
import {AgenciesService} from '../../../backend/services';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
})
export class AgencyProfileComponent implements OnInit {
  agency: Agency;

  constructor(private route: ActivatedRoute, private agenciesService: AgenciesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.agenciesService.get(params.id).subscribe(
          res => {
              this.agency = res;
              console.log(this.agency);
          },
          err => {
          }
      );

    });
  }

}
