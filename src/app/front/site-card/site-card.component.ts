import {Component, OnInit} from '@angular/core';
import {ThreewawardsApiService} from '../../threewawards-api.service';
import {Project} from '../../../backend/model/Project';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
})
export class SiteCardComponent implements OnInit {

  projects: Project[] = [];

  constructor(private threewawardsApiService: ThreewawardsApiService) {
  }

  ngOnInit() {
    this.threewawardsApiService.get('projects?status=accepted&order%5BpublicationDate%5D=DESC&page=1').subscribe(
      res => {
        console.log(res);
      },
      err => {
      }
    );
  }

}
