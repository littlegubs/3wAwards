import {Component, HostListener, OnInit} from '@angular/core';
import { AwardsService } from '../../../backend/services';
import { Award } from '../../../backend/model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
  awards: Award[] = [];
  constructor(private awardsService: AwardsService) {
  }

  ngOnInit() {
    this.awardsService.getAllByFilter('type', 'day', 1).subscribe(
      res => {
        this.awards = res;
      },
      err => {
      }
    );
  }

}
