import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  isActive = false;
  isFilterActive = false;

  constructor() {
  }

  ngOnInit() {
  }

  showFilter() {
    this.isFilterActive = !this.isFilterActive;
  }

}
