import { Component, OnInit } from '@angular/core';
import {AwardsService} from '../../../backend/services/Awards.service';
import {Award} from '../../../backend/model/Award';

@Component({
  selector: 'app-card-recent-award',
  templateUrl: './card-recent-award.component.html',
})
export class CardRecentAwardComponent implements OnInit {
  awards: Award[];
  pageNumber = 1;

  constructor(private awardsService: AwardsService) { }

  ngOnInit() {
      this.awardsService.getAll(this.pageNumber).subscribe(
          res => {
              this.awards = res;
          },
          err => {
          }
      );
  }

}
