import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  opened = false;
    screenWidth: number;

  constructor() {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
          // set screenWidth on screen size change
          this.screenWidth = window.innerWidth;
      };
  }

  ngOnInit() {
  }

}
