import {Component, OnInit} from '@angular/core';
import {ThreewawardsApiService} from '../../threewawards-api.service';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
})
export class SiteCardComponent implements OnInit {

  projectName: string;

  constructor(private threewawardsApiService: ThreewawardsApiService) {
  }

  ngOnInit() {
    this.threewawardsApiService.get('project/twelve-last-projects').subscribe(
      res => {
        console.log(res);
      },
      err => {
      }
    );
  }

}
