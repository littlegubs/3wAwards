import { Component, OnInit } from '@angular/core';
import {Agency} from '../../../backend/model/Agency';
import {AgenciesService} from '../../../backend/services/Agencies.service';

@Component({
  selector: 'app-agencies-cards',
  templateUrl: './agencies-cards.component.html',
})
export class AgenciesCardsComponent implements OnInit {

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

}
