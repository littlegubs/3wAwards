import { Component, OnInit } from '@angular/core';
import {Award} from '../../../backend/model/Award';
import {AwardsService} from '../../../backend/services/Awards.service';

@Component({
  selector: 'app-table-awards',
  templateUrl: './table-awards.component.html',
})
export class TableAwardsComponent implements OnInit {

    awards: Award[];
    pageNumber = 1;

    constructor(private awardsService: AwardsService) {
    }

    ngOnInit() {
        this.awardsService.getAll(this.pageNumber).subscribe(
            res => {
                this.awards = res;
                console.log(this.awards[3].project.client);
            },
            err => {
            }
        );
    }

    pagination(value: number): void {
        this.awards = undefined;
        this.pageNumber = this.pageNumber + value;
        this.awardsService.getAll(this.pageNumber).subscribe(
            res => {
                this.awards = res;
            },
            err => {
            }
        );
    }

}
