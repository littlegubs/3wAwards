import { Component, OnInit } from '@angular/core';
import {Award} from '../../../backend/model/Award';
import {AwardsService} from '../../../backend/services/Awards.service';

@Component({
  selector: 'app-awards-cards',
  templateUrl: './awards-cards.component.html',
})
export class AwardsCardsComponent implements OnInit {

    awards: Award[];
    pageNumber = 1;

    constructor(private awardsService: AwardsService) {
    }

    ngOnInit() {
        this.awardsService.getAll(this.pageNumber).subscribe(
            res => {
                this.awards = res;
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
