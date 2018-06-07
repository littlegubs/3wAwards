import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  isActive = false;
  isFilterActive = false;
  value = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  showFilter() {
    this.isFilterActive = !this.isFilterActive;
  }

  onEnter(value: string) {
    this.value = value;
    if (this.value !== null || this.value !== '') {
        this.router.navigate(['search/' + this.value]);
    }
  }

}
