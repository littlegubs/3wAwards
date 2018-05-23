import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../../backend/model/Client';


@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
})
export class ClientCardComponent implements OnInit {

  @Input() clients: Client;

  constructor() { }

  ngOnInit() {
  }

}
