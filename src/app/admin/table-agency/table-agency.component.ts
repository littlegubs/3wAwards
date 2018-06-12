import {Component, OnInit} from '@angular/core';
import {AgenciesService} from '../../../backend/services';
import {Agency} from '../../../backend/model';

@Component({
  selector: 'app-table-agency',
  templateUrl: './table-agency.component.html'
})
export class TableAgencyComponent implements OnInit {
  agencies: Agency[];
  pageNumber = 1;

  constructor(private agenciesService: AgenciesService) {
  }

  ngOnInit() {
    this.agenciesService.getAll(this.pageNumber).subscribe(
      res => {
        this.agencies = res;
      },
      err => {
      }
    );
  }

  pagination(value: number): void {
    this.agencies = undefined;
    this.pageNumber = this.pageNumber + value;
    this.agenciesService.getAll(this.pageNumber).subscribe(
      res => {
        this.agencies = res;
      },
      err => {
      }
    );
  }

  removeAgency(agency: Agency): void {
    this.agenciesService.remove(agency).subscribe(
      res => {
        for (let i = 0; i < this.agencies.length; i++) {
          if (this.agencies[i].id === agency.id) {
            this.agencies.splice(i, 1);
          }
        }
      },
      err => {
      }
    );
  }

}
